import { model, Schema, Types } from "mongoose"

let collection = "carts"
let schema = new Schema({
    user_id: { type: Types.ObjectId, ref: "users", required: true },
    movie_id: { type: Types.ObjectId, ref: "movies", required: true },
    quantity: { type: Number, default: 1 }
})
let Cart = model(collection, schema)
export default Cart