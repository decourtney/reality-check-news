import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $username: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      username: $username
    ) {
      user {
        firstName
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation Mutation($articleId: ID!, $content: String!, $userId: ID!) {
    addComment(articleId: $articleId, content: $content, userId: $userId) {
      _id
      }
    }
`;

export const ADD_ARTICLE = gql`
  mutation addArticle($userId: ID!, $content: String!, $title: String!) {
    addArticle(userId: $userId, content: $content, title: $title) {
      token
      content
      _id
    }
  }
`;

export const UPDATE_PROFILE = gql`
  mutation updateProfile($userId: ID!, $name: String, $bio: String) {
    updateProfile(userId: $userId, name: $name, bio: $bio) {
      token
      name
      bio
      _id
    }
  }
`;

