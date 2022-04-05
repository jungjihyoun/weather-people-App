import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  makeVar,
} from '@apollo/client';
import {graphQL_URL} from '@env';

const httpLink = createHttpLink({
  uri: graphQL_URL,
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),

  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
  onError: ({networkError, graphQLErrors}) => {
    if (graphQLErrors) {
      console.log('graphQLErrors', graphQLErrors[0]);
    }
    console.log('networkError', networkError);
  },
});
