import {model, Schema} from 'mongoose';

let collection = "users"

const userSchema = new Schema({
    name: {type: String, required: true},
    age:{type: Number, required: true}

})

const User = model(collection, userSchema)

export default User;