import { useState } from "react";
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/icon.png"
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import BigButton from "@/shared/BigButton";
type Props = {
    TopOfPage: boolean
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void
}


const Navi = ({TopOfPage, selectedPage, setSelectedPage}: Props) => {
    // flexBetween helps responsiveness, scaling is automated now more or less
    // the fixed class fixes nav to top, top 0 is zeroth pixel top etc
    const flexBetween = "flex items-center justify-between";
    const biggerThanMediumScreen = useMediaQuery("(min-width:1060px)")
    const [MenuToggle, setMenuToggle] = useState<boolean>(false);
    const navBackground = TopOfPage ? "" : "bg-rosePine-love drop-shadow"
  return <nav>
    <div
        className={`${navBackground} ${flexBetween} fixed top-0 z-30 w-full py-8`}
    >
        <div className={`${flexBetween} mx-auto w-5/6`}>
            <div className={`${flexBetween} w-full gap-16`}>
                {/* Here lies the Left Side */}
                <img alt="logo" src={Logo} />
                {/* Beneath lieth the Right */}
                {biggerThanMediumScreen ? (
                    <div className={`${flexBetween} w-full`}>
                        <div className={`${flexBetween} gap-8 text-xl`}>
                            <Link 
                                page="Home"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                /> 
                            <Link 
                                page="Mission"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                />
                            <Link 
                                page="Shop"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                />
                            <Link 
                                page="About Us"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                />
                        </div>
                        <div className={`${flexBetween} gap-8 text-xl`} >
                            <p>Log In</p>
                            <BigButton setSelectedPage={setSelectedPage}>Join Us</BigButton>
                        </div>
                    </div>
                    // The case where we are not bigger than medium
                    ) : (
                        <button className="rounded-full bg-rosePine-love p-2"
                        onClick={() => setMenuToggle(!MenuToggle)}
                        >
                            <Bars4Icon className="h-6 w-6 text-rosePine-text" />
                        </button>
                
                    )}
            </div>
        </div>

    </div>
    {/* Mobile Menu contents */}
    {!biggerThanMediumScreen && MenuToggle && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-rosePine-rose drop-shadow-xl">
        
        <div className="flex justify-end p-12">
            <button onClick={() => setMenuToggle(!MenuToggle)}>
                <XMarkIcon className="h-6 w-6 text-rosePine-text"/>
            </button>
        </div>

        <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                            <Link 
                                page="Home"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                /> 
                            <Link 
                                page="Mission"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                />
                            <Link 
                                page="Shop"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                />
                            <Link 
                                page="About Us"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                />
                        </div>

        </div>
    )}
  </nav>
}

export default Navi