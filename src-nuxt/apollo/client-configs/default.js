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

  let token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXRob2QiOiJhdXRoS2V5IiwicmVhZE9ubHkiOmZhbHNlLCJwcm9qZWN0SWQiOiI0ODIzOGU4My04N2RkLTRiNGYtYmU0OC0yNmVhN2M4OWU4ZTciLCJpYXQiOjE1MTg1OTc1OTIsImF1ZCI6IjQ4MjM4ZTgzLTg3ZGQtNGI0Zi1iZTQ4LTI2ZWE3Yzg5ZThlNyIsImlzcyI6IjQ4MjM4ZTgzLTg3ZGQtNGI0Zi1iZTQ4LTI2ZWE3Yzg5ZThlNyJ9.-zeF6YUbTR3op5Sj-jt-zGIV6uNb3U6v98zMwn5vRYs';

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
