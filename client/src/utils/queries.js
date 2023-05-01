import { gql } from '@apollo/client';

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

// Authenticated user query
export const QUERY_ME = gql`
  query me  {
    me  {
      _id
      firstName
      lastName
      username
      email
      isContentCreator
      profile {
        name
        location
        bio
        avatar
        website
        social {
          twitter
          facebook
          instagram
          linkedin
        }
      }     
    }
  }
`;

// User to user query - wont need all details so will have to be trimmed down
export const QUERY_USER = gql`
  query user($username: String!) {
    user (username: $username){
      _id
      firstName
      lastName
      username
      email
      isContentCreator
      profile {
        name
        location
        bio
        avatar
        website
        social {
          twitter
          facebook
          instagram
          linkedin
        }
      }     
    }
  }
`;

export const QUERY_SEARCH = gql`
query search($searchTerm: String) {
  search(searchTerm: $searchTerm) {
    _id
      comments {
        _id
        content
        user {
          username
        }
      }
      content
      media {
        _id
        url
      }
      reactions {
        id
        type
      }
      title
      user {
        username
      }
    }
  }
`;

export const QUERY_ARTICLE = gql`
  query article($articleId: ID!) {
    article(articleId: $articleId) {
      _id
      comments {
        _id
        content
        user {
          username
        }
      }
      content
      media {
        _id
        url
      }
      reactions {
        id
        type
      }
      title
      user {
        username
      }
    }
  }
`;

export const QUERY_ARTICLES = gql`
  query articles {
    articles {
      _id
      content
      reactions {
        type
      }
      title
      user {
        _id
      }
      media {
        _id
      }
      comments {
        _id
      }
      categories {
        _id
      }
    }
  }
`;

export const QUERY_PROFILE = gql`
query profile($id: ID!) {
  profile(_id: $id) {
    name
    _id
    avatar
    bio
    location
    social {
      facebook
      instagram
      linkedin
      twitter
    }
    website
  }
}
`;