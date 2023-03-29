const express = require("express");
const router = express.Router();
const Membros = require('./Membro');

router.get("/membros/edit", (req,res) => {
    res.render("membros/edit");
})
module.exports = router;
