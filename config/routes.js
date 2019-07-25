const express = require("express");
const routes = express.Router();

const ClienteController = require("../app/controllers/cliente-controller");
const CorController = require("../app/controllers/cor-controller");
const PedidoController = require("../app/controllers/pedido-controller");
const ItemController = require("../app/controllers/item-controller");
const OSController = require("../app/controllers/os-controller");
const UsuarioController = require("../app/controllers/usuario-controller");
const LoginController = require("../app/controllers/login-controller");

routes.get("/clientes", ClienteController.findAll);
routes.get("/clientes/:id", ClienteController.findById);
routes.get("/clientes-pesquisa/", ClienteController.findByNome);
routes.post("/clientes", ClienteController.store);
routes.put("/clientes/:id", ClienteController.update);
routes.delete("/clientes/:id", ClienteController.delete);

routes.get("/cores", CorController.findAll);
routes.get("/cores/:id", CorController.findById);
routes.post("/cores", CorController.store);
routes.put("/cores/:id", CorController.update);
routes.delete("/cores/:id", CorController.delete);

routes.get("/pedidos", PedidoController.findAll);
routes.get("/pedidos/:id", PedidoController.findById);
routes.get("/pedido-pesquisa", PedidoController.findByCliente);
routes.get("/pedido-vendedor", PedidoController.findByVendedor);
routes.post("/pedidos", PedidoController.store);
routes.put("/pedidos/:id", PedidoController.update);
routes.delete("/pedidos/:id", PedidoController.delete);

routes.get("/os", OSController.findAll);
routes.get("/os/:id", OSController.findById);
routes.get("/os-pesquisa", OSController.findByCliente);
routes.post("/os", OSController.store);
routes.put("/os/:id", OSController.update);
routes.delete("/os/:id", OSController.delete);

routes.get("/itens", ItemController.findAll);
routes.get("/itens/:id", ItemController.findById);
routes.get("/itens-pesquisa", ItemController.findByDescricao);
routes.post("/itens", ItemController.store);
routes.put("/itens/:id", ItemController.update);
routes.delete("/itens/:id", ItemController.delete);

routes.get("/usuarios", UsuarioController.findAll);
routes.post("/usuarios", UsuarioController.store);
routes.post("/usuarios/validar", UsuarioController.usuarioValido);
routes.put("/usuarios/:id", UsuarioController.update);
routes.delete("/usuarios/:id", UsuarioController.delete);

routes.post("/login", LoginController.fazerLogin);

module.exports = routes;
