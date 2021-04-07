import { loadWorkspaceSync } from '@graphql-workspaces/load';
import { Neo4jGraphQL } from '@neo4j/graphql';

const typeDefs = loadWorkspaceSync('neo4j-graphql/schema');

export const schema = new Neo4jGraphQL({ typeDefs, debug: true }).schema;
