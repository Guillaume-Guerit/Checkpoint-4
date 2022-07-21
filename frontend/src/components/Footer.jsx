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
    <div className="flex flex-col justify-evenly mt-8">
      <div className="">
        <img
          className="mb-2 mr-2 w-2/3"
          src={data.image && data.image[0].ImageLink}
          alt={data.image && data.image[0].ImageAlt}
        />
      </div>
      <div className="flex flex-row text-sm justify-evenly">
        {data.links &&
          data.links.map((item) => (
            <NavLink
              key={item.idNavLink}
              to={item.LinkPath}
              className=""
              activeClassName=""
            >
              {item.LinkLabel}
            </NavLink>
          ))}
      </div>
      <div className="flex flex-row text-sm justify-evenly">
        <p>{data?.FirstName}</p>
        <p>{data?.LastName}</p>
        <p>{data?.Email}</p>
        <p>{data?.Phone}</p>
      </div>
    </div>
  );
}

export default Footer;
