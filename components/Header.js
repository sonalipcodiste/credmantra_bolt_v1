import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './ui/Button';
import Link from 'next/link';
import CalendlyModal from './CalendlyModal';
import canvasConfetti from 'canvas-confetti';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const desktopConfettiRef = useRef(null);
  const mobileConfettiRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    const desktopCanvas = document.getElementById('reseller-confetti');
    const mobileCanvas = document.getElementById('mobile-reseller-confetti');
    
    // Define confetti colors
    const colors = ['#EEDF39', '#D96F32'];
    
    // Function to fire confetti once
    const fireConfetti = (confetti) => {
      confetti({
        particleCount: 15,
        spread: 40,
        startVelocity: 15,
        decay: 0.94,
        origin: { y: 0.5, x: 0.5 },
        colors: colors,
        shapes: ['square', 'circle'],
        gravity: 0.7,
        scalar: 0.7,
        ticks: 150
      });
    };
    
    // Function to continuously fire confetti
    const startContinuousConfetti = (confetti) => {
      const interval = setInterval(() => {
        confetti({
          particleCount: 2,
          spread: 30,
          startVelocity: 8,
          decay: 0.94,
          origin: { y: 0.5, x: 0.5 },
          colors: colors,
          shapes: ['square', 'circle'],
          gravity: 0.5,
          ticks: 200,
          scalar: 0.6,
          disableForReducedMotion: true
        });
      }, 800);
      
      return interval;
    };
    
    let desktopInterval;
    let mobileInterval;
    
    if (desktopCanvas) {
      desktopConfettiRef.current = canvasConfetti.create(desktopCanvas, {
        resize: true,
        useWorker: true
      });
      
      // Fire confetti initially with a delay after page load
      setTimeout(() => {
        fireConfetti(desktopConfettiRef.current);
        
        // Start continuous confetti after initial burst
        desktopInterval = startContinuousConfetti(desktopConfettiRef.current);
      }, 1000);
      
      // Fire more confetti on hover
      desktopCanvas.parentElement.addEventListener('mouseenter', () => {
        fireConfetti(desktopConfettiRef.current);
      });
    }
    
    if (mobileCanvas) {
      mobileConfettiRef.current = canvasConfetti.create(mobileCanvas, {
        resize: true,
        useWorker: true
      });
      
      // Fire confetti initially for mobile with a delay after page load
      setTimeout(() => {
        fireConfetti(mobileConfettiRef.current);
        
        // Start continuous confetti for mobile
        mobileInterval = startContinuousConfetti(mobileConfettiRef.current);
      }, 1000);
      
      // Fire more confetti on hover for mobile
      mobileCanvas.parentElement.addEventListener('mouseenter', () => {
        fireConfetti(mobileConfettiRef.current);
      });
    }
    
    // Clean up intervals and confetti instances
    return () => {
      if (desktopConfettiRef.current) {
        desktopConfettiRef.current.reset();
      }
      if (mobileConfettiRef.current) {
        mobileConfettiRef.current.reset();
      }
      if (desktopInterval) {
        clearInterval(desktopInterval);
      }
      if (mobileInterval) {
        clearInterval(mobileInterval);
      }
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleLoginDropdown = () => {
    setIsLoginDropdownOpen(!isLoginDropdownOpen);
  };

  const headerVariants = {
    top: {
      backgroundColor: 'rgba(243, 250, 255, 1)',
      height: '76px',
      boxShadow: '0 0 0 rgba(0, 0, 0, 0)'
    },
    scrolled: {
      backgroundColor: 'rgba(243, 250, 255, 0.98)',
      height: '76px',
      boxShadow: '0 2px 10px rgba(0, 90, 139, 0.05)'
    }
  };

  const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'Who Benefits', href: '#benefits' }
  ];

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        variants={headerVariants}
        animate={isScrolled ? 'scrolled' : 'top'}
      >
        <div className="container-center h-full flex items-center justify-between">
          <Link href="/" legacyBehavior>
            <a className="cursor-pointer">
              <img src="/assets/cred-logo.png" alt="Cred Mantra Logo" className="h-12" />
            </a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <nav className="flex">
              {navItems.map((item, index) => (
                <Link href={item.href} key={index} legacyBehavior>
                  <a 
                    className="text-gray-700 hover:text-primary-blue px-5 py-2 text-base font-medium transition-colors duration-200"
                    onClick={(e) => {
                      if (item.name === "Who Benefits") {
                        e.preventDefault();
                        const benefitsSection = document.getElementById('benefits');
                        if (benefitsSection) {
                          benefitsSection.scrollIntoView({ behavior: 'smooth' });
                        }
                      } else if (item.name === "Contact us") {
                        e.preventDefault();
                        const contactSection = document.getElementById('contact');
                        if (contactSection) {
                          contactSection.scrollIntoView({ behavior: 'smooth' });
                        }
                      }
                    }}
                  >
                    {item.name}
                  </a>
                </Link>
              ))}
            </nav>

            <div className="flex items-center">
              <div className="relative px-5">
                <button 
                  onClick={toggleLoginDropdown}
                  className="flex items-center text-gray-700 hover:text-primary-blue py-2 text-base font-medium transition-colors duration-200"
                >
                  Login
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                
                <AnimatePresence>
                  {isLoginDropdownOpen && (
                    <motion.div 
                      className="absolute right-0 mt-1 bg-white rounded-md shadow-lg py-1 w-44 border border-gray-100"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link href="https://admin.credmantra.org/" legacyBehavior>
                        <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50" target="_blank" rel="noopener noreferrer">
                          Login as Reseller
                        </a>
                      </Link>
                      <Link href="https://app.credmantra.org/" legacyBehavior>
                        <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 whitespace-nowrap" target="_blank" rel="noopener noreferrer">
                          Login as Organization
                        </a>
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="#contact" legacyBehavior>
                <a 
                  className="text-gray-700 text-base font-medium transition-all duration-200 px-5 py-2 relative group overflow-visible"
                  onClick={(e) => {
                    e.preventDefault();
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                      
                      // Pre-select 'reseller' radio button
                      const resellerRadio = document.getElementById('reseller');
                      if (resellerRadio) {
                        resellerRadio.checked = true;
                        // Create and dispatch change event to update state
                        const event = new Event('change', { bubbles: true });
                        resellerRadio.dispatchEvent(event);
                      }
                    }
                  }}
                >
                  <div className="relative z-10">
                    Become a Reseller
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-gradient transition-all duration-300 group-hover:h-0.75"></span>
                  </div>
                  <canvas 
                    id="reseller-confetti" 
                    className="absolute -left-5 -top-5 z-0 w-[calc(100%+2.5rem)] h-[calc(100%+2.5rem)]"
                  />
                </a>
              </Link>

              <Button 
                variant="primary" 
                size="sm" 
                className="bg-[#06557e] hover:bg-[#06557e]/90 text-white rounded py-2 px-5 ml-5 text-sm font-satoshi-medium"
                onClick={() => setIsCalendlyOpen(true)}
              >
                Request a demo
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button 
            className="md:hidden text-primary-blue bg-white focus:outline-none p-2 rounded-md" 
            onClick={toggleMobileMenu}
            whileTap={{ scale: 0.95 }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md border-t border-gray-100"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="container mx-auto py-5 px-4 flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <Link href={item.href} key={index} legacyBehavior>
                    <a 
                      className="block py-2 px-1 text-gray-700 hover:text-primary-blue font-medium"
                      onClick={(e) => {
                        if (item.name === "Who Benefits") {
                          e.preventDefault();
                          setIsMobileMenuOpen(false);
                          // Wait for mobile menu to close before scrolling
                          setTimeout(() => {
                            const benefitsSection = document.getElementById('benefits');
                            if (benefitsSection) {
                              benefitsSection.scrollIntoView({ behavior: 'smooth' });
                            }
                          }, 300);
                        } else if (item.name === "Contact us") {
                          e.preventDefault();
                          setIsMobileMenuOpen(false);
                          // Wait for mobile menu to close before scrolling
                          setTimeout(() => {
                            const contactSection = document.getElementById('contact');
                            if (contactSection) {
                              contactSection.scrollIntoView({ behavior: 'smooth' });
                            }
                          }, 300);
                        } else {
                          setIsMobileMenuOpen(false);
                        }
                      }}
                    >
                      {item.name}
                    </a>
                  </Link>
                ))}
                
                <div className="py-2 px-1">
                  <button 
                    onClick={() => setIsLoginDropdownOpen(!isLoginDropdownOpen)}
                    className="flex items-center text-gray-700 hover:text-primary-blue font-medium mb-3"
                  >
                    Login
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  
                  {isLoginDropdownOpen && (
                    <div className="ml-4 py-2 space-y-3">
                      <Link href="https://admin.credmantra.org/" legacyBehavior>
                        <a className="block text-gray-700 hover:text-primary-blue text-sm py-1" target="_blank" rel="noopener noreferrer">
                          Login as Reseller
                        </a>
                      </Link>
                      <Link href="https://app.credmantra.org/" legacyBehavior>
                        <a className="block text-gray-700 hover:text-primary-blue text-sm py-1 whitespace-nowrap" target="_blank" rel="noopener noreferrer">
                          Login as Organization
                        </a>
                      </Link>
                    </div>
                  )}
                </div>
                
                <Link href="#contact" legacyBehavior>
                  <a 
                    className="block py-2 px-1 text-gray-700 font-medium relative group overflow-visible"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMobileMenuOpen(false); // Close mobile menu
                      
                      // Wait for mobile menu to close before scrolling
                      setTimeout(() => {
                        const contactSection = document.getElementById('contact');
                        if (contactSection) {
                          contactSection.scrollIntoView({ behavior: 'smooth' });
                          
                          // Pre-select 'reseller' radio button
                          const resellerRadio = document.getElementById('reseller');
                          if (resellerRadio) {
                            resellerRadio.checked = true;
                            // Create and dispatch change event to update state
                            const event = new Event('change', { bubbles: true });
                            resellerRadio.dispatchEvent(event);
                          }
                        }
                      }, 300);
                    }}
                  >
                    <div className="relative z-10">
                      Become a Reseller
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-gradient transition-all duration-300 group-hover:h-0.75"></span>
                    </div>
                    <canvas 
                      id="mobile-reseller-confetti" 
                      className="absolute -left-5 -top-5 z-0 w-[calc(100%+2.5rem)] h-[calc(100%+2.5rem)]"
                    />
                  </a>
                </Link>
                
                <div className="pt-3 pb-1">
                  <Button 
                    variant="primary" 
                    size="sm" 
                    className="bg-[#06557e] hover:bg-[#06557e]/90 text-white rounded w-full py-2.5 font-satoshi-medium"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsCalendlyOpen(true);
                    }}
                  >
                    Request a demo
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
      
      {/* Calendly Modal */}
      <CalendlyModal 
        isOpen={isCalendlyOpen} 
        onClose={() => setIsCalendlyOpen(false)} 
      />
    </>
  );
};

export default Header;