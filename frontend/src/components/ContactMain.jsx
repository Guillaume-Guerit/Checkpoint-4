import axios from "axios";
import { useEffect, useState } from "react";

function ContactMain() {
  const [data, setData] = useState([]);

  const [mailData, setMailData] = useState([
    {
      FirstName: "",
      LastName: "",
      Email: "",
      Message: "",
    },
  ]);

  const editData = (area, value) => {
    const newData = [...mailData];
    newData[0][area] = value;
    setMailData(newData);
  };

  const SubmitMail = () => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/sendEmail`, mailData)
      .then((res) => {
        console.warn(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

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
              name="FirstName"
              type="text"
              placeholder={data?.FirstName}
              onChange={(e) => editData(e.target.name, e.target.value)}
              required
            />
          </label>
          <label className="mt-4 w-3/4">
            <input
              className="w-full border-2 border-blue-500 rounded-lg py-2 px-4"
              name="LastName"
              type="text"
              placeholder={data?.LastName}
              onChange={(e) => editData(e.target.name, e.target.value)}
              required
            />
          </label>
          <label className="mt-4 w-3/4">
            <input
              className="w-full border-2 border-blue-500 rounded-lg py-2 px-4"
              name="Email"
              type="text"
              placeholder={data?.Email}
              onChange={(e) => editData(e.target.name, e.target.value)}
              required
            />
          </label>
          <label className="mt-4 w-3/4">
            <textarea
              className="w-full border-2 border-blue-500 rounded-lg py-4 px-4"
              name="Message"
              placeholder={data?.Message}
              onChange={(e) => editData(e.target.name, e.target.value)}
              required
            />
          </label>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mb-8"
            type="submit"
            onClick={SubmitMail}
          >
            {data?.ButtonLabel}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactMain;
