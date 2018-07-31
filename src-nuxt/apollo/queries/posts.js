import gql from 'graphql-tag';

export default gql('query Posts {BlogPosts(limit: 5, orderBy: "releaseDate", descending: true) { nodes {title\n thumbnail\n description\n url}}}');
