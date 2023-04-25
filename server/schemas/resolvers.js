const { AuthenticationError } = require('apollo-server-express');
const { User, Profile, Article, Category, Comment } = require('../models');
const { signToken } = require('../utils/auth');

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
      return await Article.find().populate('user');
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
    article: async (parent, { _id }) => {
      return await Article.findById(_id).populate('category');
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'articles',
          populate: { path: 'category' }
        });

        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
    profile: async (parent, { _id }) => {
      return await Profile.findById(_id);
    }
  },
  Mutation: {
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
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    // addArticle works
    addArticle: async (_, { userId, content, title }) => {
      // create new article object
      const article = await Article.create({ content: content, user: userId, title: title });
    
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

      throw new AuthenticationError('Not logged in');
    },
    // updateProfile works
    updateProfile: async (parent, { _id, name, bio }) => {
      const updatedProfile = await Profile.findOneAndUpdate(
        { _id: _id },
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
