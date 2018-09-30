import gql from 'graphql-tag';

export default gql('query Posts {getPublicPosts(limit: 5) {edges{ node {title\n releaseDate\n thumbnail\n description\n url\n }}}}');
