import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader";
import { Link } from "react-router-dom";
import heart from "../assets/heart.svg"

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-white dark:bg-gray-950 transition-colors duration-300">
      <motion.img
        src={heart}
        alt="Profile"
        className="w-40 h-40 rounded-full border-4 border-green-200 mb-6 shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      />
      <motion.h1
        className="text-4xl font-extrabold text-gray-800 dark:text-gray-100"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        𝐻𝑒𝓁𝓁𝑜 𝐼'𝓂 <span className="text-purple-700 dark:text-yellow-300">𝑀𝐼𝑀𝐼</span>
      </motion.h1>
      <motion.p
        className="mt-3 text-gray-600 dark:text-gray-300 max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        A passionate Cybersecurity Enthusiast & Full-Stack Developer.  
        I love building secure, modern web applications and teaching others how to protect digital systems.
      </motion.p>

      <motion.div
        className="mt-8 flex flex-wrap gap-4 justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <Link
          to="/projects"
          className="bg-purple-600 dark:bg-yellow-300 hover:bg-pink-500 text-white dark:text-black hover:text-shadow-fuchsia-200 dark:hover:text-white px-5 py-2 rounded-lg font-medium transition"
        >
          View My Projects
        </Link>
        <Link
          to="/contact"
          className="border border-purple-600 dark:border-yellow-300 text-black dark:text-green-200 hover:bg-pink-500 hover:text-white px-5 py-2 rounded-lg font-medium transition"
        >
          Contact Me
        </Link>
      </motion.div>
    </section>
  );
};

export default Home;
