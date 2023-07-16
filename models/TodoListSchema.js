import mongoose from 'mongoose';

// schema
import { todoSchema } from './Todo.js';


const todoListSchema = new mongoose.Schema({
  title: {type: String, required: true},
  authorId: {type: String, required: true},
  todo_list_id: {type: String, required: true},
  todo_items: [todoSchema]
});

export default mongoose.model('TodoListSchema', todoListSchema);

export { todoListSchema };
