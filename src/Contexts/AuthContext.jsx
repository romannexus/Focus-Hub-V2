import { createContext, useContext, useReducer } from "react";
import { createClient } from "@supabase/supabase-js/dist/index.cjs";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const AuthContext = createContext();
const initialState = {
  user_id: null,
  isAuthenticated: false,
  tasks: [],
};

function reducer(state, action) {
  // console.log(action);
  switch (action.type) {
    case "loggedIn": {
      return { ...state, user_id: action.payload, isAuthenticated: true };
    }
    case "tasksFetched": {
      return { ...state, tasks: action.payload };
    }
    default: {
      throw new Error("Not correct type of action");
    }
  }
}

function AuthProvider({ children }) {
  const [{ tasks, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  async function login(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) throw new Error("Failed to login user", error.message);
    dispatch({ type: "loggedIn", payload: data.user.id });
    // console.log(data.user.id);
  }

  async function fetchTasks() {
    const { data, error } = await supabase
      .from("tasks")
      .select("*")
      .order("created_at");
    if (error) throw new Error("Failed to fetch tasks", error.message);
    // console.log(data);
    dispatch({ type: "tasksFetched", payload: data });
    return data;
  }
  async function updateTaskCompleted(id, value) {
    console.log(value);
    const { error } = await supabase
      .from("tasks")
      .update({ is_completed: value })
      .eq("id", id);
    if (error) throw error;
  }

  return (
    <AuthContext.Provider
      value={{ login, fetchTasks, updateTaskCompleted, tasks, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("Auth context was used outside AuthProvider");
  return context;
}

export { AuthProvider, useAuth };
