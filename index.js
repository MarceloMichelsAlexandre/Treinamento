require("dotenv").config();
const http = require("http");
const database = require("./config/database");
const app = require("./config/server");

database(process.env.MONGODB_URI);

http.createServer(app).listen(3000, function() {
  console.log("Servidor iniciado na porta 3000");
  console.log("Servidor iniciado na porta 3000");
});
