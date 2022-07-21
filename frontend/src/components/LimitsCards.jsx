/* eslint-disable react/destructuring-assignment */
import { NavLink } from "react-router-dom";

function LimitsCards(datas) {
  return (
    <div className="flex flex-row w-3/4 mt-6">
      <img
        className="object-contain ml-6 w-1/2"
        src={datas?.ImageLink}
        alt={datas?.ImageAlt}
      />
      <div className="flex flex-col">
        <h1 className="underline mb-2 text-base">{datas?.Title}</h1>
        <p className="text-xs text mr-2">{datas?.Text}</p>
        <NavLink
          className="text-xs text mr-2 mt-4 hover:scale-125 ease-in-out duration-500"
          to={`/limit/${datas.idLimits_Elements}`}
        >
          En savoir plus
        </NavLink>
      </div>
    </div>
  );
}

export default LimitsCards;
