module.exports = {
    ipsum: () => "Lorem ipsum dolores",
    citizen: async (parent, args, { models }) => {
        // look at the alternative implementation using cid
        return await models.Citizen.findById(args.id);
    },
    identity: async (parent, args, { models }) => {
        // TODO: selected fields according to Identidy fields
        return await models.Citizen.findById(args.id);
    },
    citizens: async (parents, args, { models }) => {
        return await models.Citizen.find({});
    }
}