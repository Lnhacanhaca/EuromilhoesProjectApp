const mongoose = require('mongoose')
const apostaSchema = new mongoose.Schema({
    numeros: {
        type: String,
        trim: true,
        required: true
    },
    estrelas: {
        type: String,
        trim: true,
        required: true
    },
    chave: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    data: {
        type: String,
        trim: true,
        required: true
    }
})

const Aposta = mongoose.model('Aposta', apostaSchema)
module.exports = Aposta