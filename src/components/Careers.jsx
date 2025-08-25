import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useInView } from 'react-intersection-observer';

const Careers = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const jobs = [
    {
      title: 'Senior Software Engineer',
      description: 'Lead development of cutting-edge web applications.',
      requirements: ['5+ years experience', 'Expert in React and Node.js', 'Strong problem-solving skills']
    },
    {
      title: 'UI/UX Designer',
      description: 'Create intuitive and beautiful user interfaces.',
      requirements: ['3+ years experience', 'Proficiency in Figma and Adobe XD', 'Portfolio required']
    },
    // Add more jobs as needed
  ];

  const onSubmit = (data) => {
    console.log(data);
    setSubmitted(true);
    // Here you would typically send the data to a backend
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
        >
          Join Our Team
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {jobs.map((job, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">{job.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{job.description}</p>
              <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
                {job.requirements.map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Apply Now
              </button>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Apply for a Position</h3>
          {submitted ? (
            <p className="text-green-600">Thank you for your application!</p>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-gray-700 dark:text-gray-300">Name</label>
                <input 
                  {...register('name', { required: true })}
                  className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
                />
                {errors.name && <span className="text-red-500">This field is required</span>}
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300">Email</label>
                <input 
                  {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                  className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
                />
                {errors.email && <span className="text-red-500">Valid email is required</span>}
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300">Position</label>
                <select 
                  {...register('position', { required: true })}
                  className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
                >
                  <option value="">Select Position</option>
                  {jobs.map((job, index) => (
                    <option key={index} value={job.title}>{job.title}</option>
                  ))}
                </select>
                {errors.position && <span className="text-red-500">This field is required</span>}
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300">Resume (URL)</label>
                <input 
                  {...register('resume', { required: true })}
                  className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
                />
                {errors.resume && <span className="text-red-500">This field is required</span>}
              </div>
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Submit Application
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Careers;