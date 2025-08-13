import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Trophy, Sparkles } from 'lucide-react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import topabout from './assets/topabout.mp4';
import mission from './assets/mission.mp4';
import vision from './assets/vision.mp4';
import beginningVideo from './assets/beginning.mp4';
import globalExpansionVideo from './assets/globalexpansion.mp4';
import industryVideo from './assets/industry.mp4';
import futureVideo from './assets/future.mp4';
import corevaluesBG from './assets/corevaluesbg.mp4';
import NavBar from "./components/Navbar";

import AnimatedTitle from "./components/AnimatedTitle";
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const containerRef = useRef(null);
  const slidesRef = useRef([]);
  const cursorRef = useRef(null);
  const coreValuesContainerRef = useRef(null);
  const cardsRef = useRef([]);

  // Timeline slides animation
  useEffect(() => {
    const slides = slidesRef.current;
    let ctx = gsap.context(() => {
      slides.forEach((slide) => {
        const video = slide.querySelector("video");
        const text = slide.querySelector(".timeline-text");
        gsap.timeline({
          scrollTrigger: {
            trigger: slide,
            start: "top top",
            end: "bottom top",
            scrub: true,
            pin: true,
            anticipatePin: 1,
          }
        })
        .fromTo(video, { autoAlpha: 0, scale: 1.05 }, { autoAlpha: 1, scale: 1 })
        .fromTo(text, { autoAlpha: 0, x: 80, y: 80 }, { autoAlpha: 1, x: 0, y: 0 }, 0);
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  // Custom GSAP cursor
  useEffect(() => {
    const cursor = cursorRef.current;
    const targets = document.querySelectorAll("video, img, p, h1, h2, h3, h4, h5, h6, a");
    document.body.style.cursor = "none";

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: "power2.out"
      });
    };
    document.addEventListener("mousemove", moveCursor);

    targets.forEach((el) => {
      el.style.cursor = "none";
      el.addEventListener("mouseenter", () => {
        gsap.to(cursor, {
          backgroundColor: "rgba(59,130,246,0.4)",
          borderColor: "#3b82f6",
          scale: 1.5,
          duration: 0.3
        });
      });
      el.addEventListener("mouseleave", () => {
        gsap.to(cursor, {
          backgroundColor: "transparent",
          borderColor: "#fff",
          scale: 1,
          duration: 0.3
        });
      });
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.body.style.cursor = "auto";
    };
  }, []);

  // Core Values pop-out animation
  useEffect(() => {
    if (!cardsRef.current.length) return;
    gsap.set(cardsRef.current, { z: 0, scale: 1 });
    cardsRef.current.forEach((card, index) => {
      ScrollTrigger.create({
        trigger: coreValuesContainerRef.current,
        start: `top+=${index * 150} center`,
        end: "+=200",
        onEnter: () => {
          gsap.to(card, {
            z: 300,
            scale: 1.2,
            duration: 0.6,
            ease: "power3.out"
          });
        },
        onLeaveBack: () => {
          gsap.to(card, {
            z: 0,
            scale: 1,
            duration: 0.5,
            ease: "power3.inOut"
          });
        }
      });
    });
  }, []);

  // Animate Our Story intro text
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#our-story-intro",
          start: "top 80%",
        }
      });

      // Subtitle
      tl.from(".story-subtitle", {
        y: 40,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out"
      });

      // Paragraphs staggered in
      tl.from(".story-paragraphs p", {
        y: 40,
        opacity: 0,
        scale: 0.98,
        skewY: 3,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.25
      }, "-=0.3");
    });
    return () => ctx.revert();
  }, []);

  const coreValues = [
    { icon: <Heart className="h-10 w-10 text-blue-500" />, title: 'Inclusivity', description: 'Creating learning environments where everyone feels welcome and valued.' },
    { icon: <Trophy className="h-10 w-10 text-blue-500" />, title: 'Excellence', description: 'Committing to the highest standards in education and user experience.' },
    { icon: <Sparkles className="h-10 w-10 text-blue-500" />, title: 'Innovation', description: 'Constantly evolving our methods to enhance how people learn.' },
    { icon: <Users className="h-10 w-10 text-blue-500" />, title: 'Community', description: 'Fostering connections between learners and educators worldwide.' },
  ];

  const teamMembers = [
    { name: 'Dr. Elena Martinez', role: 'Founder & CEO', image: '/img/team-elena.jpg', bio: 'Former Stanford professor with a passion for educational technology.' },
    { name: 'Michael Chen', role: 'Chief Learning Officer', image: '/img/team-michael.jpg', bio: 'EdTech innovator with 15+ years experience in curriculum design.' },
    { name: 'Sarah Johnson', role: 'Head of Student Success', image: '/img/team-sarah.jpg', bio: 'Dedicated to creating supportive learning environments for all students.' },
  ];

  const purposeCards = [
    { video: mission, title: "Our Mission", text: `To democratize education by providing accessible, high-quality learning experiences that empower individuals to achieve their personal and professional goals.` },
    { video: vision, title: "Our Vision", text: `To create a world where anyone, regardless of their background or circumstances, can access the education they need to build the life they want.` }
  ];

  const timelineSlides = [
    { year: '2018', title: 'The Beginning', description: 'Founded with a mission to democratize education through technology.', video: beginningVideo },
    { year: '2020', title: 'Global Expansion', description: 'Reached students in 50+ countries and expanded our course catalog.', video: globalExpansionVideo },
    { year: '2022', title: 'Industry Partnerships', description: 'Collaborated with leading tech companies to offer career-focused programs.', video: industryVideo },
    { year: '2025', title: 'The Future', description: 'Continuing to innovate with AI-powered learning and personalized education.', video: futureVideo },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 pt-16 relative">
      <NavBar/>
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        style={{
          position: "fixed", top: 0, left: 0, width: "40px", height: "40px",
          borderRadius: "50%", border: "2px solid white", backgroundColor: "transparent",
          pointerEvents: "none", zIndex: 9999, transform: "translate(-50%, -50%)"
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-gray-800">
        <video src={topabout} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70 z-10" />
        <div className="max-w-7xl mx-auto px-4 relative z-20 py-20 md:py-32 text-center">
          <AnimatedTitle title={"About <span class='text-blue-500'>Athena</span>"} containerClass="text-5xl md:text-6xl font-bold text-white mb-6" />
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-xl md:text-2xl text-gray-400 mb-8">
            Empowering Learners. Transforming Futures.
          </motion.p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full">Start Your Journey</button>
        </div>
      </section>

      {/* Purpose */}
      <section className="py-20 bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <AnimatedTitle title={"Our Purpose"} containerClass="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4" />
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {purposeCards.map((card, idx) => (
            <motion.div key={idx} className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[480px] flex flex-col justify-between">
              <video src={card.video} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
              <div className="relative z-10 px-8 pt-6">
                <h3 className="text-3xl font-extrabold text-white">{card.title}</h3>
              </div>
              <div className="relative z-10 px-8 pb-8">
                <p className="text-gray-100/90">{card.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Story Static Intro */}
      <section className="py-20 bg-gray-900 border-b border-gray-800" id="our-story-intro">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedTitle title={"Our Story"} containerClass="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4" />
          <p className="story-subtitle text-lg text-gray-400 max-w-3xl mx-auto text-center">
            From a simple idea to a global learning platform
          </p>
          <div className="story-paragraphs space-y-6 max-w-5xl mx-auto text-gray-400 text-lg mt-8">
            <p>Founded in 2018, Athena began with a simple idea: education should be accessible to everyone, everywhere...</p>
            <p>What started as a small collection of online courses has grown into a comprehensive learning ecosystem...</p>
            <p>Today, Athena serves learners in over 150 countries, staying true to our mission of transforming lives through learning.</p>
          </div>
        </div>
      </section>

      {/* Transition line */}
      <div className="bg-gray-900 py-8 text-center">
        <p className="text-2xl font-semibold text-blue-400">Now we are going through our journey</p>
      </div>

      {/* Timeline */}
      <section ref={containerRef} className="relative w-full min-h-screen overflow-hidden">
        {timelineSlides.map((item, idx) => (
          <section key={idx} ref={(el) => (slidesRef.current[idx] = el)} className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            <video src={item.video} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover brightness-75" />
            <div className="timeline-text relative max-w-4xl text-center text-white px-4">
              <h2 className="text-5xl font-extrabold mb-4">{item.year} - {item.title}</h2>
              <p className="text-xl max-w-2xl mx-auto">{item.description}</p>
            </div>
          </section>
        ))}
      </section>

      {/* Core Values */}
      <section className="relative py-20 border-b border-gray-700 overflow-hidden">
        <video src={corevaluesBG} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center mb-16">
          <AnimatedTitle title={"Our Core Values"} containerClass="text-3xl md:text-4xl font-bold text-white mb-4" />
        </div>
        <div ref={coreValuesContainerRef} className="relative z-10 perspective-[1200px] max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
            {coreValues.map((value, index) => (
              <div key={index} ref={el => (cardsRef.current[index] = el)} className="bg-gray-700/80 p-6 rounded-xl shadow-xl flex flex-col items-center text-center border border-gray-500 backdrop-blur-sm transform-gpu" style={{ transformStyle: "preserve-3d" }}>
                <div className="p-3 bg-gray-600 rounded-lg mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <AnimatedTitle title={"Meet Our Leadership"} containerClass="text-3xl md:text-4xl font-bold text-white mb-4" />
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">The passionate educators and innovators driving Athena forward</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div key={index} className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-700">
              <div className="h-64 bg-gray-700 overflow-hidden">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-blue-500 font-medium mb-4">{member.role}</p>
                <p className="text-gray-400">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedTitle title={"Ready to transform your learning experience?"} containerClass="text-3xl md:text-4xl font-bold text-white mb-6" />
          <p className="text-xl text-gray-400 mb-8">Join thousands of learners who are advancing their skills with Athena.</p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-full">Explore Courses</button>
            <button className="bg-transparent hover:bg-white/10 text-white py-3 px-8 rounded-full border border-white">Contact Us</button>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default AboutUs;
