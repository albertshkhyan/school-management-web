import {
    ApolloClient,
    InMemoryCache,
    createHttpLink,
    ApolloLink,
    concat
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';

// HTTP link to connect Apollo Client to a GraphQL endpoint
const httpLink = createHttpLink({
    uri: 'http://localhost:4000/graphql', // Replace this with your GraphQL endpoint
});

// Middleware for adding the auth token to requests
const authMiddleware = new ApolloLink((operation, forward) => {
    // Retrieve the authentication token from local storage if it exists
    const token = localStorage.getItem('authToken');

    // Use the setContext method to set the HTTP headers.
    operation.setContext({
        headers: {
            authorization: token ? `Bearer ${token}` : '',
        }
    });

    // Call the next link in the middleware chain.
    return forward(operation);
});

// Error Handling Link
const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
        graphQLErrors.forEach(({ message, locations, path }) => {
            console.error(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            );
        });
    }

    if (networkError) {
        console.error(`[Network error]: ${networkError}`);
        // Optionally redirect to a network error page or display a global error message
    }
});

// Apollo Client instance
const client = new ApolloClient({
    // Use the Apollo Link API to chain your links together
    // The errorLink handles errors before they're passed to the httpLink
    link: concat(authMiddleware, concat(errorLink, httpLink)),

    cache: new InMemoryCache(),

    // Optional: Configure your client with default fetch policies
    // defaultOptions: {
    //     watchQuery: {
    //         fetchPolicy: 'cache-and-network',
    //     },
    //     query: {
    //         fetchPolicy: 'network-only',
    //     },
    //     mutate: {
    //         fetchPolicy: 'no-cache',
    //     },
    // }
});

export default client;
