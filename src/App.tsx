import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { MainPage } from "./pages/MainPage/MainPage";
import { SingleItemPage } from "./pages/SingleItemPage/SingleItemPage";
import "../src/assets/styles/normalize.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/category:" element={<SingleItemPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
