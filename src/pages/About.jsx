import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      id="about"
      className="pt-32 pb-16 px-4 lg:px-20 bg-base-100" // pt-32 adds enough top padding for fixed navbar
    >
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6 text-primary">About Me</h2>

        {/* Image under the heading */}
        <img
          src="photo_2025-06-25_18-06-54.jpg" // replace with your image path
          alt="About Icon"
          className="mx-auto mb-8 w-24 h-24 rounded-full shadow-md"
        />

        <p className="text-base-content leading-relaxed text-lg">
          I'm <span className="font-semibold">Niloy Sarkar Uthso</span>, a developer driven by curiosity and creativity.
          <br /><br />
          I started my journey in tech with a strong focus on problem solving, regularly practicing on platforms like Codeforces,UVa,LeetCode etc. Over time, I found my passion expanding into <span className="font-medium text-primary">MERN stack development</span>, where I could bring full applications to life from frontend to backend.
          <br /><br />
          I enjoy building meaningful, clean, and scalable web experiences. My aim is always to write code that not only works — but feels right.
          <br /><br />
          When I'm not coding, I recharge by diving into <span className="italic">music</span>, following <span className="italic">cricket</span>, or immersing myself in <span className="italic">spiritual and religious activities</span>. I walk through life guided by faith in my Bhairava and beloved mother Durga who gives me strength, focus, and clarity.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
