import AnchorLink from "react-anchor-link-smooth-scroll"
import React from "react"
import { SelectedPage } from "./types"


type Props = {
    children: React.ReactNode;
    setSelectedPage:(value: SelectedPage) => void; 
}

const BigButton = ({children, setSelectedPage}: Props) => {
  return (
    <AnchorLink
        className="rounded-lg bg-rosePine-love px-10 py-2 hover:bg-rosePineDawn-love hover:text-rosePine-text"
        onClick={() => setSelectedPage(SelectedPage.AboutUs)}
        href = {`#${SelectedPage.AboutUs}`}
    >
        {children}
    </AnchorLink>
  )
}

export default BigButton