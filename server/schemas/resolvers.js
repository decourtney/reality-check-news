const { AuthenticationError } = require("apollo-server-express");
const { User, Profile, Article, Category, Comment, Reaction } = require("../models");
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
    // Query a single comment - might not need.
    comment: async (parent, { _id }) => {
      return await Comment.findById(_id).populate("user").populate("reactions");
    },
    // Query all comments - might not need.
    comments: async (parent) => {},
    user: async (parent, { username }) => {
      try {
        return await User.findOne({ username });
      } catch (err) {
        throw new Error("Could not find that user.");
      }
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return await User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("Cannot find a user with this id!");
    },
  },
  Mutation: {
    addReaction: async (parent, { type, userId, ...rest }, context) => {
      // if (context.user) {
      const reaction = new Reaction({type, user: userId, ...rest})
      await reaction.save();
      return reaction;
      // }
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
    addUser: async (parent, args) => {
      const profile = await Profile.create({name: args.fname})
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    addArticle: async (parent, { articles }, context) => {
      console.log(context);
      // if (context.user) {
      const article = new Article({ content: articles });

      await User.findByIdAndUpdate(context.user._id, {
        $push: { articles: article },
      });

      return article;
      // }

      throw new AuthenticationError("Not logged in");
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },
    updateProfile: async (parent, { _id, name, bio }) => {
      const updatedProfile = await Profile.findOneAndUpdate(
        { _id: ObjectId(_id) },
        { $set: { name, bio } },
        { returnOriginal: false }
      );
      return updatedProfile;
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
