import AppDataSource from "../../data-source";
import { Category } from "../../entities/category.entity";
import { AppError } from "../../errors/appError";
import { ICategoryRequest } from "../../interfaces/categories";

async function createCategoryService({name}: ICategoryRequest){

    const categoryRepository = AppDataSource.getRepository(Category)

    const categoryAlreadyExists = await categoryRepository.findOneBy({name})

    if(categoryAlreadyExists){
        throw new AppError(400, "Category already exists")
    }

    const newCategory = await categoryRepository.save({
        name
    })

    return newCategory

}

export default createCategoryService