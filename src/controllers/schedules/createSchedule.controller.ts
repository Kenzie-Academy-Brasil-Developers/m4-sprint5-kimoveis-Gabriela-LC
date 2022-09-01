import { Request, Response } from "express";
import createScheduleService from "../../services/schedules/createSchedule.service";

async function createScheduleController(req: Request, res: Response){

    const { date, hour, propertyId } = req.body
    const { userId } = req

    const schedule = await createScheduleService({date, hour, propertyId, userId})

    return res.status(201).json({
        message: "Schedule created",
        schedule
    })

}

export default createScheduleController