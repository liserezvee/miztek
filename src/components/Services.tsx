
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Ideate',
    description: 'Brainstorm with our development and design team and formulate a plan to bring your vision into reality.',
  },
  {
    title: 'Build',
    description: 'Get involved in the build process and see your feedback reflected in every step of the development cycle.',
  },
  {
    title: 'Go live!',
    description: 'See your app in every store and your website work seamlessly on every platform at scale.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center text-gray-900"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          viewport={{ once: true }}
        >
          Services
        </motion.h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
              <p className="mt-4 text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
