import "reflect-metadata"
import express from "express"
import "express-async-errors"
import userRoutes from "./routes/user.routes"
import { errorMiddleware } from "./middlewares/error.middleware"
import sessionRoutes from "./routes/session.routes"
import categoryRoutes from "./routes/cateogry.routes"
import propertyRoutes from "./routes/property.routes"
import schedulesRoutes from "./routes/schedules.routes"

const app = express()
app.use(express.json())

app.use("/users", userRoutes)
app.use("/login", sessionRoutes)
app.use("/categories", categoryRoutes)
app.use("/properties", propertyRoutes)
app.use("/schedules", schedulesRoutes)

app.use(errorMiddleware)


export default app