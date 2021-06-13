module.exports = {
    ipsum: () => "Lorem ipsum dolores",

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
    }
}