import express, { Request, Response } from "express";
import { router } from "./routes/index.routes";
//criando o servidor
const server = express();
server.use(router);
server.listen(3000, () => {
  console.log("servidor funcionou");
});

export { server };
