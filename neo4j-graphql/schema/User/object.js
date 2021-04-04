import gql from 'graphql-tag';
import cql from 'cypher-tag';

export const User = gql`
  type User {
    userId: ID!
    name: String
    reviews: [Review] @relationship(type: "WROTE", direction: "OUT")
    avgStars: Float @cypher(statement: ${cql`
      MATCH (this)-[:WROTE]->(r:Review) RETURN toFloat(avg(r.stars))
    `})
    numReviews: Int @cypher(statement: ${cql`
      MATCH (this)-[:WROTE]->(r:Review) RETURN COUNT(r)
    `})
  }
`;