import fs from 'fs'
import path from 'path'

export const typeDefs = fs
  .readFileSync(path.join(__dirname, './schema.printed.graphql'))
  .toString('utf-8')