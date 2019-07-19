const express = require("express");
const routes = express.Router();

const PessoaController = require("../app/controllers/pessoa-controller");
const CorController = require("../app/controllers/cor-controller");
const PedidoController = require("../app/controllers/pedido-controller");
const ProdutoController = require("../app/controllers/produto-controller");
const OrdemServicoController = require("../app/controllers/ordemServico-controller");
const UsuarioController = require("../app/controllers/usuario-controller");
const LoginController = require("../app/controllers/login-controller");

routes.get("/pessoas", PessoaController.findAll);
routes.get("/pessoas/:id", PessoaController.findById);
routes.post("/pessoas", PessoaController.store);
routes.put("/pessoas/:id", PessoaController.update);
routes.delete("/pessoas/:id", PessoaController.delete);

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

routes.get("/produtos", ProdutoController.findAll);
routes.get("/produtos/:id", ProdutoController.findById);
routes.post("/produtos", ProdutoController.store);
routes.put("/produtos/:id", ProdutoController.update);
routes.delete("/produtos/:id", ProdutoController.delete);

routes.get("/usuarios", UsuarioController.findAll);
routes.post("/usuarios", UsuarioController.store);
routes.post("/usuarios/validar", UsuarioController.usuarioValido);
routes.put("/usuarios/:id", UsuarioController.update);
routes.delete("/usuarios/:id", UsuarioController.delete);

routes.post("/login", LoginController.fazerLogin);

module.exports = routes;
