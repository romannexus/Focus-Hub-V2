import { useEffect, useState } from "react";
import ToDoTask from "./ToDoTask";
import { useToDo } from "../Contexts/ToDoContext";

function ToDoList() {
  const { tasks, fetchTasks, addTask } = useToDo();
  const [taskTitle, setTaskTitle] = useState([]);
  useEffect(() => {
    async function fetchdata() {
      try {
        await fetchTasks();
        // setTasks(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchdata();
  }, []);

  return (
    <section className="py-8 px-5 md:px-8 bg-white rounded-[20px] shadow-[0_0_15px_rgba(0,0,0,0.04)] border border-gray-100 flex-1 flex flex-col h-full">
      <h1 className="text-xl mt-0 mb-6 font-bold font-condensed text-gray-800">
        Today's Plan
      </h1>

      <form
        className="flex flex-col sm:flex-row gap-3 mb-8 w-full"
        onSubmit={(e) => {
          e.preventDefault();
          addTask(taskTitle);
          setTaskTitle("");
        }}
      >
        <input
          type="text"
          placeholder="What are you working on?"
          className="flex-1 border border-gray-300 rounded-[10px] px-4 py-3 text-[16px] text-gray-800 placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all bg-gray-50 focus:bg-white m-0"
          onChange={(e) => setTaskTitle(e.target.value)}
          value={taskTitle}
        />
        <input
          type="submit"
          value="Add"
          className="text-white bg-blue-600 border-none font-bold hover:bg-blue-800 cursor-pointer px-6 py-3 rounded-[10px] text-[16px] transition-colors m-0 sm:w-auto w-full"
        />
      </form>

      <ul className="flex flex-col gap-3 p-0 m-0 list-none overflow-x-hidden">
        {tasks.map((taskData) => (
          <ToDoTask key={taskData.id} {...taskData} />
        ))}
      </ul>
    </section>
  );
}

export default ToDoList;
