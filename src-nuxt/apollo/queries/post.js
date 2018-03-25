import gql from 'graphql-tag';

export default gql(
  'query Post($filter: [FilterInput]!) {BlogPost(filter: $filter) {title\n thumbnail\n description\n url\n content\n releaseDate\n primaryColor }}'
);
