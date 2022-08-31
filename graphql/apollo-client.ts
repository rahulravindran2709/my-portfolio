import { ApolloClient, createHttpLink, InMemoryCache, } from "@apollo/client";

const httpLink = createHttpLink({
  uri: "https://api.github.com/graphql",
    headers: {
        authorization: `Bearer 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`,
    }
});


const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
