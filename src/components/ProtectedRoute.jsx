import { useNavigate } from "react-router";
import { useAuth } from "../Contexts/AuthContext";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated) navigate("/");
    },
    [isAuthenticated, navigate],
  );
  return isAuthenticated ? children : null;
}

export default ProtectedRoute;
