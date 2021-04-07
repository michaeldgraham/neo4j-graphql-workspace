## Neo4j GraphQL Workspace
A project template for progressive development of [Neo4j](https://neo4j.com/product/neo4j-graph-database/) [GraphQL](https://graphql.org/) schemas.

## Technologies
After installing the following technologies, [fork](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo) or [template](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template) this repository
  * Sign up for [GitHub](https://github.com/) and optionally install [GitHub Desktop](https://desktop.github.com/).
  * [Node.js](https://nodejs.org/en/) to use the [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) programming language for server programming.
  * The [Neo4j graph database](https://neo4j.com/download/) version appropriate for your operating system.
  * The [Visual Studio Code](https://code.visualstudio.com/) editor or an equivalent.

## Workspaces
[Schema files](https://github.com/michaeldgraham/neo4j-graphql-workspace/tree/main/neo4j-graphql-js/schema), a [server file](https://github.com/michaeldgraham/neo4j-graphql-workspace/blob/main/neo4j-graphql-js/server.js), and npm scripts exist for both the neo4j-graphql-js and @neo4j/graphql libraries. The `/schema` directory for both contains a decomposition of the type definitions in [this schema](https://github.com/grand-stack/grand-stack-starter/blob/master/api/src/schema.graphql) used by the [GRANDstack Starter Kit](https://github.com/grand-stack/grand-stack-starter).

* [neo4j-graphql-js](https://www.npmjs.com/package/neo4j-graphql-js)<br>
  A GraphQL to Cypher query execution layer for Neo4j and JavaScript GraphQL implementations.
  <br>

* [@neo4j/graphql](https://www.npmjs.com/package/@neo4j/graphql)<br>
  Neo4j product alpha of neo4j-graphql-js

## Dependencies
The following dependencies are used to assist the development of Neo4j-GraphQL schemas:

* [graphql-tag](https://www.npmjs.com/package/graphql-tag)<br>
  A JavaScript template literal tag that parses GraphQL queries.
  <br>

* [cypher-tag](https://www.npmjs.com/package/cypher-tag)<br>
  A JavaScript template literal tag for Cypher in GraphQL.
  <br>

* [@graphql-workspaces/cli](https://www.npmjs.com/package/@graphql-workspaces/cli)<br>
  A CLI for GraphQL workflow.
  <br>

* [@graphql-workspaces/load](https://www.npmjs.com/package/@graphql-workspaces/load)<br>
  A wrapper around the [load-files](https://www.graphql-tools.com/docs/api/modules/load-files) and [merge](https://www.graphql-tools.com/docs/api/modules/merge#mergetypedefs) modules from [graphql-tools](https://www.graphql-tools.com/docs/schema-merging#merging-type-definitions) used to load and merge schema files.
 
## Workflow
1. Modify the contents of the [/schema directory](https://github.com/michaeldgraham/neo4j-graphql-workspace/tree/main/neo4j-graphql-js/schema).

2. Use the `print` command from [@graphql-workspaces/cli](https://www.npmjs.com/package/@graphql-workspaces/cli) to print the merged contents of the `/schema` directory to a [schema.printed.graphql](https://github.com/michaeldgraham/neo4j-graphql-workspace/blob/main/neo4j-graphql-js/schema.printed.graphql) file next to it:
    
    * Run `gql print schema`

3. Use the below scripts to run the [server file](https://github.com/michaeldgraham/neo4j-graphql-workspace/blob/main/neo4j-graphql-js/server.js) and start the API at [localhost:4001/graphql](https://github.com/michaeldgraham/neo4j-graphql-workspace/blob/f5775a5a1a2ff2102b2d532e4eff52fb7d4f5d8a/neo4j-graphql-js/server.js#L13) or to print [the result](https://github.com/michaeldgraham/neo4j-graphql-workspace/blob/main/neo4j-graphql-js/augmented-schema.printed.graphql) of the Neo4j-GraphQL augmentation of the merged type definitions in `schema.printed.graphql`.

4. Add, modify, or rename any files or directories in `/schema` and repeat workflow.

## Scripts
You can print the result of the schema augmentation process from either neo4j-graphql library using the following scripts which use the `gql` cli locally:

* `npm run print:neo4j-graphql-js`
* `npm run print:neo4j-graphql`

All other dependencies are used for building and running the server startup files with the following scripts:

* `npm run start:neo4j-graphql-js`
* `npm run start:neo4j-graphql`
## Roadmap
  * Add example operations for both neo4j-graphql-js and @neo4j/graphql that use nested mutations to seed the database.
    * Provide the data available from https://cdn.neo4jlabs.com/data/grandstack_businesses.csv, similar to the [GRANDstack Starter Kit](https://github.com/grand-stack/grand-stack-starter/blob/master/api/src/seed/seed-mutations.js), to each root mutation when pre-processing its argument values using a custom resolver function. 
  * Add examples of the authorization strategies available for neo4j-graphql-js and @neo4j/graphql
