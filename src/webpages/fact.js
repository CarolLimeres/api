import React from "react";
import Catfact from "./catfact";

// ciclo para aparecer 5 factos

const Facts = () => {
  let factList = [];
  var i = 0;
  for (i = 0; i < 5; i++) {
    factList.push(
      <li key={i}>
        <Catfact />
      </li>
    );
  }

  return (
    <div>
      <ul>{factList}</ul>
      <a href="../">Voltar</a>
    </div>
  );
};
export default Facts;
