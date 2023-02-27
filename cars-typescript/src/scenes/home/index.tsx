import { SelectedPage } from '@/shared/types'
import useMediaQuery from '@/hooks/useMediaQuery'
import BigButton from '@/shared/BigButton'
import tinybraintext from '@/assets/tinybraintext.png'
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
      <div>
        {/* Main header */}
        <div>
          {/* Headings */}
          <div>
            <div>
              <div>
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

            </BigButton>
          </div>
        </div>
        <div>

        </div>
      </div>

    </section>

  )
}

export default Home