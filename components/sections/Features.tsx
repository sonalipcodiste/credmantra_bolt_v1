"use client"

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Lock, Clock, Globe, Zap, BarChart } from 'lucide-react';
import { HoverEffect } from "@/components/ui/card-hover-effect";

const FeatureSection = () => {
  const features = [
    {
      icon: <Shield className="w-12 h-12 text-[#005A8B] mx-auto" />,
      title: "Blockchain Security",
      description: "Tamper-proof credential storage using advanced blockchain technology for maximum security and trust.",
      link: "#",
    },
    {
      icon: <Lock className="w-12 h-12 text-[#005A8B] mx-auto" />,
      title: "End-to-End Encryption",
      description: "All data is encrypted from end to end, ensuring complete privacy and confidentiality.",
      link: "#",
    },
    {
      icon: <Clock className="w-12 h-12 text-[#005A8B] mx-auto" />,
      title: "Instant Verification",
      description: "Verify credentials in seconds, not days, with our high-performance verification engine.",
      link: "#",
    },
    {
      icon: <Globe className="w-12 h-12 text-[#005A8B] mx-auto" />,
      title: "Global Standards",
      description: "Compliant with global verification standards and regulations across different industries.",
      link: "#",
    },
    {
      icon: <Zap className="w-12 h-12 text-[#005A8B] mx-auto" />,
      title: "Automated Workflows",
      description: "Streamline your verification process with customizable automated workflows and integrations.",
      link: "#",
    },
    {
      icon: <BarChart className="w-12 h-12 text-[#005A8B] mx-auto" />,
      title: "Comprehensive Analytics",
      description: "Gain insights with detailed analytics and reporting on all verification activities.",
      link: "#",
    }
  ];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <motion.section 
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      id="features" 
      className="py-16 md:py-24 bg-[#F6FCFF]"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#005A8B] to-[#008080] text-transparent bg-clip-text">
            Why Choose Our Platform?
          </h2>
          <p className="text-[#4B5563] max-w-2xl mx-auto">
            Our comprehensive verification platform offers numerous advantages to streamline and secure your credential management
          </p>
        </motion.div>

        <HoverEffect items={features} />
      </div>
    </motion.section>
  );
};

export default FeatureSection;