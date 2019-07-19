const Usuario = require("../models/usuario");
const bcrypt = require("bcrypt-nodejs");

class UsuarioController {
  async findAll(req, res) {
    const registros = await Usuario.find();
    return res.status(200).json(registros);
  }

  async store(req, res) {
    const { senha } = req.body;
    req.body.senha = bcrypt.hashSync(senha);
    await Usuario.create(req.body);
    return res.status(201).json();
  }

  async usuarioValido(req, res) {
    const login = req.query.usuario;
    const registro = await usuario.find({ usuario: login });
    if (registro.length > 0) {
      return res.json(false);
    } else {
      return res.json(true);
    }
  }

  async update(req, res) {
    const { senha } = req.body;
    req.body.senha = bcrypt.hashSync(senha);
    await Usuario.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    return res.json();
  }

  async delete(req, res) {
    await Usuario.findByIdAndDelete(req.params.id);
    return res.send();
  }
}

module.exports = new UsuarioController();
