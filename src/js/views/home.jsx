import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

import { CharactersCard } from "../component/CharactersCard.jsx";
import { PlanetCard } from "../component/PlanetCard.jsx";

export const Home = () => {
  return (
    <>
      <div className="container  ">
        <h1>Characters</h1>
        <div className="home-card-list">
          <CharactersCard nature="people" item="name" />
        </div>
      </div>

      <div className="container">
        <h1>Planets</h1>
        <div className="home-card-list">
          <PlanetCard nature="planets" item="name" />
        </div>
      </div>
    </>
  );
};
