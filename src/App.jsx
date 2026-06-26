// import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";

import Authorization from "./pages/Authorization";
import Registration from "./pages/Registration";
import ForgotPassword from "./pages/ForgotPassword";
import AppLayout from "./pages/AppLayout";
import ProtectedRoute from "./components/ProtectedRoute";

import { AuthProvider } from "./Contexts/AuthContext";
import { ToDoProvider } from "./Contexts/ToDoContext";
import { SoundProvider } from "./Contexts/SoundContext";

function App() {
  return (
    <AuthProvider>
      <ToDoProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Authorization />} />
            <Route path="register" element={<Registration />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route
              path="app"
              element={
                <ProtectedRoute>
                  <SoundProvider>
                    <AppLayout />
                  </SoundProvider>
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </ToDoProvider>
    </AuthProvider>
  );
}

export default App;
