/* eslint-disable jsx-a11y/img-redundant-alt */
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

function Footer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/footer`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="flex flex-row justify-evenly bg-blue-500 text-white">
      <div className="flex flex-row w-1/3">
        <img
          className="mb-2 mr-2 w-2/3"
          src={data.image && data.image[0].ImageLink}
          alt={data.image && data.image[0].ImageAlt}
        />
      </div>
      <div className="flex flex-col w-2/3">
        <div className="flex flex-row text-sm justify-evenly mt-4">
          {data.links &&
            data.links.map((item) => (
              <NavLink
                key={item.idNavLink}
                to={item.LinkPath}
                className="hover:scale-125 ease-in-out duration-500"
                activeClassName=""
              >
                {item.LinkLabel}
              </NavLink>
            ))}
        </div>
        <div className="flex flex-row text-sm justify-evenly mt-4">
          <p>{data?.FirstName}</p>
          <p>{data?.LastName}</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
