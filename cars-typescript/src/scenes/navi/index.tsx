import { useState } from "react";
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/icon.jpg"
type Props = {}

const Navi = (props: Props) => {
    // flexBetween helps responsiveness, scaling is automated now more or less
    // the fixed class fixes nav to top, top 0 is zeroth pixel top etc
    const flexBetween = "flex items-center justify-between";
  return <nav>
    <div
        className={`${flexBetween} fixed top-0 z-30 w-full py-8`}
    >
        <div className={`${flexBetween} mx-auto w-5/6`}>
            <div className={`${flexBetween} w-full gap-16`}>
                {/* Here lies the Left Side */}
                <img alt="logo" src={Logo} />
                {/* Beneath lieth the Right */}
                <div className={`${flexBetween} w-full`}>
                    <div className={`${flexBetween} gap-8 text-sm`}>
                        <p>Home</p>
                        <p>Mission</p>
                        <p>Shop</p>
                        <p>About Us</p>
                    </div>
                    <div className={`${flexBetween} gap-8`} >
                        <p>Log In</p>
                        <button>Join Us</button>
                    </div>


                </div>
            </div>

        </div>

    </div>
  </nav>
}

export default Navi