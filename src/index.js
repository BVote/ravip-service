require('dotenv').config()
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const depthLimit = require("graphql-depth-limit");
const { ApolloServer, registerServer } = require("apollo-server-express");
const { createComplexityLimitRule } = require("graphql-validation-complexity");

const resolvers = require("./resolvers");
const { typeDefs } = require("./gql-schema");
const PORT = process.env.PORT || 4000;
const DB_STRING = process.env.DB_STRING;

const app = express();
// app.use(helmet());
app.use(cors());

const apolloServer = new ApolloServer({ typeDefs, resolvers });
apolloServer.applyMiddleware({ app, path: "/ravip" });

app.listen({ port:PORT }, () => {
    console.log(`Graphql ready at http://localhost:${PORT}${apolloServer.graphqlPath}`)
});
