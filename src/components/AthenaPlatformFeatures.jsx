import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  PlayCircle,
  Route,
  BarChart3,
  Clock,
  Users,
  Smartphone
} from 'lucide-react';

const platformFeatures = [
  {
    icon: <PlayCircle size={24} />,
    title: "Interactive Learning Tools",
    description: "Build engaging lessons with videos, quizzes & activities."
  },
  {
    icon: <Route size={24} />,
    title: "Custom Learning Paths",
    description: "Create personalized learning journeys for different teams or departments."
  },
  {
    icon: <BarChart3 size={24} />,
    title: "Analytics & Progress Tracking",
    description: "Monitor learner engagement and performance in real time."
  },
  {
    icon: <Clock size={24} />,
    title: "Live & Self-Paced Learning",
    description: "Support both scheduled sessions and anytime access."
  },
  {
    icon: <Users size={24} />,
    title: "User Management",
    description: "Easy tools to manage learners, instructors, and admins."
  },
  {
    icon: <Smartphone size={24} />,
    title: "Mobile-Friendly Platform",
    description: "Access learning anytime, on any device."
  }
];

const AthenaPlatformFeatures = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <section className="py-16 relative overflow-hidden bg-[#09090a]">
      {/* DecorativeShapes removed for cleaner look */}
      <div className="section-container relative z-10" ref={sectionRef}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <p className="text-[#60a5fa] font-medium text-lg mb-2">
            Platform Capabilities
          </p>
          <h2 className="text-4xl font-bold mb-4 text-white">
            What You Can Do with <span className="text-[#60a5fa]">Athena</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Discover the powerful features that make Athena the complete LMS solution
            for modern educational institutions and organizations.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {platformFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -4,
                scale: 1.02,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              className="group cursor-pointer"
            >
              <div className="
                p-6 rounded-2xl border border-gray-800 bg-[#121214]
                shadow-sm hover:shadow-lg hover:shadow-blue-400/10
                transition-all duration-300 h-full
                hover:border-[#60a5fa]/20
              ">
                {/* Icon with background */}
                <div className="
                  w-12 h-12 rounded-xl bg-gray-800
                  flex items-center justify-center mb-4
                  group-hover:bg-[#60a5fa] group-hover:scale-105
                  transition-all duration-300
                ">
                  {React.cloneElement(feature.icon, {
                    className: "text-[#60a5fa] group-hover:text-white transition-colors duration-300"
                  })}
                </div>
                {/* Title */}
                <h3 className="
                  text-xl font-bold mb-3 text-white
                  group-hover:text-[#60a5fa]
                  transition-colors duration-300
                ">
                  {feature.title}
                </h3>
                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AthenaPlatformFeatures;
