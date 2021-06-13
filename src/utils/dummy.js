const Faker = require("faker");
const gravatar = require("./gravatar");
Faker.locale = "fr";
const { Types } = require("mongoose");


/************************************************************
* Use the same father and mother for every citizen this
* help to avoid typing mother and father ObjectId in GQL 
* playground each time. motherMongoId and fatherMongoId 
* should exists. Be sure of that to avoid mutations errors
************************************************************/
const motherMongoId = "60c4f816273a31bba7b08069";
const fatherMongoId = "60c4f84d273a31bba7b0806a";
const emailDomainName = "example.com";
const genders = ["male", "female"];


module.exports = {
    getDummyCitizen: () => {
        const gender = Faker.random.arrayElement(genders);
        const firstnames = [Faker.name.firstName(gender), Faker.name.firstName(gender)];
        const lastnames = [Faker.name.lastName(gender)];
        const emails = [Faker.internet.email(firstnames, lastnames, emailDomainName).toLowerCase()];
        const photos = [gravatar(emails)];
        const telephones = [Faker.phone.phoneNumber("(+229) #########")];
        const birthdate = Faker.date.past(maxYears=100);
        const birthplace = Faker.address.cityName();
        const address = Faker.address.streetAddress();
        const father = Types.ObjectId(fatherMongoId);
        const mother = Types.ObjectId(motherMongoId);
    
        return {
            firstnames, lastnames, emails, photos, telephones, birthdate, birthplace, address, father, mother
        };

        // {
        //     firstnames: [ 'Anémone', 'Andéol' ],
        //     lastnames: [ 'Bonnet' ],
        //     emails: [ 'AnmoneAndol0@example.com' ],
        //     photos: [
        //       'https://www.gravatar.com/avatar/93b885adfe0da089cdf634904fd59f71.jpg?d=identicon'
        //     ],
        //     telephones: [ '(+229) 330086551' ],
        //     birthdate: 1934-05-10T13:23:30.792Z,
        //     birthplace: 'Roubaix',
        //     address: "198 Théodose de l'Odéon"
        //   }

    }
}