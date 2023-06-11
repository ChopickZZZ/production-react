import { Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { MainPage } from "pages/main";
import { AboutPage } from "pages/about";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
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
          <Route path={"/"} element={<MainPage />}></Route>
          <Route path={"/about"} element={<AboutPage />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
