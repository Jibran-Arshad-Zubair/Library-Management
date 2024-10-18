import mongoose from 'mongoose';
import { connectDB  } from '../connections/db.js'
await connectDB();



const Schema = mongoose.Schema
// Create a new schema for latest deals
const User = Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  contactNumber: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  uploadDate: {
    type: Date,
    default: Date.now,
  },
})

const userSchema =async()=>{
  let users=null;
// Create a model from the schema
if(!users){
  users = mongoose.model(
    'users',
    Schema
  )
}

return users;
}

const dbSchema = {userSchema};
export default dbSchema;
