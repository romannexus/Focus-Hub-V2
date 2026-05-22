import { Link, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import Input from "../components/Input";
import Logo from "../components/Logo";
import ErrorDiv from "../components/ErrorDiv";
import { useAuth } from "../Contexts/AuthContext";

function Authorization() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  useEffect(
    function () {
      if (isAuthenticated) {
        navigate("/app", { replace: true });
      }
    },
    [isAuthenticated, navigate],
  );

  return (
    <div className="m-0 h-screen flex justify-center items-center bg-[linear-gradient(#f59f67,#353f76)] antialiased">
      <div className="flex flex-col items-center justify-center min-w-96 py-10 px-5 bg-white rounded-[20px] shadow-[0_0_5px_white]">
        <Logo alt="Website logo" width="200" />

        <h1 className="text-xl mt-5 mb-1.5 font-bold">Login to your account</h1>

        <ErrorDiv />

        <form
          method="post"
          className="flex flex-col justify-center min-w-72"
          onSubmit={(e) => {
            e.preventDefault();
            login(email, password);
          }}
        >
          <Input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            className="m-0"
            type="password"
            placeholder="Password"
            autoComplete="off"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="text-right p-0 mb-2.5">
            <Link
              className="inline text-text-gray no-underline text-[12px] p-1 m-0 hover:underline hover:text-dark-blue"
              to="forgot-password"
            >
              Forgot password?
            </Link>
          </div>
          <Input
            className="text-white bg-primary-blue border-none font-bold hover:bg-dark-blue cursor-pointer"
            type="submit"
            value="Sign in"
          />
        </form>

        <section className="alternative-login">
          <div className="mt-2.5 text-[14px]">
            <p className="inline-block">Don't have a account ?</p>
            <Link
              className="text-primary-blue visited:text-dark-blue underline ml-0.5"
              to="register"
            >
              Sign up
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Authorization;
