import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Users,
  Slack,
  Video,
  BarChart3,
  Target,
  ArrowRight,
} from "lucide-react";

import team from '../assets/user.jpg';
import slackImg from '../assets/custom1.jpg';
import videoImg from '../assets/photo.jpg';
import advance from '../assets/live.jpg';
import skill from '../assets/interactive.jpg';

gsap.registerPlugin(ScrollTrigger);

/* Counter Component */
const Counter = ({ from = 0, to = 0, duration = 2 }) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.floor(latest));

  useEffect(() => {
    const controls = animate(count, to, { duration });
    return controls.stop;
  }, [to]);

  return <motion.span>{rounded}</motion.span>;
};

const EnterpriseTeamsSection = () => {
  const features = [
    {
      image: team,
      title: "Team-based Learning",
      description:
        "Create collaborative learning experiences with group projects, peer reviews, and team challenges.",
    },
    {
      image: slackImg,
      title: "Slack Integration",
      description:
        "Seamlessly integrate with Slack for notifications, discussions, and collaborative learning workflows.",
    },
    {
      image: videoImg,
      title: "Video Integration",
      description:
        "Connect directly with video platforms for live sessions, webinars, and virtual classroom experiences.",
    },
    {
      image: advance,
      title: "Advanced Reporting",
      description:
        "Get detailed insights into learning progress, engagement metrics, and team performance analytics.",
    },
    {
      image: skill,
      title: "Skill Recommendations",
      description:
        "AI-powered personalized learning paths and skill recommendations based on role and performance.",
    },
  ];

  const stats = [
    {
      icon: <Users className="h-5 w-5 text-blue-400" />,
      iconBg: "bg-blue-900",
      value: 2500,
      suffix: "k",
      label: "Active Learners",
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-green-400" />,
      iconBg: "bg-green-900",
      value: 98,
      suffix: "%",
      label: "Completion Rate",
    },
    {
      icon: <Target className="h-5 w-5 text-purple-400" />,
      iconBg: "bg-purple-900",
      value: 150,
      suffix: "+",
      label: "Skill Paths",
    },
    {
      icon: <Slack className="h-5 w-5 text-orange-400" />,
      iconBg: "bg-orange-900",
      value: 50,
      suffix: "+",
      label: "Integrations",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // GSAP refs
  const cardsRef = useRef([]);

  useEffect(() => {
    // Animate each card individually with shorter time & earlier start
    cardsRef.current.forEach((card) => {
      gsap.fromTo(
        card,
        {
          autoAlpha: 0,
          scale: 0.85,
          rotationX: 20,
          y: 60,
          transformOrigin: "center center -80px",
        },
        {
          autoAlpha: 1,
          scale: 1,
          rotationX: 0,
          y: 0,
          duration: 0.6, // quicker pop
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 100%", // animation starts earlier
            end: "top 100%",   // ends sooner
            once: true,       // runs only once
          },
        }
      );
    });
  }, []);

  // Stats counter trigger
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true });

  return (
    <section id="enterprise-teams" className="py-16 bg-[#09090a] overflow-hidden">
      <div className="section-container">
        {/* Header */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <p className="text-blue-400 font-medium text-lg mb-2">
              Enterprise-Grade Learning
            </p>
            <h2 className="text-4xl font-bold mb-6 text-white">
              Built for <span className="text-blue-400">Teams & Enterprises</span>
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Scale learning across your entire organization with powerful
              collaboration tools, seamless integrations, and intelligent insights
              that drive team performance.
            </p>
          </motion.div>
        </motion.div>

        {/* Features with per-card pop animation */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="relative rounded-2xl overflow-hidden shadow-lg bg-[#121214]"
              style={{ perspective: "600px" }}
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA & Stats */}
        <motion.div
          className="bg-[#121214] rounded-2xl p-8 shadow-lg border border-gray-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* CTA Text */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Team&apos;s Learning?
              </h3>
              <p className="text-gray-300 mb-6 text-lg">
                Join thousands of organizations already using Athena to deliver impactful
                learning experiences at scale. Get started with a custom demo tailored
                to your team&apos;s needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-lg flex items-center group transition">
                  Schedule Enterprise Demo
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-blue-400 text-blue-400 hover:bg-blue-900 hover:text-white px-8 py-6 text-lg font-semibold rounded-lg transition">
                  View Pricing Plans
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="hidden lg:block" ref={statsRef}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  {stats.slice(0, 2).map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-[#121214] rounded-2xl p-6 shadow-lg border border-gray-800"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className={`w-10 h-10 ${stat.iconBg} rounded-xl flex items-center justify-center`}>
                          {stat.icon}
                        </div>
                        <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center">
                          <ArrowRight className="h-3 w-3 text-gray-400" />
                        </div>
                      </div>
                      <p className="text-2xl font-bold text-white mb-1">
                        {statsInView ? <Counter to={stat.value} duration={2} /> : 0}
                        {stat.suffix}
                      </p>
                      <p className="text-sm text-gray-400">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <div className="space-y-4 pt-8">
                  {stats.slice(2).map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-[#121214] rounded-2xl p-6 shadow-lg border border-gray-800"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className={`w-10 h-10 ${stat.iconBg} rounded-xl flex items-center justify-center`}>
                          {stat.icon}
                        </div>
                        <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center">
                          <ArrowRight className="h-3 w-3 text-gray-400" />
                        </div>
                      </div>
                      <p className="text-2xl font-bold text-white mb-1">
                        {statsInView ? <Counter to={stat.value} duration={2} /> : 0}
                        {stat.suffix}
                      </p>
                      <p className="text-sm text-gray-400">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnterpriseTeamsSection;
