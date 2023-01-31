import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Nome = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(value);

    fetch("https://api.agify.io/?name=" + value)
      .then((res) => res.json())
      .then((res) => setIdade(res));
  };
  const handleChanges = (event) => {
    setValue(event.target.value);
  };
  const [value, setValue] = useState("");
  const [idade, setIdade] = useState(null);

  {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={value} onChange={handleChanges} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {idade && <div>{idade.age}</div>}
      </div>
    );
  }
};
export default Nome;
