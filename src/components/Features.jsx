import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { TiLocationArrow } from "react-icons/ti";
import azul from '../assets/azul.mp4';
import nexus from '../assets/nexus.mp4';
import zigma from '../assets/zigma.mp4';
import livechat from '../assets/livechat.mp4';
import livesession from '../assets/livesession.mp4';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;
    const { left, top, width, height } = itemRef.current.getBoundingClientRect();
    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;
    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;
    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <motion.div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ scale: 1.02 }}
    >
      {children}
    </motion.div>
  );
};

export const BentoCard = ({
  src,
  title,
  description,
  isComingSoon,
  cardClassName = "",
  videoClassName = "",
}) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();
    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className={`relative size-full bg-black ${cardClassName}`}>
      <video
        src={src}
        loop
        muted
        autoPlay
        className={`absolute left-0 top-0 size-full object-cover object-center opacity-80 transition-transform duration-[8000ms] ease-linear hover:scale-105 ${videoClassName}`}
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-white">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-sm md:text-base text-white/80">
              {description}
            </p>
          )}
        </div>
        {isComingSoon && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20"
          >
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              }}
            />
            <TiLocationArrow className="relative z-20" />
            <p className="relative z-20">coming soon</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Features = () => (
  <section className="bg-black pb-52">
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 py-32">
        <p className="font-circular-web text-lg text-blue-50">
          Athena Learning Management System
        </p>
        <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
          Comprehensive enterprise-grade solutions for institutions, organizations, and educators with advanced features and integrations.
        </p>
      </div>

      {/* Main intro card */}
      <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <BentoCard
          src="videos/feature-1.mp4"
          title={
            <>
              radia<b>n</b>t
            </>
          }
          description="A cross-platform learning experience platform, integrating all your learning activities into a unified system."
          isComingSoon
        />
      </BentoTilt>

      {/* Features grid */}
      <div className="grid w-full grid-cols-2 grid-rows-[auto] gap-7">

        <BentoTilt className="bento-tilt_1 md:col-span-1 md:row-span-2 h-[60vh]">
          <BentoCard
            src={zigma}
            title={
              <>
                Enterprise<b>-</b>Ready
              </>
            }
            description="Scalable LMS solution with SSO, API integrations, and white-labeling options"
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 md:col-span-1 md:row-span-1 h-[50vh]">
          <BentoCard
            src={nexus}
            title={
              <>
                Data<b>-</b>Driven Insights
              </>
            }
            description="Comprehensive analytics and reporting for institutional decision-making"
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 h-[50vh]">
          <BentoCard
            src={azul}
            title={
              <>
                Compliance<b>-</b>Ready
              </>
            }
            description="SCORM, xAPI, and accessibility standards with audit trails and reporting"
            isComingSoon
          />
        </BentoTilt>

        {/* Live Sessions - vertical and large */}
        <BentoTilt className="bento-tilt_3 col-span-1 h-[90vh]">
          <BentoCard
            src={livesession}
            title={
              <>
                Live <b>Sessions</b>
              </>
            }
            description="Conduct virtual classrooms with video conferencing and interactive whiteboards"
            cardClassName="h-full w-full"
            videoClassName="object-cover object-center"
          />
        </BentoTilt>

        {/* Live Chats - horizontal and large */}
        <BentoTilt className="bento-tilt_4 col-span-1 h-[60vh]">
          <BentoCard
            src={livechat}
            title={
              <>
                Live <b>Chats</b>
              </>
            }
            description="Enable real-time discussions and support between learners and instructors"
            cardClassName="h-full w-full"
            videoClassName="object-cover object-center"
          />
        </BentoTilt>

        {/* Coming soon text card */}
        <BentoTilt className="bento-tilt_2 h-[40vh]">
          <div className="flex size-full flex-col justify-between bg-gray-900 p-5">
            <h1 className="bento-title special-font max-w-64 text-white">
              M<b>o</b>re fe<b>a</b>tures co<b>m</b>ing s<b>o</b>on.
            </h1>
            <TiLocationArrow className="m-5 scale-[5] self-end text-white/20" />
          </div>
        </BentoTilt>

        {/* Last video card */}
        <BentoTilt className="bento-tilt_2 h-[40vh]">
          <video
            src="videos/feature-5.mp4"
            loop
            muted
            autoPlay
            className="size-full object-cover object-center opacity-80 transition-transform duration-[8000ms] ease-linear hover:scale-105"
          />
        </BentoTilt>
      </div>
    </div>
  </section>
);

export default Features;
