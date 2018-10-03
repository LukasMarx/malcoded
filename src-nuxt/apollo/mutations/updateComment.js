import gql from 'graphql-tag';
// GraphQL Mutation with one parameter
export default gql`
  mutation updateComment($commentId: ID!, $updateCommentInput: UpdateCommentInput!) {
    updateComment(commentId: $commentId, updateCommentInput: $updateCommentInput) {
      id
      author {
        id
        image
        displayName
      }
      creationDate
      updateDate
      content
    }
  }
`;
