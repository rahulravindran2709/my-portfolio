import { ApolloClient, createHttpLink, InMemoryCache, } from "@apollo/client";


const httpLink = createHttpLink({
  uri: "https://api.github.com/graphql",
    headers: {
        authorization: process.env.GITHUB_TOKEN,
    }
});


const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
