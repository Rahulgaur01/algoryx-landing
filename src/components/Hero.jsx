import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950 pt-16 relative overflow-hidden">
      <motion.div initial={{ y: 0 }} animate={{ y: 100 }} transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }} className="absolute top-20 right-10 w-72 h-72 bg-indigo-200 dark:bg-indigo-900/30 rounded-full blur-3xl opacity-50" />
      <motion.div initial={{ y: 0 }} animate={{ y: -100 }} transition={{ duration: 7, repeat: Infinity, repeatType: "reverse" }} className="absolute bottom-20 left-10 w-96 h-96 bg-purple-200 dark:bg-purple-900/30 rounded-full blur-3xl opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight"
        >
          Build Stunning Websites <br />
          <span className="text-indigo-600 dark:text-indigo-400">Without Limits</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }} 
          className="mt-6 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400"
        >
          The ultimate platform for modern developers. Create beautiful, responsive, and high-performance web experiences.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.4 }} 
          className="mt-10 flex justify-center gap-4"
        >
          <a href="#features" className="px-8 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors flex items-center gap-2">
            Get Started <FiArrowRight />
          </a>
          <a href="#pricing" className="px-8 py-3 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium transition-colors">
            View Pricing
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;