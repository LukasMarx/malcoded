import gql from 'graphql-tag';

export const posts = gql(
  'query Posts {BlogPosts(limit: 5, orderBy: "releaseDate", descending: true) {title\n thumbnail\n description\n url}}'
);

export const posts3 = gql(
  'query Posts {BlogPosts(limit: 3, orderBy: "releaseDate", descending: true) {title\n thumbnail\n description\n url}}'
);

export const angularBeginner = gql(
  'query Posts {BlogPosts(filter: [{field: "category1", value:"angular-beginner"}], limit: 3, orderBy: "releaseDate", descending: true) {title\n thumbnail\n description\n url}}'
);

export const angularIntermediate = gql(
  'query Posts {BlogPosts(filter: [{field: "category1", value:"angular-intermediate"}], limit: 3, orderBy: "releaseDate", descending: true) {title\n thumbnail\n description\n url}}'
);

export const category = gql(
  'query Posts ($filter: [FilterInput]) {BlogPosts(filter: $filter, orderBy: "releaseDate", descending: true) {title\n thumbnail\n description\n url}}'
);
