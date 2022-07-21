import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function LimitsDetailsMain() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/limitsdetails/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="flex flex-col">
      <div className="card-content">
        <h1 className="underline text-xl mb-4">{data?.Title}</h1>
        <div className="flex flex-col justify-center">
          <img
            className="mb-2 justify-center"
            src={data?.FirstImageLink}
            alt={data?.FirstImageAlt}
          />
        </div>
      </div>
      <div className="card-content">
        <div className="flex flex-col">
          <div className="flex flex-row justify-center">
            <img
              className="object-contain w-1/2"
              src={data?.SecondImageLink}
              alt={data?.SecondImageAlt}
            />
            <p className="mb-4 text-sm ml-4">{data?.FirstText}</p>
          </div>
          <div className="flex flex-row justify-center">
            <p className="mb-4 text-sm mr-4">{data?.FirstText}</p>
            <img
              className="object-contain w-1/2"
              src={data?.SecondImageLink}
              alt={data?.SecondImageAlt}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LimitsDetailsMain;
