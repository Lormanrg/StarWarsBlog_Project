import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

import CharactersCard from "../component/CharactersCard.jsx";
import PlanetCard from "../component/PlanetCard.jsx";

export const Home = () => {
  const { store } = useContext(Context);
  const { urlBase, starWarsCharacters, starWarsPLanets } = store;

  return (
    <>
      <div className="container">
        <div className="scrollmenu">
          <div className="row">
            <div className="col-12 col-md-5">
              <h1>Characters</h1>
              <div className="row">
                {starWarsCharacters.map((item, index) => {
                  return <CharactersCard key={item.uid} item={item} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container">
        <div className="scrollmenu">
          <div className="row">
            <div className="col-12 col-md-5">
              {starWarsPLanets.map((item) => {
                return <PlanetCard key={item.uid} item={item} />;
              })}
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};
