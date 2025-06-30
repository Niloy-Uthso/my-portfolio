import Marquee from 'react-fast-marquee';

const skills = [
  { name: 'HTML', src: 'https://i.ibb.co/Kx3WBfmm/html5-emblem-orange-shield-and-white-text-vector.jpg' },
  { name: 'CSS', src: 'https://i.ibb.co/zW8Nj3ZC/css-logo.png' },
  { name: 'JavaScript', src: 'https://i.ibb.co/ZpdbX8Jj/Java-Script-Logo.png' },
  { name: 'React', src: 'https://i.ibb.co/2G5k9ds/0-Hdm7h-BTZ-h-Klbtl-V.png' },
  { name: 'Node.js', src: 'https://i.ibb.co/HTJrT5RD/node-js-logo-png-seeklogo-269242.png' },
  { name: 'Express.js', src: 'https://i.ibb.co/MkZBbYSG/express-logo.png' },
  { name: 'MongoDB', src: 'https://i.ibb.co/S794XyRG/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png' },
  { name: 'C', src: 'https://i.ibb.co/dszD7bzJ/C-Logo.png' },
  { name: 'C++', src: 'https://i.ibb.co/QvxYXKK3/911-c-logo.jpg' },
  { name: 'Java', src: 'https://i.ibb.co/Vc8P0mnv/avbgi11vf.webp' },
  { name: 'OOP', src: 'https://i.ibb.co/ZRxFJFQf/oop-object-oriented-programming-acronym-260nw-2032420412.jpg' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-base-200">
      <h2 className="text-center text-3xl font-bold text-primary mb-10">
        Skills & Technologies
      </h2>

      <Marquee pauseOnHover={true} gradient={false} speed={50}>
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mx-8 transition-transform duration-300 hover:scale-110"
          >
            <img
              src={skill.src}
              alt={skill.name}
              className="w-20 h-20 object-contain mb-2 hover:drop-shadow-lg"
            />
            <p className="text-sm text-base-content">{skill.name}</p>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default Skills;
