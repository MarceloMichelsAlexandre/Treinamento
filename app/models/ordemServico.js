const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ordemServicoSchema = new Schema(
  {
    dataEntrada: Date,
    datSaida: Date,
    valorTotal: Number,
    cliente: {
      type: Schema.Types.ObjectId,
      ref: "cliente"
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

const ordemServico = mongoose.model("ordensServicos", ordemServicoSchema);

module.exports = ordemServico;
