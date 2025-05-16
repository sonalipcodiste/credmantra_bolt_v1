import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import useInView from '../hooks/useInView';
import { fadeInUp, staggerContainer } from '../utils/animations';

// CountUp animation component
const CountUp = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [ref, isInView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    let startTime;
    let animationFrame;

    if (isInView) {
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        
        setCount(Math.floor(percentage * end));

        if (progress < duration) {
          animationFrame = requestAnimationFrame(step);
        } else {
          setCount(end);
        }
      };

      animationFrame = requestAnimationFrame(step);
    }

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, isInView]);

  return <span ref={ref}>{count}</span>;
};

const Stats = () => {
  const [containerRef, isInView] = useInView({ threshold: 0.1 });

  const stats = [
    {
      value: 5,
      suffix: 'M+',
      label: 'Digital Credentials Issued',
    },
    {
      value: 500,
      suffix: 'K+',
      label: 'Digital Credentials Shared',
    },
    {
      value: 50,
      suffix: '+',
      label: 'Countries Globally',
    },
    {
      value: 150,
      suffix: '+',
      label: 'Partner Organizations',
    },
  ];

  return (
    <section className="py-12 bg-white border-t border-b border-gray-100">
      <div className="container-center">
        <motion.div
          ref={containerRef}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="text-center"
            >
              <h3 className="text-4xl md:text-5xl font-bold mb-3 gradient-text inline-block">
                <CountUp end={stat.value} duration={2500} />
                {stat.suffix}
              </h3>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
