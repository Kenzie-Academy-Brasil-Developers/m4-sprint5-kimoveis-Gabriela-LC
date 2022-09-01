import { Router } from "express";
import createPropertyController from "../controllers/property/cresteProperty.cotroller";
import listPropertiesController from "../controllers/property/listProperties.controller";
import isAdmMiddleware from "../middlewares/isAdm.middleware";
import isAuthMiddleware from "../middlewares/isAuth.middleware";

const propertyRoutes = Router()

propertyRoutes.post("", isAuthMiddleware, isAdmMiddleware, createPropertyController)
propertyRoutes.get("", listPropertiesController)

export default propertyRoutes