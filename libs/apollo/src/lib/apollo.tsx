import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
  HttpLink,
  ApolloLink,
  NormalizedCacheObject,
} from '@apollo/client';
import fetch from 'isomorphic-unfetch';
import { onError } from '@apollo/client/link/error';
import Router from 'next/router';

declare global {
  interface Window {
    __X_SHARE_HASH_DO_NOT_USE_OR_YOU_WILL_BE_FIRED__?: string;
    __X_COMPANY_SLUG_DO_NOT_USE_OR_YOU_WILL_BE_FIRED__?: string;
  }
}

let apolloClient: ApolloClient<NormalizedCacheObject>;

const httpLink = new HttpLink({
  fetch,
  uri: 'http://localhost:8080/v1/graphql',
  headers: {
    'x-hasura-admin-secret':
      '9ApOfDY1xtKdSUhw0mjvNbSBuTOGjoSpU1t277M7e83tWGs7ScNe5LM8aI4NPXGv',
  },
});

const errorMap: Record<string, VoidFunction> = {
  'Not Authorized': () => {
    Router.replace('/403');
  },
};

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    for (const error of graphQLErrors) {
      if (error?.message in errorMap) {
        return errorMap[error?.message]();
      }
      console.log(
        `[GraphQL error]: Message: ${error.message}, Location: ${error.locations}, Path: ${error.path}`
      );
    }
  }
  if (networkError) {
    console.error(`[Network error]:`, networkError);
  }
});

apolloClient = new ApolloClient({
  ssrMode: false,
  link: ApolloLink.from([errorLink, httpLink]),
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

type P = {
  readonly children?: React.ReactNode;
};

const DiarGraphqlProvider = ({ children }: P) => (
  <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
);

export { DiarGraphqlProvider, apolloClient };
