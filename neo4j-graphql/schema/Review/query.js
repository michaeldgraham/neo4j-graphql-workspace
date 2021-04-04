import gql from 'graphql-tag';
import cql from 'cypher-tag';

export const Query = gql`
  type Query {
    ratingsCount: [RatingCount] @cypher(statement: ${cql`
      MATCH (r:Review)
      WITH r.stars AS stars, COUNT(*) AS count
      ORDER BY stars
      RETURN {
        stars: stars, 
        count: count
      }
    `})
  }
  type RatingCount {
    stars: Float!
    count: Int!
  }
`;