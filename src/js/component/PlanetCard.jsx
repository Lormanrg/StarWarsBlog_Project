import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const PlanetCard = (props) => {
  const { store, actions } = useContext(Context);
  const { planets } = store;
  const { nature } = props;

  return (
    <>
      {planets.map((item) => {
        return (
          <div key={item._id} className="card ">
            <img
              src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title"></h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div className="div">
                <Link to={`/${nature}/${item._id}`} className="btn btn-primary">
                  Learn more!
                </Link>

                <button
                  onClick={() => {
                    actions.addCard(item);
                  }}
                >
                  Favorites
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
