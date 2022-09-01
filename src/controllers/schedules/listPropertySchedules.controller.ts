import { Request, Response } from "express";
import listPropertySchedulesService from "../../services/schedules/listPropertySchedules.service";

async function listPropertySchedulesController(req: Request, res: Response){

    const { id } = req.params

    const property = await listPropertySchedulesService(id)

    return res.json(property)

}

export default listPropertySchedulesController