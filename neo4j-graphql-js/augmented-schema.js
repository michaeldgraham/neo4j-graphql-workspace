import { makeAugmentedSchema } from 'neo4j-graphql-js';
import { typeDefs } from './graphql-schema';

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