import { motion, useScroll, useTransform } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  // Track scroll progress
  const { scrollY } = useScroll();

  // Link opacity and background fade to scroll progress
  const opacity = useTransform(scrollY, [0, 700], [1, 0]);
  const backgroundOpacity = useTransform(scrollY, [0, 700], [0, 1]);

  return (
    <motion.section
      style={{ opacity }} // Reduce opacity of the entire Hero section
      className={`relative w-full h-screen mx-auto`}
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 3D Canvas */}
      <div className="absolute inset-0 z-10 pointer-events-auto">
        <ComputersCanvas />
      </div>

      {/* Black Fade Background */}
      <motion.div
        style={{ opacity: backgroundOpacity }} // Black background fade effect
        className="absolute inset-0 bg-black z-5 pointer-events-none"
      ></motion.div>

      {/* Hero Content */}
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto md:px-0 xs:px-8 sm:px-16 flex flex-row items-start gap-5 z-20 pointer-events-none`}
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#c648c3]">Iffat</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          I design interactive 3D visuals and combine <br className="sm:block hidden" />
          creativity with web and app solutions to <br className="sm:block hidden" /> bring your ideas to life!
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-20 pointer-events-none">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </motion.section>
  );
};

export default Hero;
