import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import User from "./users";
import Albums from "./albums";
import Photos from "./photos";
import Facts from "./fact"; //aqui ta importando o ciclo (const Facts, que é uma função) da pag fact
import Nome from "./nome";
import Menu from "./menu";

const Webpages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Menu></Menu>}></Route>
        <Route exact path="/user/:id" element={<User></User>}></Route>
        <Route exact path="/albums/" element={<Albums></Albums>}></Route>
        <Route exact path="/photos/:id" element={<Photos></Photos>}></Route>
        <Route exact path="/catfact/" element={<Facts></Facts>}></Route>
        <Route exact path="/nome/" element={<Nome></Nome>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Webpages;
