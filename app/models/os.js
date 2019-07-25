const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const osSchema = new Schema(
  {
    dataEntrada: Date,
    datSaida: Date,
    valorTotal: Number,
    cliente: {
      id: {
        type: Schema.Types.ObjectId,
        ref: "cliente"
      },
      nome: String
    },
    itens: [
      {
        type: Schema.Types.ObjectId,
        ref: "item"
      }
    ]
  },
  { timestamps: true }
);

const os = mongoose.model("os", osSchema);

module.exports = os;
