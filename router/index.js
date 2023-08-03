import { Router } from "express"
import userRouter from "./users.js"
import moviesRouter from "./movies.routes.js"

const indexRouter = Router()

//configurar las rutas de cada recurso
indexRouter.use("/users", userRouter)

indexRouter.use("/movies", moviesRouter)

export default indexRouter