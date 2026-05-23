import { createContext, useContext, useReducer } from "react";
import supabase from "../lib/supabaseClient";

function reducer(state, action) {
  console.log(state);
  switch (action.type) {
    case "tasksFetched": {
      return { ...state, tasks: action.payload };
    }
    case "taskAdded": {
      return { ...state, tasks: [...state.tasks, action.payload] };
    }
    case "taskUpdated": {
      const tasks = state.tasks.map((task) =>
        task.id === action.payload.id
          ? { ...task, is_completed: action.payload.value }
          : task,
      );
      return { ...state, tasks: tasks };
    }
    case "taskDeleted": {
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    }
    default: {
      throw new Error("Not correct type of action");
    }
  }
}

const ToDoContext = createContext();
const initialState = {
  tasks: [],
};

function ToDoProvider({ children }) {
  const [{ tasks }, dispatch] = useReducer(reducer, initialState);

  async function fetchTasks() {
    const { data, error } = await supabase
      .from("tasks")
      .select("*")
      .order("created_at");
    if (error) throw new error();
    dispatch({ type: "tasksFetched", payload: data });
  }
  async function addTask(title) {
    const { data, error } = await supabase
      .from("tasks")
      .insert({ title: title })
      .select()
      .single();
    if (error) throw error;
    console.log(data);
    dispatch({ type: "taskAdded", payload: data });
  }
  async function updateTaskCompleted(id, value) {
    const { error } = await supabase
      .from("tasks")
      .update({ is_completed: value })
      .eq("id", id);
    if (error) throw error;
    dispatch({ type: "taskUpdated", payload: { id, value } });
  }
  async function deleteTask(id) {
    const { error } = await supabase.from("tasks").delete().eq("id", id);
    if (error) throw error;
    dispatch({ type: "taskDeleted", payload: id });
  }
  return (
    <ToDoContext.Provider
      value={{ tasks, fetchTasks, addTask, updateTaskCompleted, deleteTask }}
    >
      {children}
    </ToDoContext.Provider>
  );
}

function useToDo() {
  const context = useContext(ToDoContext);
  if (context === undefined)
    throw new Error("Context was used outside ToDoContext");
  return context;
}

export { ToDoProvider, useToDo };
