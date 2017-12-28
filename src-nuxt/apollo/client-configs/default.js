import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

export default ctx => {
  const httpLink = new HttpLink({
    uri: 'https://api.malcoded.com/v1/48238e83-87dd-4b4f-be48-26ea7c89e8e7/api'
  });

  let token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXRob2QiOiJhdXRoS2V5IiwicmVhZE9ubHkiOmZhbHNlLCJwcm9qZWN0SWQiOiI0ODIzOGU4My04N2RkLTRiNGYtYmU0OC0yNmVhN2M4OWU4ZTciLCJpYXQiOjE1MTMzNTY3NDgsImF1ZCI6IjQ4MjM4ZTgzLTg3ZGQtNGI0Zi1iZTQ4LTI2ZWE3Yzg5ZThlNyIsImlzcyI6IjQ4MjM4ZTgzLTg3ZGQtNGI0Zi1iZTQ4LTI2ZWE3Yzg5ZThlNyJ9.iGIzA5UadAp7Nx05LX5L6kKAfcQbAONj6Vle9DUHSj0';

  // middleware
  const middlewareLink = new ApolloLink((operation, forward) => {
    operation.setContext({
      headers: { authorization: `Bearer ${token}` }
    });
    return forward(operation);
  });
  const link = middlewareLink.concat(httpLink);
  return {
    link,
    cache: new InMemoryCache()
  };
};
