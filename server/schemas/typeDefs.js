const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Profile {
    _id: ID
    name: String
    bio: String
    avatar: String
    website: String
    social: String
  }

  // type Reaction {
  //   type: String
  //   enum: []
  // }

  type Article {
    _id: ID
    title: String
    body: String
    media: Media
    user: User
    categories: Category
    comments: [Comment]
  }

  type Post {
    _id: ID
    title: String
    content: String
    media: Media
    // reactions: 
    user: User
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    username: String
    email: String
    profile: Profile
    isContentCreator: Boolean
  }

  // type Post {
  //   session: ID
  // }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    articles:(category: ID, name: String): [Article]
    posts(category: ID, name: String): [Post]
    profile(_id: ID!): Profile
    user: User
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addArticle(articles: [ID]!): Article
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateProfile(_id: ID!, name: String!, bio: String): Profile
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
