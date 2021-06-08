const { gql } = require("apollo-server-express");


// required clauses removed for the moment

const typeDefs = gql`
    scalar DateTime

    type Citizen {
        id: ID!
        identity: Identity!
        father: Identity!
        mother: Identity!
        createdAt: DateTime!
        updatedAt: DateTime!
    }


    type Identity {
        firstname: String
        surname: String
        email: [String]
        telephone: [String]
        birthdate: DateTime
        birthplace: String
        address: String
    }

    type Query {
        ipsum: String
        citizen(id: ID!): Citizen!
        identity(id: ID!): Identity!
        citizens: [Citizens]!
    }

    type Mutation {
        createCitizen(identity: Identity!, father:Identity!, father:Identity!): Citizen!
        updateCitizenAddress(id: ID!, identity: Identity!, father:Identity!, father:Identity!): Citizen!
    }
`;

module.exports = { typeDefs };