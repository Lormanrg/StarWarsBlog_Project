import { element } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      urlBase: "https://swapi.tech/api/",
      starWarsCharacters: [],
      starWarsPlanets: [],
    },
    actions: {
      getStarWarsCharacters: async () => {
        try {
          let response = await fetch(`${getStore().urlBase}/people/`);
          let data = await response.json();
          data.results.forEach(async (element) => {
            try {
              let response2 = await fetch(element.url);
              let data2 = await response2.json();

              setStore({
                ...getStore(),
                starWarsCharacters: [
                  ...getStore().starWarsCharacters,
                  data2.result,
                ],
              });
            } catch (error) {}
          });
        } catch (error) {
          console.log(`${error}error`);
        }
      },
      getStarWarsPlanets: async () => {
        try {
          let response = await fetch(`${getStore().urlBase}/planets/`);
          let data = await response.json();

          data.results.forEach(async (element) => {
            try {
              let response = await fetch(element.url);
              let data2 = await response.json();

              setStore({
                ...getStore(),
                starWarsPlanets: [...getStore().starWarsPlanets, data2.result],
              });
            } catch (error) {
              `${error}error`;
            }
          });
        } catch (error) {
          console.log(`${error}error`);
        }
      },
    },
  };
};

export default getState;
