import { useState } from "react";
import { useAuth } from "../Contexts/AuthContext";

const dateFormatter = new Intl.DateTimeFormat(
  new Intl.Locale(navigator.language),
  {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  },
);

function ToDoTask({ id, created_at, title, is_completed }) {
  const [isCompleted, setIsCompleted] = useState(is_completed);
  const { updateTaskCompleted } = useAuth();

  function updateTask() {
    try {
      setIsCompleted((prev) => !prev);
      updateTaskCompleted(id, !isCompleted);
    } catch (err) {
      console.error(err.mesage);
    }
  }
  return (
    <li
      data-id={id}
      className="group flex flex-col px-4 pt-4 pb-1.5 bg-white border border-gray-200 hover:border-blue-300 hover:shadow-sm rounded-[10px] transition-all duration-200"
    >
      <div className="flex items-center justify-between w-full">
        <label className="task-label flex items-center gap-3 cursor-pointer flex-1">
          <input
            type="checkbox"
            checked={isCompleted ? "checked" : ""}
            className="peer sr-only"
            onClick={() => {
              updateTask();
            }}
          />

          <div className="flex items-center justify-center w-5 h-5 border-2 border-gray-300 rounded-[5px] bg-white text-transparent peer-checked:bg-blue-600 peer-checked:border-blue-600 peer-checked:text-white transition-all shrink-0">
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>

          <span className="text-[16px] text-gray-800 group-hover:text-blue-900 peer-checked:text-gray-400 peer-checked:line-through transition-all select-none">
            {title}
          </span>
        </label>

        <button
          className="btn-delete text-gray-400 hover:text-red-500 bg-transparent border-none p-2 rounded-lg hover:bg-red-50 cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-200 m-0"
          aria-label="Delete"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            ></path>
          </svg>
        </button>
      </div>

      <div className="w-full pl-8">
        <span className="text-[10px] text-gray-400 font-medium tracking-wide">
          {dateFormatter.format(new Date(created_at))}
        </span>
      </div>
    </li>
  );
}

export default ToDoTask;
