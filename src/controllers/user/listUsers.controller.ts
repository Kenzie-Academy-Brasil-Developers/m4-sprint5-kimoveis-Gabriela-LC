import { Request, Response } from "express";
import listUsersService from "../../services/user/listUsers.service";

async function listUsersController(req: Request, res: Response){

    const users = await listUsersService()

    return res.json(users)
}

export default listUsersController