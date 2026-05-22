import ErrorDiv from "../components/ErrorDiv";
import Input from "../components/Input";
import Logo from "../components/Logo";
import ButtonBack from "../components/ButtonBack";
import { useState } from "react";

function ForgotPassword() {
  const [email, setEmail] = useState();
  return (
    <div className="m-0 h-screen flex justify-center items-center">
      <section className="flex flex-col items-center justify-center min-w-96 py-10 px-5 bg-white rounded-[20px] shadow-[0_0_5px_white]">
        <div className="auth-image">
          <Logo alt="Website logo" width="200" />
        </div>

        <h1 className="text-xl mt-5 mb-1.5 font-bold">Reset your password</h1>
        <p className="text-[14px] text-gray-500 mb-5 text-center max-w-72">
          Enter your email address and we'll send you a link to reset your
          password.
        </p>

        <ErrorDiv />

        <div className="hidden min-w-72 bg-green-100 border border-green-400 rounded-[10px] text-[14px] text-green-800 p-2 mb-4 text-center">
          <p>Check your email for the reset link!</p>
        </div>

        <form method="post" className="flex flex-col justify-center min-w-72">
          <Input
            className="mb-4"
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail((prev) => prev + e.target.value)}
            required
          />

          <Input
            className="text-white bg-primary-blue border-none font-bold hover:bg-dark-blue cursor-pointer py-2.5 rounded-[10px] transition-colors"
            type="submit"
            value="Send reset link"
          />
        </form>

        <section className="mt-1 text-[14px]">
          <ButtonBack className="text-primary-blue visited:text-dark-blue hover:underline font-bold flex items-center justify-center gap-1">
            Back to login
          </ButtonBack>
        </section>
      </section>
    </div>
  );
}

export default ForgotPassword;
