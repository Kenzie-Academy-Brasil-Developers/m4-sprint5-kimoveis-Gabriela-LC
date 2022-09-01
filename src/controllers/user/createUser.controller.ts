import { Request, Response } from "express";
import createUserService from "../../services/user/createUser.service";
import { instanceToPlain } from "class-transformer"

async function createUserController(req: Request, res: Response) {

    const userData = req.body

    const newUser = await createUserService(userData)

    return res.status(201).json(instanceToPlain(newUser))
    
}

export default createUserController