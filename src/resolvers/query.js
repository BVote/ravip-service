const { loremIpsum } = require("lorem-ipsum");

module.exports = {
    getLoremIpsum: () => loremIpsum({
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
    }),

    getCitizenById: async (parent, args, { models }) => {
        return await models.Citizen.findById(args.id);
    },

    getCitizenByCid: async (parents, args, { models }) => {
        return await models.Citizen.findOne({cid: args.cid});
    },

    getCitizenByName: async (parents, args, { models }) => {
        return await models.Citizen.find({
            $or: [
                {
                    firstnames: {$elemMatch: /args.name/}
                },
                {
                    lastnames: {$elemMatch: /args.name/}
                }
            ]
        });
    },

    getCitizenByEmail: async (parents, args, { models }) => {
        return await models.Citizen.find({});
    }, 

    getCitizens: async (parents, args, { models }) => {
        // implement cursor based pagination later
        return await models.Citizen.find({});
    },

    getRandomCitizen: async (parents, args, { models }) => {
        return await models.Citizen.aggregate([
            {$sample: {size: 1}}
        ]);
    }
}