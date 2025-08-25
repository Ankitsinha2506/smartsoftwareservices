import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  // Sample blog data
  const articles = [
    { id: 1, title: 'The Future of AI in IT Services', excerpt: 'Exploring how artificial intelligence is revolutionizing the IT industry...', date: '2023-10-01', link: '#' },
    { id: 2, title: 'Best Practices for Cloud Migration', excerpt: 'Key strategies to ensure a smooth transition to cloud infrastructure...', date: '2023-09-15', link: '#' },
    { id: 3, title: 'Cybersecurity Trends in 2023', excerpt: 'Latest threats and how to protect your business...', date: '2023-09-01', link: '#' },
    { id: 4, title: 'The Rise of Low-Code Development', excerpt: 'How low-code platforms are accelerating software development...', date: '2023-08-20', link: '#' },
    { id: 5, title: 'Implementing DevOps in Enterprise', excerpt: 'Steps to adopt DevOps culture and practices...', date: '2023-08-05', link: '#' },
    { id: 6, title: 'Machine Learning Applications in Business', excerpt: 'Real-world use cases of ML in various industries...', date: '2023-07-15', link: '#' },
    // Add more articles as needed
  ];

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="blog" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
        >
          Our Blog
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentArticles.map((article, index) => (
            <motion.div 
              key={article.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{article.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{article.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 dark:text-gray-400">{article.date}</span>
                  <a href={article.link} className="text-blue-500 hover:text-blue-700 font-medium">Read More</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          {Array.from({ length: Math.ceil(articles.length / articlesPerPage) }).map((_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`mx-2 px-4 py-2 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white'}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;