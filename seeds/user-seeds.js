const { User } = require("../models");

const userData = [
  {
    username: "Andrew",
    password: "andrew123",
  },
  {
    username: "John",
    password: "john12345",
  },
  {
    username: "trev",
    password: "johnjohn",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
