import { createContext, useContext, useReducer } from "react";
import supabase from "../lib/supabaseClient";

const AuthContext = createContext();
const initialState = {
  user_id: null,
  isAuthenticated: false,
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

  return (
    <AuthContext.Provider value={{ login, isAuthenticated }}>
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
