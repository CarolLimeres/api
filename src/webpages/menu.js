import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
const Menu = () => {
  return (
    <div>
      <Link to={"/catfact/"}>Factos sobre Gatos</Link>
      <br></br>
      <Link to={"/nome/"}>Idade</Link>
    </div>
  );
};

export default Menu;
