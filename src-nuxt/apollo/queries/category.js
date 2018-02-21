import gql from 'graphql-tag';
export default gql(
  'query Posts ($filter: [FilterInput]) {BlogPosts(filter: $filter, orderBy: "releaseDate", descending: true) {title\n thumbnail\n description\n url}}'
);
