const { Sequelize } = require("sequelize");

const connection = new Sequelize("blog_escola","root","",{
    host:"localhost",
    dialect:"mysql",
    timezone:"-03:00"
})

module.exports = connection;