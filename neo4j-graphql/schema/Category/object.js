import gql from 'graphql-tag';

export const Category = gql`
  type Category {
    name: ID!
    businesses: [Business] @relationship(type: "IN_CATEGORY", direction: "IN")
  }
`;