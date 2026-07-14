import { HeadphonesPage } from "../headphones-page/headphones-page";
import { Layout } from "../layout/layout";
import { ThemeContextProvider } from "../theme-context/theme-context";
import { AuthContextProvider } from "../auth-context/auth-context";

import "./reset.css";
import "./app.css";
import { ReduxProvider } from "../redux-provider/redux-provider";
import { Cart } from "../cart/cart";

export const App = () => {
  return (
    <ReduxProvider>
      <AuthContextProvider>
        <ThemeContextProvider>
          <Layout>
            <HeadphonesPage />
            <Cart />
          </Layout>
        </ThemeContextProvider>
      </AuthContextProvider>
    </ReduxProvider>
  );
};
