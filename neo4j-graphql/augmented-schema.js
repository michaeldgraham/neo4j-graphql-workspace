import { Neo4jGraphQL } from '@neo4j/graphql'
import { typeDefs } from './graphql-schema';

export const schema = new Neo4jGraphQL({ typeDefs }).schema;
