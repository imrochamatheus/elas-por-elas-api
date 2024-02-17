import { Router } from "express"
import { clientesRouter } from "./clientes.routes"
import { profissionaisRouter } from "./profissionais.routes"
import { historicoRouter } from "./historico.routes"

const router = Router()//obj router que lida com as rotas
router.use('/profissionais', profissionaisRouter)
router.use('/clientes', clientesRouter) //toda vez que clientes for encontrado, clietesrouter que vai lidar com a requisiçao 
router.use('/historico', historicoRouter)

export {router}