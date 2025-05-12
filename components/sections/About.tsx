"use client"

import { useRef } from 'react';
import { Shield, Compass, Zap, Users } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const AboutSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" });

  return (
    <section id="about" className="py-24 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-[#005A8B] text-4xl font-bold mb-4">About Cred Mantra</h2>
          <p className="text-gray-600 text-lg mb-4">
            We are a leading Digital Certification issuing platform using block chain technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <img 
              src="/about-illustration.png" 
              alt="Digital Certification Platform" 
              className="w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-[#E6F4F1] rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-[#005A8B]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Enhanced Security & Trust</h3>
                <p className="text-gray-600">
                  Eliminate forgery and fraud with blockchain-secured credentials that cannot be tampered with, increasing trust in your certifications.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-[#E6F4F1] rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-[#005A8B]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Improved Efficiency</h3>
                <p className="text-gray-600">
                  Streamline the entire credential lifecycle from issuance to verification, saving time and reducing administrative burden.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-[#E6F4F1] rounded-lg flex items-center justify-center">
                <Compass className="w-6 h-6 text-[#005A8B]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Scalability & Flexibility</h3>
                <p className="text-gray-600">
                  Easily scale from hundreds to millions of credentials with a platform designed to grow with your needs and adapt to changing requirements.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-[#E6F4F1] rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-[#005A8B]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Data-Driven Insights</h3>
                <p className="text-gray-600">
                  Gain valuable analytics on credential issuance, user engagement, and verification patterns to inform strategic decisions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;