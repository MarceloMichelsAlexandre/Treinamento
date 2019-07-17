const mongoose = require("mongoose");
const Schema = mongose.Schema;

const pessoaSchema = newSchema(
  {
    documento: String,
    nome: String,
    telefone: String,
    email: String,
    senha: String,
    produtos: [
      {
        type: Schema.Types.ObjectId,
        ref: "produto"
      }
    ]
  },
  { timestamps: true }
);

const pessoa = mongoose.model("pessoas", pessoaSchema);

module.exports = pessoa;
