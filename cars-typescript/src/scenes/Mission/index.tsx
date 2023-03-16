import ActionButton from "@/shared/BigButton";
import HeadText from "@/shared/HeadText";
import { MissionType, SelectedPage } from "@/shared/types";
import {
  CircleStackIcon,
  CodeBracketIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import MissionBox from "./Mission";
import brainclean from "@/assets/brainclean.png";

const boxes: Array<MissionType> = [
  {
    icon: <CodeBracketIcon className="h-6 w-6" />,
    title:
      "Staying ahead of the curve with cutting-edge technology and expertise.",
    description:
      "Tinybrain Ltd stays ahead of the curve by leveraging the latest and most efficient technologies, such as Rust and Typescript.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Giving back with our Cybersecurity Education Initiative.",
    description:
      "As a software development company, Tinybrain Ltd recognizes the importance of cybersecurity in today's digital world. To promote awareness and education on this critical issue, we have launched a cybersecurity education initiative. The aim of this initiative is to provide resources and training to individuals and businesses to help them better protect themselves against cyber threats.",
  },
  {
    icon: <CircleStackIcon className="h-6 w-6" />,
    title: "Hosting solutions with our reliable and scalable infrastructure.",
    description:
      "At Tinybrain Ltd, we understand that server hosting can be complex and overwhelming for many businesses. That's why we provide comprehensive support and guidance throughout the hosting process. Our team of experienced technicians is available 24/7 to assist with any issues or questions that arise, ensuring that businesses can focus on their core operations without worrying about server hosting.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Missions = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="missions"
      className="mx-auto min-h-full w-5/6 bg-inherit py-20"
    >
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Mission)}>
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HeadText>Building big solutions for small minds.</HeadText>
          <p className="text-md my-5 font-jetbrainsmono">
            At Tinybrain Ltd, our mission is to innovate and excel in the field
            of software development while also competing at the highest level in
            esports. We are passionate about creating cutting-edge software
            solutions that help our clients stay ahead of the competition. Our
            team of skilled software developers is constantly pushing the
            boundaries of what's possible in the world of technology. We believe
            that success is not just about hard work, but also about having fun
            and enjoying the journey. That's why we also invest in our own
            esports team, where we strive to achieve excellence and showcase our
            skills to the world. Our goal is to create a company culture that
            promotes creativity, collaboration, and continuous learning, and we
            are committed to delivering exceptional results for our clients and
            fans alike.
          </p>
        </motion.div>

        {/* MISSIONS */}
        <motion.div
          className="md:flex mt-5 items-center justify-between gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {boxes.map((mission: MissionType) => (
            <MissionBox
              key={mission.title}
              icon={mission.icon}
              title={mission.title}
              description={mission.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="md:mt-28 md:flex mt-16 items-center justify-between gap-20">
          {/* GRAPHIC */}
          <img className="mx-auto" alt="Brain" src={brainclean} />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1]">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HeadText>
                    JOIN US IN THE{" "}
                    <span className="text-primary-500">FUTURE</span>
                  </HeadText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                As the esports and software development industries continue to
                grow rapidly, now is the perfect time to invest in Tinybrain
                Ltd. Our team of skilled developers and engineers have a deep
                understanding of the esports industry, and we are constantly
                innovating to develop cutting-edge solutions that meet the needs
                of esports organizations and fans alike. Our software
                development services are highly sought after, and we have a
                proven track record of delivering custom software solutions that
                help businesses grow and succeed. By investing in Tinybrain Ltd,
                you will be supporting a company that is at the forefront of two
                rapidly growing industries, and poised for significant growth in
                the coming years. With our strong leadership, experienced team,
                and commitment to innovation and excellence, we are confident
                that Tinybrain Ltd is an excellent investment opportunity.
                Contact us today to learn more about how you can invest in the
                future of esports and software development with Tinybrain Ltd.
              </p>
              <p className="mb-5">
                Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                tellus quam porttitor. Mauris velit euismod elementum arcu neque
                facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                enim mattis odio in risus nunc.
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1]">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Missions;
