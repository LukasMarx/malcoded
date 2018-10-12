import gql from 'graphql-tag';
// GraphQL Mutation with one parameter
export default gql`
  mutation answerComment($commentId: ID!, $createCommentInput: CreateCommentInput!) {
    answerComment(commentId: $commentId, createCommentInput: $createCommentInput) {
      id
      author {
        id
        image
        displayName
      }
      creationDate
      updateDate
      content
      deleted
    }
  }
`;
