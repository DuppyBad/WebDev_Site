import { SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'
import HeadText from '@/shared/HeadText';
import developerimg from '@/assets/developer.jpg'
type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const shop = ({setSelectedPage}: Props) => {
  return (
    <section id="shops" className='w-full bg-inherit'>
        <motion.div
         onViewportEnter={() => setSelectedPage(SelectedPage.Shop)}
         >
            <motion.div className='mx-auto w-5/6'
            initial = "hidden"
            whileInView="visible"
            viewport={{once: true, amount : 0.7}}
            transition={{duration: 0.8}}
            variants={{
                hidden: {opacity: 0 , x: -100},
                visible: {opacity: 1, x:0}
            }}
            >
                <div className='md:w-3/5'>
                    <HeadText>Our Services</HeadText>
                    <p className='py-5'>
                        At Tinybrain Ltd, we understand that every business has unique needs and requirements. That's why we specialize in creating custom software solutions that are tailored to the specific needs of our clients. We work closely with our clients to understand their business goals, workflows, and pain points. From there, we design and develop software that addresses those needs and helps our clients achieve their objectives. Our development process is collaborative, transparent, and iterative, ensuring that we deliver high-quality software that meets or exceeds our clients' expectations. Whether you need a web application, a mobile app, or a cloud-based solution, we have the expertise and experience to bring your vision to life. Contact us today to learn more about how we can help your business grow and succeed with custom software development.
                    </p>
                </div>

            </motion.div>
        <img alt="developer" src={developerimg} className='w-full transform scale-75'></img>        
         </motion.div>
    </section>
  )
}

export default shop