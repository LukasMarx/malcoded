import gql from 'graphql-tag';
// GraphQL Mutation with one parameter
export default gql`
  mutation createCommentForPost($postId: ID!, $createCommentInput: CreateCommentInput!) {
    createCommentForPost(postId: $postId, createCommentInput: $createCommentInput) {
      id
      author {
        image
        displayName
      }
      creationDate
      updateDate
    }
  }
`;
