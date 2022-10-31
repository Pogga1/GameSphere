const sequelize = require("../config/connection");
const { User, Post, Comment } = require("../models");

const seedUsers = require("./user-seeds.json");
const seedPosts = require("./post-seeds.json");
const seedComments = require("./comment-seeds.json");
// const seedPosts = require('./post-seeds');
// const seedComments = require('./comment-seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(seedUsers, {
    individualHooks: true,
    returning: true,
  });
  const posts = await Post.bulkCreate(seedPosts, {
    individualHooks: true,
    returning: true,
  });
  const comments = await Comment.bulkCreate(seedComments, {
    individualHooks: true,
    returning: true,
  });

  // await seedUsers();

  // await seedPosts();

  // await seedComments();

  process.exit(0);
};

seedAll();
