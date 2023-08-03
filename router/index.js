import { Router } from "express"
import userRouter from "./users.js"

const indexRouter = Router()

//configurar las rutas de cada recurso
indexRouter.use("/users", userRouter)

export default indexRouter