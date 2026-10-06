import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';

const Pricing = () => {
  const plans = [
    { name: 'Basic', price: '$19', features: ['1 Project', 'Basic Support', '1GB Storage'] },
    { name: 'Pro', price: '$49', features: ['5 Projects', 'Priority Support', '10GB Storage'], popular: true },
    { name: 'Enterprise', price: '$99', features: ['Unlimited Projects', '24/7 Support', '100GB Storage'] },
  ];
  return (
    <section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Simple, Transparent Pricing</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className={`p-8 rounded-2xl border ${plan.popular ? 'border-indigo-600 dark:border-indigo-400 shadow-xl relative' : 'border-gray-200 dark:border-gray-800 shadow-sm'} bg-white dark:bg-gray-900 flex flex-col`}>
              {plan.popular && <span className="absolute top-0 right-6 -translate-y-1/2 bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Most Popular</span>}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{plan.name}</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-extrabold text-gray-900 dark:text-white">{plan.price}</span>
                <span className="ml-1 text-gray-500 dark:text-gray-400">/month</span>
              </div>
              <ul className="mt-6 space-y-4 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600 dark:text-gray-400"><FiCheck className="text-indigo-600 dark:text-indigo-400 flex-shrink-0" /> {feature}</li>
                ))}
              </ul>
              <button className={`mt-8 w-full py-3 rounded-lg font-medium transition-colors ${plan.popular ? 'bg-indigo-600 hover:bg-indigo-700 text-white' : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white'}`}>Get Started</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Pricing;