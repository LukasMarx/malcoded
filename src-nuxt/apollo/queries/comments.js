import gql from 'graphql-tag';

export default gql`
  query getCommentsForPost($postId: ID!) {
    getCommentsForPost(postId: $postId) {
      edges {
        node {
          id
          author {
            id
            displayName
            image
          }
          content
          creationDate
          updateDate
          deleted
          answers {
            edges {
              node {
                id
                author {
                  id
                  displayName
                  image
                }
                content
                creationDate
                updateDate
              }
            }
          }
        }
      }
    }
  }
`;
