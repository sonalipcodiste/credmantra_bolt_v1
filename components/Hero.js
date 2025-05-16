import { motion } from "framer-motion";
import Button from "./ui/Button";
import { fadeIn, fadeInUp, staggerContainer } from "../utils/animations";
import useInView from "../hooks/useInView";

const Hero = () => {
	const [ref, isInView] = useInView({ threshold: 0.1 });

	return (
		<section
			id="home"
			className="pt-32 pb-24 md:pt-36 md:pb-32 bg-background-light relative overflow-hidden"
			ref={ref}
		>
			{/* Background Shapes */}
			<div className="absolute top-0 right-0 -z-10 opacity-10">
				<svg
					width="600"
					height="600"
					viewBox="0 0 600 600"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle
						cx="300"
						cy="300"
						r="300"
						fill="url(#paint0_radial)"
					/>
					<defs>
						<radialGradient
							id="paint0_radial"
							cx="0"
							cy="0"
							r="1"
							gradientUnits="userSpaceOnUse"
							gradientTransform="translate(300 300) rotate(90) scale(300)"
						>
							<stop stopColor="#005A8B" />
							<stop
								offset="1"
								stopColor="#005A8B"
								stopOpacity="0"
							/>
						</radialGradient>
					</defs>
				</svg>
			</div>

			<div className="absolute -bottom-20 -left-20 -z-10 opacity-10">
				<svg
					width="500"
					height="500"
					viewBox="0 0 500 500"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle
						cx="250"
						cy="250"
						r="250"
						fill="url(#paint1_radial)"
					/>
					<defs>
						<radialGradient
							id="paint1_radial"
							cx="0"
							cy="0"
							r="1"
							gradientUnits="userSpaceOnUse"
							gradientTransform="translate(250 250) rotate(90) scale(250)"
						>
							<stop stopColor="#008080" />
							<stop
								offset="1"
								stopColor="#008080"
								stopOpacity="0"
							/>
						</radialGradient>
					</defs>
				</svg>
			</div>

			<div className="container-center">
				<motion.div
					className="max-w-4xl mx-auto text-center"
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					variants={staggerContainer}
				>
					<motion.h1
						className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight"
						variants={fadeInUp}
					>
						<span className="gradient-text whitespace-nowrap">
							Blockchain-Powered Credential
						</span>
					</motion.h1>

					<motion.h2
						className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-6 font-medium"
						variants={fadeInUp}
					>
						Tamper-Proof Digital Credentials for a Trusted Future
					</motion.h2>

					<motion.div
						className="max-w-2xl mx-auto mb-8"
						variants={fadeInUp}
					>
						<p className="text-lg md:text-xl text-gray-500 leading-relaxed">
							Empower your organisation with secure, verifiable,
							and future-proof digital credentials. issue, manage,
							and verify credentials effortlessly while ensuring
							compliance with global standards.
						</p>
					</motion.div>

					<motion.div
						className="flex justify-center mb-12"
						variants={fadeInUp}
					>
						<Button
							size="lg"
							variant="primary"
							className="font-satoshi-medium"
						>
							<span className="mr-2">Get Started</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
									clipRule="evenodd"
								/>
							</svg>
						</Button>
					</motion.div>

					<motion.div className="relative" variants={fadeIn}>
						<div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
							<img
								src="https://pixabay.com/get/gb8c8b293a1cbaa4fff64a657ebe7bab8874e974bde7a48a544b057cb9f3b048aca708b0fafaaf804720842b438d9b201e33590fbc144cddb5f77e5a180054052_1280.jpg"
								alt="Cred Mantra Platform"
								className="w-full h-auto object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

							<div className="absolute bottom-4 left-4 right-4 text-white text-left">
								<span className="inline-flex items-center bg-primary-blue/80 rounded-full px-3 py-1 text-sm backdrop-blur-sm">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-4 w-4 mr-1"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
											clipRule="evenodd"
										/>
									</svg>
									Secured with Blockchain Technology
								</span>
							</div>
						</div>

						{/* Floating elements */}
						<motion.div
							className="absolute -top-8 -right-8 bg-white shadow-xl rounded-lg px-4 py-3 z-20"
							animate={{
								y: [0, -10, 0],
								rotate: [0, 1, 0, -1, 0],
							}}
							transition={{
								y: {
									duration: 3,
									repeat: Infinity,
									ease: "easeInOut",
								},
								rotate: {
									duration: 5,
									repeat: Infinity,
									ease: "easeInOut",
								},
							}}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							<div className="flex items-center">
								<div className="h-10 w-10 bg-green-gradient rounded-full flex items-center justify-center mr-3 shadow-md">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5 text-white"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
								</div>
								<span className="text-sm font-bold text-primary-blue">
									Verified
								</span>
							</div>
						</motion.div>

						<motion.div
							className="absolute bottom-12 -left-8 bg-white shadow-xl rounded-lg p-4 z-20"
							animate={{
								y: [0, 10, 0],
								x: [0, 3, 0, -3, 0],
								scale: [1, 1.01, 1],
							}}
							transition={{
								y: {
									duration: 3,
									repeat: Infinity,
									ease: "easeInOut",
									delay: 1,
								},
								x: {
									duration: 7,
									repeat: Infinity,
									ease: "easeInOut",
								},
								scale: {
									duration: 4,
									repeat: Infinity,
									ease: "easeInOut",
								},
							}}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							<div className="flex items-center space-x-3">
								<div className="h-12 w-12 bg-blue-gradient rounded-full flex items-center justify-center shadow-md">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6 text-white"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
										<path
											fillRule="evenodd"
											d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
											clipRule="evenodd"
										/>
									</svg>
								</div>
								<div>
									<p className="text-sm font-bold text-primary-blue">
										Digital Certificate
									</p>
									<p className="text-xs text-text-medium">
										Tamper-proof & Secure
									</p>
								</div>
							</div>
						</motion.div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default Hero;
