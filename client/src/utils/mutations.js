import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation Mutation($articleId: ID!, $content: String!) {
    addComment(articleId: $articleId, content: $content) {
      _id
      }
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
mutation updateProfile($id: ID!, $name: String!, $bio: String) {
  updateProfile(_id: $id, name: $name, bio: $bio) {
    token
    name
    bio
    _id
  }
}
`;
