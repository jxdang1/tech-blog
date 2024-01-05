const { User } = require('../models');

const userData = [
    {
      username: "yumiko",
      email: "yumiko@hotmail.com",
      password: "p4ssword12345"
    },
    {
      username: "leonardo",
      email: "leonardo@gmail.com",
      password: "pass12345"
    },
    {
      username: "kenjie",
      email: "kenjiesama2020@aol.com",
      password: "word12345"
    }
  ]
  
const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;