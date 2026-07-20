import { Outlet } from "react-router";
import { CartContainer } from "../cart/cart-container";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { ProgressBar } from "../progress-bar/progress-bar";

import styles from "./layout.module.css";

export const Layout = ({ children, sidebar }) => {
  return (
    <div className={styles.root}>
      <ProgressBar />
      <Header />
      {sidebar}
      <main className={styles.main}>
        <Outlet />
        {children}
      </main>
      <CartContainer />
      <Footer />
    </div>
  );
};

<Layout sidebar={<div>sidebar</div>}>content</Layout>;
