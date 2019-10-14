const restify = require("restify");

const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "veia"
  }
});

const server = restify.createServer({
  name: "myapp",
  version: "1.0.0"
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.listen(8080, function() {
  console.log("%s listening ata %s", server.name, server.url);
});

server.post("/save", function(req, res, next) {
  knex("velha")
    .insert(req.body)
    .then(dados => {
      return res.send(dados);
    }, next);
});

server.get(
  "/*", // don't forget the `/*`
  restify.plugins.serveStaticFiles("./dist")
);
