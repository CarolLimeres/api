import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Albums = () => {
  const [error, setError] = useState(null);
  const [albums, setAlbums] = useState([]);
  const [isloaded, setIsLoaded] = useState(false);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setAlbums(data);
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
        <h1>Lista de Álbuns</h1>
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
        <h1>Lista de Álbuns</h1>
        <ul>
          {albums.map((user) => (
            <li key={user.id}>
              <Link to={`../photos/${user.id}`}>{user.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default Albums;
