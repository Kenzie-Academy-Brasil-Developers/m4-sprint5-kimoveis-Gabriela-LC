import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { IUser, IUserRequest } from "../../interfaces/users";

import { hash } from "bcryptjs"

async function createUserService(userData: IUserRequest): Promise<IUser>{

    const userRepository = AppDataSource.getRepository(User)

    const emailAlreadyExists = await userRepository.findOneBy({email: userData.email})

    if(emailAlreadyExists){
        throw new AppError(400, "Email already in use")
    }

    const hashedPassword = await hash(userData.password,10)

    const newUser = await userRepository.save({
        ...userData,
        password: hashedPassword
    })

    const { password, ...user } = newUser

    return user

}

export default createUserService