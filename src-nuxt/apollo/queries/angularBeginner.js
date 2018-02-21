import gql from 'graphql-tag';
export default gql(
  'query Posts {BlogPosts(filter: [{field: "category1", value:"angular-beginner"}], limit: 3, orderBy: "releaseDate", descending: true) {title\n thumbnail\n description\n url}}'
);
