import React from 'react';
import AthenaPlatformFeatures from './components/AthenaPlatformFeatures';
import FlexibleSolutions from './components/FlexibleSolutions';
import Features from './components/Features';
import EnterpriseTeamsSection from './components/EnterpriseTeamsSection';
import { motion } from 'framer-motion';
import video3 from './assets/video3.mp4';

// Animation variants (same as original example)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100,
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const AtheaFeatures = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="min-h-screen flex flex-col w-full overflow-x-hidden pt-16 bg-[#09090a]"
    >
      <main className="w-full">
        {/* Hero Section */}
        <section className="relative py-20 border-b border-gray-800">
          {/* Background Video with Overlay */}
          <motion.video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
            variants={fadeIn}
          >
            <source src={video3} type="video/mp4" />
          </motion.video>

          {/* Dark overlay */}
          <motion.div
            className="absolute inset-0 bg-black/70 z-[1]"
            variants={fadeIn}
          />

          {/* Content */}
          <div className="section-container relative z-10">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                className="text-4xl md:text-5xl font-bold mb-6 text-white"
                variants={childVariants}
              >
                Powerful Features for{' '}
                <span className="text-blue-400">Modern Learning</span>
              </motion.h1>

              <motion.p
                className="text-xl text-gray-300 mb-8"
                variants={childVariants}
              >
                Discover comprehensive learning management capabilities designed
                for institutions, enterprises, and organizations of all sizes.
              </motion.p>

              <motion.div variants={childVariants}>
                <motion.button
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Features
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Animated Sections like in the original */}
        <motion.div
          className="px-4 sm:px-6 lg:px-8 xl:px-12 max-w-8xl mx-auto w-full"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {/* Features section */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <Features darkMode />
          </motion.div>

          {/* Athena platform features */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <AthenaPlatformFeatures darkMode />
          </motion.div>

          {/* Enterprise Teams */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <EnterpriseTeamsSection darkMode />
          </motion.div>

          {/* Flexible Solutions */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <FlexibleSolutions darkMode />
          </motion.div>
        </motion.div>
      </main>
    </motion.div>
  );
};

export default AtheaFeatures;
