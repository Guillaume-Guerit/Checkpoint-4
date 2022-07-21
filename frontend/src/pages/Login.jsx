import React, { useState, useEffect } from "react";
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
    <div className="flex flex-col w-screen h-screen">
      <form className="flex flex-col w-3/5 h-2/5 m-auto">
        <div className="flex flex-col justify-between items-between">
          <h1>{data[0]?.Title}</h1>
          <label>
            <input placeholder={data[0]?.Firstinput} className="" />
          </label>
          <label>
            <input
              type="password"
              placeholder={data[0]?.SecondInput}
              className=""
            />
          </label>
          <div className="px-5 mt-3 flex flex-row justify-between">
            <button
              className="pt-2 pb-3 pl-3 pr-3 rounded-full buttonNav mr-10 text-xl"
              type="button"
            >
              Se connecter
            </button>
            {ForgotPassword ? (
              <button type="button" onClick={() => setForgotPassword(false)}>
                {data[0]?.ForgotPassword}
              </button>
            ) : (
              <button type="button" onClick={() => setForgotPassword(true)}>
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
