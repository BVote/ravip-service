module.exports = {
    createCitizen: async (parents, args, { models }) => {
        return await models.Citizen.create({
            firstname: args.firstname,
            lastname: args.lastname,
            email: args.email,
            photo: args.photo,
            telephone: args.telephone,
            birthdate: args.birthdate,
            birthplace: args.birthplace,
            address: args.address
        });
    }
}