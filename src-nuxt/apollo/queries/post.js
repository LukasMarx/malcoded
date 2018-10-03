import gql from 'graphql-tag';

export default gql(
  'query getPost($url: String!) {publicPost(url: $url) {id\n title\n thumbnail\n description\n url\n content\n releaseDate\n primaryColor\n recommendedPosts {edges {node {title\n thumbnail\n url}}} }}'
);
