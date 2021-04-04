import gql from 'graphql-tag';
import cql from 'cypher-tag';

export const User = gql`
  type User {
    recommendations(first: Int = 3): [Business] @cypher(statement: ${cql`
      MATCH (this)-[:WROTE]->(r:Review)-[:REVIEWS]->(:Business)<-[:REVIEWS]-(:Review)<-[:WROTE]-(:User)-[:WROTE]->(:Review)-[:REVIEWS]->(rec:Business)
      WHERE NOT EXISTS( (this)-[:WROTE]->(:Review)-[:REVIEWS]->(rec) )
      WITH rec, COUNT(*) AS num 
      ORDER BY num DESC 
      LIMIT $first 
      RETURN rec
    `})
  }
`;
