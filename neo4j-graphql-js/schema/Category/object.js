import gql from 'graphql-tag';

export const Category = gql`
  type Category {
    name: ID!
    businesses: [Business] @relation(name: "IN_CATEGORY", direction: IN)
  }
`;