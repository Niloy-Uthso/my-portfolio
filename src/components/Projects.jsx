import { Link } from 'react-router';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 'project1',
    name: 'HobbyHub',
    image: 'https://i.ibb.co/mC0nwTxT/Screenshot-2025-06-30-022416.png',
  },
  {
    id: 'project2',
    name: 'Servico',
    image: 'https://i.ibb.co/s9NjMZkr/Screenshot-2025-06-30-023812.png',
  },
  {
    id: 'project3',
    name: 'SocialSphere',
    image: 'https://i.ibb.co/zW8k9h5q/Screenshot-2025-06-30-024309.png',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-base-200 px-4 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-primary text-center mb-10">Projects</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map(project => (
            <div key={project.id} className="bg-base-100 rounded-xl shadow-lg overflow-hidden">
              <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-accent">{project.name}</h3>
                <Link to={`/projects/${project.id}`} className="btn btn-sm btn-primary mt-4">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
