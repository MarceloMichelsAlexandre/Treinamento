const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const produtoSchema = new Schema(
  {
    descricao: String,
    valor: Number,
    referencia: String,
    cores: [
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
