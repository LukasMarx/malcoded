import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

export default function(context) {
  const httpLink = new HttpLink({
    uri: context.app.$env.GRAPHQL_URL || 'http://localhost:3000/v1/api/graphql',
    fetchOptions: { method: 'POST' }
  });

  const middlewareLink = new ApolloLink((operation, forward) => {
    if (typeof window !== 'undefined') {
      const access_token = context.app.store.state.token;

      if (access_token) {
        operation.setContext({
          headers: { Authorization: `Bearer ${access_token}` }
        });
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
