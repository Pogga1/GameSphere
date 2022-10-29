const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const seedUsers = require('./user-seeds.json');
// const seedPosts = require('./post-seeds');
// const seedComments = require('./comment-seeds');


const seedAll = async() => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(seedUsers, {
        individualHooks: true,
        returning: true,
    });

    // await seedUsers();

    // await seedPosts();
    
    // await seedComments();

    process.exit(0);
};

seedAll();