'use client';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="bg-[#F2E3DB] py-16 md:py-24">
      <motion.div
        className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
          .You dream.
        </h1>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-700">
          <span className="block text-xl sm:text-2xl md:text-3xl font-bold">
            We <span className="text-emerald-400">Design</span>,
            <span className="text-pink-500"> Develop</span> &
            <span className="text-violet-600"> Deliver</span>.
          </span>
          <br className="hidden sm:block" />
          <span className="block mt-2">
            With a team of passion-driven engineers, we build software with the care and precision that your idea deserves.
          </span>
        </p>
      </motion.div>
    </section>

  );
};

export default Hero;
