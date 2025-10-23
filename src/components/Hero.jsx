import { motion } from 'framer-motion';
import SocialLinks from './SocialLinks';

const Hero = () => {
  return (
    <section className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* Profile Image with Fade + Scale */}
       <motion.img
  src="/photo_2025-06-25_18-06-54.jpg"
  alt="Niloy Uthso"
  className="max-w-xs rounded-full shadow-2xl cursor-pointer"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  whileHover={{ scale: 1.05, rotate: 0, boxShadow: '0px 8px 20px rgba(0, 132, 255, 0.4)' }}
  transition={{ type: 'spring', stiffness: 200, damping: 12 }}
/>

        {/* Text Content */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold">Hi, I'm Niloy Sarkar Uthso</h1>
          <p className="py-4 text-xl text-primary font-semibold">MERN Stack Developer</p>
          <p className="max-w-md text-base-content">
            Passionate about building web applications with clean code and great user experiences.
          </p>
 
          
          <a href="https://drive.google.com/file/d/18plZn-7d43DZ5cM6R8o51-iFK89ZD80B/view?usp=drive_link" download className="btn btn-primary mt-4">
            Download Resume
          </a>

          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <SocialLinks></SocialLinks>
          </motion.div>
        </motion.div>
      </div>
      
    </section>
  );
};

export default Hero;
