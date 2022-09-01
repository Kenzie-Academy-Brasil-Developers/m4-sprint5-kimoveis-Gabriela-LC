import AppDataSource from "../../data-source";
import { Property } from "../../entities/property.entity";
import { Schedule } from "../../entities/schedules_users_properties.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { IScheduleRequest } from "../../interfaces/schedules";

async function createScheduleService({date, hour, propertyId, userId}: IScheduleRequest){

    const scheduleRepository = AppDataSource.getRepository(Schedule)
    const propertyRepository = AppDataSource.getRepository(Property)
    const userRepository = AppDataSource.getRepository(User)

    const property = await propertyRepository.findOneBy({id: propertyId})

    if(!property){
        throw new AppError(404, "Property does not exists")
    }

    const user = await userRepository.findOneBy({id: userId})

    if(!user){
        throw new AppError(404, "User does not exists")
    }

    // const scheduleAlreadyExists = await scheduleRepository.findOne({where:{date, hour, propertyId: property, userId: user}})

    if(date === null || hour === null){
        throw new AppError(400, "Date and hour needed")
    }
    
    if(new Date(date).getDay() === 6 || new Date(date).getDay() === 0){
        throw new AppError(400, "You can only schedule a visit during week days")
    }

    if(Number(hour.split(":")[0]) > 17 ||Number(hour.split(":")[0]) < 8){
        throw new AppError(400, "You can only schedule a visit during commercial hours")
    }

    const scheduleAlreadyExists = await scheduleRepository.createQueryBuilder("schedule")
    .innerJoinAndSelect("schedule.property", "property")
    .where("property.id = :propertyId", {propertyId})
    .andWhere("schedule.hour = :hour", {hour})
    .andWhere("schedule.date = :date", {date})
    .getOne()

    if(scheduleAlreadyExists){
        throw new AppError(400, "This schedule has already been set")
    }

    const schedule = scheduleRepository.create({
        date,
        hour,
        property,
        user
    })

    await scheduleRepository.save(schedule)

    // console.log(property);
    

    // property.schedules.push(schedule)
    // await propertyRepository.save(property)

    return schedule

}

export default createScheduleService