import { HeadphonesLayout } from "../headphones-page/headphones-page";
import { Layout } from "../layout/layout";
import { ThemeContextProvider } from "../theme-context/theme-context";
import { AuthContextProvider } from "../auth-context/auth-context";
import { ReduxProvider } from "../redux-provider/redux-provider";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";

import "./reset.css";
import "./app.css";
import { HeadphonePage } from "../../pages/heaphone-page";

export const App = () => {
  return (
    <ReduxProvider>
      <AuthContextProvider>
        <ThemeContextProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route index element={<div>home page</div>} />
                <Route path='/about' element={<div>about page</div>} />
                <Route path='/contacts' element={<div>contacts page</div>} />
                <Route path='/delivery'>
                  <Route index element={<div>index delivery</div>} />
                  <Route path='avia' element={<div>avia</div>} />
                  <Route path='auto' element={<div>auto</div>} />
                </Route>
                <Route path='/headphone' element={<HeadphonesLayout />}>
                  <Route path=':headphoneId' element={<HeadphonePage />} />
                </Route>
                {/* <Route path='*' element={<div>not found</div>} /> */}
                <Route path='*' element={<Navigate to='/' />} />
              </Route>

              {/* <Layout>
                <HeadphonesPage />
              </Layout> */}
            </Routes>
          </BrowserRouter>
        </ThemeContextProvider>
      </AuthContextProvider>
    </ReduxProvider>
  );
};
