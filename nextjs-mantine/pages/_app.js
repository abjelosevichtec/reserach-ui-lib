import { useState } from "react";
import { MantineProvider, ColorSchemeProvider } from "@mantine/core";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [colorScheme, setColorScheme] = useState("light");
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withNormalizeCSS
        withGlobalStyles
        theme={{
          colorScheme,
          colors: {
            brand: [
              "#FFEEE5",
              "#FFCEB8",
              "#FFAF8A",
              "#FF8F5C",
              "#FF702E",
              "#FF5000",
              "#CC4000",
              "#993000",
              "#662000",
              "#331000",
            ],
          },
          primaryColor: "brand",
          primaryShade: 6,
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default MyApp;
