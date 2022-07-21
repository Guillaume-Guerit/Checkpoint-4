/* eslint-disable react/jsx-props-no-spreading */
import axios from "axios";
import { useEffect, useState } from "react";
import LimitsCards from "./LimitsCards";

function LimitsView() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/limits`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-col">
        <h1 className="underline text-xl mb-4">{data[0]?.MainTitle}</h1>
        <div className="flex flex-col justify-center">
          {data &&
            data.map((datas) => (
              <LimitsCards key={datas.idLimits_Elements} {...datas} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default LimitsView;
