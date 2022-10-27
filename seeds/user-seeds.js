
const { User } = require("../models");

const userData = [
  {
    username: "Andrew",
    password: "andrew",
  },
  {
    username: "John",
    password: "john",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;