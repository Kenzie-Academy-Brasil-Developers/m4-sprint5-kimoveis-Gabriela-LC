import AppDataSource from "../../data-source"
import { Category } from "../../entities/category.entity"
import { AppError } from "../../errors/appError"


async function listCategPropertiesService(id: string){

    const categoryRepository = AppDataSource.getRepository(Category)

    const category = await categoryRepository.findOneBy({id})

    if(!category){
        throw new AppError(404, "Category does not exists")
    }

    return category
}

export default listCategPropertiesService