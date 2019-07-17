const mongoose = require("mongoose");
const Schema = mongose.Schema;

const produtoSchema = newSchema(
  {
    descricao: String,
    valor: Number,
    referencia: String,
    cor: [
      {
        type: Schema.Types.ObjectId,
        ref: "cor"
      }
    ]
  },
  { timestamps: true }
);

const produto = mongoose.model("produtos", produtoSchema);

module.exports = produto;
