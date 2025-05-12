"use client"

import { useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Building2, LandmarkIcon, Award, GraduationCap as GraduationCapIcon } from 'lucide-react';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px 0px" });
  const controls = useAnimation();

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.2,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: index * 0.2 + 0.3
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        delay: index * 0.2 + 0.5
      }
    }
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className="flex flex-col items-center text-center p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-white/5"
    >
      <motion.div 
        variants={iconVariants}
        className="mb-4 text-white/90 relative"
      >
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {icon}
        </motion.div>
        <motion.div
          className="absolute inset-0 bg-white/10 rounded-full blur-lg"
          initial={{ scale: 0 }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />
      </motion.div>
      <motion.div variants={contentVariants}>
        <h3 className="text-white/90 text-lg font-medium mb-2">{title}</h3>
        <p className="text-white/70 text-sm leading-relaxed">{description}</p>
      </motion.div>
    </motion.div>
  );
};

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Educational Institutions",
      description: "Schools, Colleges, Universities, Coaching Centers, EdTech Companies"
    },
    {
      icon: <LandmarkIcon className="w-8 h-8" />,
      title: "Corporates & Enterprises",
      description: "Issue certifications for employee training & skill development"
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Government Departments",
      description: "AICTE, MSME, Startup India, NASSCOM, Municipal Corporations"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Certification Bodies",
      description: "ICAI, APEDA, SGS, and more"
    },
    {
      icon: <GraduationCapIcon className="w-8 h-8" />,
      title: "Organic & Online Certification Providers",
      description: "Securely issue and track online credentials"
    }
  ];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" });

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section 
      id="benefits" 
      className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-br from-[#005A8B]/90 to-[#008080]/90"
      ref={sectionRef}
    >
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-[#005A8B] rounded-full filter blur-[128px] opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-[#008080] rounded-full filter blur-[128px] opacity-20"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </motion.div>

      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-medium mb-4 text-white/90">
            Who Can Benefit?
          </h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6"
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;