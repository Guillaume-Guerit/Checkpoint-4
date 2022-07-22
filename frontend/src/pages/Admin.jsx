import { useEffect, useState } from "react";
import axios from "axios";

function Admin() {
  const [limits, setLimits] = useState([]);
  const [id, setId] = useState(0);
  const [adminTouch, setAdminTouch] = useState(0);
  const [adminTouch2, setAdminTouch2] = useState("");
  const [adminTouch3, setAdminTouch3] = useState(0);
  const [data, setData] = useState({
    id: "",
    idFixe: 1,
    FirstTitle: "",
    Text: "",
    ImageLink: "",
    ImageAlt: "",
    Title: "",
    FirstText: "",
    SecondText: "",
    ThirdText: "",
    FirstImageLink: "",
    FirstImageAlt: "",
    SecondImageLink: "",
    SecondImageAlt: "",
    ThirdImageLink: "",
    ThirdImageAlt: "",
    FourthImageLink: "",
    FourthImageAlt: "",
  });

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/limits`)
      .then((res) => {
        setLimits(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const editData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const editId = (e) => {
    setId(e.target.value);
  };

  const handlePost = (e) => {
    setAdminTouch("");
    e.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/limitsdetailspost`, data)
      .then(() => {
        console.warn(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handlePutHome = (e) => {
    e.preventDefault();
    setAdminTouch2("");
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/homeput`, data)
      .then(() => {
        console.warn(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleDeleteLimit = (e) => {
    e.preventDefault();
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/limitsdetailsdelete/${id}`)
      .then(() => {
        console.warn(data);
        setAdminTouch3(0);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="w-full background">
      <h1>Admin</h1>
      <select
        className="flex flex-col w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        onChange={(e) => setAdminTouch(e.target.value)}
      >
        <option value="0">Sélectionner une option</option>
        <option value="1">Ajouter une limite</option>
        <option value="2">Mettre à jour</option>
        <option value="3">Supprimer une limite</option>
      </select>
      {adminTouch === "1" ? (
        <div className="flex flex-col">
          <h1 className="text-base mb-8 mt-8">
            Commençons par ajouter sa carte :
          </h1>
          <form className="flex flex-col mt-4">
            <div className="flex flex-col items-center">
              <label className="text-base mt-4">
                <input
                  className="w-full"
                  name="FirstTitle"
                  type="text"
                  placeholder="Titre de la carte"
                  onChange={(e) => editData(e)}
                />
              </label>
              <label className="text-base mt-4">
                <input
                  className="w-full"
                  name="Text"
                  type="text"
                  placeholder="Description de la carte"
                  onChange={(e) => editData(e)}
                />
              </label>
              <label className="text-base mt-4">
                <input
                  className="w-full"
                  name="ImageLink"
                  type="text"
                  placeholder="Image de la carte"
                  onChange={(e) => editData(e)}
                />
              </label>
              <label className="text-base mt-4">
                <input
                  className="w-full"
                  name="ImageAlt"
                  type="text"
                  placeholder="Description de l'image"
                  onChange={(e) => editData(e)}
                />
              </label>
              <h1 className="text-base mb-8 mt-8">Puis le détail :</h1>
              <label className="text-base mt-4">
                <input
                  className="w-full"
                  name="Title"
                  type="text"
                  placeholder="Titre"
                  onChange={(e) => editData(e)}
                />
              </label>
              <label className="text-base mt-4">
                <input
                  className="w-full"
                  name="FirstImageLink"
                  type="text"
                  placeholder="Première image"
                  onChange={(e) => editData(e)}
                />
              </label>
              <label className="text-base mt-4">
                <input
                  className="w-full"
                  name="FirstImageAlt"
                  type="text"
                  placeholder="Première description d'image"
                  onChange={(e) => editData(e)}
                />
              </label>
              <label className="text-base mt-4">
                <input
                  className="w-full"
                  name="FirstText"
                  type="text"
                  placeholder="Premier texte"
                  onChange={(e) => editData(e)}
                />
              </label>
              <label className="text-base mt-4">
                <input
                  className="w-full"
                  name="SecondImageLink"
                  type="text"
                  placeholder="Deuxième image"
                  onChange={(e) => editData(e)}
                />
              </label>
              <label className="text-base mt-4">
                <input
                  className="w-full"
                  name="SecondImageAlt"
                  type="text"
                  placeholder="Deuxième description d'image"
                  onChange={(e) => editData(e)}
                />
              </label>
              <label className="text-base mt-4">
                <input
                  className="w-full"
                  name="SecondText"
                  type="text"
                  placeholder="Deuxième texte"
                  onChange={(e) => editData(e)}
                />
              </label>
              <label className="text-base mt-4">
                <input
                  className="w-full"
                  name="ThirdImageLink"
                  type="text"
                  placeholder="Troisème image"
                  onChange={(e) => editData(e)}
                />
              </label>
              <label className="text-base mt-4">
                <input
                  className="w-full"
                  name="ThirdImageAlt"
                  type="text"
                  placeholder="Troisème description d'image"
                  onChange={(e) => editData(e)}
                />
              </label>
              <label className="text-base mt-4">
                <input
                  className="w-full"
                  name="ThirdText"
                  type="text"
                  placeholder="Troisème texte"
                  onChange={(e) => editData(e)}
                />
              </label>
              <label className="text-base mt-4">
                <input
                  className="w-full"
                  name="FourthImageLink"
                  type="text"
                  placeholder="Quatrième image"
                  onChange={(e) => editData(e)}
                />
              </label>
              <label className="text-base mt-4">
                <input
                  className="w-full"
                  name="FourthImageAlt"
                  type="text"
                  placeholder="Quatrième description d'image"
                  onChange={(e) => editData(e)}
                />
              </label>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                type="submit"
                onClick={(e) => handlePost(e)}
              >
                Ajouter
              </button>
            </div>
          </form>
        </div>
      ) : null}
      {adminTouch === "2" ? (
        <div className="flex flex-col">
          <select
            className="flex flex-col w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            onChange={(e) => setAdminTouch2(e.target.value)}
          >
            <option value="0">Que voulez-vous mettre à jour</option>
            <option value="1">Home</option>
            <option value="2">Les cartes des limites</option>
            <option value="3">Les détails des limites</option>
            <option value="4">Contact</option>
            <option value="5">Commentaire</option>
            <option value="6">Footer</option>
          </select>
        </div>
      ) : null}
      {adminTouch2 === "1" ? (
        <div className="flex flex-col">
          <form className="flex flex-col items-center">
            <label className="text-base mt-4">
              <input
                className="w-full"
                name="Title"
                type="text"
                placeholder="Titre"
                onChange={(e) => editData(e)}
              />
            </label>
            <label className="text-base mt-4">
              <input
                className="w-full"
                name="Text"
                type="text"
                placeholder="Texte"
                onChange={(e) => editData(e)}
              />
            </label>
            <label className="text-base mt-4">
              <input
                className="w-full"
                name="FirstImageLink"
                type="text"
                placeholder="Image"
                onChange={(e) => editData(e)}
              />
            </label>
            <label className="text-base mt-4">
              <input
                className="w-full"
                name="FirstImageAlt"
                type="text"
                placeholder="Description d'image"
                onChange={(e) => editData(e)}
              />
            </label>
            <label className="text-base mt-4">
              <input
                className="w-full"
                name="SecondImageLink"
                type="text"
                placeholder="Image"
                onChange={(e) => editData(e)}
              />
            </label>
            <label className="text-base mt-4">
              <input
                className="w-full"
                name="SecondImageAlt"
                type="text"
                placeholder="Description d'image"
                onChange={(e) => editData(e)}
              />
            </label>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
              type="submit"
              onClick={(e) => handlePutHome(e)}
            >
              Mettre à jour
            </button>
          </form>
        </div>
      ) : null}
      {adminTouch === "3" ? (
        <div className="flex flex-col">
          <select
            className="flex flex-col w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            onChange={(e) => {
              setAdminTouch3(e.target.value);
              editId(e);
            }}
          >
            {limits &&
              limits.map((limit) => (
                <option name="id" value={limit.idLimits_Elements}>
                  {limit.Title}
                </option>
              ))}
          </select>
          {adminTouch3 !== "0" ? (
            <div className="flex flex-col">
              <h1 className="mt-4 text-xl">Vous aller supprimer la limite :</h1>
              <h2 className="mt-4 text-xl">
                {limits[id - 1] && limits[id - 1].Title}
              </h2>
              <h3 className="mt-4 text-xl">Etes vous sur ?</h3>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                type="submit"
                onClick={(e) => handleDeleteLimit(e)}
              >
                Supprimer
              </button>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

export default Admin;
