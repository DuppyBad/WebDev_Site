// remember, .tsx is typescript components, hence the react img etc etc.
import Navi from "@/scenes/navi"
import { useState } from "react"
import { SelectedPage } from "./shared/types";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  return (
    <div className="app bg-rosePine-surface">
      <Navi
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
       />
    </div>
  )
}

export default App