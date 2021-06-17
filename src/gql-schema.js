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
        photos: [String]
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
        getLoremIpsum: String
        getCitizenByCid(cid:ID!): Citizen!
        getCitizenById(id: ID!): Citizen!
        getCitizenByName(name: String!): [Citizen]!
        getCitizenByEmail(email: String!): [Citizen]!
        # add parameters for getCitizens for cursor pagination implementation later
        getCitizens: [Citizen]!
        getRandomCitizen: [Citizen]!
    }

    type Mutation {
        createLoremIpsum: String
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