import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function LimitsDetailsMain() {
  const [data, setData] = useState([]);
  const [comments, setComments] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/limitsdetails/${id}`)
      .then((res) => {
        setData(res.data);
        setComments(res.data.comments);
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
            <p className="mb-4 text-sm mr-4">{data?.SecondText}</p>
            <img
              className="object-contain w-1/2"
              src={data?.ThirdImageLink}
              alt={data?.ThirdImageAlt}
            />
          </div>
          <div className="flex flex-row justify-center">
            <img
              className="object-contain w-1/2"
              src={data?.FourthImageLink}
              alt={data?.FourthImageAlt}
            />
            <p className="mb-4 text-sm ml-4">{data?.ThirdText}</p>
          </div>
        </div>
      </div>
      <div className="card-content flex flex-row justify-between">
        <h1>Commentaires</h1>
        <button type="button" className="">
          Ajouter un commentaire
        </button>
      </div>
      {comments.lenght > 0 ? (
        <div className="flex flex-col">
          <div className="flex flex-row justify-center">
            <h1>{comments && comments[0].NickName}</h1>
            <p>{comments && comments[0].Comment}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default LimitsDetailsMain;
