import React, { useState, useEffect, createContext } from "react";
import { api, AUTHENTICATION } from "../services/api";
import { IHeroContext, IHero } from "../interfaces/interfaces";

const HeroContext = createContext<IHeroContext>({} as IHeroContext);

export const HeroProvider = (props: any) => {
  const [heros, setHeros] = useState<IHero[]>([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    reloadHeros();
  }, []);

  const reloadHeros = (name = "", clear = false) => {
    if (loading) return;

    if (!clear) if (total > 0 && heros.length === total) return;
    if (clear) setHeros([]);

    setLoading(true);

    getHeros(name, clear ? 0 : offset)
      .then((response: any) => {
        if (clear) {
          setHeros([...response.data.data.results]);
          setOffset(20);
        } else {
          setHeros([...heros, ...response.data.data.results]);
          setOffset(offset + 20);
        }
        setTotal(response.data.data.total);
        setLoading(false);
      })
      .catch((err: any) => {
        console.error("Ops! ocorreu um erro" + err);
        setLoading(false);
      });
  };

  return (
    <HeroContext.Provider
      value={{
        heros,
        reloadHeros,
        loading,
      }}
    >
      {props.children}
    </HeroContext.Provider>
  );
};

export const getHeros = (name = "", offset = 0) => {
  let params = {};

  if (name) {
    params = {
      nameStartsWith: name,
      offset,
      ...AUTHENTICATION,
    };
  } else {
    params = {
      offset,
      ...AUTHENTICATION,
    };
  }
  return api.get("/v1/public/characters", { params });
};

export default HeroContext;
