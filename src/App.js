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
    <div className="stop-dragging">
      <Mobile>
        <Navbar isMenu={isMenu} setIsMenu={setIsMenu}></Navbar>
      </Mobile>
      <Routes>
        <Route path="/" element={<Home colors={colors} />} />
        <Route path="/menu" element={<Menu colors={colors} />} />
        <Route
          path="/bbopgi"
          element={
            <Bbopgi colors={colors} isMenu={isMenu} setIsMenu={setIsMenu} />
          }
        />
        <Route path="/stationery" element={<Stationery colors={colors} />} />
        <Route path="/sticker" element={<Sticker colors={colors} />} />
        <Route path="/bbopgi/popup" element={<PopupPage colors={colors} />} />
        <Route path="/bbopgi/input" element={<InputPage colors={colors} />} />
        <Route path="/bbopgi/button" element={<ButtonPage colors={colors} />} />
        <Route
          path="/stationery/snackbar"
          element={<SnackbarPage colors={colors} />}
        />
        <Route path="/stationery/menu" element={<MenuPage />} colors={colors} />
        <Route
          path="/stationery/breadcrumb"
          element={<BreadcrumbPage colors={colors} />}
        />
        <Route
          path="/sticker/navigation"
          element={<NavigationPage colors={colors} />}
        />
        <Route
          path="/sticker/carousel"
          element={<CarouselPage colors={colors} />}
        />
        <Route
          path="/sticker/toggle"
          element={<TogglePage colors={colors} />}
        />
      </Routes>
      <Desktop>
        <Navbar isMenu={isMenu} setIsMenu={setIsMenu}></Navbar>
      </Desktop>
    </div>
  );
}

export default App;
