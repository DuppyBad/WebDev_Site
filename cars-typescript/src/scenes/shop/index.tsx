import { SelectedPage, ServiceType } from "@/shared/types";
import javascriptimg from "@/assets/javascript.jpg";
import { motion } from "framer-motion";
import HeadText from "@/shared/HeadText";
import developerimg from "@/assets/developer.jpg";
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

// We use another typed constant to make this scalable in future
const services: Array<ServiceType> = [
  {
    name: "Web Development Services",
    about: `We use Typescript to write safer and more scalable code, which allows us to build complex web applications more efficiently. We also leverage the power of Web Assembly to create high-performance applications that can run in any modern web browser.
Our web development services include everything from custom web application development to web design, testing, and deployment. We work closely with our clients to understand their unique business needs and provide them with tailored solutions that meet their requirements.
So whether you're looking to build a new web application from scratch or need help optimizing an existing one, Tinybrain Ltd is here to help. Contact us today to learn more about our web development services and how we can help take your business to the next level.`,
    image: javascriptimg,
  },
];
// Maybe share this boilerplate with the other pages?
const shop = ({ setSelectedPage }: Props) => {
  return (
    <section id="shops" className="w-full bg-inherit py-44">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Shop)}>
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HeadText>Our Services</HeadText>
            <p className="py-5">
              At Tinybrain Ltd, we understand that every business has unique
              needs and requirements. That's why we specialize in creating
              custom software solutions that are tailored to the specific needs
              of our clients. We work closely with our clients to understand
              their business goals, workflows, and pain points. From there, we
              design and develop software that addresses those needs and helps
              our clients achieve their objectives. Our development process is
              collaborative, transparent, and iterative, ensuring that we
              deliver high-quality software that meets or exceeds our clients'
              expectations. Whether you need a web application, a mobile app, or
              a cloud-based solution, we have the expertise and experience to
              bring your vision to life. Contact us today to learn more about
              how we can help your business grow and succeed with custom
              software development.
            </p>
          </div>
        </motion.div>
        {/* Preparing the size overflow */}
        <div className="mt-10 h-[400px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[3000px] whitespace-nowrap">
            {/*      {services.map((item,index)=> (
                    <Class/>
                ))} */}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default shop;
