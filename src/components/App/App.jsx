import { createContext, useState } from "react";
import { HeadphonesPage } from "../headphones-page/headphones-page";
import { ThemeProvider } from "../theme-provider/theme-provider";
import { Layout } from "../layout/layout";

import "./app.css";
import styles from "./app.module.css";

// export const ThemeContext = createContext();

export const App = () => {
  // const [theme, setTheme] = useState("dark");

  return (
    <ThemeProvider>
      {/* <button
        onClick={() =>
          theme === "dark" ? setTheme("light") : setTheme("dark")
        }
      >
        switch theme
      </button> */}
      <Layout>
        <HeadphonesPage />
      </Layout>
    </ThemeProvider>
  );
};
