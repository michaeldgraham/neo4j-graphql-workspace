import gql from 'graphql-tag';
import cql from 'cypher-tag';

export const User = gql`
  type Query {
    userCount: Int! @cypher(statement: ${cql`
      MATCH (u:User) RETURN COUNT(u)
    `})
  }
`;