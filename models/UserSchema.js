import mongoose from 'mongoose';

// schema
import { todoListSchema } from './TodoListSchema.js';


const userSchema = new mongoose.Schema({
  _id: {type: String, required: true}, // userId
  todoLists: [todoListSchema]

}, { collection: 'todos' });

export default mongoose.model('UserSchema', userSchema);

export { userSchema };