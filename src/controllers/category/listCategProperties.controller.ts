import { Request, Response } from "express";
import listCategPropertiesService from "../../services/category/listCategProperties.service";

async function listCategPropertiesController(req: Request, res: Response){

    const { id } = req.params

    const properties = await listCategPropertiesService(id)

    return res.json(properties)

}

export default listCategPropertiesController