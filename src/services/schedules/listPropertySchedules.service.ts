import AppDataSource from "../../data-source"
import { Property } from "../../entities/property.entity"
import { Schedule } from "../../entities/schedules_users_properties.entity"
import { AppError } from "../../errors/appError"

async function listPropertySchedulesService(id: string){

    const propertyRepository = AppDataSource.getRepository(Property)

    const property = await propertyRepository.findOne(
        {where:{
            id
        },
        relations:{
            schedules: true,
            category: true
        }})

    if(!property){
        throw new AppError(404,"Property does not exists")
    }

    return property
}

export default listPropertySchedulesService