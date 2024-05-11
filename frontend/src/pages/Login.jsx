import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";
import { useState } from "react";

function Login() {

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const { isLoading, login } = useLogin()
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    await login(inputs)
  }
  return (
    <div className=" flex flex-col items-center justify-center min-w-96 mx-auto">
      <div
        className=" w-full p-6 rounded-lg shadow-md bg-gray-100 bg-clip-padding
      backdrop-filter backdrop-blur-xl bg-opacity-100"
      >
        <h1 className=" text-3xl text-gray-300 font-semibold text-center">
          Login <span className=" text-blue-500">ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className=" label">
              <span className=" label-text text-base">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              className=" w-full input input-bordered h-10"
              onChange={(e) =>
                setInputs({...inputs, username: e.target.value })
              }
            />
          </div>
          <div>
            <label className=" label">
              <span className=" label-text text-base">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className=" w-full input input-bordered h-10"
              onChange={(e) =>
                setInputs({...inputs, password: e.target.value })
              }
            />
          </div>
          <Link to='/signup' className=" text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
            {"Don't"} have an account ?
          </Link>
          <div>
            <button
              type="submit"
              className=" btn mt-2 btn-sm btn-block"
            >
              {isLoading? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
