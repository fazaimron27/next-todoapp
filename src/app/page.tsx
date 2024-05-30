// import necessary modules
import { getAllTodos } from "./api";
import AddTask from "./components/addTask";
import Todos from "./components/todos";

// export the Home component
export default async function Home() {
  // fetch all tasks
  const tasks = await getAllTodos();

  return (
    <main className='max-w-4xl mx-auto mt-4'>
      <div className='text-center my-5 flex flex-col gap-4'>
        <h1 className='text-2xl font-bold'>Manage your tasks</h1>
        <AddTask />
      </div>
      <Todos tasks={tasks} />
    </main>
  );
}