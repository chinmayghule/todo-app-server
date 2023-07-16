import mongoose from "mongoose";

async function updateTodoLists(userId, newTodoListArray) {

  try {
    const result =
      await mongoose.connection.collection("todos")
        .findOneAndUpdate(
          { _id: userId },
          { $set: { todoLists: newTodoListArray } },
          {
            new: true,
            upsert: true
          }
        );

  } catch (error) {
    console.log(error);
  }
}


export { updateTodoLists };