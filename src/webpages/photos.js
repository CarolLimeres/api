import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Photos = () => {
  let { id } = useParams();
  const [error, setError] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [isloaded, setIsLoaded] = useState(false);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos/" + id)
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setPhotos(data);
        },
        (error) => {
          setIsLoaded(false);
          setError(error);
        }
      );
  }, []);
  if (error) {
    return (
      <div>
        <h1>Lista de fotos</h1>
        <ul>
          <li>Erro:{error.message}</li>
        </ul>
      </div>
    );
  } else if (!isloaded) {
    return <div>...loading...</div>;
  } else {
    return (
      <div>
        <h1>Dados das fotos - {id} </h1>
        <p>Título:{photos.title}</p>
        <img src={photos.url}></img>
        <a href="../">Voltar</a>
      </div>
    );
  }
};
export default Photos;
