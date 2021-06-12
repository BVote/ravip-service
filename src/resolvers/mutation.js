const { address } = require("faker");
const Faker = require("faker");
const gravatar = require("../utils/gravatar");

faker.locale = "fr";

/***************************************************************************************
 * We fake all mutation parameters to avoid passing parameters to mutations each time
 * this means that the required symbole "!" has been removed for the moment at GQL side
 * but not at mongoose side.
 ***************************************************************************************/

module.exports = {
    createCitizen: async (parents, args, { models }) => {
        const $firstnames = [Faker.name.firstnames(), Faker.name.firstnames()];
        const $lastnames = [Faker.name.lastnames()];
        const $emails = [Faker.internet.emails($firstnames, $lastnames, "example.com")];
        const $photos = [gravatar($emails)];
        const $telephones = [Faker.phone.phoneNumber()];
        const $birthdate = Faker.date.past(maxYears=100);
        const $birthplace = Faker.address.cityName();
        const $address = Faker.address.streetAddress();

        return await models.Citizen.create({
            firstnames: $firstnames,
            lastnames: $lastnames,
            emails: $emails,
            photos: $photos,
            telephones: $telephones,
            birthdate: $birthdate,
            birthplace: $birthplace,
            address: $address 
            // firstnames: args.identity.firstnames,
            // lastnames: args.identity.lastnames,
            // emails: args.identity.emails,
            // photos: args.identity.photos,
            // telephones: args.identity.telephones,
            // birthdate: args.identity.birthdate,
            // birthplace: args.identity.birthplace,
            // address: args.identity.address
        });
    },
    createNothing: () => "Nothing is created"

}