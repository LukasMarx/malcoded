import gql from 'graphql-tag';
// GraphQL Mutation with one parameter
export default gql`
  mutation subscribeToNewsletter($subscribeToNewsletterInput: SubscribeToNewsletterInput!) {
    subscribeToNewsletter(subscribeToNewsletterInput: $subscribeToNewsletterInput) {
      email
    }
  }
`;
