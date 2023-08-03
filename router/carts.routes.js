import { Router } from 'express'
import Cart from '../models/Cart.js'

const cartsRouter = Router()

cartsRouter.post('/', async (req, res, next) => {
    try {
        let one = await Cart.create(req.body)
        return res.status(201).json({
            succes: true,
            response: one,
            message: 'Product successfully added'
        })
    } catch (error) {
        next(error)
    }
})

cartsRouter.get('/', async (req, res, next) => {
    try {
        let all = await Cart.find()
        return res.status(200).json({
            succes: true,
            response: all
        })
    } catch (error) {
        next(error)
    }
})

cartsRouter.put('/:id', async (req, res, next) => {
    try {
        let modify = await Cart.findByIdAndUpdate(req.params.id, req.body, { new:true })
        return res.status(200).json({
            succes: true,
            response: modify,
            message: 'Product successfully modified'
        })
    } catch (error) {
        next(error)
    }
})

cartsRouter.delete('/id', async (req, res, next) => {
    try {
        let one = await Cart.findByIdAndDelete(req.params.id)
        return res.status(200).json({
            succes: true,
            response: one,
            message: 'Product successfully deleted'
        })
    } catch (error) {
        next(error)
    }
})

export default cartsRouter