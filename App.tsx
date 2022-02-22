import React from "react";

import { HeroProvider } from "./src/context/HeroContext";
import Routes from "./routes";

export default function App() {
  return (
    <HeroProvider>
      <Routes />
    </HeroProvider>
  );
}
