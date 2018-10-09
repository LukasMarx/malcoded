import gql from 'graphql-tag';

export default gql(
  'query getCommentsForPost($postId: ID!) { getCommentsForPost (postId: $postId) {edges { node { id\n author{id\n displayName\n image\n} content\n creationDate\n updateDate\n answers {edges {node { id\n author{id\n displayName\n image\n} content\n creationDate\n updateDate\n }}} }}}}'
);
