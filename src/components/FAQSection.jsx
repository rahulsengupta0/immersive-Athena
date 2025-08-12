import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import faqvideo from '../assets/faq.mp4';

const FAQSection = () => {
  const faqItems = [
    {
      question: "What is Athena LMS and how does it work?",
      answer: "Athena LMS is a comprehensive Learning Management System designed to deliver, track, and manage educational content and training programs. Our platform provides institutions and organizations with tools to create engaging learning experiences, monitor student progress, and facilitate effective online education through an intuitive, user-friendly interface."
    },
    {
      question: "Who can use the Athena LMS platform?",
      answer: "Athena LMS is designed for educational institutions, corporate training departments, online educators, and organizations of all sizes. Whether you're a university, K-12 school, training company, or enterprise looking to upskill employees, our platform scales to meet your specific learning management needs."
    },
    {
      question: "What key features does Athena LMS offer?",
      answer: "Our platform includes comprehensive course management, interactive content creation tools, real-time progress tracking, assessment and grading systems, communication tools, mobile compatibility, detailed analytics and reporting, user management, and seamless integration capabilities with existing systems and third-party applications."
    },
    {
      question: "How secure is the Athena LMS platform?",
      answer: "Security is our top priority. Athena LMS employs enterprise-grade security measures including data encryption, secure user authentication, regular security audits, GDPR compliance, role-based access controls, and secure cloud hosting. We ensure your institutional data and student information remain protected at all times."
    },
    {
      question: "What support and training do you provide for Athena LMS?",
      answer: "We offer comprehensive support including 24/7 technical assistance, dedicated customer success managers, extensive documentation, video tutorials, live training sessions, and onboarding support. Our team ensures smooth implementation and provides ongoing assistance to maximize your platform utilization and success."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-20 border-t border-[#1a1d1f] overflow-hidden">
      {/* Background video */}
      <video
        src={faqvideo}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row gap-10 md:gap-16 items-center"
        >
          {/* Left side image and heading */}
          <div className="w-full md:w-1/3 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.25,
              }}
              whileHover={{ y: -5 }}
              className="inline-block mb-7"
            >
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=540&h=420&q=80"
                alt="Learning Support and FAQ"
                className="w-auto h-56 object-cover rounded-xl shadow-lg"
                style={{ filter: "drop-shadow(0 4px 16px rgba(59, 130, 246, 0.3))" }}
              />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
            >
              Frequently Asked Questions
            </motion.h2>
            <p className="text-lg text-[#a1adc7]">
              Get answers to common questions about our Athena LMS platform and how it can transform your educational initiatives.
            </p>
          </div>

          {/* Right side FAQ */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-2/3"
          >
            <div className="bg-[#171927]/70 backdrop-blur rounded-2xl shadow-2xl border border-[#232b3a]">
              {faqItems.map((item, index) => (
                <div key={index} className="border-b border-[#232b3a] last:border-0">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex justify-between items-center w-full p-5 text-lg font-medium text-gray-100 hover:text-[#3b82f6] transition-colors"
                  >
                    {item.question}
                    <span className="ml-4 text-[#3b82f6]">
                      {openIndex === index ? '-' : '+'}
                    </span>
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-5 pb-5 text-[#bec8e8] text-base leading-relaxed"
                      >
                        {item.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
