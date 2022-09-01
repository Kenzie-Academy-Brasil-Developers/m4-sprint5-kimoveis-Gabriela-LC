import { Request, Response } from "express";
import listPropertiesService from "../../services/property/listProperties.service";

async function listPropertiesController(req: Request, res: Response){

    const properties = await listPropertiesService()

    return res.json(properties)

}

export default listPropertiesController