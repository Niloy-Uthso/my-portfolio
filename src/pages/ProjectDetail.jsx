import { useParams } from 'react-router';

const projectDetails = {
  project1: {
    name: 'HobbyHub',
    stack: 'React, Tailwind, Node.js, Express, MongoDB, Firebase(for authentication) ',
    description: 'HobbyHub is a full-stack MERN (MongoDB, Express, React, Node.js) web application designed to connect individuals through shared hobbies. Users can discover, join, and manage local interest-based groups such as book clubs, hiking squads, gaming crews, or photography circles. With secure authentication and intuitive group management, HobbyHub encourages meaningful offline and online connections through shared passions.',
     images: [
      'https://i.ibb.co/mC0nwTxT/Screenshot-2025-06-30-022416.png',
      'https://i.ibb.co/hxLwpJfS/Screenshot-2025-06-30-022608.png',
      'https://i.ibb.co/6RfT2njm/Screenshot-2025-06-30-022826.png',
    ],
    live: 'https://loquacious-bublanina-4e27a4.netlify.app',
    github: 'https://github.com/Niloy-Uthso/HobbyHub-client-side',
    challenges: 'Complex filtering logic and user roles',
    improvements: 'Add real-time chat, notification system',
  },
  project2: {
    name: 'Servico',
    stack: 'React, Tailwind, Node.js, Express, MongoDB, Firebase JWT Auth (custom token handling)',
    description: 'The Servico is a robust full-stack MERN application that empowers users to explore, add, and review various services. Designed with usability, security, and scalability in mind, the system includes dynamic CRUD functionality, JWT-based Firebase authentication, advanced search & filter options, responsive design, and real-time user interactions. It simulates real-world service platforms where users can contribute, interact, and manage services with accountability.',
     images: [
      'https://i.ibb.co/s9NjMZkr/Screenshot-2025-06-30-023812.png',
      'https://i.ibb.co/jxWbX1J/Screenshot-2025-06-30-023917.png',
      'https://i.ibb.co/MysVvj3H/Screenshot-2025-06-30-024013.png',
    ],
    live: 'https://frolicking-lamington-6aed6a.netlify.app',
    github: 'https://github.com/Niloy-Uthso/SERVICO-client-side',
    challenges: 'Implementing user review system.',
    improvements: 'Role-Based Access Control',
  },
  project3: {
    name: 'SocialSphere',
    stack: 'React, Tailwind CSS, DaisyUI, React Router,Firebase (email/password + Google),',
    description: 'SocialSphere is a dynamic and engaging event discovery web platform designed for users to explore and reserve seats for upcoming local events such as workshops, tech conferences, art expos, and more. The platform emphasizes user interaction, security, and smooth UX using Firebase authentication, protected routing, form validation, and dynamic event listings. Built with a vibrant and responsive UI, it provides seamless experiences across all devices.',
     images: [
      'https://i.ibb.co/zW8k9h5q/Screenshot-2025-06-30-024309.png',
      'https://i.ibb.co/cSX67J1N/Screenshot-2025-06-30-024416.png',
      'https://i.ibb.co/9H3cLjjG/Screenshot-2025-06-30-024701.png',
    ],
    live: ' https://effervescent-dieffenbachia-880115.netlify.app',
    github: 'https://github.com/Niloy-Uthso/Event-Explorer-repo',
    challenges: 'Implementing firebase authentication system',
    improvements: 'Add rating & review system for events,Real-time seat availability status',
  },
   project4: {
    name: 'BondMate',
    stack: 'React, React Router, Tailwind CSS,React Hook Form, Axios, Recharts,Node.js, Express.js, MongoDB, Firebase Admin SDK, Stripe',
    description: 'BondMate is a modern, full-stack matrimonial web application that helps people find meaningful connections and manage biodata profiles efficiently.',
     images: [
      'https://i.ibb.co/VdwsJw8/image.png',
      'https://i.ibb.co/bRCqkwk4/image.png',
      'https://i.ibb.co/4wnf3cvt/image.png',
    ],
    live: 'https://vermillion-buttercream-96884a.netlify.app/',
    github: 'https://github.com/Niloy-Uthso/BondMate-Client-Side',
    challenges: 'Implementing role based dashboard and payment based premium role',
    improvements: 'Real time chat and video calls',
  },
  
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectDetails[id];

  if (!project) return <div className="p-10">Project not found.</div>;

  return (
    <div className="max-w-5xl mx-auto px-4 py-16 mt-10">
      <h2 className="text-3xl font-bold text-primary mb-6">{project.name}</h2>

      {/* Horizontal Scrollable Image Gallery */}
      <div className="overflow-x-auto mb-8">
        <div className="flex gap-4">
          {project.images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Screenshot ${i + 1}`}
              className="h-64 rounded-lg shadow-md object-cover min-w-[300px] hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
      </div>

      <p className="mb-2"><strong>Stack:</strong> {project.stack}</p>
      <p className="mb-2"><strong>Description:</strong> {project.description}</p>
      <p className="mb-2"><strong>Challenges:</strong> {project.challenges}</p>
      <p className="mb-6"><strong>Improvements:</strong> {project.improvements}</p>

      <a href={project.live} className="btn btn-success btn-sm mr-3" target="_blank" rel="noreferrer">
        Live Site
      </a>
      <a href={project.github} className="btn btn-outline btn-sm" target="_blank" rel="noreferrer">
        GitHub (Client)
      </a>
    </div>
  );
};

export default ProjectDetail;
