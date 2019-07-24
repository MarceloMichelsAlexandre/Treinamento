const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema(
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

const item = mongoose.model("itens", itemSchema);

module.exports = item;
