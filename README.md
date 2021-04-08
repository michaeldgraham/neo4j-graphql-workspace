## Neo4j GraphQL Workspace
A project template for progressive development of [Neo4j](https://neo4j.com/product/neo4j-graph-database/) [GraphQL](https://graphql.org/) schemas.

## Technologies 🛠️
These technologies are necessary or recommended to get started with development:

* Install the [Node.js](https://nodejs.org/en/) runtime to use the [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) language for server programming
* Download [Neo4j Desktop](https://neo4j.com/download/) or the database version appropriate for your machine
* Install the [Visual Studio Code](https://code.visualstudio.com/) editor or an equivalent
* [Sign up](https://studio.apollographql.com/login) for [Apollo Studio](https://www.apollographql.com/docs/studio/) to use the [Explorer GraphQL IDE](https://www.apollographql.com/docs/studio/explorer/)

## Learning 
Here are some resources for learning more about the above technologies:
* 📘 Read
  * GraphQL
    * [GraphQL API language](https://graphql.org/learn/)
    * [Why GraphQL?](https://www.apollographql.com/docs/intro/benefits/)
    * Apollo GraphQL [Server](https://www.apollographql.com/docs/apollo-server/) and [Client](https://www.apollographql.com/docs/react/) resources
  * Cypher
    * [Cypher graph query language](https://neo4j.com/developer/cypher/) used by Neo4j
    * [Comparing SQL with Cypher](https://neo4j.com/developer/cypher/guide-sql-to-cypher/)
* 🎥 Watch
  * [GraphQL From the Ground Up by Ellen Shapiro](https://www.youtube.com/watch?v=84KzA3FG5Q4)
  * [Documenary about GraphQL](https://www.youtube.com/watch?v=783ccP__No8&t=18s)
* ☑️ Try
  * [Practical, hands-on trainings](https://odyssey.apollographql.com/) for learning GraphQL with [Apollo Odyssey](https://odyssey.apollographql.com/about)
  * [SpaceX GraphQL API](https://api.spacex.land/graphql/)
  * [GitHub GraphQL API](https://docs.github.com/en/graphql/overview/explorer)
## Workspaces 💼
[Schema files](https://github.com/michaeldgraham/neo4j-graphql-workspace/tree/main/neo4j-graphql-js/schema), a [server file](https://github.com/michaeldgraham/neo4j-graphql-workspace/blob/main/neo4j-graphql-js/server.js), and npm scripts exist for both the neo4j-graphql-js and @neo4j/graphql libraries. The `/schema` directory for both contains a decomposition of the type definitions in [this schema](https://github.com/grand-stack/grand-stack-starter/blob/master/api/src/schema.graphql) used by the [GRANDstack Starter Kit](https://github.com/grand-stack/grand-stack-starter).

* [neo4j-graphql-js](https://www.npmjs.com/package/neo4j-graphql-js)
  A GraphQL to Cypher query execution layer for Neo4j and JavaScript GraphQL implementations.
  * [Documentation](https://grandstack.io/docs/neo4j-graphql-js)
  <br>

* [@neo4j/graphql](https://www.npmjs.com/package/@neo4j/graphql)<br>
  Neo4j product beta of neo4j-graphql-js
  * [Documentation](https://neo4j.com/docs/graphql-manual/current/)

## Dependencies 🌐

Run `npm install` in your terminal to install project dependencies. The following libraries are used to assist the development of Neo4j-GraphQL schemas:

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
 
## Workflow 🔁
1. Modify the contents of the [/schema directory](https://github.com/michaeldgraham/neo4j-graphql-workspace/tree/main/neo4j-graphql-js/schema).

2. Use the `print` command from [@graphql-workspaces/cli](https://www.npmjs.com/package/@graphql-workspaces/cli) to print the merged contents of the `/schema` directory to a [schema.printed.graphql](https://github.com/michaeldgraham/neo4j-graphql-workspace/blob/main/neo4j-graphql-js/schema.printed.graphql) file next to it:
    
    * Run `gql print schema`

3. Use the below scripts to run the [server file](https://github.com/michaeldgraham/neo4j-graphql-workspace/blob/main/neo4j-graphql-js/server.js) and start the API at [localhost:4001/graphql](https://github.com/michaeldgraham/neo4j-graphql-workspace/blob/f5775a5a1a2ff2102b2d532e4eff52fb7d4f5d8a/neo4j-graphql-js/server.js#L13) or to print [the result](https://github.com/michaeldgraham/neo4j-graphql-workspace/blob/main/neo4j-graphql-js/augmented-schema.printed.graphql) of the Neo4j-GraphQL augmentation of the merged type definitions in `schema.printed.graphql`.

4. Add, modify, or rename any files or directories in `/schema` and repeat workflow.

## Scripts 📜
You can print the result of the schema augmentation process from either neo4j-graphql library using the following scripts which use the `gql` cli locally:

* `npm run print:neo4j-graphql-js`
* `npm run print:neo4j-graphql`

All other dependencies are used for building and running the server startup files with the following scripts:

* `npm run start:neo4j-graphql-js`
* `npm run start:neo4j-graphql`
## Roadmap 🗺️
* Add example operations for both neo4j-graphql-js and @neo4j/graphql that use nested mutations to seed the database.
  * Provide the data available from https://cdn.neo4jlabs.com/data/grandstack_businesses.csv, similar to the [GRANDstack Starter Kit](https://github.com/grand-stack/grand-stack-starter/blob/master/api/src/seed/seed-mutations.js), to each root mutation when pre-processing its argument values using a custom resolver function. 
* Add examples of the authorization strategies available for neo4j-graphql-js and @neo4j/graphql.
* Use these [utility functions](https://www.graphql-tools.com/docs/api/modules/utils/#functions-1) from [graphql-tools](https://www.graphql-tools.com/docs/introduction) to support automated migration between integration libraries.
  * Look into adding some functions from [@graphql-inspector/core](https://www.npmjs.com/package/@graphql-inspector/core) to such a process.
