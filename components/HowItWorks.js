import { motion } from "framer-motion";
import useInView from "../hooks/useInView";
import Button from "./ui/Button";
import {
	fadeInUp,
	fadeInRight,
	fadeInLeft,
	staggerContainer,
} from "../utils/animations";

const HowItWorks = () => {
	const [ref, isInView] = useInView({ threshold: 0.1 });

	const steps = [
		{
			number: "01",
			title: "Create & Customize",
			description:
				"Organisations design digital certificates with ease through our comprehensive platform.",
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-8 w-8"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
					/>
				</svg>
			),
		},
		{
			number: "02",
			title: "Issue & Manage",
			description:
				"Securely distribute credentials to learners through our advanced verification system.",
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-8 w-8"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
					/>
				</svg>
			),
		},
		{
			number: "03",
			title: "Verify Instantly",
			description:
				"Employers & organizations validate credentials with a click through our secure verification portal.",
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-8 w-8"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
					/>
				</svg>
			),
		},
		{
			number: "04",
			title: "Secure & Compliant",
			description:
				"Every credential is stored on the blockchain for authenticity and immutable verification.",
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-8 w-8"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
					/>
				</svg>
			),
		},
	];

	return (
		<section
			id="how-it-works"
			className="py-20 bg-background-light overflow-hidden"
		>
			<div className="container-center">
				<div className="text-center mb-16">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
					>
						<span className="bg-primary-blue/10 text-primary-blue font-semibold px-6 py-2 rounded-full inline-block mb-6 backdrop-blur-sm border border-primary-blue/20">
							Four Simple Steps
						</span>
					</motion.div>

					<motion.h2
						className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-merriweather gradient-text"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.1 }}
						viewport={{ once: true }}
					>
						How It Works
					</motion.h2>

					<motion.p
						className="text-gray-600 text-xl leading-relaxed max-w-3xl mx-auto"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						viewport={{ once: true }}
					>
						Our simple four-step process makes credential management
						and verification seamless and secure.
					</motion.p>
				</div>

				<div className="relative" ref={ref}>
					{/* Steps Timeline */}
					<div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-blue via-primary-green to-primary-blue transform -translate-x-1/2"></div>

					{/* Steps */}
					<div className="space-y-12 lg:space-y-24 relative">
						{steps.map((step, index) => (
							<div key={index} className="relative">
								<motion.div
									className={`flex flex-col lg:flex-row items-center lg:items-start ${
										index % 2 === 0
											? "lg:flex-row"
											: "lg:flex-row-reverse"
									}`}
									initial="hidden"
									animate={isInView ? "visible" : "hidden"}
									variants={staggerContainer}
								>
									{/* Step Number and Icon (Mobile - always top, Desktop - alternating sides) */}
									<motion.div
										className="flex-shrink-0 mb-6 lg:mb-0 z-10"
										variants={
											index % 2 === 0
												? fadeInRight
												: fadeInLeft
										}
									>
										<div className="w-20 h-20 rounded-full bg-white shadow-xl border-4 border-white flex items-center justify-center relative">
											<div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-blue to-primary-green opacity-20"></div>
											<div className="relative z-10">
												{step.icon}
											</div>
										</div>
										<div className="mt-3 text-center">
											<span className="bg-gradient-to-r from-primary-blue to-primary-green text-transparent bg-clip-text font-bold text-2xl">
												{step.number}
											</span>
										</div>
									</motion.div>

									{/* Content Box */}
									<motion.div
										className={`lg:w-[calc(50%-4rem)] lg:mx-8 ${
											index % 2 === 0
												? "lg:text-left"
												: "lg:text-right"
										}`}
										variants={fadeInUp}
									>
										<div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
											<h3 className="text-2xl font-bold mb-4 font-merriweather gradient-text">
												{step.title}
											</h3>
											<p className="text-gray-600">
												{step.description}
											</p>

											{/* Decorative Element */}
											<div
												className={`mt-6 h-1 w-20 rounded bg-gradient-to-r from-primary-blue to-primary-green ${
													index % 2 === 0
														? ""
														: "ml-auto"
												}`}
											></div>
										</div>
									</motion.div>
								</motion.div>

								{/* Desktop Only Connectors */}
								{index < steps.length - 1 && (
									<div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
										<div className="w-px h-8 bg-gradient-to-b from-primary-green to-primary-blue"></div>
									</div>
								)}
							</div>
						))}
					</div>
				</div>

				{/* CTA Banner */}
				<div className="mt-20 py-16 bg-gradient-to-r from-primary-blue to-primary-green rounded-xl shadow-xl text-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
					>
						<h3
							className="text-3xl md:text-4xl font-bold text-white mb-10 font-merriweather"
							style={{ lineHeight: "1.5" }}
						>
							Get ready for the future of digital credentials.
							<br className="hidden md:block" />
							Certify Smarter. Verify Instantly. Go Blockchain
							Today!
						</h3>

						<a href="#contact">
							<Button
								variant="secondary"
								size="lg"
								className="bg-white text-primary-blue font-satoshi-medium rounded-full px-10"
							>
								Contact us
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5 ml-2"
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
						</a>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default HowItWorks;
