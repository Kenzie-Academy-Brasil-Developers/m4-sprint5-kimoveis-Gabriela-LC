import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"

async function listUsersService(){

    const userRepository = AppDataSource.getRepository(User)

    const users = await userRepository.find()    

    return users
}

export default listUsersService