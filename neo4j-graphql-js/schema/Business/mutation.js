import gql from 'graphql-tag';
import cql from 'cypher-tag';

export const Mutation = gql`
  type Mutation {
    mergeBusinessCategory(categories: [String!]!, businessId: ID!): Business @cypher(statement: ${cql`
      MATCH (b:Business {businessId: $businessId})
      UNWIND $categories AS cat
      MERGE (c:Category {name: cat})
      MERGE (b)-[:IN_CATEGORY]->(c)
      RETURN b
    `})
  }
`;