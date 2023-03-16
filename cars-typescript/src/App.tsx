// remember, .tsx is typescript components, hence the react img etc etc.
import Navi from "@/scenes/navi"
import { useEffect, useState } from "react"
import Home from "@/scenes/home"
import { SelectedPage } from "./shared/types";
import Mission from "@/scenes/Mission"
import Shop from "@/scenes/shop"
import AboutUs from "@/scenes/AboutUs";
import { BrowserRouter } from 'react-router-dom';
import LoginPage from '@/routes/LoginPage'

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const[TopOfPage, setTopOfPage] =useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setTopOfPage(false);
    }
    window.addEventListener("scroll",handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // Protect from memory leak and eternal function running
  })
  return (
    <div className="bg-rosePine-surface">
      <Navi
        TopOfPage={TopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage}/>
      <Mission setSelectedPage={setSelectedPage}/>
      <Shop setSelectedPage={setSelectedPage} />
      <AboutUs setSelectedPage={setSelectedPage} />
   {/*   <Route path="/login" Component={LoginPage} /> */}
    </div>
  )
}

export default App