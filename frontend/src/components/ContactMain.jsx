import axios from "axios";
import { useEffect, useState } from "react";

function ContactMain() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/contact`)
      .then((res) => {
        setData(res.data[0]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="flex flex-col background">
      <div className="flex flex-col">
        <h1 className="underline text-xl mb-8 mt-8">{data?.Title}</h1>
        <p>{data?.Text}</p>
      </div>
      <form className="flex flex-col mt-4 w-full">
        <div className="flex flex-col items-center">
          <label className="mt-4 w-3/4">
            <input
              className="w-full border-2 border-blue-500 rounded-lg py-2 px-4"
              type="text"
              placeholder={data?.FirstName}
            />
          </label>
          <label className="mt-4 w-3/4">
            <input
              className="w-full border-2 border-blue-500 rounded-lg py-2 px-4"
              type="text"
              placeholder={data?.LastName}
            />
          </label>
          <label className="mt-4 w-3/4">
            <input
              className="w-full border-2 border-blue-500 rounded-lg py-2 px-4"
              type="text"
              placeholder={data?.Email}
            />
          </label>
          <label className="mt-4 w-3/4">
            <textarea
              className="w-full border-2 border-blue-500 rounded-lg py-4 px-4"
              placeholder={data?.Message}
            />
          </label>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mb-8"
            type="submit"
          >
            {data?.ButtonLabel}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactMain;
