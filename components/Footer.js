import { motion } from 'framer-motion';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    legal: [
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms of Service', href: '/terms-of-service' },
    ],
  };
  
  const socialLinks = [
    { 
      name: 'Twitter', 
      href: 'https://x.com/tuteja_abh26052?t=a1CZO_uIU5LD8MUea8o-8g&s=09', 
      icon: '/assets/twitter-icon.svg'
    },
    { 
      name: 'LinkedIn', 
      href: 'https://www.linkedin.com/company/cred-mantra/', 
      icon: '/assets/linkedin-icon.svg'
    },
    { 
      name: 'Facebook', 
      href: 'https://www.facebook.com/profile.php?id=61575945401985', 
      icon: '/assets/facebook-icon.svg'
    },
    { 
      name: 'Instagram', 
      href: 'https://www.instagram.com/cred_mantra?igsh=MWk5dm9qemJ2dTl1YQ==', 
      icon: '/assets/instagram-icon.svg'
    },
  ];

  return (
    <footer className="bg-background-white pt-10 pb-4">
      <div className="container-center">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 pb-6 border-b border-gray-200">
          <div className="md:max-w-md">
            <div className="mb-4">
              <Link href="/" legacyBehavior>
                <a>
                  <img src="/assets/cred-logo.png" alt="Cred Mantra Logo" className="h-10" />
                </a>
              </Link>
            </div>
            <p className="text-text-medium mb-4 text-sm">
              Empowering organisations with blockchain-based digital credentials that are secure, verifiable, and future-proof.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center transition-all duration-300 relative group"
                  whileHover={{ 
                    y: -3, 
                    scale: 1.25, // Increased scale by 25%
                    transition: { 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 10 
                    }
                  }}
                  aria-label={link.name}
                >
                  <div className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 transform group-hover:scale-150 shadow-lg group-hover:shadow-xl"></div>
                  <img 
                    src={link.icon} 
                    alt={link.name} 
                    className="w-full h-full filter group-hover:brightness-125 transition-all duration-300 z-10 relative" 
                  />
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-base mb-3">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} legacyBehavior>
                    <a className="text-text-medium hover:text-primary-blue transition-colors duration-300 text-sm">
                      {link.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-4 flex justify-center items-center">
          <p className="text-text-medium text-xs text-center">
            &copy; {currentYear} Cred Mantra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;