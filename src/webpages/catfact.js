import React, { useEffect, useState } from "react";

const Catfact = () => {
  const [error, setError] = useState(null);
  const [facto, setCatfact] = useState([]);
  const [isloaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setCatfact(data);
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
        <h1>Lista de Factos</h1>
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
        <p>Facto: {facto.fact}</p>
      </div>
    );
  }
};
export default Catfact;
