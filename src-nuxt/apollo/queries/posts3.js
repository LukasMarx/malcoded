import gql from 'graphql-tag';
export default gql('query Posts {getPublicPosts(limit: 3) {edges { node {title\n thumbnail\n releaseDate\n description\n url}}}}');
