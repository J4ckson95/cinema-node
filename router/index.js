import { Router } from "express"
import moviesRouter from "./movies.routes.js"

const indexRouter = Router()

//configurar las rutas de cada recurso

indexRouter.use("/movies", moviesRouter)

export default indexRouter