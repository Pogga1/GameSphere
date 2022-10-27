const { Post } = require('../models');

const postData = [{
        title: 'Scorn Is Really Good',
        content: 'Scorn is a game that just released and its very good',
        user_id: 1
    },
    {
        title: 'Call of Duty Just Came Out',
        content: 'The new installation is out of this world good.',
        user_id: 1
    },
    {
        title: 'Silent Hill',
        content: 'Silent Hill remakes are coming out and i am super hyped',
        user_id: 2
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;