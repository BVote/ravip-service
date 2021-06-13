const { gql } = require("apollo-server-express");


// required clauses removed for the moment

const typeDefs = gql`
    scalar DateTime
    
    type Citizen {
        id: ID!
        cid: ID!
        firstnames: [String]
        lastnames: [String]
        emails: [String]
        mother: String
        father: String
        telephones: [String]
        birthdate: DateTime
        birthplace: String
        address: String
        createdAt: DateTime!
        updatedAt: DateTime!
    }

    type Query {
        ipsum: String
        getCitizenByCid(cid:ID!): Citizen!
        getCitizenById(id: ID!): Citizen!
        getCitizenByName(name: String!): Citizen!
        getCitizenByEmail(email: String!): Citizen!
        getCitizens: [Citizen]!
    }

    type Mutation {
        createNothing(nothing: String): String
        createCitizen(
            firstnames: [String], 
            lastnames: [String], 
            emails: [String],
            telephones: [String],
            birthdate: DateTime,
            birthplace: String,
            address: String
        ): Citizen!
        
    }

`;

module.exports = { typeDefs };