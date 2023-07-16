import express from 'express';

// utility
import { updateTodoLists } from '../utility/updateTodoLists.js';
import { getTodoLists } from '../utility/getTodoLists.js';


const baseRouter = express.Router();

// get all todos.
// method: GET
baseRouter.get('/todos/:id', async (req, res) => {
  const userId = req.params.id;

  try {
    const todos = await getTodoLists(userId);

    if(typeof todos !== "object") throw Error;

    res.status(200).json(todos.todoLists);

  } catch (error) {
    res.status(500).json({ message: `Error fetching todos\n${error}` });
  }
});

// update a single todo
// method: PUT
baseRouter.put('/todos', async (req, res) => {
  const updatedFields = req.body.updatedFields;
  const userId = req.body.userId;

  console.clear();

  console.log("updated fields:");
  console.log(updatedFields);

  await updateTodoLists(userId, updatedFields);
  res.status(200).json({ "message": "todolists updated successfully." });
});




export { baseRouter };