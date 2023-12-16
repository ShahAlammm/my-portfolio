/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";
import  {SectionWrapper}  from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          // eslint-disable-next-line react/no-unknown-property
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center "
        >
          <img src={icon} alt={title}
          className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {

  // const handleDownload = () => {
  //   // Replace 'YOUR_GOOGLE_DRIVE_LINK' with the actual shareable link of your resume
  //   const googleDriveLink = 'https://drive.google.com/drive/folders/1BsxE1QggKs6y_PJssnAJov0ReRWFcZSn';
  //   // Open a new window with the Google Drive link
  //   window.open(googleDriveLink, '_blank');
  // };

  const handleDownload = () => {
    const resumeUrl = '../../public/Q-A.pdf';

    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'your_resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled web developer with experience in JavaScript, and expertise
        in frameworks like React, Node.js and Next.js. I'm a quick learner and
        collaborate closely with clients to create efficient, scalable, and
        user-friendly solutions that solve real-world problems. Let's work
        together to bring your ideas to life!
      </motion.p>

      <div className="mt-10 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
         <button onClick={handleDownload} className="btn btn-lg bg-[#915eff] text-white mt-10">Resume</button>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
