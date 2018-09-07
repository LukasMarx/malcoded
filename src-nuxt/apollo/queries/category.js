import gql from 'graphql-tag';
export default gql(
  'query Posts ($filter: [FilterInput]) {BlogPosts(filter: $filter, orderBy: "releaseDate", descending: true) {nodes {title\n thumbnail\n releaseDate\n description\n url}}}'
);
