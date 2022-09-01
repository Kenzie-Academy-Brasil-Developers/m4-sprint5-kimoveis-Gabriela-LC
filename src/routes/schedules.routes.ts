import { Router } from "express";
import createScheduleController from "../controllers/schedules/createSchedule.controller";
import listPropertySchedulesController from "../controllers/schedules/listPropertySchedules.controller";
import isAdmMiddleware from "../middlewares/isAdm.middleware";
import isAuthMiddleware from "../middlewares/isAuth.middleware";


const schedulesRoutes = Router()

schedulesRoutes.post("", isAuthMiddleware, createScheduleController)
schedulesRoutes.get("/properties/:id", isAuthMiddleware, isAdmMiddleware, listPropertySchedulesController)

export default schedulesRoutes