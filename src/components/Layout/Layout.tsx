import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { UserPanel } from "../UserPanel/UserPanel";

export const Layout = () => {
  return (
    <div>
      <Header />
      <UserPanel />
      <Outlet />
      <Footer />
    </div>
  );
};
