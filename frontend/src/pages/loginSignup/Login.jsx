import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [loginFormFields, setLoginFormFields] = useState({
    username: "",
    password: "",
  });

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(loginFormFields);
  };

  const handleOnChange = (event) => {
    setLoginFormFields((preValue) => ({
      ...preValue,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className="mt-16 flex items-center justify-center">
      <div className="max-w-lg bg-amber-50 p-4 sm:p-8 rounded shadow-[0px_0px_6px] shadow-amber-200">
        <div className="flex gap-y-4 flex-col items-center">
          <p className="bg-gradient-to-r text-xl sm:text-3xl md:text-4xl lg:text-6xl from-amber-500 to-amber-800 text-transparent bg-clip-text">
            Welcome back!
          </p>
          <h1 className="text-lg sm:text-xl md:text-2xl text-amber-900">
            Login to your account
          </h1>
        </div>
        <div className="mt-6">
          <form className="flex flex-col gap-y-5" onSubmit={handleOnSubmit}>
            <div className="flex flex-col gap-y-1 relative border border-amber-500 rounded  py-2 group">
              <label
                htmlFor="username"
                className={`absolute rounded left-2 transition-all duration-300 ${
                  loginFormFields.username
                    ? "-top-3 text-sm bg-amber-100 px-1"
                    : "group-focus-within:-top-3 text-base group-focus-within:px-1 group-focus-within:text-sm group-focus-within:bg-amber-100"
                } `}
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Enter your username"
                className="w-full text-base px-2.5 placeholder:opacity-0 outline-none border-none group-focus-within:placeholder:opacity-100"
                value={loginFormFields.username}
                onChange={handleOnChange}
              />
            </div>
            <div className="flex flex-col gap-y-1 relative border border-amber-500 rounded  py-2 group">
              <label
                htmlFor="password"
                className={`absolute rounded left-2 transition-all duration-300 ${
                  loginFormFields.password
                    ? "-top-3 text-sm bg-amber-100 px-1"
                    : "group-focus-within:-top-3 text-base group-focus-within:px-1 group-focus-within:text-sm group-focus-within:bg-amber-100"
                } `}
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="w-full text-base px-2.5 placeholder:opacity-0 outline-none border-none group-focus-within:placeholder:opacity-100"
                placeholder="Enter your password"
                value={loginFormFields.password}
                onChange={handleOnChange}
              />
            </div>
            <div className="mt-3">
              <button className="w-full rounded py-2 cursor-pointer bg-gradient-to-tr from-amber-500 via-amber-600 to-amber-700 text-white font-semibold hover:scale-105 transition-all duration-300 focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-white">
                Login
              </button>
            </div>
          </form>
          <div className="flex items-center justify-center gap-x-2 mt-4">
            <p>Don&apos;t have an account?</p>
            <Link
              to="/signup"
              className="text-amber-600 font-normal hover:underline transition-all"
            >
              Signup
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
