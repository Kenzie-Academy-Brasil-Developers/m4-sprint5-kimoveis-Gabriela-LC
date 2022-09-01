import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/appError";
import jwt from "jsonwebtoken"


function isAuthMiddleware(req: Request, res: Response, next: NextFunction){


    let token = req.headers.authorization    

    if(!token){
        throw new AppError(401, "Token needed")
    }

    token = token.split(" ")[1]    

    jwt.verify(token, "SECRET_KEY" as string, (error: any, decoded: any) => {
        if(error){            
            throw new AppError(401, "Invalid token")
        }

        req.email = decoded.email
        req.userId = decoded.sub

        next()
    })

}

export default isAuthMiddleware