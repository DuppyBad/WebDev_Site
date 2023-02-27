import { SelectedPage } from '@/shared/types'
import SponsorRedBull from '@/assets/SponsorRedBull.png'
import useMediaQuery from '@/hooks/useMediaQuery'
import BigButton from '@/shared/BigButton'
import tinybraintext from '@/assets/tinybraintext.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import homepage_img from '@/assets/homepage.jpg'
import { motion } from 'framer-motion'

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
      <motion.div 
        className="md:flex mx-auto w-4/6 items-center justify-center md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home) }
        
      >
        {/* Main header */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* Headings */}
          <motion.div 
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5}}
            transition={{duration: 0.8}}
            variants={{
              hidden: { opacity: 0, x:-100},
              visible: {opacity: 1, x:0},
            }}
          >
            <div className="relative">
              <div className="before:absolute before:top-2 before:right-20 md:mr-40">
                <div className="flex justify-center py-[170px] mx-auto">
                <img alt="tinybrain text" src={tinybraintext} />
                </div>
              </div>
            </div>
            <p className="mt-8 text-lg md:text-start">
              Welcome to Tinybrain Ltd, a leading software development company that is always thinking about the future. 
              We specialize in creating custom software solutions that help businesses stay ahead of the curve in a rapidly evolving digital landscape.
              Our team of experienced developers is passionate about innovation and is always pushing the boundaries of what's possible. 
              At Tinybrain Ltd, we understand that technology is constantly changing, and we're committed to staying ahead of the curve. That's why our tagline is "Thinking about the future" - because we believe that the best way to create success for our clients is to anticipate their needs and develop solutions that meet them before they even realize they need them. Whether you're a startup or a large corporation, we're here to help you harness the power of technology to achieve your business goals.
            </p>
          </motion.div>
          <motion.div className="mt-8 flex items-center gap-8 md:justify-start py-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5}}
            transition={{delay:0.3, duration: 0.8}}
            variants={{
              hidden: { opacity: 0, x:-100},
              visible: {opacity: 1, x:0},
            }}
          >
            {/* Actions */}
            <BigButton setSelectedPage={setSelectedPage}>
              Sign Up
            </BigButton>
            <AnchorLink
              className="text-md font-bold text-rosePine-text underline hover:text-rosePine-love"
              onClick={() => setSelectedPage(SelectedPage.AboutUs)}
              href={`#${SelectedPage.AboutUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>
        {/* Images */}
        <div className="flex basis-3/5 justify-center md:z-10
          md:ml-40 md:mt-16 md:justify-tems-end"
        >
          <img alt = "graphic" src={homepage_img} />
        </div>
      </motion.div>
      {/* misc images */}
      {biggerThanMediumScreen && (
        <div className="h-[150px] w-full bg-rosePine-gold py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img alt="redbull" src={SponsorRedBull} />
            </div>
          </div>
        </div>
      )}
    </section>

  )
}

export default Home