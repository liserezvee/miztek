'use client';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import teamAnimation from '../assets/team.json';

const Team = () => {
  return (
    <section id="team" className="py-20 bg-white ">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center text-gray-900 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Meet the Team
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Lottie animationData={teamAnimation} loop={true} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Passion-led experts</h3>
            <p className="text-gray-600">
              We&apos;re a diverse, global team of designers, developers, and strategists — united by a passion for building elegant, scalable software.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Team;
