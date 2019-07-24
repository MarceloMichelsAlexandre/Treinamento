const express = require("express");
const routes = express.Router();

const ClienteController = require("../app/controllers/cliente-controller");
const CorController = require("../app/controllers/cor-controller");
const PedidoController = require("../app/controllers/pedido-controller");
const ItemController = require("../app/controllers/item-controller");
const OrdemServicoController = require("../app/controllers/ordemServico-controller");
const UsuarioController = require("../app/controllers/usuario-controller");
const LoginController = require("../app/controllers/login-controller");

routes.get("/clientes", ClienteController.findAll);
routes.get("/clientes/:id", ClienteController.findById);
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
routes.post("/pedidos", PedidoController.store);
routes.put("/pedidos/:id", PedidoController.update);
routes.delete("/pedidos/:id", PedidoController.delete);

routes.get("/ordensServicos", OrdemServicoController.findAll);
routes.get("/ordensServicos/:id", OrdemServicoController.findById);
routes.post("/ordensServicos", OrdemServicoController.store);
routes.put("/ordensServicos/:id", OrdemServicoController.update);
routes.delete("/ordensServicos/:id", OrdemServicoController.delete);

routes.get("/itens", ItemController.findAll);
routes.get("/itens/:id", ItemController.findById);
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
