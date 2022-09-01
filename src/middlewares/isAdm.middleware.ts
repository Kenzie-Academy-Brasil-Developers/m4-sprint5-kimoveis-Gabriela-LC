import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors/appError";


async function isAdmMiddleware(req: Request, res: Response, next: NextFunction){

    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({email: req.email})    

    if(!user){
        throw new AppError(404, "User do not exists")
    }

    if(user.isAdm === false){
        throw new AppError(403, "You don't have permition")
    }

    next()
}

export default isAdmMiddleware