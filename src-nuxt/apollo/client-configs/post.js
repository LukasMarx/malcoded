import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

export default function(context) {
  const httpLink = new HttpLink({
    uri: 'http://localhost:3000/graphql',
    fetchOptions: { method: 'POST' }
  });

  const middlewareLink = new ApolloLink((operation, forward) => {
    if (typeof window !== 'undefined') {
      const rawToken = localStorage.getItem('token');
      if (rawToken) {
        let token = JSON.parse(rawToken);
        let access_token;
        if (token) {
          access_token = token.access_token;
        }
        if (access_token) {
          operation.setContext({
            headers: { Authorization: `Bearer ${access_token}` }
          });
        }
      }
    }
    return forward(operation);
  });

  const link = middlewareLink.concat(httpLink);
  return {
    link,
    cache: new InMemoryCache()
  };
}
