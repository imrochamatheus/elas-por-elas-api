import { Request, Response, Router } from "express";

const profissionaisRouter = Router()


profissionaisRouter.get('', (req:Request, res:Response) => {
    res.json({
        name: 'lucas',
        idade: 30
    })  
})

export {profissionaisRouter}