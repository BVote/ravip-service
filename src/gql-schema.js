const { gql } = require("apollo-server-express");


// required clauses removed for the moment

const typeDefs = gql`
    scalar DateTime
    
    type Citizen {
        id: ID!
        cid: ID!
        identity: Identity!
        father: Identity!
        mother: Identity!
        createdAt: DateTime!
        updatedAt: DateTime!
    }

    # Identity type is used to represent a moral person
    type Identity {
        firstname: [String]
        lastname: [String]
        email: [String]
        telephone: [String]
        birthdate: DateTime
        birthplace: String
        address: String
    }

    type Query {
        ipsum: String
        citizen(id: ID!, cid:ID!): Citizen!
        identity(id: ID!): Identity!
        citizens: [Citizen]!
    }

    type Mutation {
        createNothing(nothing: String): String
        createCitizen(identity: PersonAsIdentity, father:PersonAsIdentity, mother:PersonAsIdentity): Citizen!
        updateCitizenAddress(id: ID!, identity: PersonAsIdentity!, father:PersonAsIdentity!, father:PersonAsIdentity!): Citizen!
    }

    input PersonAsIdentity {
        """ This is identical to ouput type Identity,
            But we replicate it due to graphql KISS principle
        """
        firstname: [String]
        lastname: [String]
        email: [String]
        telephone: [String]
        birthdate: DateTime
        birthplace: String
        address: String
    }
`;

module.exports = { typeDefs };