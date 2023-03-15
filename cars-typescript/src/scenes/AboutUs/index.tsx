import { SelectedPage } from "@/shared/types"
import { useForm } from "react-hook-form"
import { motion } from "framer-motion"
import HeadText from "@/shared/HeadText";
type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}
// Pulling data from react hook form docs to help build this, remember to reference
const AboutUs = ({setSelectedPage}: Props) => {
  return (
    <section
    id = "aboutus" 
    className="mx-auto w-5/6 pt-24"
    >
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.AboutUs)}>
            {/* Header for AboutUs and contact form */}
            <motion.div
            className="md:w-3/5"
            initial = "hidden"
            whileInView="visible"
            viewport={{once: true, amount : 0.7}}
            transition={{duration: 0.8}}
            variants={{
                hidden: {opacity: 0 , x: -100},
                visible: {opacity: 1, x:0}
            }}
            >
                <HeadText>
                    Get in touch
                </HeadText>
            </motion.div>

        </motion.div>


    </section>
  )
}

export default AboutUs