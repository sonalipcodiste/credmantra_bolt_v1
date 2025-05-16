import { motion } from "framer-motion";
import Card from "./ui/Card";
import useInView from "../hooks/useInView";
import { fadeInUp, staggerContainer } from "../utils/animations";

const FeatureCard = ({ icon, title, description, index }) => {
	return (
		<motion.div
			variants={fadeInUp}
			className="h-full"
			whileHover={{ y: -5 }}
			transition={{ type: "spring", stiffness: 400, damping: 15 }}
		>
			<Card
				variant="elevated"
				className="h-full p-8 flex flex-col relative overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-b-primary-blue/20 hover:bg-gradient-to-b hover:from-white hover:to-gray-50/30 group transition-all duration-300"
				hover={true}
			>
				<div className="mb-8 text-gray-400 relative group">
					<div className="absolute -top-1 -left-1 w-12 h-12 bg-gray-50 rounded-full opacity-50"></div>
					<div className="relative z-10 transform transition-transform duration-500 group-hover:scale-105">
						<div className="bg-white py-2 px-1 rounded text-gray-400 group-hover:text-primary-blue transition-all duration-300">
							{icon}
						</div>
					</div>
				</div>
				<h3 className="text-xl font-bold mb-4 text-gray-800 transition-colors duration-300 tracking-tight group-hover:text-primary-blue">
					{title}
				</h3>
				<p className="text-gray-600 flex-grow leading-relaxed text-sm">
					{description}
				</p>

				{/* Decorative elements */}
				<div className="absolute bottom-0 right-0 w-16 h-16 bg-gray-50 rounded-tl-full opacity-30 pointer-events-none"></div>
				<div className="absolute top-0 right-0 w-3 h-3 bg-gray-100 rounded-full opacity-50 pointer-events-none"></div>
				<div className="absolute bottom-8 right-8 w-2 h-2 bg-primary-blue/20 rounded-full opacity-30 pointer-events-none"></div>
			</Card>
		</motion.div>
	);
};

const FeatureCards = () => {
	const [ref, isInView] = useInView({ threshold: 0.1 });

	const features = [
		{
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-7 w-7"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={1.25}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
					/>
				</svg>
			),
			title: "Tamper-Proof Security",
			description:
				"Blockchain technology ensures that once credentials are issued, they cannot be altered, providing the highest level of security and trust.",
		},
		{
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-7 w-7"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={1.25}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
					/>
				</svg>
			),
			title: "Instant Verification",
			description:
				"Employers and organisations can instantly verify the authenticity of credentials with just a click, eliminating fraud and saving time.",
		},
		{
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-7 w-7"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={1.25}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
					/>
				</svg>
			),
			title: "Global Standards Compliance",
			description:
				"Our platform adheres to global standards, ensuring that credentials are recognized worldwide.",
		},
		{
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-7 w-7"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={1.25}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
					/>
				</svg>
			),
			title: "Customizable Templates",
			description:
				"Create and customize certificate templates that reflect your organisations brand and identity while maintaining security features.",
		},
		{
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-7 w-7"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={1.25}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
					/>
				</svg>
			),
			title: "Advanced Analytics",
			description:
				"Gain insights into credential issuance, verification trends, and user engagement through our comprehensive analytics dashboard.",
		},
		{
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-7 w-7"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={1.25}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
					/>
				</svg>
			),
			title: "Seamless Integration",
			description:
				"Easily integrate with existing LMS platforms, HR systems, and other organisations software through our flexible API.",
		},
	];

	return (
		<section
			id="features"
			className="py-24 bg-gray-50/50 relative overflow-hidden"
		>
			{/* Decorative background elements */}
			<div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary-blue opacity-3 rounded-full transform -translate-x-1/2 -translate-y-1/2 blur-[100px]"></div>
			<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary-green opacity-50 rounded-full transform translate-x-1/3 translate-y-1/3 blur-[100px]"></div>

			<div className="container-center relative z-10">
				<div className="text-center max-w-3xl mx-auto mb-20">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
					>
						<span className="bg-background-white border border-primary-blue/20 text-primary-blue font-semibold px-4 py-2 rounded-full inline-block mb-4 shadow-sm">
							Powerful Features
						</span>
					</motion.div>
					<motion.h2
						className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.1 }}
						viewport={{ once: true }}
					>
						<span className="gradient-text">
							Why Choose Our Platform
						</span>
					</motion.h2>
					<motion.p
						className="text-gray-500 text-xl leading-relaxed"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						viewport={{ once: true }}
					>
						Cred Mantra offers a comprehensive suite of features
						designed to revolutionize the way credentials are
						created, issued, and verified.
					</motion.p>
				</div>

				<motion.div
					ref={ref}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					variants={staggerContainer}
				>
					{features.map((feature, index) => (
						<FeatureCard
							key={index}
							icon={feature.icon}
							title={feature.title}
							description={feature.description}
							index={index}
						/>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default FeatureCards;
