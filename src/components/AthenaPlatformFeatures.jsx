import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  PlayCircle, Route, BarChart3, Clock, Users, Smartphone
} from 'lucide-react';

import interactive from '../assets/interactive.jpg';
import custom from '../assets/custom1.jpg';
import analytics from '../assets/analytics.jpg';
import live from '../assets/live.jpg';
import user from '../assets/user.jpg';
import mobile from '../assets/mobile.jpg';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const platformFeatures = [
  {
    icon: <PlayCircle size={32} />,
    title: "Interactive Learning Tools",
    description: "Build engaging lessons with videos, quizzes & activities.",
    image: interactive
  },
  {
    icon: <Route size={32} />,
    title: "Custom Learning Paths",
    description: "Create personalized learning journeys for different teams or departments.",
    image: custom
  },
  {
    icon: <BarChart3 size={32} />,
    title: "Analytics & Progress Tracking",
    description: "Monitor learner engagement and performance in real time.",
    image: analytics
  },
  {
    icon: <Clock size={32} />,
    title: "Live & Self-Paced Learning",
    description: "Support both scheduled sessions and anytime access.",
    image: live
  },
  {
    icon: <Users size={32} />,
    title: "User Management",
    description: "Easy tools to manage learners, instructors, and admins.",
    image: user
  },
  {
    icon: <Smartphone size={32} />,
    title: "Mobile-Friendly Platform",
    description: "Access learning anytime, on any device.",
    image: mobile
  }
];

const AthenaPlatformFeatures = () => {
  const cardsRef = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = cardsRef.current;

    gsap.fromTo(
      cards,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%', // when section is 80% from top of viewport
          toggleActions: 'play none none reverse', // smooth trigger / reverse on scroll up
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 relative overflow-hidden bg-[#09090a]">
      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
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
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-7xl mx-auto">
          {platformFeatures.map((feature, index) => (
            <div
              key={index}
              ref={el => (cardsRef.current[index] = el)}
              className="group cursor-pointer relative overflow-hidden border border-gray-800 shadow-lg transition-all duration-400 bg-[#121214] min-h-[520px] flex flex-col justify-end"
              style={{ borderCollapse: "collapse" }}
            >
              {/* Background image with tint */}
              <div
                className="absolute inset-0 z-0 transition-transform duration-500 ease-[cubic-bezier(.4,2,.7,1)] group-hover:scale-105 group-hover:brightness-110 transform-gpu"
                style={{
                  backgroundImage: `linear-gradient(120deg, rgba(43,120,253,0.25) 45%, rgba(43,120,253,0.15) 100%), url(${feature.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              {/* Blue overlay */}
              <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-br from-blue-500/25 to-blue-600/10 opacity-60 transition-transform transition-opacity duration-500 transform-gpu scale-90 group-hover:opacity-90 group-hover:scale-105"></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center text-center transition-transform duration-500 group-hover:scale-105 group-hover:drop-shadow-xl">
                <div className="w-24 h-24 bg-[#60a5fa]/90 flex items-center justify-center transition-transform transition-shadow duration-400 group-hover:scale-110 group-hover:shadow-2xl">
                  {React.cloneElement(feature.icon, { className: "text-white", size: 42 })}
                </div>
                <h3 className="text-3xl font-bold text-white transition-all duration-300 group-hover:text-[#60a5fa]">
                  {feature.title}
                </h3>
                <p className="text-gray-200 text-base leading-relaxed max-w-[350px]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AthenaPlatformFeatures;
