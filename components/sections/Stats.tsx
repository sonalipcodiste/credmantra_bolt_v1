"use client"

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

interface StatItemProps {
  value: string;
  label: string;
  index: number;
}

const StatItem: React.FC<StatItemProps> = ({ value, label, index }) => {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, { once: true, margin: "-10px" });
  const [count, setCount] = useState(0);
  
  // Extract the numeric value and suffix (e.g., "50" and "M+" from "50M+")
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    if (isInView) {
      const duration = 2000; // Animation duration in milliseconds
      const steps = 60; // Number of steps in the animation
      const increment = numericValue / steps;
      let current = 0;
      const timer = setInterval(() => {
        if (current < numericValue) {
          current += increment;
          setCount(Math.min(Math.floor(current), numericValue));
        } else {
          clearInterval(timer);
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, numericValue]);

  const numberAnimation = {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { 
      type: "spring",
      stiffness: 100,
      damping: 10,
      delay: index * 0.2 
    }
  };

  const labelAnimation = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { 
      duration: 0.5,
      delay: (index * 0.2) + 0.2
    }
  };

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      className="text-center relative"
    >
      <motion.div 
        className="text-[#005A8B] text-[50px] leading-[50px] font-bold mb-2"
        {...numberAnimation}
      >
        {count}{suffix}
      </motion.div>
      <motion.p 
        className="text-[#374151] text-lg"
        {...labelAnimation}
      >
        {label}
      </motion.p>
    </motion.div>
  );
};

const StatsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  const stats = [
    { value: "50M+", label: "Digital Credentials Earned" },
    { value: "500K+", label: "Digital Credentials Shared" },
    { value: "50+", label: "Countries Globally" },
    { value: "150+", label: "Partner Organizations" }
  ];

  const titleAnimation = {
    initial: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <motion.section 
      ref={sectionRef}
      style={{ opacity, scale }}
      className="py-16 md:py-24 bg-white relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-0 w-full h-8 bg-gradient-to-b from-gray-100/50 to-transparent"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute bottom-0 w-full h-8 bg-gradient-to-t from-gray-100/50 to-transparent"
        />
      </div>

      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={{
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-1">
            <motion.h2 
              className="text-[#005A8B] text-[30px] font-bold"
              {...titleAnimation}
            >
              Cred Mantra is redefining the future of digital credentialing
            </motion.h2>
            <motion.p 
              className="text-[#005A8B] text-[30px] font-bold"
              {...titleAnimation}
              transition={{ delay: 0.2, ...titleAnimation.transition }}
            >
              with accelerated credential growth rate in the industry!
            </motion.p>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              value={stat.value}
              label={stat.label}
              index={index}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default StatsSection;