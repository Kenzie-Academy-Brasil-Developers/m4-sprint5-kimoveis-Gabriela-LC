import AppDataSource from "../../data-source";
import { Address } from "../../entities/address.entity";
import { Category } from "../../entities/category.entity";
import { Property } from "../../entities/property.entity";
import { AppError } from "../../errors/appError";
import { IAddressRequest, IPropertyRequest } from "../../interfaces/properties";

async function createPropertyService({value, size, address, categoryId}:IPropertyRequest, {district, zipCode, city, state, number}: IAddressRequest){

    const propertyRepository = AppDataSource.getRepository(Property)
    const categoryRepository = AppDataSource.getRepository(Category)
    const addressRepository = AppDataSource.getRepository(Address)

    if(zipCode.length !== 8){
        throw new AppError(400, "Invalid zipcode")
    }

    if(state.length !== 2){
        throw new AppError(400, "Invalid state")
    }

    const addressAlreadyExists = await addressRepository.findOne({where:{district, zipCode, city, state, number}})

    if(addressAlreadyExists){
        throw new AppError(400, "Address already in use")
    }

    const category = await categoryRepository.findOneBy({id: categoryId})

    if(!category){
        throw new AppError(404, "Category does not exists")
    }

    const newAddress = addressRepository.create({
        district,
        zipCode,
        city,
        state,
        number
    })

    await addressRepository.save(newAddress)
    
    const newProperty = propertyRepository.create({
        value,
        size,
        address: newAddress,
        category
    })


    await propertyRepository.save(newProperty)
        

    return newProperty

}

export default createPropertyService