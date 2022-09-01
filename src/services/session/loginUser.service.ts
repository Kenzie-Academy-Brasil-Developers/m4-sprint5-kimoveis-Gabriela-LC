import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { IUserLogin } from "../../interfaces/users";

import { compare } from "bcryptjs"
import jwt from "jsonwebtoken"


async function loginUserService({ email, password }: IUserLogin){

    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({email})

    if(!user){
        throw new AppError(403,"Invalid email or password")
    }

    if(user.isActive === false){
        throw new AppError(400, "User is not active")
    }

    const passwordMatch = await compare(password, user.password)

    if(!passwordMatch){
        throw new AppError(403,"Invalid email or password")
    }

    const token = jwt.sign({ 
        email: user.email,
    }, "SECRET_KEY", {
        expiresIn: "24h",
        subject: user.id
    })

    return token

}

export default loginUserService