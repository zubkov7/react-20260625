import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { ProgressBar } from "../progress-bar/progress-bar";

export const Layout = ({ children }) => {
  return (
    <div>
      <ProgressBar />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
