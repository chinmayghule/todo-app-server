import express from 'express';
import Todo from '../models/Todo.js';

const baseRouter = express.Router();

// get all todos.
// method: GET
baseRouter.get('/todos', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  
  } catch (error) {
    res.status(500).json({message: 'Error fetching todos'})
  }
})

// create a single todo.
// method: POST
baseRouter.post('/todos', async (req, res) => {
  
  const { title, completed, author } = req.body;
  const newTodo = new Todo({
    title: title,
    completed: completed,
    author: author,
  });
  
  try {
    const savedTodo = await newTodo.save();
    res.status(200).json(savedTodo);

  } catch (error) {
    res.status(500).json({message: 'Error creating todo'});
  }
});


// update a single todo
// method: PUT
baseRouter.put('/todos/:id', async (req, res) => {
  const updatedFields = req.body;
  const todo_Id = req.params.id;

  try {
    const result = await Todo.updateOne(
      { _id: todo_Id },
      { $set: updatedFields }
    );

    res.status(200).json(result);

  } catch (error) {
    res.status(500).json({message: 'Error updating todo'});
  }
});


// delete a single todo
// method: DELETE
baseRouter.delete('/todos/:id', async (req, res) => {
  const todo_Id = req.params.id;
  
  try {
    const deletedTodo = await Todo.deleteOne({
      _id: todo_Id,
    });

    if(deletedTodo.acknowledged) {
      console.log('Todo deleted successfully.');
    }

    res.status(200).json(deletedTodo);

  } catch (error) {
    res.status(500).json({message: 'Error deleting todo'});
  }
});


export { baseRouter };