import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import neo4j from 'neo4j-driver';
import { schema } from './augmented-schema.js';
import dotenv from 'dotenv';

// set environment variables from .env
dotenv.config();

// Specify host, port and path for GraphQL endpoint
const port = process.env.GRAPHQL_SERVER_PORT || 4001;
const path = process.env.GRAPHQL_SERVER_PATH || '/graphql';
const host = process.env.GRAPHQL_SERVER_HOST || 'localhost';

/*
 * Create a Neo4j driver instance to connect to the database
 * using credentials specified as environment variables
 * with fallback to defaults
 */
const driver = neo4j.driver(
  process.env.NEO4J_URI || 'bolt://localhost:7687',
  neo4j.auth.basic(
    process.env.NEO4J_USER || 'neo4j',
    process.env.NEO4J_PASSWORD || 'letmein'
  )
);

/*
 * Create a new ApolloServer instance, serving the GraphQL schema
 * created using makeAugmentedSchema above and injecting the Neo4j driver
 * instance into the context object so it is available in the
 * generated resolvers to connect to the database.
 */
const server = new ApolloServer({
  schema,
  context: ({ req }) => ({ req, driver, neo4jDatabase: process.env.NEO4J_DATABASE }),
  introspection: true,
  playground: true,
});

const app = express();

/*
 * Optionally, apply Express middleware for authentication, etc
 * This also also allows us to specify a path for the GraphQL endpoint
 */
server.applyMiddleware({ app, path });

app.listen({ host, port, path }, () => {
  console.log(`GraphQL server ready at http://${host}:${port}${path}`)
});