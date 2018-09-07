import gql from 'graphql-tag';
export default gql(
  'query Posts {BlogPosts(filter: [{field: "category1", value:"angular-intermediate"}], limit: 3, orderBy: "releaseDate", descending: true) {nodes {title\n thumbnail\n releaseDate\n description\n url}}}'
);
