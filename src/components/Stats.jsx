import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

const Counter = ({ target, label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(target);
      const duration = 2000;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <div ref={ref} className="text-center p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
      <h3 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">{count}+</h3>
      <p className="mt-2 text-gray-600 dark:text-gray-400 font-medium">{label}</p>
    </div>
  );
};

const Stats = () => {
  const stats = [
    { target: '500', label: 'Projects Completed' },
    { target: '300', label: 'Happy Clients' },
    { target: '50', label: 'Team Members' },
    { target: '10', label: 'Years Experience' },
  ];
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => <Counter key={index} target={stat.target} label={stat.label} />)}
        </div>
      </div>
    </section>
  );
};
export default Stats;