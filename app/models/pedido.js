const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pedidoSchema = new Schema(
  {
    dataEntrada: Date,
    numero: Number,
    valorTotal: Number,
    vendedor: {
      type: Schema.Types.ObjectId,
      ref: "cliente"
    },
    cliente: {
      type: Schema.Types.ObjectId,
      ref: "cliente"
    },
    Itens: [
      {
        quantidade: Number,
        item: {
          type: Schema.Types.ObjectId,
          ref: "item"
        }
      }
    ]
  },
  { timestamps: true }
);

const pedido = mongoose.model("pedidos", pedidoSchema);

module.exports = pedido;
