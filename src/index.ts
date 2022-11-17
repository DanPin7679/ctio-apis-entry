import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import dotenv from "dotenv";

dotenv.config();

const typeDefs = `#graphql
    type Book {
        title: String
        author: String
    }
    type Query {
        books: [Book]
    }
`;

const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

const resolvers = {
  Query: {
    books: () => books,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const port = process.env.PORT;
console.log(port);
const { url } = await startStandaloneServer(server, {
  listen: { port: Number(port) },
});

console.log(`🚀  Server ready at: ${url}`);
