"use client"

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Upload, CheckCircle2, Search, Share2 } from 'lucide-react';

interface ProcessCardProps {
  icon: React.ReactNode;
  step: number;
  title: string;
  description: string;
  index: number;
}

const ProcessCard: React.FC<ProcessCardProps> = ({ icon, step, title, description, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px 0px" });
  
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="bg-white rounded-3xl p-8 text-center"
    >
      <div className="flex flex-col items-center">
        <div className="bg-gradient-to-r from-[#005A8B] to-[#008080] text-white rounded-full p-4 mb-4">
          {icon}
        </div>
        <div className="text-sm font-medium text-[#005A8B] mb-2">Step {step}</div>
        <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-[#005A8B] to-[#008080] bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

const ProcessSection = () => {
  const processes = [
    {
      icon: <Upload className="h-6 w-6" />,
      step: 1,
      title: "Create & Customize",
      description: "Institutions design digital certificates with ease through our comprehensive platform."
    },
    {
      icon: <CheckCircle2 className="h-6 w-6" />,
      step: 2,
      title: "Issue & Manage",
      description: "Securely distribute credentials to learners through our advanced verification system."
    },
    {
      icon: <Search className="h-6 w-6" />,
      step: 3,
      title: "Verify Instantly",
      description: "Employers & organizations validate credentials with a click through our secure verification portal."
    },
    {
      icon: <Share2 className="h-6 w-6" />,
      step: 4,
      title: "Secure & Compliant",
      description: "Every credential is stored on the blockchain for authenticity and immutable verification."
    }
  ];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" });

  return (
    <section id="process" className="py-16 md:py-24 bg-[#F6FCFF]" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#005A8B] to-[#008080] bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our streamlined process makes credential verification simple, secure, and efficient
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processes.map((process, index) => (
            <ProcessCard
              key={index}
              icon={process.icon}
              step={process.step}
              title={process.title}
              description={process.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;