import "./App.scss";
import Navbar from "./components/Navbar";
import Home from "./pages/Home.js";
import Menu from "./pages/Menu.js";
import { Route, Routes } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Bbopgi from "./pages/sections/Bbopgi";
import Stationery from "./pages/sections/Stationery";
import Sticker from "./pages/sections/Sticker";
import { useEffect, useState } from "react";
import PopupPage from "./pages/contents/PopupPage";
import SnackbarPage from "./pages/contents/SnackbarPage";
import NavigationPage from "./pages/contents/NavigationPage";
import InputPage from "./pages/contents/InputPage";
import ButtonPage from "./pages/contents/ButtonPage";
import MenuPage from "./pages/contents/MenuPage";
import BreadcrumbPage from "./pages/contents/BreadcrumbPage";
import CarouselPage from "./pages/contents/CarouselPage";
import TogglePage from "./pages/contents/TogglePage";

function App() {
  //colors
  const colors = {
    red: "#FF0400",
    pink: "#FF85D5",
    orange: "#FF5C00",
    yellow: "#FFD600",
    green: "#00B026",
    blue: "#0066FF",
  };

  const [isMenu, setIsMenu] = useState(false);
  const [menuHidden, setMenuHidden] = useState(false);
  const [home, setHome] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    console.log(isMenu);
  }, [isMenu]);

  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 400 });
    return isDesktop ? children : null;
  };
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 400 });
    return isMobile ? children : null;
  };
  return (
    <div className="main stop-dragging">
      {menuHidden ? (
        ""
      ) : (
        <Mobile>
          <Navbar
            setMenu={setMenu}
            isMenu={isMenu}
            menuHidden={menuHidden}
            setIsMenu={setIsMenu}
            setMenuHidden={setMenuHidden}
          ></Navbar>
        </Mobile>
      )}
      <Routes>
        <Route
          path="/"
          element={
            <Home
              home={home}
              setHome={setHome}
              colors={colors}
              setMenuHidden={setMenuHidden}
              setMenu={setMenu}
            />
          }
        />
        <Route
          path="/menu"
          element={
            <Menu
              home={home}
              setHome={setHome}
              colors={colors}
              setMenuHidden={setMenuHidden}
              menu={menu}
              setMenu={setMenu}
            />
          }
        />
        <Route
          path="/bbopgi"
          element={
            <Bbopgi
              colors={colors}
              isMenu={isMenu}
              setIsMenu={setIsMenu}
              setMenuHidden={setMenuHidden}
              setMenu={setMenu}
            />
          }
        />
        <Route
          path="/stationery"
          element={
            <Stationery
              setMenu={setMenu}
              colors={colors}
              setMenuHidden={setMenuHidden}
            />
          }
        />
        <Route
          path="/sticker"
          element={
            <Sticker
              setMenu={setMenu}
              colors={colors}
              setMenuHidden={setMenuHidden}
            />
          }
        />
        <Route
          path="/bbopgi/popup"
          element={<PopupPage colors={colors} setMenuHidden={setMenuHidden} />}
        />
        <Route
          path="/bbopgi/input"
          element={<InputPage colors={colors} setMenuHidden={setMenuHidden} />}
        />
        <Route
          path="/bbopgi/button"
          element={<ButtonPage colors={colors} setMenuHidden={setMenuHidden} />}
        />
        <Route
          path="/stationery/snackbar"
          element={
            <SnackbarPage colors={colors} setMenuHidden={setMenuHidden} />
          }
        />
        <Route
          path="/stationery/menu"
          element={<MenuPage colors={colors} setMenuHidden={setMenuHidden} />}
        />
        <Route
          path="/stationery/breadcrumb"
          element={
            <BreadcrumbPage colors={colors} setMenuHidden={setMenuHidden} />
          }
        />
        <Route
          path="/sticker/navigation"
          element={
            <NavigationPage colors={colors} setMenuHidden={setMenuHidden} />
          }
        />
        <Route
          path="/sticker/carousel"
          element={
            <CarouselPage colors={colors} setMenuHidden={setMenuHidden} />
          }
        />
        <Route
          path="/sticker/toggle"
          element={<TogglePage colors={colors} setMenuHidden={setMenuHidden} />}
        />
      </Routes>

      {menuHidden ? (
        ""
      ) : (
        <Desktop>
          <Navbar
            menu={menu}
            isMenu={isMenu}
            setIsMenu={setIsMenu}
            menuHidden={menuHidden}
            setMenuHidden={setMenuHidden}
          ></Navbar>
        </Desktop>
      )}
    </div>
  );
}

export default App;
