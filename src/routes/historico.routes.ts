import { Request, Response, Router } from "express";
const historicoRouter = Router()

historicoRouter.get('', (req:Request, res:Response) => {
    res.json({
        name: 'lara vieira',
        idade: 47
    })  
})

export {historicoRouter}