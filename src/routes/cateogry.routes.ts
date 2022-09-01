import { Router } from "express";
import createCategotyController from "../controllers/category/createCategory.controller";
import listCategoriesController from "../controllers/category/listCategories.controller";
import listCategPropertiesController from "../controllers/category/listCategProperties.controller";
import isAdmMiddleware from "../middlewares/isAdm.middleware";
import isAuthMiddleware from "../middlewares/isAuth.middleware";


const categoryRoutes = Router()

categoryRoutes.post("", isAuthMiddleware, isAdmMiddleware, createCategotyController)
categoryRoutes.get("", listCategoriesController)
categoryRoutes.get("/:id/properties", listCategPropertiesController)

export default categoryRoutes