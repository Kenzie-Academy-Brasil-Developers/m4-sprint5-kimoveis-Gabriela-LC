import AppDataSource from "../../data-source"
import { Category } from "../../entities/category.entity"

async function listCategoriesService(){

    const categoryRepository = AppDataSource.getRepository(Category)

    const categories = await categoryRepository.find()

    return categories
}

export default listCategoriesService