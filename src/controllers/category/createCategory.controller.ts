import { Request, Response } from "express";
import createCategoryService from "../../services/category/createCategort.service";

async function createCategotyController(req: Request, res: Response){

    const { name } = req.body

    const category = await createCategoryService({name})

    return res.status(201).json(category)

}

export default createCategotyController