import { Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { MainPageAsync } from "./pages/main/MainPage.async";
import { AboutPageAsync } from "./pages/about/AboutPage.async";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";
import "./styles/index.scss";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={"/"}>Домой</Link>
      <Link to={"/about"}>ABOUT</Link>
      <Suspense fallback={<div></div>}>
        <Routes>
          <Route path={"/"} element={<MainPageAsync />}></Route>
          <Route path={"/about"} element={<AboutPageAsync />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
