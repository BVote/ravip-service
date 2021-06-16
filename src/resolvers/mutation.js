const { address } = require("faker");
const Faker = require("faker");
const gravatar = require("../utils/gravatar");
const { getDummyCitizen } = require("../utils/dummy");
const { loremIpsum } = require("lorem-ipsum");
Faker.locale = "fr";


// we fake all mutation parameters through mutations code to avoir typing each parameters in 
// graphql playground, this means that we removed the required clause while defining graphql types

module.exports = {
    createCitizen: async (parents, args, { models }) => {

        const { firstnames, lastnames, emails, photos, telephones, birthdate, birthplace, address, mother, father } = getDummyCitizen();

        const citizen =  await models.Citizen.create({
            firstnames,
            lastnames,
            emails,
            photos,
            telephones,
            birthdate,
            birthplace,
            address,
            mother,
            father 
            // firstnames: args.identity.firstnames,
            // lastnames: args.identity.lastnames,
            // emails: args.identity.emails,
            // photos: args.identity.photos,
            // telephones: args.identity.telephones,
            // birthdate: args.identity.birthdate,
            // birthplace: args.identity.birthplace,
            // address: args.identity.address
        });
        console.log(citizen);
        return citizen;
    },
    createLoremIpsum: () => loremIpsum({
        count: 3,                // Number of "words", "sentences", or "paragraphs"
        format: "plain",         // "plain" or "html"
        paragraphLowerBound: 3,  // Min. number of sentences per paragraph.
        paragraphUpperBound: 7,  // Max. number of sentences per paragarph.
        random: Math.random,     // A PRNG function
        sentenceLowerBound: 5,   // Min. number of words per sentence.
        sentenceUpperBound: 15,  // Max. number of words per sentence.
        suffix: "\n",            // Line ending, defaults to "\n" or "\r\n" (win32)
        units: "sentences",      // paragraph(s), "sentence(s)", or "word(s)"
        // words: ["ad", ...]       // Array of words to draw from
    })

}