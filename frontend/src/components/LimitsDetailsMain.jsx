import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function LimitsDetailsMain() {
  const [data, setData] = useState([]);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState(false);
  const { id } = useParams();
  const [commentPost, setCommentPost] = useState({
    Limits_Details_idLimits_Details: id,
    NickName: "",
    Comment: "",
  });

  const editComments = (e) => {
    e.preventDefault();
    setCommentPost({
      ...commentPost,
      [e.target.name]: e.target.value,
    });
  };

  const handleComment = () => {
    setComment(false);
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/comments`, commentPost)
      .then(() => {})
      .catch((err) => {
        console.error(err);
      });
  };

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
  }, [handleComment]);

  return (
    <div className="flex flex-col background">
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
        <h1 className="text-xl">Commentaires</h1>
      </div>
      {comments[0] && (
        <div className="flex flex-col mb-2">
          <div className="flex flex-col justify-center">
            {comments.map((commentt) => (
              <div className="flex flex-col justify-center border-2 border-blue-500 rounded-lg py-2 px-2 bg-white">
                <p className="w-full">De : {commentt.NickName}</p>
                <p className="w-full">Commentaire : {commentt.Comment}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      <button
        type="button"
        className="text-sm hover:scale-125 ease-in-out duration-500 mb-2"
        onClick={() => setComment(true)}
      >
        Ajouter un commentaire
      </button>
      {comment ? (
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Votre pseudo"
            className="w-full border-2 border-blue-500 rounded-lg py-2 px-2 mb-2"
            name="NickName"
            onChange={(e) => editComments(e)}
          />
          <input
            type="text"
            placeholder="Votre commentaire"
            className="w-full border-2 border-blue-500 rounded-lg py-2 px-2 mb-2"
            name="Comment"
            onChange={(e) => editComments(e)}
          />
          <button
            type="submit"
            onClick={() => handleComment()}
            className="text-sm hover:scale-125 ease-in-out duration-500"
          >
            Envoyer
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default LimitsDetailsMain;
