import { Request, Response } from "express";
import listCategoriesService from "../../services/category/listCategories.service";

async function listCategoriesController(req: Request, res: Response){

    const categories = await listCategoriesService()

    return res.json(categories)
}

export default listCategoriesController