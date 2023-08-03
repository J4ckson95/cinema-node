import { model, Schema } from 'mongoose'

let collection = 'movie'

let schema = new Schema({
    title: { type: String, required: true },
    capacity: { type: Types.ObjectId, default: 10000 },
    price: { type: Number, default: 1000 }
}, {
    timestamp: true
}
)

let Movie = model(collection, schema)

export default Movie