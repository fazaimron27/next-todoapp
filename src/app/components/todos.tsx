// import necessary modules
import { ITask } from "../interface/tasks";
import React from "react";
import Task from "./task";

// define the TodosProps interface
interface TodosProps {
  tasks: ITask[];
}

// export the Todos component
const Todos: React.FC<TodosProps> = ({ tasks }) => {
  return (
    <div className='overflow-x-auto'>
      <table className='table w-full'>
        {/* head */}
        <thead>
          <tr>
            <th>Tasks</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Todos;