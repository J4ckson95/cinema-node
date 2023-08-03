import { Router } from "express";
import User from "../models/User.js"


const userRouter = Router()

userRouter.post("/", async (req, res, next) => {
    try {
        let one = await User.create(req.body)
        return res.status(201).json({ succes: true, message: "user added successfully" })
    } catch (error) { next(error) }
})
userRouter.get("/", async (req, res, next) => {
    try {
        let all = await User.find()
        return res.status(200).json({ succes: true, all })
    } catch (error) { next(error) }
})
userRouter.put("/:id", async (req, res, next) => {
    try {
        let one = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return res.status(200).json({ succes: true, message: "user update" })
    } catch (error) { next(error) }
})
userRouter.delete("/:id", async (req, res, next) => {
    try {
        let one = await User.findByIdAndDelete(req.params.id)
        return res.status(200).json({ succes: true, message: "user delate" })
    } catch (error) { next(error) }
})

export default userRouter