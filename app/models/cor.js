const mongoose = require("mongoose");
const Schema = mongose.Schema;

const corSchema = newSchema(
  {
    documento: String,
    nome: String,
    telefone: String,
    email: String,
    senha: String
  },
  { timestamps: true }
);

const cor = mongoose.model("cores", corSchema);

module.exports = cor;
