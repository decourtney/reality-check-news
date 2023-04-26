const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Reaction {
    id: ID
    type: ReactionType
    user: User
    article: Article
    comment: Comment
  }

  enum ReactionType {
    LIKE
    DISLIKE
  }

  type Article {
    _id: ID
    title: String
    content: String
    user: User
    reactions: [Reaction]
    media: Media
    categories: [Category]
    comments: [Comment]
  }

  type Comment {
    _id: ID
    content: String
    user: User
    reactions: [String]
  }

  type Media {
    _id: ID
    type: String
    url: String
    article: Article
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    username: String
    email: String
    isContentCreator: Boolean
    profile: Profile
  }

  type Profile {
    _id: ID
    name: String
    bio: String
    location: String
    avatar: String
    website: String
    social: Social
  }

  type Social {
    twitter: String
    facebook: String
    instagram: String
    linkedin: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    article(articleId: ID!): Article
    articles: [Article]
    comment(id: ID!): [Comment]
    comments: [Comment]
    user(username: String!): User
    me: User
    profile(_id: ID!): Profile
  }

  type Mutation {
    addReaction(userId: ID!, type: ReactionType!, articleId: ID, commentId: ID): Reaction
    addComment(articleId: ID!, content: String!, userId: ID!): Comment
    addUser(firstName: String!, lastName: String!, email: String!, password: String!, username: String!): Auth
    addArticle(userId: ID!, content: String!, title: String!): Article
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateProfile(_id: ID!, name: String!, bio: String): Profile
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
