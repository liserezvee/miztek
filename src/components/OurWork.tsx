'use client';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import workAnimation from '../assets/work.json';

const OurWork = () => {
  return (
    <section id="work" className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Work
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <Lottie animationData={workAnimation} loop={true} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
              We build real products
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              From MVPs to full-scale platforms, our team has launched apps in fintech, health, education, and beyond. Every project is tailored to your goals.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

  );
};

export default OurWork;
