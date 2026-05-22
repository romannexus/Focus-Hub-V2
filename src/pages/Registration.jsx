import { Link } from "react-router";
import Input from "../components/Input";
import Logo from "../components/Logo";
import { useState } from "react";
import ErrorDiv from "../components/ErrorDiv";
import ButtonBack from "../components/ButtonBack";

function Registration() {
  const [fisrtName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordRepeat, setPasswordRepeat] = useState(null);
  const [bday, setBday] = useState(null);
  return (
    <div className="m-0 h-screen flex justify-center items-center">
      <section className="flex flex-col items-center justify-center min-w-125 py-10 px-5 bg-white rounded-[20px] shadow-[0_0_5px_white]">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center w-[80%] mb-2.5">
          <div className="flex justify-start">
            <ButtonBack />
          </div>

          <h1 className="text-xl font-bold">Create an account</h1>

          <Logo
            className="align-middle justify-self-end"
            alt="Website logo"
            width="50"
          />
        </div>

        <ErrorDiv />

        <form
          method="post"
          className="flex flex-col justify-center mt-2,5 min-w-[80%] text-gray-700"
          noValidate
        >
          <p>Enter your full name :</p>

          <div className="flex flex-row space-x-2.5 w-full">
            <Input
              className="grow"
              type="text"
              placeholder="First Name"
              onChange={(e) => setFirstName((prev) => prev + e.target.value)}
              required
            />
            <Input
              className="grow"
              type="text"
              placeholder="Last Name"
              onChange={(e) => setLastName((prev) => prev + e.target.value)}
              required
            />
          </div>
          <label htmlFor="email">Enter your email :</label>
          <Input
            type="email"
            id="email"
            placeholder="Username or Email"
            onChange={(e) => setEmail((prev) => prev + e.target.value)}
            required
          />
          <label htmlFor="password">Enter your password :</label>
          <Input
            type="password"
            id="password"
            placeholder="Password"
            autoComplete="off"
            minLength="6"
            maxLength="32"
            onChange={(e) => setPassword((prev) => prev + e.target.value)}
            required
          />

          <label htmlFor="password-repeat">Repeat your password :</label>
          <Input
            type="password"
            id="password-repeat"
            placeholder="Repeat password"
            autoComplete="off"
            minLength="6"
            maxLength="32"
            onChange={(e) => setPasswordRepeat((prev) => prev + e.target.value)}
            required
          />

          <label htmlFor="bday">Enter your date of birth :</label>
          <Input
            className="text-gray-400"
            type="date"
            id="bday"
            min="1926-02-22"
            max="2026-12-31"
            onChange={(e) => setBday((prev) => prev + e.target.value)}
            required
          />

          <Input
            className="text-white bg-primary-blue border-none font-bold hover:bg-dark-blue cursor-pointer"
            type="submit"
            value="Sign in"
          />
        </form>

        <section className="alternative-login">
          <div className="mt-1 text-[14px]">
            <p className="inline-block">Already have a account ?</p>
            <Link
              className="text-primary-blue visited:text-dark-blue underline ml-0.5"
              to="/"
            >
              Sign up
            </Link>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Registration;
