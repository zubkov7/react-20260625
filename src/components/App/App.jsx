import { HeadphonesPage } from "../headphones-page/headphones-page";
import { Layout } from "../layout/layout";
import { ThemeContextProvider } from "../theme-context/theme-context";
import { AuthContextProvider } from "../auth-context/auth-context";
import { ReduxProvider } from "../redux-provider/redux-provider";

import "./reset.css";
import "./app.css";

export const App = () => {
  return (
    <ReduxProvider>
      <AuthContextProvider>
        <ThemeContextProvider>
          <Layout>
            <HeadphonesPage />
          </Layout>
        </ThemeContextProvider>
      </AuthContextProvider>
    </ReduxProvider>
  );
};
