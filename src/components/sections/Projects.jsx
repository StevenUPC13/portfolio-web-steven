import { useState } from 'react';
import SectionHeader from '../common/SectionHeader.jsx';
import ProjectCard from '../projects/ProjectCard.jsx';
import ProjectModal from '../projects/ProjectModal.jsx';
import { projects } from '../../data/projects.js';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section-shell">
      <SectionHeader number="05" title="Projects" />
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} onDetails={setSelectedProject} />
        ))}
      </div>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
