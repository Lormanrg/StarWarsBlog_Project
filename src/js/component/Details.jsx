import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

const Characterdetails = () => {
  const { store, actions } = useContext(Context);
  const { planets, people } = store;
  const params = useParams();

  const [description, setDescription] = useState([]);

  const getCharacterDetails = () => {
    const ObtainingDetails = store[params.details].find(
      (element) => element._id === params.theId
    );
    setDescription(ObtainingDetails);
  };

  useEffect(() => {
    getCharacterDetails();
  }, [people]);

  return (
    <>
      <div>{`hola desde el name: ${description?.properties?.name}`}</div>
    </>
  );
};

export default Characterdetails;
