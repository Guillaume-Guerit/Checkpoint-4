/* eslint-disable import/no-extraneous-dependencies */
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const [isActive, setisActive] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/navigation`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <img
            className="object-contain w-1/6 ml-2"
            src={data?.ImageLink}
            alt={data?.ImageAlt}
          />

          <button
            type="button"
            onClick={() => {
              setisActive(!isActive);
            }}
            className={`navbar-burger burger hover:scale-125 ease-in-out duration-500 ${
              isActive ? "is-active " : ""
            }`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
        <div
          id="navbarBasicExample"
          className={`navbar-menu ${isActive ? "is-active " : ""}`}
        >
          <div className="navbar-end">
            {data.links &&
              data.links.map((item) => (
                <NavLink
                  key={item.idNavLink}
                  to={item.LinkPath}
                  className="navbar-item hover:scale-125 ease-in-out duration-500"
                  activeClassName="is-active"
                >
                  {item.LinkLabel}
                </NavLink>
              ))}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
