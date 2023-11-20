require('../data/connection')
const express = require('express');

const router = express.Router();
const generateToken = require('../utils/token');

const tokenVerification = require('../middleware/auth');

const bcrypt = require("bcrypt");
const bank = require('../model/bank')

router.get("/", tokenVerification, (req, res) => {

    bank.find({ user_id: req.content.id }, (error, data) => {
        if (error) return res.status(500).send({ output: "Error" })
        if (!data) return res.status(400).send({ output: "data not found" })
        return res.status(201).send({ output: data });
    })

});

router.put("/atualizar/:id", tokenVerification, (req, res) => {

    bank.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, data) => {
        if (error) return res.status(500).send({output: "Error"})
        if (!data) return res.status(400).send({output: "update fail"})

        return res.status(201).send({output: "update success"});
    })

});

router.post("/inclusao", tokenVerification, (req, res) => {

    const _bank = new bank(req.body);
    _bank.user_id = req.content.id

    _bank.save().then((result) => {
        res.status(201).send({ output: "Novo banco cadastrado", payload: result })
    }).catch((error) => {
        res.status(204).send({ output: "Erro ao tentar cadastrar informações bancárias", payload: error })
    })

});

module.exports = router;