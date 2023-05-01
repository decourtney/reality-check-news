const { AuthenticationError } = require("apollo-server-express");
const {
  User,
  Profile,
  Article,
  Category,
  Comment,
  Reaction,
} = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    // We might not need a query for Categories
    categories: async () => {
      return await Category.find();
    },
    // Query will return an Article by ID
    article: async (parent, { articleId }) => {
      try {
        const article = await Article.findById(articleId)
          .populate("user")
          .populate("reactions")
          .populate("media")
          .populate("categories")
          .populate({ path: "comments", populate: { path: "user" } });

        return article;
      } catch (err) {
        throw new Error("Could not find that article");
      }
    },
    // Query will return all Articles
    articles: async (parent) => {
      // return await Article.find()
      //   .populate("user")
      //   .populate({ path: "comments", populate: { path: "user" } })
      //   .populate("reactions");
      return await Article.aggregate([
        // Look up the reactions associated with each article
        {
          $lookup: {
            from: "reactions",
            localField: "_id",
            foreignField: "article",
            as: "reactions",
          },
        },
        // Group by article ID and count the number of likes and dislikes
        {
          $group: {
            _id: "$_id",
            title: { $first: "$title" },
            content: { $first: "$content" },
            user: { $first: "$user" },
            media: { $first: "$media" },
            categories: { $first: "$categories" },
            comments: { $first: "$comments" },
            likes: {
              $sum: {
                $cond: {
                  if: { $eq: ["$reactions.type", "like"] },
                  then: 1,
                  else: 0,
                },
              },
            },
            dislikes: {
              $sum: {
                $cond: {
                  if: { $eq: ["$reactions.type", "dislike"] },
                  then: 1,
                  else: 0,
                },
              },
            },
          },
        },
        // Sort by the number of likes in descending order
        { $sort: { likes: -1 } },
        // Project only the fields you need
        {
          $project: {
            _id: 1,
            title: 1,
            content: 1,
            user: 1,
            media: 1,
            categories: 1,
            comments: 1,
            likes: 1,
            dislikes: 1,
          },
        },
      ]);
    },
    search: async (parent, { searchTerm }, context) => {
      const searchRegex = new RegExp(searchTerm, "i");
      return await Article.find({ title: { $regex: searchRegex } });
    },
    // Query a single comment - might not need.
    comment: async (parent, { _id }) => {
      return await Comment.findById(_id).populate("user").populate("reactions");
    },
    // Query all comments - might not need.
    comments: async (parent) => {},

    // user: async (parent, { username }) => {
    //   try {
    //     return await User.findOne({ username });
    //   } catch (err) {
    //     throw new Error("Could not find that user.");
    //   }
    // },
    article: async (parent, { _id }) => {
      return await Article.findById(_id).populate("category");
    },

    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "articles",
          populate: { path: "category" },
        });

        return user;
      }

      throw new AuthenticationError("Not logged in");
    },
    profile: async (parent, { _id }) => {
      return await Profile.findById(_id);
    },
  },
  Mutation: {
    addReaction: async (parent, { type, userId, ...rest }, context) => {
      if (context.user) {
        const reaction = new Reaction({ type, user: userId, ...rest });
        await reaction.save();
        return reaction;
      }
    },
    addComment: async (parent, { articleId, content, userId }, context) => {
      // if (context.user) {
      try {
        const comment = await Comment.create({
          content: content,
          user: userId,
        });

        const article = await Article.findByIdAndUpdate(articleId, {
          $push: { comments: comment },
        });

        return comment;
      } catch (err) {
        throw new Error("Error something went wrong:", err);
      }
      // }

      // throw new AuthenticationError("You must be logged in to post.");
    },

    addUser: async (parent, args, context) => {
      const profile = await Profile.create({ name: args.username });
      const user = await User.create({
        ...args,
        profile: profile._id,
      });
      const token = signToken(user);
      return { token };
    },
    // addArticle works
    addArticle: async (_, { userId, content, title }) => {
      // create new article object
      const article = await Article.create({
        content: content,
        user: userId,
        title: title,
      });

      // add article to user's list of articles
      await User.findByIdAndUpdate(userId, { $push: { articles: article } });
      console.log(article);
      // return the newly created article object
      return article;
    },

    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },
    // updateProfile works
    updateProfile: async (parent, { userId, name, bio }) => {
      const updatedProfile = await Profile.findOneAndUpdate(
        { _id: userId },
        { $set: { name, bio } },
        { returnOriginal: false }
      );
      return updatedProfile;
    },
    login: async (parent, { email, password }, context) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }
  
      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token };
    },
  },
};

module.exports = resolvers;
