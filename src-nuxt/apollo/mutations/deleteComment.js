import gql from 'graphql-tag';
// GraphQL Mutation with one parameter
export default gql`
  mutation deleteComment($commentId: ID!) {
    deleteComment(commentId: $commentId)
  }
`;
