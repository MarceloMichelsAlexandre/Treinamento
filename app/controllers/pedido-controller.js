const pedido = require("../models/pedido");
const cliente = require("../models/cliente");
class PedidoController {
  async findAll(req, res) {
    const registros = await pedido.find();
    return res.status(200).json(registros);
  }

  async findById(req, res) {
    const registro = await pedido.findById(req.params.id);
    if (registro) {
      return res.status(200).json(registro);
    } else {
      return res.status(404).send("Not found");
    }
  }

  async findByCliente(req, res) {
    var regex = new RegExp("" + req.query.pesquisa + ".*$", "i");

    const registros = await pedidos.find({ "cliente.nome": regex });
    return res.json(registros);
  }

  async findByVendedor(req, res) {
    var regex = new RegExp("" + req.query.pesquisa + ".*$", "i");

    const registros = await pedidos.find({ "vendedor.nome": regex });
    return res.json(registros);
  }

  async store(req, res) {
    const registro = await pedido.create(req.body);
    return res.status(201).json(registro);
  }

  async update(req, res) {
    const registro = await pedido.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    if (registro) {
      return res.status(200).send(registro);
    } else {
      return res.status(404).send("Not found");
    }
  }

  async delete(req, res) {
    const registro = await pedido.findByIdAndDelete(req.params.id);
    if (registro) {
      return res.status(200).send("Deleted");
    } else {
      return res.status(404).send("Not found");
    }
  }
}

module.exports = new PedidoController();
