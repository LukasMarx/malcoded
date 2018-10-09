import gql from 'graphql-tag';
// GraphQL Mutation with one parameter
export default gql`
  mutation deleteAnswer($commentId: ID!, $answerId: ID!) {
    deleteAnswer(commentId: $commentId, answerId: $answerId) {
      id
    }
  }
`;
