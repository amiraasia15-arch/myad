import { useState } from "react";
import SectionHeader from "../components/SectionHeader";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import projects from "../data/projects";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-100 py-16 px-6 transition-colors duration-300">
      <SectionHeader
        title="̲C̲̲y̲̲b̲̲e̲̲r̲̲s̲̲e̲̲c̲̲u̲̲r̲̲i̲̲t̲̲y̲ ̲P̲̲r̲̲o̲̲j̲̲e̲̲c̲̲t̲̲s̲"
        subtitle="Explore beginner-friendly security projects built to strengthen fundamental concepts."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} onOpen={setSelectedProject} />
        ))}
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};

export default Projects;