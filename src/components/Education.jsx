import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-base-100 px-4 lg:px-20">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-primary mb-10">Education</h2>

        <div className="bg-base-200 rounded-xl shadow-md p-6 text-left">
          <h3 className="text-xl font-semibold text-accent mb-2">
            B.Sc. (Engg.) in Information and Communication Technology
          </h3>
          <p className="text-base-content font-medium">
            <span className="font-semibold text-primary">
              Mawlana Bhashani Science and Technology University (MBSTU)
            </span>
            <br />
            4th Year, 1st Semester
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Tangail, Bangladesh
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
