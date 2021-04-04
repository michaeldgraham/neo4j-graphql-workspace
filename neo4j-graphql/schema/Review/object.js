import gql from 'graphql-tag';

export const Review = gql`
  type Review {
    reviewId: ID!
    stars: Float
    text: String
    date: Date
    business: Business @relationship(type: "REVIEWS", direction: "OUT")
    user: User @relationship(type: "WROTE", direction: "IN")
  }
`;