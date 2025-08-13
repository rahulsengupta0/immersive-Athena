import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import {
  School,
  Users,
  GraduationCap,
  BarChart3,
  Calendar,
  Shield,
} from "lucide-react";
import Footer from "./Footer";
import NavBar from "./Navbar";

const FlexibleSolutions = () => {
  const solutions = [
    {
      icon: <School className="h-10 w-10 text-blue-400" />,
      title: "For Schools & Colleges",
      description: "Manage classrooms, assignments & track progress",
      features: [
        "Student enrollment management",
        "Assignment creation & grading",
        "Parent-teacher communication",
        "Academic progress tracking",
      ],
      color: "bg-[#121214] border-blue-900",
    },
    {
      icon: <Users className="h-10 w-10 text-purple-400" />,
      title: "For Enterprises",
      description: "Train teams with analytics & certification tools",
      features: [
        "Employee onboarding programs",
        "Skills assessment & tracking",
        "Compliance training modules",
        "Performance analytics dashboard",
      ],
      color: "bg-[#121214] border-purple-900",
    },
    {
      icon: <GraduationCap className="h-10 w-10 text-green-400" />,
      title: "For Coaches & Trainers",
      description: "Deliver live or self-paced content easily",
      features: [
        "Interactive live sessions",
        "Self-paced course creation",
        "Student progress monitoring",
        "Certification management",
      ],
      color: "bg-[#121214] border-green-900",
    },
  ];

  // Framer Motion variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Refs for GSAP animation
  const cardsRef = useRef([]);

  useEffect(() => {
    // Apply pulsing glow + contract/expand to all cards
    cardsRef.current.forEach((card) => {
      gsap.to(card, {
        boxShadow: "0 0 20px 4px rgba(59, 130, 246, 0.7)",
        scale: 1.05,
        duration: 1.5,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });
    });
  }, []);

  return (
    <section id="solutions" className="py-16 bg-[#09090a] relative overflow-hidden">
      <div className="section-container relative z-10">
        <NavBar/>
        {/* Section heading */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6 text-white">
            Flexible Solutions for{" "}
            <span className="text-blue-400">Institutions & Enterprises</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Whether you're a school, university, or enterprise — Athena adapts to your needs
            with scalable, custom solutions designed for your unique learning environment.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          className="grid lg:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`p-8 rounded-2xl border ${solution.color} transition-transform duration-300 cursor-pointer`}
              style={{ boxShadow: "0 0 12px 2px rgba(59, 130, 246, 0.4)" }}
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 35px 8px rgba(59, 130, 246, 0.9)",
              }}
            >
              <div className="mb-6">{solution.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-3">{solution.title}</h3>
              <p className="text-gray-300 mb-6 text-lg">{solution.description}</p>
              <ul className="space-y-3">
                {solution.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 mr-3"></div>
                    <span className="text-gray-400">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional CTA / showcase */}
        <motion.div
          className="bg-[#121214] rounded-2xl p-8 shadow-lg border border-gray-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="text-3xl font-bold text-white mb-4">
                Enterprise-Grade Features for Every Organization
              </h3>
              <p className="text-gray-300 mb-6 text-lg">
                From small training programs to large institutional deployments,
                Athena scales with your organization's growth and evolving needs.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <BarChart3 className="h-5 w-5 text-blue-400" />
                  <span className="text-sm font-medium text-gray-300">Advanced Analytics</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-blue-400" />
                  <span className="text-sm font-medium text-gray-300">Live Sessions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-blue-400" />
                  <span className="text-sm font-medium text-gray-300">Enterprise Security</span>
                </div>
              </div>
              <button
                type="button"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all"
              >
                Schedule a Custom Demo
              </button>
            </div>
            <div className="hidden md:block">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                  alt="Team collaboration"
                  className="w-full h-64 object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </motion.div>
        <Footer/>
      </div>
    </section>
  );
};

export default FlexibleSolutions;
