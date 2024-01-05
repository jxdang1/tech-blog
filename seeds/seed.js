const seedUsers = require('./userData');
const seedposts = require('./posts');
const seedComments = require('./commentData');

const sequelize = require('../config/connection');

const seedAll = async() => {
    await sequelize.sync({ force: true });
    await seedUsers();
    await seedposts();
    await seedComments();
    process.exit(0);
};

seedAll();