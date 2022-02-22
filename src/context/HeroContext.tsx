import React, { useState, useEffect, createContext } from "react";
import { api, AUTHENTICATION } from "../services/api";
import { IHeroContext, IHero } from "../interfaces/interfaces";

const HeroContext = createContext<IHeroContext>({} as IHeroContext);

export const HeroProvider = (props: any) => {
  const [heros, setHeros] = useState<IHero[]>([]);

  useEffect(() => {
    reloadHeros();
  }, []);

  const reloadHeros = (name = "") => {
    getHeros(name)
      .then((response: any) => {
        setHeros(response.data.data.results);
      })
      .catch((err: any) => {
        console.error("Ops! ocorreu um erro" + err);
      });
  };

  //console.log(heros, 'heros');
  return (
    <HeroContext.Provider
      value={{
        heros,
        reloadHeros,
      }}
    >
      {props.children}
    </HeroContext.Provider>
  );
};

export const getHeros = (name = "") => {
  let params = {};

  if (name) {
    params = {
      name: name,
      ...AUTHENTICATION,
    };
  } else {
    params = {
      ...AUTHENTICATION,
    };
  }
  return api.get("/v1/public/characters", { params });
};

export default HeroContext;
