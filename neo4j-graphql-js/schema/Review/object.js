import gql from 'graphql-tag';

export const Review = gql`
  type Review {
    reviewId: ID!
    stars: Float
    text: String
    date: Date
    business: Business @relation(name: "REVIEWS", direction: OUT)
    user: User @relation(name: "WROTE", direction: IN)
  }
`;