import { Request, Response, Router } from "express";
const clientesRouter = Router()

clientesRouter.get('', (req:Request, res:Response) => {
    res.json({
        name: 'matheus',
        idade: 27
    })  
})

export {clientesRouter}