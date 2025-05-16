import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick,
  animated = true,
  ...props 
}) => {
  const baseClasses = "inline-flex items-center justify-center rounded-md font-satoshi-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300 shadow-sm";
  
  const variants = {
    primary: "bg-primary-gradient text-white hover:shadow-lg hover:translate-y-[-2px] focus:ring-primary-blue",
    secondary: "bg-white text-primary-blue border border-primary-blue hover:bg-primary-blue hover:text-white hover:shadow-md focus:ring-primary-blue",
    outline: "bg-transparent border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white hover:shadow-md focus:ring-primary-blue",
    blue: "bg-blue-gradient text-white hover:shadow-lg hover:translate-y-[-2px] focus:ring-secondary-blue",
    green: "bg-green-gradient text-white hover:shadow-lg hover:translate-y-[-2px] focus:ring-secondary-green",
    ghost: "bg-transparent text-primary-blue hover:bg-blue-50 focus:ring-primary-blue"
  };
  
  const sizes = {
    sm: "text-sm py-2 px-5 font-semibold",
    md: "text-base py-2.5 px-7 font-semibold",
    lg: "text-lg py-3 px-9 font-semibold",
    xl: "text-xl py-4 px-11 font-semibold tracking-wide"
  };

  const buttonContent = (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );

  if (!animated) {
    return buttonContent;
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {buttonContent}
    </motion.div>
  );
};

export default Button;
