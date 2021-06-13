const mongoose = require("mongoose");
const { customAlphabet:Alphabet } = require("nanoid");
const faker = require("faker");

const SYMBOLES = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const nanoid = Alphabet(SYMBOLES, 8);
faker.locale = "fr";

const citizenSchema = new mongoose.Schema(
    {
        cid: {
            type: String,
            required: true,
            default: () => "bj-"+nanoid()
        },
        firstnames: [
            {
                type: [String],
                required: true,
                // default: () => faker.name.firstName()
            }
        ],
        lastnames: [
            {
                type: [String],
                required: true,
            // default: () => faker.name.lastName()
            }
        ],
        emails: [
            {
                type: [String],
                required: true,
                index: { unique: true },
            }
        ], 
        telephones: [
            {
                type: [String],
                required: false,
                index: { unique: true },
                // default: () => faker.phone.phoneNumber()
            }
        ],
        birthdate: {
            type: Date,
            required: true,
            // default: () => faker.date.past()
        },
        birthplace: {
            type: String,
            required: true,
            // default: () => faker.address.city()
        },
        photos: [
            {
                type: String,
                required: true,
                // default: () => faker.image.avatar()
        }
        ],
        address: {
            type: String,
            required: true,
            // default: () => faker.address.streetAddress()
        },
        father: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Citizen",
            // required: true,
        },
        mother: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Citizen",
            // required: true,
        },
    },
    { timestamps: true }
);


const Citizen = mongoose.model("Citizen", citizenSchema);
module.exports = Citizen;
