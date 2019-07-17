const mongoose = require("mongoose");
const Schema = mongose.Schema;

const pedidoSchema = newSchema(
  {
    numero: Number,
    vendedor: [
      {
        type: Schema.Types.ObjectId,
        ref: "pessoa"
      }
    ],
    cliente: [
      {
        type: Schema.Types.ObjectId,
        ref: "pessoa"
      }
    ],
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
