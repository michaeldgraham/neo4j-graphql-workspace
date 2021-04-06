## Neo4j GraphQL Workspace
A project template for progressive development of Neo4j GraphQL schemas.

## Workspaces
Schema files and a server setup script exist for both the neo4j-graphql-js and @neo4j/graphql libraries. The `/schema` directory in both contains a decomposition of the type definitions in [this schema](https://github.com/grand-stack/grand-stack-starter/blob/master/api/src/schema.graphql) used by the [GRANDstack Starter Kit](https://github.com/grand-stack/grand-stack-starter).

* [neo4j-graphql-js](https://www.npmjs.com/package/neo4j-graphql-js)<br>
  A GraphQL to Cypher query execution layer for Neo4j and JavaScript GraphQL implementations.
  <br>

* [@neo4j/graphql](https://www.npmjs.com/package/@neo4j/graphql)<br>
  Neo4j product alpha of neo4j-graphql-js

## Recommended Dependencies
The following dependencies are used to assist the development of Neo4j-GraphQL schemas:
* [@graphql-workspaces/cli](https://www.npmjs.com/package/@graphql-workspaces/cli)<br>
  A CLI for GraphQL workflow.
  <br>

* [graphql-tag](https://www.npmjs.com/package/graphql-tag)<br>
  A JavaScript template literal tag that parses GraphQL queries.
  <br>

* [cypher-tag](https://www.npmjs.com/package/cypher-tag)<br>
  A JavaScript template literal tag for Cypher in GraphQL.

## Scripts
You can print the result of the schema augmentation process from either neo4j-graphql library using the following scripts that use [@graphql-workspaces/cli](https://www.npmjs.com/package/@graphql-workspaces/cli) locally:

* `npm run print:neo4j-graphql-js`
* `npm run print:neo4j-graphql`

All other dependencies are used for building and running the server startup files with the following scripts:

* `npm run start:neo4j-graphql-js`
* `npm run start:neo4j-graphql`

## Roadmap
  * Add example operations for both neo4j-graphql-js and @neo4j/graphql that use nested mutations to seed the database.
    * Provide the data available from https://cdn.neo4jlabs.com/data/grandstack_businesses.csv, similar to the [GRANDstack Starter Kit](https://github.com/grand-stack/grand-stack-starter/blob/master/api/src/seed/seed-mutations.js), to each root mutation when pre-processing its argument values using a custom resolver function. 
