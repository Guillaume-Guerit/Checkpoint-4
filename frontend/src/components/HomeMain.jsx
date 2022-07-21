import axios from "axios";
import { useEffect, useState } from "react";

function HomeMain() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/homes`)
      .then((res) => {
        setData(res.data[0]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="flex flex-col background shadow-2xl">
      <div className="card-image">
        <h1 className="underline text-xl mb-2 drop-shadow-lg">{data?.Title}</h1>
        <img
          className="mb-2"
          src={data?.FirstImageLink}
          alt={data?.FirstImageAlt}
        />
      </div>
      <div className="card-content shadow-2xl">
        <div className="flex flex-col">
          <p className="mb-4">{data?.Text}</p>
          <img
            className="object-contain"
            src={data?.SecondImageLink}
            alt={data?.SecondImageAlt}
          />
          <div className="media">
            <div className="media-content" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeMain;
