import gql from 'graphql-tag';
export default gql(
  'query Posts {BlogPosts(limit: 3, orderBy: "releaseDate", descending: true) { nodes {title\n thumbnail\n releaseDate\n description\n url}}}'
);
