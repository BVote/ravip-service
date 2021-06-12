const mongoose = require("mongoose");
const { customAlphabet:Alphabet } = require("nanoid");
const faker = require("faker");

const SYMBOLES = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const nanoid = Alphabet(SYMBOLES, 8);
faker.locale = "fr";

/*******************************************************
 * We will use the same father and mother every where
 * to avoid typing mother and father in GQL playground
 * This aMotherMongoId, aFatherMongoId should exist in 
 * MongoDB database
 *******************************************************/
const aMotherMongoId = "60c4e315ee712b98d025b083";
const aFatherMongoId = "60c4e24c95dd9897f585d096";

const citizenSchema = new mongoose.Schema(
    {
        cid: {
            type: String,
            required: true,
            default: () => "bj-"+nanoid()
        },
        firstname: {
            type: [String],
            required: true,
            default: () => faker.name.firstName()
        },
        lastname: {
            type: [String],
            required: true,
            default: () => faker.name.lastName()
        },
        email: {
            type: [String],
            required: true,
            index: { unique: true },
            default: () => faker.internet.email()
        }, 
        telephone: {
            type: [String],
            required: false,
            index: { unique: true },
            default: () => faker.phone.phoneNumber()
        },
        birthdate: {
            type: Date,
            required: true,
            default: () => faker.date.past()
        },
        birthplace: {
            type: String,
            required: true,
            default: () => faker.address.city()
        },
        address: {
            type: String,
            required: true,
            default: () => faker.address.streetAddress()
        },
        photo: {
            type: String,
            required: true,
            default: () => faker.image.avatar()
        },
        father: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Citizen",
            required: true,
            default: mongoose.Types.ObjectId(aFatherMongoId)
        },
        mother: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Citizen",
            required: true,
            default: mongoose.Types.ObjectId(aMotherMongoId)
        },
        children: [
            { 
                type: mongoose.Schema.Types.ObjectId,
                ref: "Citizen"
            }
        ] 
    },
    { timestamps: true }
);


const Citizen = mongoose.model("Citizen", citizenSchema);
module.exports = Citizen;
