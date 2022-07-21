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
    <div className="flex flex-col">
      <div className="flex flex-col">
        <h1 className="underline text-xl mb-4">{data?.Title}</h1>
        <p>{data?.Text}</p>
      </div>
      <form className="flex flex-col mt-4">
        <div className="flex flex-col items-center">
          <label className="text-xl mt-4">
            <input
              className="w-full"
              type="text"
              placeholder={data?.FirstName}
            />
          </label>
          <label className="text-xl mt-4">
            <input
              className="w-full"
              type="text"
              placeholder={data?.LastName}
            />
          </label>
          <label className="text-xl mt-4">
            <input className="w-full" type="text" placeholder={data?.Email} />
          </label>
          <label className="text-xl mt-4">
            <textarea className="w-full" placeholder={data?.Message} />
          </label>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
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
