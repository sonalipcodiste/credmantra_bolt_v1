import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  className = '', 
  variant = 'default',
  hover = true,
  ...props 
}) => {
  const baseClasses = "rounded-lg overflow-hidden backdrop-blur-sm";
  
  const variants = {
    default: "bg-background-white shadow-md border border-gray-100",
    outline: "bg-background-white border border-gray-200",
    gradient: "bg-primary-gradient text-white",
    blue: "bg-blue-gradient text-white",
    green: "bg-green-gradient text-white",
    elevated: "bg-background-white shadow-xl"
  };

  const hoverEffect = hover ? "transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]" : "";

  return (
    <motion.div
      className={`${baseClasses} ${variants[variant]} ${hoverEffect} ${className}`}
      whileHover={hover ? { y: -5 } : {}}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
