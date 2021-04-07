import { loadWorkspaceSync } from '@graphql-workspaces/load';
import { makeAugmentedSchema } from 'neo4j-graphql-js';

const typeDefs = loadWorkspaceSync('neo4j-graphql-js/schema');

export const schema = makeAugmentedSchema({
  typeDefs,
  config: {
    query: {
      exclude: ['RatingCount'],
    },
    mutation: {
      exclude: ['RatingCount'],
    },
  },
});
