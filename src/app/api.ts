// import necessary modules
import axios from 'axios';
import { ITask } from "./interface/tasks";

// define the API functions
export const getAllTodos = async (): Promise<ITask[]> => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/tasks`);
  const todos = await res.data;

  return todos.data;
}

export const addTodo = async (todo: ITask): Promise<ITask> => {
  const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/tasks`, todo);
  const newTodo = await res.data;

  return newTodo.data;
}

export const editTodo = async (todo: ITask): Promise<ITask> => {
  const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/tasks/${todo.id}`, todo);
  const updatedTodo = await res.data;

  return updatedTodo.data;
}

export const deleteTodo = async (id: string): Promise<void> => {
  await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/tasks/${id}`);
}