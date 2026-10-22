import React, { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";

// Import the logo asset (Adjust the relative path to match your project folder structure)
import logo from "./assets/logo.png";

// ============================================================================
// Types & Interfaces
// ============================================================================

interface RivetProps {
  className?: string;
}

type CornerPosition = "tl" | "tr" | "bl" | "br";

interface CornerBracketProps {
  position: CornerPosition;
}

interface SectionChassisProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

interface GlowingBadgeProps {
  text: string;
}

interface ZigZagFeatureProps {
  title: string;
  desc: string;
  tag: string;
  reverse?: boolean;
  index?: number;
}

interface TimelineStepProps {
  title: string;
  desc: string;
  number: string;
  index?: number;
}

interface GlassPaneProps {
  title: string;
  desc: string;
  index?: number;
}

interface HollowTechBoxProps {
  title: string;
  content: string;
  index?: number;
}

interface NavLinkItem {
  href: string;
  label: string;
}

// ============================================================================
// Industrial & Advanced UI Components
// ============================================================================

const Rivet: React.FC<RivetProps> = ({ className = "" }) => (
  <div
    className={`absolute w-[10px] h-[10px] md:w-[14px] md:h-[14px] rounded-full bg-[radial-gradient(circle_at_35%_35%,#38bdf8_0%,#0f172a_65%,#020617_100%)] shadow-[0_2px_4px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(255,255,255,0.4),inset_0_-1px_2px_rgba(0,0,0,0.8)] border border-slate-800 flex items-center justify-center z-[3] ${className}`}
  >
    <div className="w-[5px] h-[1px] md:w-[7px] md:h-[1.5px] bg-slate-950 shadow-[0_1px_1px_rgba(56,189,248,0.4)] rotate-45" />
  </div>
);

const CornerBracket: React.FC<CornerBracketProps> = ({ position }) => {
  const posClasses: Record<CornerPosition, string> = {
    tl: "top-0 left-0 border-t-[2px] border-l-[2px] md:border-t-[3px] md:border-l-[3px] border-sky-400",
    tr: "top-0 right-0 border-t-[2px] border-r-[2px] md:border-t-[3px] md:border-r-[3px] border-sky-400",
    bl: "bottom-0 left-0 border-b-[2px] border-l-[2px] md:border-b-[3px] md:border-l-[3px] border-sky-400",
    br: "bottom-0 right-0 border-b-[2px] border-r-[2px] md:border-b-[3px] md:border-r-[3px] border-sky-400",
  };

  return (
    <div
      className={`absolute w-[12px] h-[12px] md:w-[18px] md:h-[18px] shadow-[0_0_10px_rgba(56,189,248,0.6)] pointer-events-none ${posClasses[position]}`}
    />
  );
};

// --- ADVANCED: Next-Gen Chakravyuha Matrix Background ---
const AdvancedChakravyuha: React.FC = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] flex items-center justify-center pointer-events-none z-[-1] opacity-70 scale-[0.28] xs:scale-[0.35] sm:scale-[0.55] md:scale-75 lg:scale-100">
      {/* Central Energy Core */}
      <div className="absolute w-[100px] h-[100px] bg-[radial-gradient(circle,rgba(56,189,248,0.6)_0%,transparent_70%)] animate-pulse rounded-full" />
      <motion.div
        animate={{ rotate: 360, scale: [0.9, 1.1, 0.9] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute w-[60px] h-[60px] border-[2px] border-sky-300/80 rounded-sm shadow-[0_0_20px_#38bdf8]"
      />

      {/* Layer 1: Rapid Inner Gear */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute w-[180px] h-[180px] border-[3px] border-dashed border-sky-400/70 rounded-full"
      />

      {/* Layer 2: Intersecting Hexagrams (Sacred Geometry / Matrix) */}
      <motion.svg
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        viewBox="0 0 200 200"
        className="absolute w-[300px] h-[300px] stroke-sky-500/40 fill-transparent stroke-[1px]"
      >
        <polygon points="100,10 178,50 178,150 100,190 22,150 22,50" />
        <polygon
          points="100,190 22,150 22,50 100,10 178,50 178,150"
          style={{ transformOrigin: "100px 100px", transform: "rotate(30deg)" }}
        />
      </motion.svg>

      {/* Layer 3: The True Chakravyuha Labyrinth */}
      <motion.svg
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        viewBox="0 0 400 400"
        className="absolute w-[550px] h-[550px] stroke-sky-400/50 fill-transparent stroke-[2px]"
      >
        <circle
          cx="200"
          cy="200"
          r="180"
          strokeDasharray="1000 50"
          strokeLinecap="round"
          className="drop-shadow-[0_0_5px_#38bdf8]"
        />
        <circle cx="200" cy="200" r="160" strokeDasharray="400 60 100 40" />
        <circle cx="200" cy="200" r="140" strokeDasharray="150 30 200 40" />
        <circle
          cx="200"
          cy="200"
          r="120"
          strokeDasharray="50 20 200 10 30 40"
          className="drop-shadow-[0_0_8px_#0ea5e9]"
        />
        <circle cx="200" cy="200" r="100" strokeDasharray="200 80" />

        <line
          x1="200"
          y1="20"
          x2="200"
          y2="80"
          strokeWidth="2"
          stroke="rgba(56,189,248,0.6)"
        />
        <line
          x1="200"
          y1="320"
          x2="200"
          y2="380"
          strokeWidth="2"
          stroke="rgba(56,189,248,0.6)"
        />
        <line
          x1="20"
          y1="200"
          x2="80"
          y2="200"
          strokeWidth="2"
          stroke="rgba(56,189,248,0.6)"
        />
        <line
          x1="320"
          y1="200"
          x2="380"
          y2="200"
          strokeWidth="2"
          stroke="rgba(56,189,248,0.6)"
        />
      </motion.svg>

      {/* Layer 4: Orbital Data Nodes */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute w-[750px] h-[750px] rounded-full border border-sky-300/10"
      >
        <div className="absolute top-0 left-1/2 w-5 h-5 bg-sky-400 rounded-full shadow-[0_0_25px_#38bdf8] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full animate-ping" />
        </div>
        <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-sky-200 rounded-full shadow-[0_0_15px_#bae6fd] -translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-1/2 left-0 w-4 h-4 bg-sky-500 rounded-full shadow-[0_0_20px_#0ea5e9] -translate-x-1/2 -translate-y-1/2" />
      </motion.div>

      {/* Layer 5: Precision HUD Radar Ticks */}
      <motion.svg
        animate={{ rotate: -360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        viewBox="0 0 500 500"
        className="absolute w-[950px] h-[950px]"
      >
        <g className="stroke-sky-500/30 stroke-[1.5px]">
          {[...Array(72)].map((_, i) => (
            <line
              key={`minor-${i}`}
              x1="250"
              y1="0"
              x2="250"
              y2="12"
              transform={`rotate(${i * 5} 250 250)`}
            />
          ))}
          {[...Array(12)].map((_, i) => (
            <line
              key={`major-${i}`}
              x1="250"
              y1="0"
              x2="250"
              y2="25"
              className="stroke-sky-400/60 stroke-[3px]"
              transform={`rotate(${i * 30} 250 250)`}
            />
          ))}
        </g>
        <circle
          cx="250"
          cy="250"
          r="248"
          fill="none"
          className="stroke-sky-500/20 stroke-[1px]"
        />
      </motion.svg>

      {/* Layer 6: Massive Slow Outer Boundary */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
        className="absolute w-[1300px] h-[1300px] rounded-full border-[2px] border-dashed border-sky-400/10"
      />
    </div>
  );
};

// --- Ambient Background Text Marquee ---
const BackgroundTextMarquee: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[-2] flex flex-col justify-center gap-16 md:gap-40 opacity-[0.03] mix-blend-screen">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap text-[48px] sm:text-[80px] md:text-[180px] font-black text-sky-300 tracking-tighter uppercase leading-none"
      >
        Inspire Global • THE FUTURE • MATRIX • COMMUNITY • Inspire Global • THE
        FUTURE • MATRIX • COMMUNITY •
      </motion.div>
      <motion.div
        animate={{ x: ["-50%", "0%"] }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap text-[40px] sm:text-[70px] md:text-[160px] font-black text-sky-400 tracking-tighter uppercase leading-none"
      >
        DECENTRALIZED • AUTONOMOUS • ECOSYSTEM • DECENTRALIZED • AUTONOMOUS •
        ECOSYSTEM •
      </motion.div>
    </div>
  );
};

const SectionChassis: React.FC<SectionChassisProps> = ({
  children,
  className = "",
  id,
}) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.15 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className={`w-full bg-[#0a1322] rounded-xl border border-slate-800/80 shadow-[0_25px_50px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(56,189,248,0.1)] p-3 sm:p-6 relative ${className}`}
  >
    <Rivet className="top-2 left-2 md:top-3 md:left-3" />
    <Rivet className="top-2 right-2 md:top-3 md:right-3" />
    <Rivet className="bottom-2 left-2 md:bottom-3 md:left-3" />
    <Rivet className="bottom-2 right-2 md:bottom-3 md:right-3" />
    <div className="bg-[#060b14]/80 border border-[#111e33]/80 rounded-lg p-5 sm:p-8 md:p-12 relative shadow-[inset_0_2px_20px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col items-center text-center md:items-stretch md:text-left">
      <CornerBracket position="tl" />
      <CornerBracket position="tr" />
      <CornerBracket position="bl" />
      <CornerBracket position="br" />

      <motion.div
        animate={{ y: ["-100%", "200%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-full h-[10px] bg-sky-400/5 blur-[8px] pointer-events-none"
      />
      {children}
    </div>
  </motion.section>
);

const GlowingBadge: React.FC<GlowingBadgeProps> = ({ text }) => (
  <motion.span
    initial={{ opacity: 0, scale: 0.9, y: 15 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    viewport={{ once: false }}
    transition={{ duration: 0.5, type: "spring" }}
    className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-sky-600/10 border border-sky-400/30 rounded-3xl text-sky-400 text-[10px] md:text-xs font-extrabold tracking-[1px] md:tracking-[1.5px] mb-4 md:mb-5 shadow-[0_0_15px_rgba(56,189,248,0.15)] relative overflow-hidden group text-center mx-auto"
  >
    <span className="relative z-10">{text}</span>
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-400/20 to-transparent -translate-x-[150%]"
      animate={{ translateX: ["-150%", "150%"] }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1,
      }}
    />
  </motion.span>
);

const ZigZagFeature: React.FC<ZigZagFeatureProps> = ({
  title,
  desc,
  tag,
  reverse = false,
  index = 0,
}) => (
  <motion.div
    initial={{ opacity: 0, x: reverse ? 30 : -30, y: 30 }}
    whileInView={{ opacity: 1, x: 0, y: 0 }}
    viewport={{ once: false, amount: 0.2 }}
    transition={{
      duration: 0.8,
      delay: index * 0.2,
      type: "spring",
      bounce: 0.3,
    }}
    className={`flex flex-col-reverse ${
      reverse ? "md:flex-row-reverse" : "md:flex-row"
    } items-center justify-center md:justify-between gap-8 md:gap-[60px] mb-14 md:mb-[100px] last:mb-0 flex-wrap relative z-10 text-center md:text-left w-full`}
  >
    <div className="flex-[1_1_100%] md:flex-[1_1_400px] flex flex-col items-center md:items-start">
      <GlowingBadge text={tag} />
      <h3 className="text-slate-50 text-xl sm:text-2xl md:text-[32px] font-black mb-3 md:mb-5 tracking-[1px] leading-[1.3] md:leading-[1.2]">
        {title}
      </h3>
      <p className="text-slate-400 text-sm md:text-base leading-[1.7] md:leading-[1.8]">
        {desc}
      </p>
    </div>

    <div className="flex-[1_1_100%] md:flex-[1_1_300px] flex justify-center w-full">
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className={`w-[200px] h-[200px] sm:w-[220px] sm:h-[220px] md:w-[280px] md:h-[280px] bg-[radial-gradient(circle_at_30%_30%,rgba(56,189,248,0.1),transparent_70%)] border border-dashed border-sky-400/20 ${
          reverse ? "rounded-full" : "rounded-2xl"
        } relative flex items-center justify-center shadow-[0_0_40px_rgba(2,132,199,0.05)] mx-auto`}
      >
        <motion.div
          animate={{ rotate: reverse ? [45, 225, 45] : [0, 180, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
          className="w-[90px] h-[90px] md:w-[120px] md:h-[120px] border-2 border-sky-600"
        />
        <motion.div
          animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-2 h-2 md:w-3 md:h-3 bg-sky-400 rounded-full top-[20px] right-[40px] md:top-[30px] md:right-[50px] shadow-[0_0_15px_#38bdf8]"
        />
      </motion.div>
    </div>
  </motion.div>
);

const TimelineStep: React.FC<TimelineStepProps> = ({
  title,
  desc,
  number,
  index = 0,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: false, amount: 0.3 }}
    transition={{ duration: 0.6, delay: index * 0.15, type: "spring" }}
    className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-3 md:gap-8 relative pb-10 md:pb-12 w-full"
  >
    <div className="flex flex-col items-center">
      <motion.div
        whileHover={{ scale: 1.1, boxShadow: "0 0 25px rgba(56,189,248,0.5)" }}
        className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-slate-950 border-2 border-sky-400 flex items-center justify-center text-sky-400 font-black text-xs md:text-sm z-[2] shadow-[0_0_20px_rgba(56,189,248,0.2)] shrink-0"
      >
        {number}
      </motion.div>
      <div className="hidden md:block w-[2px] grow bg-gradient-to-b from-sky-600 to-transparent mt-3 min-h-[50px]" />
    </div>
    <div className="flex-1 pt-1 md:pt-2 flex flex-col items-center md:items-start">
      <h4 className="text-slate-50 text-lg md:text-xl font-extrabold mb-2 md:mb-3 tracking-[1px]">
        {title}
      </h4>
      <p className="text-slate-400 text-sm md:text-[15px] leading-[1.6] md:leading-[1.7] max-w-[500px] md:max-w-none">
        {desc}
      </p>
      <div className="md:hidden w-[2px] h-8 bg-gradient-to-b from-sky-600 to-transparent mt-4" />
    </div>
  </motion.div>
);

const GlassPane: React.FC<GlassPaneProps> = ({ title, desc, index = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30, rotateX: -15, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
    viewport={{ once: false, amount: 0.2 }}
    whileHover={{ y: -8, scale: 1.02 }}
    transition={{
      duration: 0.6,
      delay: index * 0.15,
      type: "spring",
      bounce: 0.4,
    }}
    className="relative p-[1px] rounded-2xl flex-[1_1_100%] md:flex-[1_1_300px] overflow-hidden group shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_50px_rgba(56,189,248,0.15)] perspective-1000 w-full"
  >
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_240deg,#38bdf8_360deg)] opacity-20 group-hover:opacity-100 transition-opacity duration-500"
    />

    <div className="bg-[#060b14]/80 backdrop-blur-xl border-t border-l border-sky-400/20 p-6 md:p-10 rounded-2xl h-full relative z-10 flex flex-col items-center justify-center text-center md:items-start md:justify-start md:text-left">
      <h4 className="text-sky-400 text-base md:text-lg font-black mb-3 md:mb-4 tracking-[1.5px]">
        {title}
      </h4>
      <p className="text-slate-300 text-sm md:text-[15px] leading-[1.6] md:leading-[1.7]">
        {desc}
      </p>
    </div>
  </motion.div>
);

const HollowTechBox: React.FC<HollowTechBoxProps> = ({
  title,
  content,
  index = 0,
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9, y: 30 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    viewport={{ once: false, amount: 0.2 }}
    whileHover={{ y: -5, scale: 1.03 }}
    transition={{
      duration: 0.5,
      delay: index * 0.1,
      type: "spring",
      bounce: 0.3,
    }}
    className="relative p-[1px] flex-[1_1_100%] sm:flex-[1_1_45%] md:flex-[1_1_250px] overflow-hidden group w-full rounded-lg"
  >
    <motion.div
      animate={{ rotate: -360 }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0_280deg,#0ea5e9_360deg)] opacity-30 group-hover:opacity-100 transition-opacity duration-300"
    />

    <div className="bg-slate-950/80 backdrop-blur-md p-5 md:p-6 h-full relative z-10 border border-transparent group-hover:border-sky-400/20 transition-colors flex flex-col items-center justify-center text-center md:items-start md:justify-start md:text-left rounded-lg">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-[linear-gradient(90deg,transparent,#38bdf8,transparent)]" />
      <h5 className="text-sky-100 text-sm md:text-[15px] font-extrabold mb-2 md:mb-3 tracking-[1px]">
        {title}
      </h5>
      <p className="text-slate-400 text-xs md:text-sm leading-[1.6] m-0">
        {content}
      </p>
    </div>
  </motion.div>
);

// ============================================================================
// Main Landing Page Component
// ============================================================================

export default function Landing(): React.JSX.Element {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Advanced Scroll Animations Setup
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    restDelta: 0.001,
  });

  // Parallax transform variables
  const yParallaxFast = useTransform(smoothProgress, [0, 1], [0, -800]);
  const yParallaxMedium = useTransform(smoothProgress, [0, 1], [0, -400]);
  const rotateScrollReverse = useTransform(smoothProgress, [0, 1], [0, -180]);

  // Hero Section Dynamic Words Setup
  const heroWords = ["PROGRESS", "COMMUNITY", "LEADERSHIP", "THE FUTURE"];
  const [heroWordIndex, setHeroWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroWordIndex((prev) => (prev + 1) % heroWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [heroWords.length]);

  const navLinks: NavLinkItem[] = [
    { href: "#about", label: "OVERVIEW" },
    { href: "#mission", label: "MISSION" },
    { href: "#income", label: "INCOME STREAMS" },
    { href: "#architecture", label: "ARCHITECTURE" },
    { href: "#leadership", label: "LEADERSHIP" },
    { href: "#jackpot", label: "JACKPOTS" },
    { href: "#withdrawal", label: "ECOSYSTEM" },
    { href: "#web3-engine", label: "WEB3 ENGINE" },
  ];

  return (
    <div className="min-h-screen bg-[#030712] font-sans relative overflow-x-hidden overflow-y-auto flex flex-col items-center w-full">
      {/* ------------------------------------------------------------------------
         ADVANCED SCROLL-LINKED & AMBIENT BACKGROUNDS
      ------------------------------------------------------------------------- */}

      {/* Base Gradient Layer */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(14,165,233,0.12)_0%,transparent_60%),radial-gradient(ellipse_at_80%_90%,rgba(2,132,199,0.08)_0%,transparent_50%),linear-gradient(135deg,#020617_0%,#080f1d_100%)]" />

      {/* Grid Overlay */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,rgba(0,0,0,1)_20%,transparent_80%)] pointer-events-none z-0" />

      {/* Ambient Top & Bottom Glows */}
      <div className="fixed -top-[100px] md:-top-[200px] left-1/2 -translate-x-1/2 w-[320px] sm:w-[400px] md:w-[800px] h-[200px] md:h-[400px] bg-[radial-gradient(circle,rgba(56,189,248,0.15)_0%,transparent_70%)] blur-[40px] md:blur-[60px] pointer-events-none z-0" />
      <div className="fixed -bottom-[100px] md:-bottom-[200px] left-1/2 -translate-x-1/2 w-[320px] sm:w-[500px] md:w-[1000px] h-[200px] md:h-[400px] bg-[radial-gradient(circle,rgba(2,132,199,0.15)_0%,transparent_70%)] blur-[50px] md:blur-[70px] pointer-events-none z-0" />

      {/* Dynamic Parallax Scroll Elements */}
      <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden hidden md:block">
        <motion.div
          style={{ y: yParallaxMedium, rotate: rotateScrollReverse }}
          className="absolute top-[60%] left-[5%] w-[250px] h-[250px] opacity-30"
        >
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-sky-500/20" />
          <div className="absolute top-0 left-1/2 w-[1px] h-full bg-sky-500/20" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-sky-500/20 rounded-full" />
        </motion.div>
        <motion.div
          style={{ y: yParallaxFast }}
          className="absolute bottom-[-10%] right-[5%] w-[300px] h-[300px] opacity-20"
        >
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full stroke-sky-400 fill-transparent stroke-[0.2]"
          >
            <circle cx="50" cy="50" r="40" strokeDasharray="2 6" />
            <polygon points="50,15 85,75 15,75" strokeDasharray="1 3" />
          </svg>
        </motion.div>
      </div>

      {/* Floating Ambient Particles (Time-based) */}
      <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full bg-sky-400/20 blur-[2px]"
            style={{
              width: Math.random() * 20 + 5 + "px",
              height: Math.random() * 20 + 5 + "px",
              left: Math.random() * 100 + "vw",
              top: Math.random() * 100 + "vh",
            }}
            animate={{
              y: [0, -80, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
      {/* ------------------------------------------------------------------------ */}

      {/* Sticky Navigation Header */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full py-3.5 md:py-[18px] px-4 sm:px-6 md:px-8 sticky top-0 z-50 bg-[#030712]/90 backdrop-blur-xl border-b border-slate-800/90"
      >
        <div className="flex items-center justify-between gap-2 sm:gap-4 max-w-[1360px] mx-auto relative">
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            <div className="w-1 h-8 md:h-10 bg-sky-400 rounded-sm shadow-[0_0_12px_rgba(56,189,248,0.8)]" />
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Inspire Global Logo"
                className="h-10 sm:h-12 md:h-17 w-auto object-contain"
              />
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-[22px] items-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-300 hover:text-sky-400 no-underline text-[11px] font-extrabold tracking-[1.5px] cursor-pointer transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* 1. Changed "hidden sm:flex" to "flex" to show on mobile, and adjusted mobile padding (px-3) slightly to fit smaller screens */}
            <motion.button
              whileHover={{ scale: 1.05, borderColor: "#38bdf8" }}
              whileTap={{ scale: 0.96 }}
              className="flex bg-[#0c1a2e]/60 border border-sky-600 rounded-[30px] text-sky-100 text-[13px] md:text-xs font-extrabold tracking-[1px] py-2.5 px-4 sm:px-5 md:py-3.5 md:px-7 cursor-pointer items-center gap-2 md:gap-3 transition-all duration-200 shadow-[0_4px_12px_rgba(0,0,0,0.4)] shrink-0"
              onClick={() =>
                (window.location.href = "https://dapp.inspireglobal.club/")
              }
            >
              <span className="w-2.5 h-2.5 rounded-full bg-sky-400 shadow-[0_0_10px_#38bdf8] animate-pulse shrink-0" />
              Launch App
            </motion.button>

            <button
              aria-label="Toggle Menu"
              className="lg:hidden text-sky-400 p-1 sm:p-2 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden bg-[#030712]/95 border-b border-slate-800 absolute top-full left-0 w-full shadow-2xl"
            >
              <nav className="flex flex-col items-center text-center px-5 py-5 gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full text-slate-300 hover:text-sky-400 no-underline text-xs font-extrabold tracking-[1.5px] py-2.5 border-b border-slate-800/50"
                  >
                    {link.label}
                  </a>
                ))}
                {/* 2. Removed the duplicate mobile button from here */}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Main Content Container */}
      <div className="w-full max-w-[1200px] px-4 sm:px-6 flex flex-col items-center z-[2] relative">
        {/* ======================================================================
            ADVANCED HERO SECTION (Chakravyuha + Text Marquee + Typography)
        ====================================================================== */}
        <div className="w-full text-center pt-[7vh] sm:pt-[10vh] md:pt-[14vh] pb-[7vh] sm:pb-[8vh] md:pb-[12vh] px-4 sm:px-6 relative flex flex-col items-center justify-center overflow-hidden rounded-[20px] md:rounded-[40px] mt-4 border border-sky-500/10 bg-[#060b14]/40 backdrop-blur-sm shadow-[inset_0_0_100px_rgba(2,132,199,0.05)]">
          {/* Animated Matrix Backgrounds */}
          <BackgroundTextMarquee />
          <AdvancedChakravyuha />

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-10 mt-2 md:mt-8 flex justify-center"
          >
            <GlowingBadge text="COMMUNITY POWERED • PERFORMANCE DRIVEN" />
          </motion.div>

          {/* Animated Main Headline with Dynamic Word Cycling */}
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-[clamp(26px,7.5vw,72px)] text-slate-50 font-black tracking-[1px] md:tracking-[2px] leading-[1.15] mb-6 md:mb-8 relative z-[2] flex flex-col items-center justify-center text-center w-full"
          >
            <span className="drop-shadow-[0_0_15px_rgba(56,189,248,0.3)]">
              EMPOWERING
            </span>

            {/* The Animated Word Container */}
            <div className="h-[1.25em] relative w-full flex justify-center items-center my-1 md:my-2">
              <AnimatePresence mode="wait">
                <motion.span
                  key={heroWordIndex}
                  initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -20, filter: "blur(5px)" }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-sky-500 to-sky-400 [-webkit-text-stroke:1px_rgba(56,189,248,0.3)] whitespace-nowrap absolute drop-shadow-[0_0_20px_rgba(56,189,248,0.5)] text-center"
                >
                  {heroWords[heroWordIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            <span className="text-[clamp(18px,4.5vw,40px)] text-slate-400 mt-1 md:mt-2 tracking-[2px] md:tracking-[4px]">
              TOGETHER
            </span>
          </motion.h2>

          {/* Advanced Tech-Framed Description Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="max-w-[850px] mx-auto mb-8 md:mb-12 relative z-[2] group w-full"
          >
            {/* Holographic Frame Corner Accents */}
            <div className="absolute -left-1.5 md:-left-3 -top-1.5 md:-top-3 w-4 md:w-6 h-4 md:h-6 border-l-2 border-t-2 border-sky-400/50 transition-all duration-300 group-hover:border-sky-400" />
            <div className="absolute -right-1.5 md:-right-3 -top-1.5 md:-top-3 w-4 md:w-6 h-4 md:h-6 border-r-2 border-t-2 border-sky-400/50 transition-all duration-300 group-hover:border-sky-400" />
            <div className="absolute -left-1.5 md:-left-3 -bottom-1.5 md:-bottom-3 w-4 md:w-6 h-4 md:h-6 border-l-2 border-b-2 border-sky-400/50 transition-all duration-300 group-hover:border-sky-400" />
            <div className="absolute -right-1.5 md:-right-3 -bottom-1.5 md:-bottom-3 w-4 md:w-6 h-4 md:h-6 border-r-2 border-b-2 border-sky-400/50 transition-all duration-300 group-hover:border-sky-400" />

            {/* Glassmorphic Panel */}
            <div className="bg-[#030712]/70 backdrop-blur-lg rounded-lg border border-sky-500/30 p-5 sm:p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_0_20px_rgba(56,189,248,0.1)] relative overflow-hidden">
              <motion.div
                animate={{ y: ["-100%", "200%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 left-0 w-full h-[2px] bg-sky-400/30 blur-[1px] pointer-events-none"
              />
              <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-[1.6] md:leading-[1.8] relative z-10 m-0 text-center">
                "A stronger tomorrow is built by people who grow together."{" "}
                <br className="hidden md:block" />
                Operating on a complete community distribution model, Inspire
                Global merges algorithmic transparency with collective human
                participation to unlock borderless digital opportunities.
              </p>
            </div>
          </motion.div>

          {/* High-Tech CTA Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            className="group relative bg-[#060b14]/80 backdrop-blur-md border border-sky-500/60 rounded-full px-6 py-4 md:px-12 md:py-5 cursor-pointer overflow-hidden z-[2] shadow-[0_0_30px_rgba(2,132,199,0.3)] hover:shadow-[0_0_50px_rgba(56,189,248,0.5)] mb-2 md:mb-8 w-full max-w-[300px] sm:max-w-[340px] md:max-w-fit mx-auto"
          >
            <motion.div
              className="absolute top-0 bottom-0 w-12 bg-gradient-to-r from-transparent via-sky-300 to-transparent opacity-40 skew-x-[-25deg]"
              animate={{ left: ["-30%", "130%"] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />

            <div className="relative flex items-center justify-center gap-3">
              <span className="w-2 h-2 bg-sky-400 shadow-[0_0_12px_#38bdf8] animate-pulse rounded-full shrink-0" />
              <span className="text-sky-100 text-[11px] sm:text-xs md:text-sm font-black tracking-[1.5px] md:tracking-[3px] text-center">
                INITIALIZE YOUR NETWORK
              </span>
              <span className="text-sky-400 font-bold group-hover:translate-x-1.5 transition-transform duration-300 hidden sm:inline">
                →
              </span>
            </div>
          </motion.button>
        </div>
        {/* ====================================================================== */}

        {/* Section: About Us (System Overview) */}
        <SectionChassis id="about" className="mb-14 md:mb-20 mt-8 md:mt-10">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center w-full">
            <div className="flex-[1_1_100%] lg:flex-[1_1_500px] flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="text-sky-400 text-xs md:text-sm font-black tracking-[2px] mb-3 md:mb-4">
                WHAT IS Inspire Global?
              </div>
              <p className="text-slate-200 text-sm md:text-base leading-[1.6] md:leading-[1.8] mb-4 md:mb-5">
                Inspire Global is a community-driven ecosystem built around
                participation, contribution, performance, and shared progress.
                The platform connects individuals through a structured community
                model where active engagement, team mentorship, leadership
                development, and transparent distribution work together within
                one unified framework.
              </p>
              <p className="text-slate-400 text-sm md:text-[15px] leading-[1.6] md:leading-[1.7] mb-4 md:mb-5">
                In modern decentralized network economies, isolated effort often
                leads to stagnation. Inspire Global resolves this by replacing
                traditional hierarchical bottlenecks with a fluid,
                interconnected matrix where value flows bidirectionally across
                the community.
              </p>
              <div className="w-full border-t-4 lg:border-t-0 lg:border-l-4 border-sky-600 py-4 px-4 md:py-4 md:px-6 text-sky-200 text-sm sm:text-base md:text-lg italic leading-[1.6] md:leading-[1.7] mt-4 bg-sky-900/10 text-center lg:text-left rounded-b-lg lg:rounded-b-none lg:rounded-r-lg">
                <span className="text-2xl md:text-[28px] text-sky-400 block mb-1 leading-none">
                  "
                </span>
                Progress becomes more powerful when we build it together.
              </div>
            </div>
            <div className="flex-[1_1_100%] lg:flex-[1_1_350px] grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10 w-full">
              <HollowTechBox
                index={0}
                title="COMMUNITY"
                content="Building meaningful and connected participation across a borderless global network."
              />
              <HollowTechBox
                index={1}
                title="CONTRIBUTION"
                content="Recognizing qualified activity, direct mentorship, and consistent involvement."
              />
              <HollowTechBox
                index={2}
                title="TRANSPARENCY"
                content="Creating clearly defined rules and automated, verifiable distribution mechanisms."
              />
              <HollowTechBox
                index={3}
                title="PROGRESS"
                content="Building a scalable ecosystem focused on long-term community development."
              />
            </div>
          </div>
        </SectionChassis>

        {/* NEW SECTION 1: Global Mission & Strategic Vision */}
        <section id="mission" className="w-full py-12 md:py-20 relative z-[2]">
          <div className="text-center mb-10 md:mb-[60px] flex flex-col items-center">
            <GlowingBadge text="TOGETHER WE GO FURTHER" />
            <h3 className="text-slate-50 text-2xl md:text-[28px] font-black tracking-[1px] md:tracking-[2px] mb-3 md:mb-4">
              OUR GLOBAL MISSION
            </h3>
            <p className="text-slate-400 text-sm md:text-base max-w-[700px] mx-auto leading-[1.6] md:leading-[1.7]">
              "To empower people through a transparent, fair, and sustainable
              ecosystem, where participation creates opportunities and
              collective growth builds a brighter tomorrow for all."
            </p>
          </div>

          <div className="flex flex-col md:flex-row flex-wrap gap-4 md:gap-6 mb-4 md:mb-10 w-full">
            <GlassPane
              index={0}
              title="EMPOWER PEOPLE"
              desc="Provide equal, accessible opportunities for everyone to grow and succeed regardless of their geographical or technical background."
            />
            <GlassPane
              index={1}
              title="ENSURE TRANSPARENCY"
              desc="Maintain clear, fair, and trustworthy systems in every process, eliminating ambiguity in how community rewards are calculated and shared."
            />
            <GlassPane
              index={2}
              title="DRIVE SUSTAINABLE GROWTH"
              desc="Build a resilient, long-term ecosystem that benefits both individual participants and the broader collective community simultaneously."
            />
          </div>

          <div className="flex flex-col md:flex-row flex-wrap gap-4 md:gap-6 mb-10 md:mb-[60px] w-full">
            <GlassPane
              index={0}
              title="CREATE GLOBAL OPPORTUNITIES"
              desc="Connect people worldwide through active participation, meaningful contribution, and continuous structural innovation."
            />
            <GlassPane
              index={1}
              title="BUILD A BRIGHTER TOMORROW"
              desc="Together we create a more prosperous, responsible, and inclusive future—proving that small steps together create giant progress."
            />
          </div>

          {/* 4 Action Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-center relative z-10 w-full">
            <HollowTechBox
              index={0}
              title="PEOPLE EMPOWER"
              content="Equipping members with a self-sustaining digital framework to elevate their personal potential."
            />
            <HollowTechBox
              index={1}
              title="SYSTEM SIMPLIFY"
              content="Abstracting complex matrix calculations into an intuitive, frictionless user experience."
            />
            <HollowTechBox
              index={2}
              title="COMMUNITY EXPAND"
              content="Fostering organic global outreach through aligned incentives and shared prosperity."
            />
            <HollowTechBox
              index={3}
              title="OPPORTUNITY ELEVATE"
              content="Continuously scaling reward horizons as members deepen their engagement."
            />
          </div>
        </section>

        {/* SECTION: Multi-Dimensional Income Streams */}
        <section
          id="income"
          className="w-full py-12 md:py-[60px] relative z-[2]"
        >
          <div className="text-center mb-10 md:mb-[60px] flex flex-col items-center">
            <GlowingBadge text="COMPLETE COMMUNITY DISTRIBUTION" />
            <h3 className="text-slate-50 text-2xl md:text-[28px] font-black tracking-[1px] md:tracking-[2px] mb-3 md:mb-4">
              MULTI-DIMENSIONAL INCOME STREAMS
            </h3>
            <p className="text-slate-400 text-sm md:text-base max-w-[700px] mx-auto leading-[1.6] md:leading-[1.7]">
              Our distribution engine is engineered to allocate value completely
              across the community, rewarding passive network placement, active
              team building, and top-tier leadership.
            </p>
          </div>

          <div className="flex flex-col md:flex-row flex-wrap gap-4 md:gap-6 justify-center w-full">
            <HollowTechBox
              index={0}
              title="COMMUNITY PARTICIPATION INCOME"
              content="Generated across a unified global single-leg community line. As the global network expands both above and below your position, your active tier captures ongoing value from open community levels."
            />
            <HollowTechBox
              index={1}
              title="TEAM PERFORMANCE INCOME"
              content="Built on a symmetrical dual-team structure. By balancing business volume across your left and right organizational branches, you unlock recurring performance bonus pools based on matched team output."
            />
            <HollowTechBox
              index={2}
              title="CONTRIBUTION LEVEL INCOME"
              content="A multi-generational mentorship reward system. Introducing qualified direct participants progressively unlocks deeper working levels across your personal referral tree."
            />
            <HollowTechBox
              index={3}
              title="LEADERSHIP ACHIEVEMENT INCOME"
              content="Dedicated daily distribution pools reserved for members who demonstrate rapid commitment and help their direct partners establish strong foundational tiers."
            />
            <HollowTechBox
              index={4}
              title="COMMUNITY REWARD INCOME"
              content="An inclusive, multi-tiered jackpot distribution mechanism designed to surprise and reward hundreds of lucky active community participants during scheduled draw events."
            />
          </div>
        </section>

        {/* NEW SECTION 2: Network Architecture & Matrix Mechanics */}
        <SectionChassis
          id="architecture"
          className="mb-14 md:mb-20 mt-8 md:mt-10"
        >
          <div className="text-center mb-10 md:mb-[60px] flex flex-col items-center w-full">
            <div className="text-sky-400 text-xs md:text-sm font-black tracking-[2px] mb-3 md:mb-4">
              STRUCTURAL BLUEPRINT
            </div>
            <h3 className="text-slate-50 text-2xl md:text-[28px] font-black tracking-[1px] md:tracking-[2px] mb-3 md:mb-4">
              NETWORK ARCHITECTURE & MATRIX MECHANICS
            </h3>
            <p className="text-slate-400 text-sm md:text-base max-w-[700px] mx-auto leading-[1.6] md:leading-[1.7]">
              Inspire Global combines three distinct network
              topologies—Single-Leg Global Line, Unilevel Contribution Depth,
              and Symmetrical Binary Matching—into one cohesive engine.
            </p>
          </div>

          <ZigZagFeature
            index={0}
            tag="BIDIRECTIONAL SINGLE-LEG"
            title="Upline & Downline Global Synchronization"
            desc="Unlike conventional linear structures where you only benefit from those who join after you, Inspire Global's Global Single Leg protocol opens visibility in both directions. Upon activating your participation tier, the engine automatically connects your node to consecutive upline predecessors and subsequent downline entrants across the global community, generating shared participation rewards from activity in both directions."
          />

          <ZigZagFeature
            index={1}
            reverse
            tag="PROGRESSIVE DEPTH UNLOCKING"
            title="Contribution Level Opening Criteria"
            desc="Your personal working network is structured across multiple generational tiers. To encourage genuine mentorship rather than passive placement, deeper generational tiers unlock dynamically as you introduce qualified direct members. Early direct sponsorships open your foundational working tiers, subsequent sponsorships unlock mid-level depth, and full direct qualification opens the entire generational horizon."
          />

          <ZigZagFeature
            index={2}
            tag="SYMMETRICAL BINARY ENGINE"
            title="Balanced Dual-Team Performance Matching"
            desc="The Team Performance module utilizes a balanced dual-branch structure consisting of a Left Team and a Right Team. Rather than paying out on raw, lopsided volume, the protocol evaluates the symmetrical match between both branches. Company-wide performance pools are converted into standardized matching units, ensuring that every balanced unit of team effort receives a fair, proportional share of the global performance allocation."
          />
        </SectionChassis>

        {/* SECTION: Elite Leadership Pathway */}
        <section
          id="leadership"
          className="w-full py-12 md:py-20 relative z-[2]"
        >
          <div className="text-center mb-10 md:mb-[60px] flex flex-col items-center">
            <GlowingBadge text="RECOGNIZING LEADERS • REWARDING COMMITMENT" />
            <h3 className="text-slate-50 text-2xl md:text-[28px] font-black tracking-[1px] md:tracking-[2px] mb-3 md:mb-4">
              ELITE LEADERSHIP PATHWAY
            </h3>
            <p className="text-slate-400 text-sm md:text-base max-w-[700px] mx-auto leading-[1.6] md:leading-[1.7]">
              Designed for decisive builders who establish their personal
              qualification and empower their direct team within an accelerated
              initial window.
            </p>
          </div>

          <div className="flex flex-col md:flex-row flex-wrap gap-4 md:gap-8 mb-4 md:mb-8 w-full">
            <GlassPane
              index={0}
              title="FOUNDATIONAL RANK: NEXUS"
              desc="The primary leadership milestone. Achieved by securing an active mid-tier self-qualification and mentoring direct members to do the same within a rapid onboarding timeframe. Grants daily participation in the Nexus leadership pool."
            />
            <GlassPane
              index={1}
              title="EXECUTIVE RANK: LEGACY CROWN"
              desc="The premier leadership distinction. Reserved for builders who commit at the highest participation tier and guide their direct partners to match that commitment rapidly. Unlocks access to the exclusive Legacy Crown daily distribution pool."
            />
          </div>

          <div className="flex flex-col md:flex-row flex-wrap gap-4 md:gap-8 w-full">
            <GlassPane
              index={0}
              title="DAILY POOL & CARRY-FORWARD LOGIC"
              desc="To protect leaders from daily market fluctuations, the leadership pool utilizes an intelligent stabilization mechanism. While a portion of the accumulated rank pool is distributed on the current day, the remaining allocation is systematically carried forward to seed the next day's reward pool."
            />
            <GlassPane
              index={1}
              title="SUSTAINABLE RANK EXIT PROTOCOL"
              desc="To prevent top-heavy pool monopolization and allow emerging leaders to thrive, rank pools enforce a fair growth cap. Once an achiever accumulates a designated return multiplier from any stream, they gracefully graduate from the rank pool while all other income streams continue uninterrupted."
            />
          </div>
        </section>

        {/* SECTION: Community Jackpot Protocol */}
        <SectionChassis id="jackpot" className="mb-14 md:mb-20">
          <div className="flex flex-col md:flex-row flex-wrap gap-8 md:gap-10 items-center w-full">
            <div className="flex-[1_1_100%] md:flex-[1_1_400px] flex flex-col items-center md:items-start text-center md:text-left">
              <div className="text-sky-400 text-xs md:text-sm font-black tracking-[2px] mb-3 md:mb-4">
                GAMIFIED COMMUNITY REWARDS
              </div>
              <h3 className="text-slate-50 text-2xl md:text-[28px] font-black mb-4 md:mb-5 tracking-[1px]">
                Inspire Global JACKPOT DRAW PROTOCOL
              </h3>
              <p className="text-slate-200 text-sm md:text-base leading-[1.6] md:leading-[1.8] mb-4 md:mb-5">
                The fifth pillar of the Inspire Global distribution model
                transforms community participation into an exciting, inclusive
                celebration. A dedicated portion of ecosystem flow is routed
                into a transparent prize pool for scheduled community draws.
              </p>
              <p className="text-slate-400 text-sm md:text-[15px] leading-[1.6] md:leading-[1.7] mb-4 md:mb-5">
                Rather than a winner-take-all lottery that benefits only a
                single individual, the Inspire Global Jackpot is architected
                across multiple distinct reward tiers. This pyramidal prize
                distribution guarantees that hundreds of lucky community members
                walk away with meaningful rewards in every draw cycle.
              </p>
              <div className="flex gap-2 md:gap-3 flex-wrap mt-2 md:mt-6 justify-center md:justify-start">
                <span className="bg-sky-600/10 border border-sky-400/30 py-1.5 px-3 rounded-[20px] text-sky-400 text-[10px] md:text-[11px] font-extrabold tracking-[1px]">
                  MULTI-TIERED
                </span>
                <span className="bg-sky-600/10 border border-sky-400/30 py-1.5 px-3 rounded-[20px] text-sky-400 text-[10px] md:text-[11px] font-extrabold tracking-[1px]">
                  HUNDREDS OF WINNERS
                </span>
                <span className="bg-sky-600/10 border border-sky-400/30 py-1.5 px-3 rounded-[20px] text-sky-400 text-[10px] md:text-[11px] font-extrabold tracking-[1px]">
                  TRANSPARENT
                </span>
              </div>
            </div>
            <div className="flex-[1_1_100%] md:flex-[1_1_300px] flex flex-col gap-4 relative z-10 w-full">
              <HollowTechBox
                index={0}
                title="PREMIER PRIZE TIERS"
                content="High-impact reward allocations designed for top-tier draw winners, celebrating luck and active ecosystem presence."
              />
              <HollowTechBox
                index={1}
                title="MID-RANGE REWARD BANDS"
                content="Balanced prize tiers that distribute substantial community value across dozens of selected participants simultaneously."
              />
              <HollowTechBox
                index={2}
                title="BROAD COMMUNITY TIERS"
                content="Wide-net winner pools engineered to maximize the total number of rewarded users, reinforcing shared prosperity across the base."
              />
            </div>
          </div>
        </SectionChassis>

        {/* SECTION: Smart Withdrawal & Re-Investment Ecosystem */}
        <motion.section
          id="withdrawal"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="w-full py-12 md:py-20 relative z-[2] bg-[#030712]/60 rounded-2xl border border-slate-800/50 backdrop-blur-md"
        >
          <div className="text-center mb-10 md:mb-[60px] px-4 md:px-5 flex flex-col items-center">
            <GlowingBadge text="YOUR EARNINGS • YOUR CHOICE • CONTINUOUS GROWTH" />
            <h3 className="text-slate-50 text-2xl md:text-[28px] font-black tracking-[1px] md:tracking-[2px] mb-3 md:mb-4">
              SMART WITHDRAWAL & RE-UPGRADE ECOSYSTEM
            </h3>
            <p className="text-slate-400 text-sm md:text-base max-w-[700px] mx-auto leading-[1.6] md:leading-[1.7]">
              Financial freedom through smart decisions. Re-Upgrade today for a
              stronger and bigger tomorrow.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row flex-wrap gap-6 md:gap-8 px-4 sm:px-6 md:px-8 items-center lg:items-stretch">
            <div className="flex-[1_1_100%] lg:flex-[1_1_450px] flex flex-col items-center lg:items-start text-center lg:text-left">
              <h4 className="text-sky-400 text-lg md:text-xl font-black mb-4 md:mb-5 tracking-[1px]">
                THE ALGORITHMIC RE-INVESTMENT ENGINE
              </h4>
              <p className="text-slate-400 text-sm md:text-base leading-[1.6] md:leading-[1.8] mb-4 md:mb-5">
                In traditional community platforms, unmitigated capital
                extraction drains liquidity and halts momentum. Inspire Global
                solves this through an automated Withdrawal and Re-Upgrade Split
                that harmonizes personal cash flow with systemic longevity.
              </p>
              <p className="text-slate-400 text-sm md:text-base leading-[1.6] md:leading-[1.8] mb-4 md:mb-5">
                Whenever you initiate a withdrawal, the protocol evaluates your
                cumulative eligible income bracket. A generous primary share is
                transferred directly to your personal wallet for immediate
                financial freedom, while the complementary share is
                automatically re-upgraded back into the ecosystem.
              </p>
              <p className="text-slate-200 text-sm md:text-[15px] leading-[1.6] md:leading-[1.8] text-center lg:text-left">
                <strong>Reciprocal Upline & Downline Impact:</strong> Whenever
                eligible upline and downline members in your open reach place a
                withdrawal, their automated re-upgrade acts as fresh business
                volume—generating recurring single-leg income for you within
                your open levels.
              </p>
            </div>

            <div className="flex-[1_1_100%] lg:flex-[1_1_350px] flex flex-col gap-4 md:gap-5 w-full">
              <div className="bg-[#060b14] border border-slate-800 rounded-lg p-5 md:p-6 relative overflow-hidden h-full">
                {/* Subtle tech grid inside */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(56,189,248,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.05)_1px,transparent_1px)] bg-[size:15px_15px] md:bg-[size:20px_20px] pointer-events-none" />
                <div className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left">
                  <div className="w-full text-sky-400 text-xs md:text-sm font-extrabold mb-4 tracking-[1px] border-b border-slate-800 pb-3">
                    IMPORTANT SYSTEM RULES & EXCEPTIONS
                  </div>
                  <ul className="list-none p-0 m-0 text-slate-400 text-xs md:text-sm leading-[1.6] md:leading-[1.8] flex flex-col gap-4">
                    <li className="flex flex-col sm:flex-row items-center lg:items-start gap-2 md:gap-3">
                      <span className="text-sky-400 shrink-0">❖</span>
                      <span>
                        <strong>Progressive Bracket Scaling:</strong> As your
                        total career earnings ascend through foundational,
                        intermediate, and elite income brackets, the
                        direct-to-wallet withdrawal ratio increases in your
                        favor.
                      </span>
                    </li>
                    <li className="flex flex-col sm:flex-row items-center lg:items-start gap-2 md:gap-3">
                      <span className="text-sky-400 shrink-0">❖</span>
                      <span>
                        <strong>Applicable Business Volume:</strong> Every
                        re-investment amount is treated as qualified business
                        volume across applicable distribution modules, fueling
                        continuous rewards.
                      </span>
                    </li>
                    <li className="flex flex-col sm:flex-row items-center lg:items-start gap-2 md:gap-3">
                      <span className="text-red-500 shrink-0">❖</span>
                      <span>
                        <strong>Anti-Inflation Exception Rule:</strong> To
                        prevent infinite artificial loops, no secondary
                        re-upgrade is generated from a re-investment event
                        itself; re-upgrades are triggered strictly from new
                        joining packages and fresh business activity.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* NEW SECTION 3: Web3 Engine & Decentralized Industry Context */}
        <section
          id="web3-engine"
          className="w-full py-12 md:py-20 relative z-[2]"
        >
          <div className="text-center mb-10 md:mb-[60px] flex flex-col items-center">
            <GlowingBadge text="NEXT-GEN SOCIALFI & DECENTRALIZED ECONOMICS" />
            <h3 className="text-slate-50 text-2xl md:text-[28px] font-black tracking-[1px] md:tracking-[2px] mb-3 md:mb-4">
              THE Inspire Global WEB3 & DAC ENGINE
            </h3>
            <p className="text-slate-400 text-sm md:text-base max-w-[700px] mx-auto leading-[1.6] md:leading-[1.7]">
              Grounded in modern Decentralized Autonomous Community (DAC)
              principles, network-effect economics, and algorithmic liquidity
              recirculation.
            </p>
          </div>

          <div className="flex flex-col md:flex-row flex-wrap gap-4 md:gap-8 mb-8 md:mb-10 w-full">
            <GlassPane
              index={0}
              title="METCALFE’S LAW & NETWORK SYNERGY"
              desc="Economic research demonstrates that the intrinsic value of a telecommunications or financial network grows proportionally to the square of its connected users. Inspire Global's bidirectional single-leg and binary structures are engineered to capture this exponential network effect, converting raw community growth into tangible participant equity."
            />
            <GlassPane
              index={1}
              title="ALGORITHMIC LIQUIDITY RECIRCULATION"
              desc="Inspired by circular tokenomics in decentralized finance (DeFi), our mandatory re-upgrade protocol functions as an internal economic flywheel. By recycling a portion of realized profits back into active business volume, the platform mitigates boom-and-bust cycles and sustains reward velocity."
            />
            <GlassPane
              index={2}
              title="TRUSTLESS DISTRIBUTION LEDGER"
              desc="Modern community ecosystems require absolute operational integrity. By codifying qualification rules, rank exit caps, and binary matching formulas into deterministic system logic, Inspire Global eliminates human bias and administrative gatekeeping—ensuring every member operates on a level playing field."
            />
          </div>

          <SectionChassis>
            <div className="flex flex-col lg:flex-row flex-wrap gap-6 md:gap-8 items-center w-full">
              <div className="flex-[1_1_100%] lg:flex-[1_1_400px] flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="text-sky-400 text-xs md:text-sm font-black tracking-[2px] mb-3 md:mb-4">
                  INDUSTRY PARADIGM SHIFT
                </div>
                <h4 className="text-slate-50 text-xl md:text-2xl font-black mb-3 md:mb-4">
                  Why Community Distribution Models Are Replacing Legacy
                  Platforms
                </h4>
                <p className="text-slate-400 text-sm md:text-[15px] leading-[1.6] md:leading-[1.8] mb-3 md:mb-4">
                  Across the global digital economy, centralized corporations
                  extract the vast majority of value generated by their user
                  bases, leaving participants with minimal returns for their
                  advocacy.
                </p>
                <p className="text-slate-400 text-sm md:text-[15px] leading-[1.6] md:leading-[1.8] m-0">
                  Inspire Global represents the paradigm shift toward{" "}
                  <strong>Participatory Crowd-Economics</strong>—where customer
                  acquisition budgets and corporate overheads are eliminated,
                  and value is routed directly back to the community members who
                  drive ecosystem expansion.
                </p>
              </div>
              <div className="flex-[1_1_100%] lg:flex-[1_1_300px] flex flex-col gap-3 relative z-10 w-full">
                <HollowTechBox
                  index={0}
                  title="ZERO CENTRALIZED EXTRACTION"
                  content="Value stays within the community distribution modules rather than corporate treasuries."
                />
                <HollowTechBox
                  index={1}
                  title="MERITOCRATIC SCALING"
                  content="Clear qualification rules ensure rewards align strictly with contribution and mentorship."
                />
              </div>
            </div>
          </SectionChassis>
        </section>

        {/* Section: Participation Pathways & Terminal */}
        <section
          id="roadmap"
          className="w-full pt-10 md:pt-[60px] pb-12 md:pb-20 relative z-[2]"
        >
          <div className="text-center mb-12 md:mb-20 flex flex-col items-center">
            <GlowingBadge text="CHOOSE YOUR PACKAGE • GROW YOUR NETWORK • INCREASE YOUR REACH" />
            <h3 className="text-slate-50 text-2xl md:text-[28px] font-black tracking-[1px] md:tracking-[2px] mb-3 md:mb-4">
              PARTICIPATION PATHWAYS
            </h3>
            <p className="text-slate-400 text-sm md:text-base max-w-[700px] mx-auto leading-[1.6] md:leading-[1.7]">
              Select the structural tier that aligns with your goals. Package
              benefits scale with active participation and adherence to
              community eligibility rules.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row flex-wrap gap-10 md:gap-[60px] items-center lg:items-stretch w-full">
            {/* Timeline for User Journey */}
            <div className="flex-[1_1_100%] lg:flex-[1_1_400px] flex flex-col items-center lg:items-start w-full">
              <h4 className="text-sky-400 text-lg md:text-[22px] font-black mb-8 md:mb-10 tracking-[1px] text-center lg:text-left">
                TIERED ONBOARDING MATRIX
              </h4>

              <TimelineStep
                index={0}
                number="01"
                title="EASY START TIER (Foundation)"
                desc="Best for beginners looking for a simple way to start. Establishes your position in the global community and unlocks foundational upline and downline reach."
              />
              <TimelineStep
                index={1}
                number="02"
                title="FASTER GROWTH TIER (Acceleration)"
                desc="Engineered for active builders ready to grow their network. Significantly widens your vertical community reach in both directions and qualifies you for foundational leadership pathways."
              />
              <TimelineStep
                index={2}
                number="03"
                title="MAXIMUM REACH TIER (Expansion)"
                desc="Designed for visionary leaders seeking to expand bigger. Unlocks the full spectrum of consecutive upline and downline community levels and positions you for top-tier executive rank pools."
              />
            </div>

            {/* Ecosystem Advantage Dashboard */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="flex-[1_1_100%] lg:flex-[1_1_400px] flex flex-col justify-center w-full"
            >
              <div className="bg-slate-950/80 backdrop-blur-xl border border-sky-400/30 rounded-2xl p-5 sm:p-6 md:p-8 relative overflow-hidden shadow-[0_20px_40px_rgba(2,132,199,0.15)] text-center md:text-left">
                {/* Background decorative accents */}
                <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-sky-500/10 blur-[30px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-24 md:w-32 h-24 md:h-32 bg-sky-600/10 blur-[30px] rounded-full pointer-events-none" />

                <div className="text-sky-400 text-[11px] md:text-[13px] font-black tracking-[1.5px] md:tracking-[2px] mb-4 md:mb-6 border-b border-sky-400/20 pb-3 md:pb-4 relative z-10 text-center md:text-left">
                  THE Inspire Global ADVANTAGE
                </div>

                <div className="relative z-10 flex flex-col gap-4 md:gap-5">
                  <p className="text-slate-300 text-xs md:text-sm leading-[1.6] md:leading-[1.8] text-center md:text-left">
                    Beyond individual progression, Inspire Global is architected
                    to be a resilient, self-sustaining business model. By
                    removing centralized corporate extraction, the ecosystem
                    retains maximum liquidity.
                  </p>

                  <div className="bg-[#060b14]/50 border border-slate-800 rounded-lg p-4 md:p-5 text-center md:text-left">
                    <h5 className="text-sky-400 text-[11px] md:text-xs font-extrabold tracking-[1px] mb-1.5 md:mb-2">
                      DECENTRALIZED AUTONOMY
                    </h5>
                    <p className="text-slate-400 text-[11px] md:text-xs leading-[1.6] md:leading-[1.7] m-0">
                      Operating on immutable smart-logic frameworks, the
                      platform guarantees that every execution is automated,
                      transparent, and completely free from manual interference.
                    </p>
                  </div>

                  <div className="bg-[#060b14]/50 border border-slate-800 rounded-lg p-4 md:p-5 text-center md:text-left">
                    <h5 className="text-sky-400 text-[11px] md:text-xs font-extrabold tracking-[1px] mb-1.5 md:mb-2">
                      BORDERLESS SCALABILITY
                    </h5>
                    <p className="text-slate-400 text-[11px] md:text-xs leading-[1.6] md:leading-[1.7] m-0">
                      Our infrastructure is engineered to handle infinite
                      horizontal scaling. As the global community multiplies,
                      the network effect strengthens the intrinsic value for all
                      participants.
                    </p>
                  </div>

                  <div className="bg-[#060b14]/50 border border-slate-800 rounded-lg p-4 md:p-5 text-center md:text-left">
                    <h5 className="text-sky-400 text-[11px] md:text-xs font-extrabold tracking-[1px] mb-1.5 md:mb-2">
                      LONG-TERM SUSTAINABILITY
                    </h5>
                    <p className="text-slate-400 text-[11px] md:text-xs leading-[1.6] md:leading-[1.7] m-0">
                      Through the algorithmic re-investment engine, liquidity is
                      continuously recycled, preventing market stagnation and
                      ensuring a thriving economy for years to come.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Professional Footer */}
        <footer className="w-full flex flex-col items-center justify-center text-center pb-8 md:pb-10 border-t border-dashed border-slate-800/80 mt-6 md:mt-10  px-4">
          <div className="mb-4 flex justify-center">
            <img
              src={logo}
              alt="Inspire Global Logo"
              className="h-25 sm:h-25 md:h-30 w-auto object-contain"
            />
          </div>

          <div className="text-sky-400 text-[10px] md:text-xs font-extrabold tracking-[2px] md:tracking-[3px] mb-3 md:mb-4 text-center">
            PEOPLE • PURPOSE • PROSPERITY • TOGETHER
          </div>
          <p className="text-slate-400 text-xs md:text-[13px] mb-4 md:mb-5 text-center max-w-[500px]">
            Thank you for being a part of Inspire Global. Together we build a
            brighter tomorrow.
          </p>
          <p className="text-slate-500 text-[10px] md:text-xs italic tracking-[1px] md:tracking-[1.5px] text-center">
            STAY CONNECTED | STAY INSPIRED | GROW TOGETHER
          </p>
        </footer>
      </div>
    </div>
  );
}
