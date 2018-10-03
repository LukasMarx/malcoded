import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

function objectToQuery(input) {
  const s = Object.keys(input)
    .filter(key => Boolean(input[key]) || input[key] === 0)
    .map(key =>
      []
        .concat(input[key])
        .map(val => {
          if (typeof val !== 'string') {
            val = JSON.stringify(val);
          }
          return `${key}=${encodeURIComponent(val)}`;
        })
        .join('&')
    )
    .join('&')
    .trim();
  return input ? '?' + s : '?';
}

export default ctx => {
  const customFetch = (uri, options) => {
    const { body, ...newOptions } = options;
    if (body) {
      let queryString = objectToQuery(JSON.parse(body));
      queryString = queryString.replace('&variables=%5Bobject%20Object%5D', '');
      let requestedString = uri + queryString;
      return fetch(requestedString, newOptions);
    }
    return fetch(uri);
  };

  const httpLink = new HttpLink({
    uri: 'http://localhost:3000/graphql',
    fetchOptions: { method: 'GET' },
    fetch: customFetch
  });

  // middleware
  const middlewareLink = new ApolloLink((operation, forward) => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      let access_token = token;
      if (token) {
        access_token = token.access_token;
      }
      if (access_token) {
        operation.setContext({
          headers: { authorization: `Bearer ${access_token}` }
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
};
