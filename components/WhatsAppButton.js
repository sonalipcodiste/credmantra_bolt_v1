import { motion } from "framer-motion";
import React from "react";

const WhatsAppButton = () => {
	return (
		<motion.a
			href="https://wa.me/919893288866" // WhatsApp number with country code
			target="_blank"
			rel="noopener noreferrer"
			className="fixed bottom-6 right-6 z-50"
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.9 }}
			initial={{ opacity: 0, scale: 0 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{
				type: "spring",
				stiffness: 400,
				damping: 17,
				delay: 1,
			}}
			aria-label="Contact us on WhatsApp"
		>
			<div className="bg-[#25D366] w-14 h-14 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center p-3 relative group">
				<img
					src="/assets/whatsapp-icon.svg"
					alt="Contact us on WhatsApp"
					className="w-8 h-8"
				/>
				<motion.span
					className="absolute -top-1 -right-1 bg-primary-blue text-white text-xs font-medium px-2 py-1 rounded-full"
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{ delay: 2 }}
				>
					Chat
				</motion.span>

				{/* Tooltip with phone number */}
				<div className="absolute bottom-full right-0 mb-2 w-auto opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300">
					<div className="bg-white shadow-lg rounded-lg px-3 py-2 text-sm text-gray-700 whitespace-nowrap border border-gray-100">
						Chat: +91 9893288866
					</div>
					<div className="w-3 h-3 bg-white transform rotate-45 absolute -bottom-1.5 right-6 border-r border-b border-gray-100"></div>
				</div>
			</div>
		</motion.a>
	);
};

export default WhatsAppButton;
