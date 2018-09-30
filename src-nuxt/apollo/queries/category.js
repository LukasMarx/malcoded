import gql from 'graphql-tag';
export default gql(
  'query getPublicPosts ($category: String) { getPublicPosts(category: $category) {edges {node {title\n thumbnail\n releaseDate\n description\n url}}}}'
);
