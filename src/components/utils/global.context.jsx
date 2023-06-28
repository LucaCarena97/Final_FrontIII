/* eslint-disable react-refresh/only-export-components */

import { createContext } from "react";

export const estadoInicial = {
  tema: {
    claro: {
      nav: "#d5948287",
      home: "#9c8680b3",
      footer: "#d5948287",
      font: "#8B4513",
    },
    oscuro: {
      nav: "#3b2722a5",
      home: "#39353487",
      footer: "#3b2722a5",
      font: "#FFFAF0",
    },
  },
};

export const ContextGlobal = createContext(estadoInicial);
