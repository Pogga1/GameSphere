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
  {
    username: "trev",
    password: "johnjohn",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
