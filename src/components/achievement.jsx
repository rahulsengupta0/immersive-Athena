import React, { useEffect, useRef } from 'react';
import { FaBookOpen, FaChartBar, FaClock } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import achievementVideo from '../assets/achievement.mp4';

gsap.registerPlugin(ScrollTrigger);

const achievementsData = [
  { icon: <FaBookOpen size={42} />, label: 'Courses Live', value: 200, suffix: '+', desc: 'Quality learning materials', color: '#6EC1E4' },
  { icon: <FaChartBar size={42} />, label: 'Lessons Viewed', value: 50000, suffix: '', desc: 'Monthly engagement', color: '#47CD89' },
  { icon: <FaClock size={42} />, label: 'Platform Uptime', value: 100, suffix: '%', desc: 'Reliable access', color: '#FDB857' },
];

const Achievement = () => {
  const cardsRef = useRef([]);
  const numberRefs = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!cardsRef.current.length) return;

    // Trigger animations when section comes into view
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top 80%',
      once: true, // run only once
      onEnter: () => {
        // Count-up animation
        achievementsData.forEach((item, idx) => {
          const obj = { val: 0 };
          gsap.to(obj, {
            val: item.value,
            duration: 2,
            ease: 'power1.out',
            delay: idx * 0.2,
            onUpdate: () => {
              if (numberRefs.current[idx]) {
                numberRefs.current[idx].innerText =
                  Math.floor(obj.val).toLocaleString() + (item.suffix || '');
              }
            }
          });
        });

        // Card entrance animation
        gsap.fromTo(
          cardsRef.current,
          { opacity: 0, y: 60, rotateY: -10, scale: 0.94 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateY: 0,
            duration: 1,
            ease: 'back.out(1.6)',
            stagger: 0.2
          }
        );
      }
    });
  }, []);

  const handleMouseEnter = idx => {
    gsap.to(cardsRef.current[idx], {
      boxShadow: `0 4px 32px 0 ${achievementsData[idx].color}66`,
      scale: 1.045,
      duration: 0.26,
      ease: 'power2.out'
    });
  };

  const handleMouseLeave = idx => {
    gsap.to(cardsRef.current[idx], {
      boxShadow: 'none',
      scale: 1,
      duration: 0.28,
      ease: 'power3.inOut'
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full px-6 py-24 md:py-36 min-h-[60vh] flex flex-col items-center text-white overflow-hidden"
    >
      {/* Background Video */}
      <video
        src={achievementVideo}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center opacity-30"
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <p className="uppercase text-sm tracking-widest text-blue-400 mb-2 font-medium">
          Our first year milestones
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center tracking-tight">
          First-Year Achievements
        </h2>
        <p className="max-w-xl text-center text-gray-300 mb-14 font-normal">
          We're proud of what we've accomplished in our first year building the future of learning together.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
          {achievementsData.map((item, idx) => (
            <div
              key={item.label}
              ref={el => (cardsRef.current[idx] = el)}
              onMouseEnter={() => handleMouseEnter(idx)}
              onMouseLeave={() => handleMouseLeave(idx)}
              className="group relative bg-[#1d222c] rounded-2xl p-8 shadow-lg ring-1 ring-[#282c35] hover:ring-2 hover:ring-blue-500 transition-all duration-200"
              style={{ minHeight: 190, cursor: 'pointer' }}
            >
              <div
                className="flex items-center justify-center mb-6"
                style={{
                  color: item.color,
                  background: `${item.color}11`,
                  borderRadius: '50%',
                  width: 76,
                  height: 76,
                }}
              >
                {item.icon}
              </div>
              <div className="text-center">
                <div
                  className="text-4xl font-bold"
                  style={{ color: item.color }}
                  ref={el => (numberRefs.current[idx] = el)}
                >
                  0{item.suffix || ''}
                </div>
                <div className="font-semibold mt-1 mb-2 text-lg text-white">{item.label}</div>
                <div className="text-gray-400 text-base tracking-wide">{item.desc}</div>
              </div>
              <div
                className="pointer-events-none absolute bottom-0 left-0 w-full h-2 transition-opacity opacity-0 group-hover:opacity-100"
                style={{
                  background: `linear-gradient(90deg, transparent, ${item.color}88 50%, transparent)`
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievement;
