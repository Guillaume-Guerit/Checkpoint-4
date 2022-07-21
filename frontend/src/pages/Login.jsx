import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

function Login() {
  const [data, setData] = useState([]);
  const [ForgotPassword, setForgotPassword] = useState(false);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/login`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="flex flex-col w-screen h-screen background items-center justify-center">
      <form className="flex flex-col w-3/5 h-2/5 m-auto w-full border-2 border-blue-500 rounded-lg py-2 px-2 mb-2 bg-blue-500 text-white">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-xl mb-4">{data[0]?.Title}</h1>
          <label>
            <input
              placeholder={data[0]?.Firstinput}
              className="text-black mb-2 rounded-sm"
            />
          </label>
          <label>
            <input
              type="password"
              placeholder={data[0]?.SecondInput}
              className="text-black mb-2 rounded-sm"
            />
          </label>
          <div className="mt-3 flex flex-col items-center justify-center">
            <NavLink to="/admin" replace>
              <button
                className="text-xl items-center justify-center w-full hover:scale-125 ease-in-out duration-500"
                type="button"
              >
                Se connecter
              </button>
            </NavLink>
            {ForgotPassword ? (
              <button
                type="button"
                className="text-sm mt-20 hover:scale-125 ease-in-out duration-500"
                onClick={() => setForgotPassword(false)}
              >
                {data[0]?.ForgotPassword}
              </button>
            ) : (
              <button
                type="button"
                className="text-sm mt-20 hover:scale-125 ease-in-out duration-500"
                onClick={() => setForgotPassword(true)}
              >
                {data[0]?.ForgotPassWordOnClick}
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
