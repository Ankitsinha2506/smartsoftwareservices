import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useInView } from 'react-intersection-observer';

const Careers = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [submitted, setSubmitted] = useState(false);

  // Job openings displayed on site
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

  // Comprehensive IT Roles for Application Dropdown
  const roles = [
    "Software Engineer / Developer",
    "Frontend Developer",
    "Backend Developer",
    "Full-Stack Developer",
    "Mobile App Developer",
    "UI/UX Designer",
    "Web Designer",
    "DevOps Engineer",
    "Cloud Engineer",
    "QA Engineer / Test Automation Engineer",
    "Manual Tester",
    "Business Analyst",
    "Project Manager / Scrum Master",
    "Data Scientist",
    "Data Engineer",
    "Database Administrator (DBA)",
    "AI/ML Engineer",
    "Cybersecurity Analyst / Security Engineer",
    "System Administrator",
    "Network Engineer",
    "IT Support Engineer / Helpdesk",
    "Product Manager",
    "Technical Writer",
    "Solution Architect"
  ];

  const onSubmit = (data) => {
    console.log(data);
    setSubmitted(true);
  };

  // Scroll to job listings
  const scrollToJobs = () => {
    document.getElementById('job-listings')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-[80vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://i.pinimg.com/736x/5f/6a/5a/5f6a5af0d88a81a8c5bfe067eced2273.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-white px-4"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Careers at Our Company</h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
            Be part of a team that’s shaping the future of technology. Explore exciting opportunities with us.
          </p>
          <button
            onClick={scrollToJobs}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-lg font-semibold shadow-lg transition"
          >
            Join Us
          </button>
        </motion.div>
      </section>

      {/* Careers Content */}
      <section id="job-listings" className="py-20 bg-gray-50 dark:bg-gray-900">
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

          {/* Job Cards */}
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

          {/* Application Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white text-center md:text-left">
              Apply for a Position
            </h3>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Form Section */}
              <div>
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
                        {roles.map((role, index) => (
                          <option key={index} value={role}>
                            {role}
                          </option>
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

                    <button
                      type="submit"
                      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                      Submit Application
                    </button>
                  </form>
                )}
              </div>

              {/* Image Section */}
              <div className="hidden md:block">
                <img
                  src="https://i.pinimg.com/1200x/64/9b/39/649b39b31d4d02e335360b6f1fcfb7df.jpg"
                  alt="Apply Illustration"
                  className="rounded-lg shadow-md w-full object-cover"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default Careers;
