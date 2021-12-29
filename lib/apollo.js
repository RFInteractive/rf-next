import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'https://rankfuse.com/graphql',
    cache: new InMemoryCache(),
});
