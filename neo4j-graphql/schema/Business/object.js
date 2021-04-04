import gql from 'graphql-tag';
import cql from 'cypher-tag';

export const Business = gql`
  type Business {
    businessId: ID!
    name: String!
    address: String
    city: String
    state: String
    location: Point
    reviews: [Review] @relationship(type: "REVIEWS", direction: "IN")
    categories: [Category] @relationship(type: "IN_CATEGORY", direction: "OUT")
    avgStars: Float @cypher(statement: ${cql`
      MATCH (this)<-[:REVIEWS]-(r:Review)
      RETURN coalesce(avg(r.stars),0.0)
    `})
  }
`;