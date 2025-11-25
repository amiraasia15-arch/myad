import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader";
import skills from "../data/skills";

const About = () => {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-100 py-16 px-6 transition-colors duration-300">
      <SectionHeader
        title="̲A̲̲b̲̲o̲̲u̲̲t̲ ̲M̲̲e̲"
        subtitle="Who I am, what I do, and why I’m passionate about cybersecurity."
      />

      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          className="text-gray-700 dark:text-gray-300 leading-relaxed mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          I’m <span className="font-semibold text-[#14b9a3] dark:text-pink-500">𝓜𝓘𝓜𝓘</span>,  
          a web developer and cybersecurity enthusiast.  
          I love building secure websitess and sharing my knowledge with others in the tech community.
          My goal is to help others understand security from a developer’s perspective.
        </motion.p>

         <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {skills.map((skill, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2 text-sm font-medium text-gray-800 dark:text-gray-200 shadow-sm hover:shadow-md transition"
            >
              {skill}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;