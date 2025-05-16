import { motion } from 'framer-motion';
import useInView from '../hooks/useInView';
import { fadeInUp, fadeInLeft, fadeInRight } from '../utils/animations';

const About = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const features = [
    {
      title: 'Enhanced Security & Trust',
      description: 'Eliminate forgery and fraud with blockchain-secured credentials that cannot be tampered with, increasing trust in your certifications.',
      icon: (
        <div className="bg-gradient-to-br from-primary-blue to-primary-blue/80 rounded-xl p-4 w-16 h-16 flex items-center justify-center shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.25}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
      )
    },
    {
      title: 'Improved Efficiency',
      description: 'Streamline the entire credential lifecycle from issuance to verification, saving time and reducing administrative burden.',
      icon: (
        <div className="bg-gradient-to-br from-primary-blue to-primary-blue/80 rounded-xl p-4 w-16 h-16 flex items-center justify-center shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.25}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
      )
    },
    {
      title: 'Scalability & Flexibility',
      description: 'Easily scale from hundreds to millions of credentials with a platform designed to grow with your needs and adapt to changing requirements.',
      icon: (
        <div className="bg-gradient-to-br from-primary-blue to-primary-blue/80 rounded-xl p-4 w-16 h-16 flex items-center justify-center shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.25}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
          </svg>
        </div>
      )
    },
    {
      title: 'Data-Driven Insights',
      description: 'Gain valuable analytics on credential issuance, user engagement, and verification patterns to inform strategic decisions.',
      icon: (
        <div className="bg-gradient-to-br from-primary-blue to-primary-blue/80 rounded-xl p-4 w-16 h-16 flex items-center justify-center shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.25}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
      )
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-blue-50/30 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-blue opacity-[0.015] rounded-full transform translate-x-1/3 -translate-y-1/3 blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary-green opacity-[0.015] rounded-full transform -translate-x-1/3 translate-y-1/3 blur-[100px]"></div>
      
      <div className="container-center relative z-10">
        <div className="text-center mb-8" ref={ref}>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 leading-tight gradient-text font-merriweather"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            About Cred Mantra
          </motion.h2>
          
          <motion.p 
            className="text-gray-800 text-lg max-w-3xl mx-auto leading-relaxed font-satoshi"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            We are a leading Digital Certification platform powered by cutting-edge blockchain technology, 
            delivering secure, tamper-proof credential solutions for forward-thinking organizations.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
          {/* Left side - Mobile app image */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInLeft}
            className="relative"
          >
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500 border border-gray-100/70 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-blue/10 to-secondary-green/10 mix-blend-overlay"></div>
              <img
                src="/assets/cred-about-image.png"
                alt="Cred Mantra Mobile App"
                className="w-full h-auto relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-blue/10 rounded-full blur-xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary-green/10 rounded-full blur-xl"></div>
            </div>
          </motion.div>
          
          {/* Right side - Features */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={fadeInRight}
                className="flex items-start space-x-4 relative"
                custom={index}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex-shrink-0 mt-1">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800 font-merriweather">{feature.title}</h3>
                  <p className="text-[#4B5563] leading-relaxed opacity-90">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
