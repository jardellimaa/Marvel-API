import React, { useEffect, useState } from "react";

import { HeroProvider } from "./src/context/HeroContext";
import Routes from "./routes";
import { Appearance } from "react-native";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./src/styles/theme";

export default function App() {
  const [isDark, setIsDark] = useState(Appearance.getColorScheme() === "dark");

  Appearance.addChangeListener(({ colorScheme }) => {
    setIsDark(colorScheme === "dark");
  });

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <HeroProvider>
        <Routes />
      </HeroProvider>
    </ThemeProvider>
  );
}
