import { SelectedPage } from '@/shared/types'
import SponsorRedBull from '@/assets/SponsorRedBull.png'
import useMediaQuery from '@/hooks/useMediaQuery'
import BigButton from '@/shared/BigButton'
import tinybraintext from '@/assets/tinybraintext.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import homepage_img from '@/assets/homepage.jpg'
type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({setSelectedPage}: Props) => {
  const biggerThanMediumScreen = useMediaQuery("(min-width:1060px")
  return (
    <section
    id = "home"
    className="gap-16 bg-rosePine-overlay pb-10 pt-10 md:h-full md:pb-0"
    >
      {/* Image header */}
      <div className="md:flex mx-auto w-4/6 items-center justify-center md:h-5/6">
        {/* Main header */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* Headings */}
          <div className="md:-mt-20">
            <div className="relative">
              <div className="before:absolute before:top-2 before:right-20 before:content-shadetext">
                <img alt="tinybrain text" src={tinybraintext} />
              </div>
            </div>
            <p>
              Bringing you the finest in fashion, design and development.
              Contact us for rates on bespoke websites, or sign in for prebuilt designs.
            </p>
          </div>
          <div>
            {/* Actions */}
            <BigButton setSelectedPage={setSelectedPage}>
              Sign Up
            </BigButton>
            <AnchorLink
              className="text-sm font-bold text-rosePine-text underline hover:text-rosePine-love"
              onClick={() => setSelectedPage(SelectedPage.AboutUs)}
              href={`#${SelectedPage.AboutUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </div>
        </div>
        {/* Images */}
        <div>
          <img alt = "graphic" src={homepage_img} />
        </div>
      </div>
      {/* misc images */}
      {biggerThanMediumScreen && (
        <div>
          <div>
            <div>
              <img alt="redbull" src={SponsorRedBull} />
            </div>
          </div>
        </div>
      )}
    </section>

  )
}

export default Home