// const faker = require("faker");
// faker.locale = "fr";

const fs  = require("fs");

const { getDummyCitizen } = require("./utils/dummy");

const t = getDummyCitizen();
console.log(t);