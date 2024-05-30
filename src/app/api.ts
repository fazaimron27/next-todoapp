// import necessary modules
import { ITask } from "./interface/tasks";

// define the API functions
export const getAllTodos = async (): Promise<ITask[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tasks`, { cache: 'no-store' });
  const todos = await res.json();

  return todos.data;
}

export const addTodo = async (todo: ITask): Promise<ITask> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
  })
  const newTodo = await res.json();

  return newTodo.data;
}

export const editTodo = async (todo: ITask): Promise<ITask> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tasks/${todo.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
  })
  const updatedTodo = await res.json();

  return updatedTodo.data;
}

export const deleteTodo = async (id: string): Promise<void> => {
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tasks/${id}`, {
    method: 'DELETE',
  });
}