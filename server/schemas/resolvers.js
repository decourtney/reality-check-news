const { AuthenticationError } = require('apollo-server-express');
const { User, Profile, Article, Category } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    categories: async () => {
      return await Category.find();
    },
    articles: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (name) {
        params.name = {
          $regex: name
        };
      }

      return await Article.find(params).populate('category');
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
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addArticle: async (parent, { articles }, context) => {
      console.log(context);
      if (context.user) {
        const article = new Article({ content: articles });

        await User.findByIdAndUpdate(context.user._id, { $push: { articles: article } });

        return article;
      }

      throw new AuthenticationError('Not logged in');
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },
    updateProfile: async (parent, { _id, name, bio }) => {
    const updatedProfile = await Profile.findOneAndUpdate(
     { _id: ObjectId(_id) },
     { $set: {name, bio }},
     { returnOriginal: false}
    );
    return updatedProfile;
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }
  }
};

module.exports = resolvers;
