const express =  require("express");
const app = express();
const bodyparser = require("body-parser");
const connection = require("./database/database")
const Port = 4000;
connection.authenticate().then(()=>{
   console.log("Conexão feita com sucesso")
}).catch(error =>{
   console.log(error)
});


const Membros = require("./Controller/Membro")
const MembroController = require("./Controller/MembroController")

app.use("/", MembroController);

app.set("view engine",'ejs');
app.use(express.static("public"));

app.get("/",(req,res) =>{
    Membros.findAll().then(membro =>{
        res.render("index",{membros:membro})
    })
})

//iniciando o servidor
app.listen(Port,()=>{
    console.log('O Servidor está online',Port+"port")
})