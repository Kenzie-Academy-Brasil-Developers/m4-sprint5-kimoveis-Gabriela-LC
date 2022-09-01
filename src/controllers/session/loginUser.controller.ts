import { Request, Response } from "express";
import loginUserService from "../../services/session/loginUser.service";

async function loginUserController(req: Request, res: Response){

    const { email, password } = req.body

    const token = await loginUserService({ email, password })

    return res.json({token})

}

export default loginUserController