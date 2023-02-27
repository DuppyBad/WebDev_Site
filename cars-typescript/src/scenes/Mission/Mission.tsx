import { SelectedPage } from "@/shared/types"
import AnchorLink from "react-anchor-link-smooth-scroll"
type Props = {
    icon: JSX.Element;
    title: string;
    description: string;
    setSelectedPage: (value: SelectedPage) => void;

}

const Mission = ({icon, title, description, setSelectedPage}: Props) => {
  return (
    <div className="mt-5 rounded-lg border-2 border-rosePine-gold px-5 py-16 text-center">
        <div className="mb-4 flex justify-center">
            <div className="rounded-full border-2 border-rosePine-gold bg-rosePine-pine p-4">
            {icon}
            </div>
        </div>

        <h4 className="font-bold font-jetbrainsmono">
        {title}
        </h4>
        <p className="my-3">
        <AnchorLink
            className="text-md font-bold text-rosePine-text underline hover:text-rosePine-love"
            onClick={() => setSelectedPage(SelectedPage.AboutUs)}
            href={`#${SelectedPage.AboutUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>

        </p>

    </div>
  )
}

export default Mission