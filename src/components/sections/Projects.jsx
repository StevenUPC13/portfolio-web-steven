import SectionHeader from '../common/SectionHeader.jsx';
import ProjectCard from '../projects/ProjectCard.jsx';
import { projects } from '../../data/projects.js';

export default function Projects() {
  return (
    <section id="projects" className="section-shell">
      <SectionHeader number="05" title="Projects" />
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
