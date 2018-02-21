import gql from 'graphql-tag';

export default gql(
  'query Posts {BlogPosts(limit: 5, orderBy: "releaseDate", descending: true) {title\n thumbnail\n description\n url}}'
);
