import { Router } from "express"
import cartsRouter from '../models/Cart.js'
import userRouter from "./users.js"
import moviesRouter from "./movies.routes.js"

const indexRouter = Router()

//configurar las rutas de cada recurso
indexRouter.use("/cart", cartsRouter)
indexRouter.use("/users", userRouter)

indexRouter.use("/movies", moviesRouter)

export default indexRouter