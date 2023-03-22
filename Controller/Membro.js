const Sequelize = require('sequelize');
const connection = require("../database/database")
//Criar uma tabela membros
const Membros = connection.define("membros",{
    nome:{
        type: Sequelize.STRING,
        allowNull:false //não permite dados nulos
    },email:{
        type: Sequelize.STRING,
        allowNull:false 
    }
})

//Membros.sync({force:true});
module.exports = Membros;