import { ApolloClient, InMemoryCache } from "@apollo/client";
import { WebSocketLink } from "apollo-link-ws";

const client = new ApolloClient({
  link: new WebSocketLink({
    uri: "wss://mories-music-share.herokuapp.com/v1/graphql",
    options: {
      reconnect: true,
    },
  }),
  cache: new InMemoryCache(),
});

export default client;
