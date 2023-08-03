import { Router } from "express"
import cartsRouter from '../models/Cart.js'

const indexRouter = Router()

//configurar las rutas de cada recurso
indexRouter.use("/cart", cartsRouter)

export default indexRouter