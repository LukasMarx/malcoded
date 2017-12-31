import gql from 'graphql-tag';

export const post = gql(
  'query Post($filter: FilterInput!) {BlogPost(filter: $filter) {title\n thumbnail\n description\n url\n content\n releaseDate\n primaryColor }}'
);
