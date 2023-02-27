import HeadText from "@/shared/HeadText";
import { MissionType, SelectedPage } from "@/shared/types"
import { AcademicCapIcon, CircleStackIcon, CodeBracketIcon  } from "@heroicons/react/24/outline"
import { motion } from "framer-motion";
type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}
/* Using Typescript power to instantiate an array of things so we can refer without making repitions */
/* Refers to explicit type from types.ts we crafted for this purpose */
const mission: Array<MissionType> = [
    {
        icon: <CodeBracketIcon className="h-6 w-6" />,
        title: "Staying ahead of the curve with cutting-edge technology and expertise.",
        description: "Tinybrain Ltd stays ahead of the curve by leveraging the latest and most efficient technologies, such as Rust and Typescript."
    },  
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Giving back with our Cybersecurity Education Initiative.",
        description: "As a software development company, Tinybrain Ltd recognizes the importance of cybersecurity in today's digital world. To promote awareness and education on this critical issue, we have launched a cybersecurity education initiative. The aim of this initiative is to provide resources and training to individuals and businesses to help them better protect themselves against cyber threats."
    },
    {
        icon: <CircleStackIcon className="h-6 w-6" />,
        title: "Hosting solutions with our reliable and scalable infrastructure.",
        description: "At Tinybrain Ltd, we understand that server hosting can be complex and overwhelming for many businesses. That's why we provide comprehensive support and guidance throughout the hosting process. Our team of experienced technicians is available 24/7 to assist with any issues or questions that arise, ensuring that businesses can focus on their core operations without worrying about server hosting."
    },
]

const Mission = ({setSelectedPage}: Props) => {
return (
<section
    id="mission"
    className="mx-auto min-h-full w-5/6 py-20"
    >
    <motion.div
    onViewportEnter={() => setSelectedPage(SelectedPage.Mission) }
    >
        <div className="md:my-5 md:w-3/5">
            {/* Header Section */}
            <HeadText>Building big solutions for small minds.</HeadText>
            <p className="my-5 font-jetbrainsmono text-md">
            At Tinybrain Ltd, our mission is to innovate and excel in the field of software development while also competing at the highest level in esports.
            We are passionate about creating cutting-edge software solutions that help our clients stay ahead of the competition.
            Our team of skilled software developers is constantly pushing the boundaries of what's possible in the world of technology.
            We believe that success is not just about hard work, but also about having fun and enjoying the journey. 
            That's why we also invest in our own esports team, where we strive to achieve excellence and showcase our skills to the world.
            Our goal is to create a company culture that promotes creativity, collaboration, and continuous learning, and we are committed to delivering exceptional results for our clients and fans alike.
            </p>
        </div>

        {/* Cool boxes for Mission subtypes */}
        <div className="md:flex items-center justify-between gap-8 mt-5"></div>
            {mission.map((mission: MissionType) => (
                <Mission 
                    key={mission.title}
                    icon = {mission.icon}
                    title={mission.title}
                    description={mission.description}
                    setSelectedPage={setSelectedPage}
                />
            ))}
    </motion.div>
</section>
)
}

export default Mission