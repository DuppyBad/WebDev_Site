// remember, .tsx is typescript components, hence the react img etc etc.
import Navi from "@/scenes/navi";
import { useEffect, useState } from "react";
import Home from "@/scenes/home";
import { SelectedPage } from "./shared/types";
import Mission from "@/scenes/Mission";
import Shop from "@/scenes/shop";
import AboutUs from "@/scenes/AboutUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "@/routes/LoginPage";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [TopOfPage, setTopOfPage] = useState<boolean>(true);
  // Makes it so that we know where we are on page for the sake of navbar animations
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // Protect from memory leak and eternal function running
  });
  return (
    // Browser router does the linking so everything can be ran client-side
    // May malfunction, was drawn up quickly
    // The routes now function, path specificies the URI
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="bg-rosePine-surface">
              <Navi
                TopOfPage={TopOfPage}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Home setSelectedPage={setSelectedPage} />
              <Mission setSelectedPage={setSelectedPage} />
              <Shop setSelectedPage={setSelectedPage} />
              <AboutUs setSelectedPage={setSelectedPage} />
            </div>
          }
        />
        <Route path="/Login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
