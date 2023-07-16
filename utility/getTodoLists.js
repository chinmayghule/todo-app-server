import { ObjectId } from "mongodb";
import mongoose from "mongoose";

async function getTodoLists(userId) {

  let result;
  
  try {
    result =
      await mongoose.connection.collection("todos")
        .findOne(
          { _id: userId }
        );

  } catch (error) {
    console.log("getTodoLists error:");
    console.log(error);
  }

  return result;
}


export { getTodoLists };