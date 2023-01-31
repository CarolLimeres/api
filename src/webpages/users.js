import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const User = () => {
  let { id } = useParams();
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);
  const [isloaded, setIsLoaded] = useState(false);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/" + id)
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setUsers(data);
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
        <h1>Lista de utilizadores</h1>
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
        <h1>Dados do utilizador - {id} </h1>
        <p>Nome:{users.name}</p>
        <p>email: {users.email}</p>
        <p>Rua: {users.address.street}</p>
        <p>Cidade: {users.address.city}</p>
        <a href="../">Voltar</a>
      </div>
    );
  }
};
export default User;
