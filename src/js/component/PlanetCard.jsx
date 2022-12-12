import React from "react";
import { Link } from "react-router-dom";

const PlanetCard = ({ item }) => {
  console.log(item);
  return (
    <>
      <div key={item.uid}>
        <div className="card">
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title"></h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="/demo" className="btn btn-primary">
              Go somewhere
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlanetCard;
