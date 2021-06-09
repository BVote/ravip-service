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
        lastname: String
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
        citizens: [Citizen]!
    }

    type Mutation {
        createCitizen(identity: PersonAsIdentity!, father:PersonAsIdentity!, father:PersonAsIdentity!): Citizen!
        updateCitizenAddress(id: ID!, identity: PersonAsIdentity!, father:PersonAsIdentity!, father:PersonAsIdentity!): Citizen!
    }

    input PersonAsIdentity {
        """ This is identical to ouput type Identity,
            But we replicate it due to graphql KISS principle
        """
        firstname: String
        lastname: String
        email: [String]
        telephone: [String]
        birthdate: DateTime
        birthplace: String
        address: String
    }
`;

module.exports = { typeDefs };