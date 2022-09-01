import { Request, Response } from "express"
import deleteUserService from "../../services/user/deleteUser.service"

async function deleteUserController(req: Request, res: Response){

    const { id } = req.params    

    const result = await deleteUserService(id)    

    return res.status(204).send(result)
}

export default deleteUserController