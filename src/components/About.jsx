import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import dashboard from '../assets/dashboard.png';
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    // Mask animation
    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });

    // Image swap animation
    clipAnimation.to(".initial-image", {
      opacity: 0,
      duration: 0.5,
      ease: "power2.inOut"
    }, ">0.2"); // starts after 20% of the mask animation

    clipAnimation.fromTo(".second-image", 
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power2.inOut" },
    ">0"); // starts immediately after the previous animation
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[10px]">
          Welcome to Athena
        </p>

        <AnimatedTitle
          title="Disc<b>o</b>ver the world's <br /> largest shared <b>a</b>dventure"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext">
          <p>Power Your Institution with Athena LMS</p>
          <p className="text-gray-500">
            Complete Learning Management System for institutions, organizations, and educators.
            both digital and physical, into a unified Play Economy
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image relative">
          {/* Initial image */}
          <img
            src="img/about.webp"
            alt="Background"
            className="initial-image absolute left-0 top-0 size-full object-cover"
          />
          
          {/* Second image that will appear during scroll */}
          <img
            src={dashboard} // Using the imported dashboard image
            alt="Dashboard"
            className="second-image absolute left-0 top-0 size-full object-cover opacity-0"
          />
        </div>
      </div>
    </div>
  );
};

export default About;