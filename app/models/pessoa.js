const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pessoaSchema = new Schema(
  {
    documento: String,
    nome: String,
    telefone: String,
    email: String,
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
