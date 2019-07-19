const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const corSchema = new Schema(
  {
    descricao: String
  },
  { timestamps: true }
);

const cor = mongoose.model("cores", corSchema);

module.exports = cor;
