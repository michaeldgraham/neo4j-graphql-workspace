import { loadWorkspaceSync } from '@graphql-workspaces/load';
import { makeAugmentedSchema } from 'neo4j-graphql-js';

const typeDefs = loadWorkspaceSync('neo4j-graphql-js/schema');

export const schema = makeAugmentedSchema({
  typeDefs,
  documentation: true,
  query: true,
  mutation: true,
  auth: false,
  config: {
    query: {
      exclude: ['RatingCount'],
    },
    mutation: {
      exclude: ['RatingCount'],
    },
  },
});
