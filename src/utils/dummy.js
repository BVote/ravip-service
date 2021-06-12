const Faker = require("faker");
const gravatar = require("./gravatar");
Faker.locale = "fr";


module.exports = {
    getDummyCitizen: () => {

        const firstnames = [Faker.name.firstName(), Faker.name.firstName()];
        const lastnames = [Faker.name.lastName()];
        const emails = [Faker.internet.email(firstnames, lastnames, "example.com")];
        const photos = [gravatar(emails)];
        const telephones = [Faker.phone.phoneNumber("(+229) #########")];
        const birthdate = Faker.date.past(maxYears=100);
        const birthplace = Faker.address.cityName();
        const address = Faker.address.streetAddress();
    
        return {
            firstnames, lastnames, emails, photos, telephones, birthdate, birthplace, address
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