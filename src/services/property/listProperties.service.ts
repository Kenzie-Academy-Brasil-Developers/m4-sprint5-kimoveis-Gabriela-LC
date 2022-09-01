import AppDataSource from "../../data-source"
import { Property } from "../../entities/property.entity"


async function listPropertiesService(){

    const propertyRepository = AppDataSource.getRepository(Property)

    const properties = await propertyRepository.find()

    return properties

}

export default listPropertiesService