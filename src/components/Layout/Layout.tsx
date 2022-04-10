import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { SearchPanel } from "../SeachPanel/SearchPanel";

export const Layout = () => {
  return (
    <div>
      <Header />
      <SearchPanel />
      <Outlet />
      <Footer />
    </div>
  );
};
