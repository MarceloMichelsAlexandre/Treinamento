const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pedidoSchema = new Schema(
  {
    dataEntrada: Date,
    numero: Number,
    valorTotal: Number,
    vendedor: {
      type: Schema.Types.ObjectId,
      ref: "pessoa"
    },
    cliente: {
      type: Schema.Types.ObjectId,
      ref: "pessoa"
    },
    Itens: [
      {
        quantidade: Number,
        produto: {
          type: Schema.Types.ObjectId,
          ref: "produto"
        }
      }
    ]
  },
  { timestamps: true }
);

const pedido = mongoose.model("pedidos", pedidoSchema);

module.exports = pedido;
