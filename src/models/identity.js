const mongoose = require("mongoose");
const { customAlphabet:alphabet } = require("nanoid");

const SYMBOLES = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

const nanoid = alphabet(SYMBOLES, 8);

// Identity is the reprensation of a person 

const citizenSchema = new mongoose.Schema(
    {
        cid: {
            type: String,
            required: true,
            default: () => nanoid()
        },
        firstname: {
            type: [String],
            required: true
        },
        surname: {
            type: String,
            required: true,
        },
        email: {
            type: [String],
            required: true,
            index: { unique: true }
        },
        telephone: {
            type: [String],
            required: false,
            index: { unique: true }
        },
        birthdate: {
            type: Date,
            required: true,
        },
        birthplace: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        father: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Citizen"
        },
        mother: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Citizen"
        },
        children: {
            type: [mongoose.Schema.Types.ObjectId]
        }
    },
    { timestamps: true }
);


const Citizen = mongoose.model("Citizen", citizenSchema);
module.exports = Citizen;
