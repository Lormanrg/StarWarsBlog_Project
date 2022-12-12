import React from "react";
import { Link } from "react-router-dom";

const CharactersCard = ({ item }) => {
  return (
    <>
      {/* <div key={item.uid} className="container">
        <div className="post-image">
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`}
          />
        </div>
        <div>
          <h1>{`Name: ${item.properties.name}`}</h1>
        </div>
        <div>{item.properties.gender}</div>
        <div>{item.properties.hair_color}</div>
      </div> */}

      <div className="col-3">
        <div className="card">
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{item.properties.name}</h5>
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

export default CharactersCard;
