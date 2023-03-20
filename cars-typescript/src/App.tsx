// remember, .tsx is typescript components, hence the react img etc etc.
import Navi from "@/scenes/navi";
import Job from "@/routes/JobList";
import { useEffect, useState } from "react";
import Home from "@/scenes/home";
import { SelectedPage } from "./shared/types";
import Mission from "@/scenes/Mission";
import Shop from "@/scenes/shop";
import AboutUs from "@/scenes/AboutUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "@/routes/LoginPage";
import Register from "@/routes/Register";
import Missing from "@/routes/404";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

  // state to save users name so we can call back to it
  // The weird type declaration denotes that the variable can be either string or null, as when there is no logged in user, it will be null
  const [userName, setUserName] = useState<string | null>(null);
  const [TopOfPage, setTopOfPage] = useState<boolean>(true);
  // Makes it so that we know where we are on page for the sake of navbar animations
  useEffect(() => {
    const ScrollMove = () => {
      if (window.scrollY === 0) {
        setTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setTopOfPage(false);
    };
    window.addEventListener("scroll", ScrollMove);
    return () => window.removeEventListener("scroll", ScrollMove);
    // Protect from memory leak and eternal function running
  });
  return (
    // Browser router does the linking so everything can be ran client-side
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
        <Route
          path="/Job"
          element={
            <div className="bg-rosePine-surface">
              <Navi
                TopOfPage={TopOfPage}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Job />
            </div>
          }
        />
        <Route
          path="/Login"
          element={<LoginPage setUserName={setUserName} />}
        />
        <Route path="/Register" element={<Register />} />
        <Route path="*" element={<Missing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
