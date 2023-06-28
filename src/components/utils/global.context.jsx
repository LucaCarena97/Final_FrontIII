/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const estadoInicial = {
  tema: {
    claro: {
      nav: "lightskyblue",
      home: "#9c868087",
      footer: "lightskyblue",
      font: "black",
    },
    oscuro: {
      nav: "gray",
      home: "gray",
      footer: "gray",
      font: "white",
    },
  },
};

export const ContextGlobal = createContext(estadoInicial);

export const ContextProvider = function ({ children }) {
  const [tema, setTema] = useState(estadoInicial.tema.claro);
  const cambioTema = () => {
    setTema((e) =>
      e === estadoInicial.tema.claro
        ? estadoInicial.tema.oscuro
        : estadoInicial.tema.claro
    );
  };

  return (
    <ContextGlobal.Provider value={{ tema, cambioTema }}>
      {children}
    </ContextGlobal.Provider>
  );
};
