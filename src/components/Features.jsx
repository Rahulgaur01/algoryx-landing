import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiSmartphone, FiZap, FiShield } from 'react-icons/fi';

const Features = () => {
  const features = [
    { icon: <FiCode size={24} />, title: 'Clean Code', desc: 'Well-structured and maintainable codebase.' },
    { icon: <FiSmartphone size={24} />, title: 'Responsive', desc: 'Looks perfect on every device.' },
    { icon: <FiZap size={24} />, title: 'Lightning Fast', desc: 'Optimized for speed and performance.' },
    { icon: <FiShield size={24} />, title: 'Secure', desc: 'Built with security best practices.' },
  ];
  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Why Choose Us</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Everything you need to build modern web applications.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} whileHover={{ y: -10 }} className="p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all cursor-pointer">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg flex items-center justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Features;