import { Router } from "express"
import cartsRouter from '../models/Cart.js'
import moviesRouter from "./movies.routes.js"

const indexRouter = Router()

//configurar las rutas de cada recurso
indexRouter.use("/cart", cartsRouter)

indexRouter.use("/movies", moviesRouter)

export default indexRouter