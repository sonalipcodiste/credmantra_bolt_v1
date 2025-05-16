import { motion } from "framer-motion";
import useInView from "../hooks/useInView";
import { fadeInUp, staggerContainer } from "../utils/animations";
import { GlowingEffect } from "./ui/glowing-effect";

const Beneficiaries = () => {
	const [ref, isInView] = useInView({ threshold: 0.1 });

	const beneficiaries = [
		{
			title: "Educational Organisation",
			description:
				"Schools, Colleges, Universities, Coaching Centers, EdTech Companies",
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-7 w-7"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={1.25}
				>
					<path d="M12 14l9-5-9-5-9 5 9 5z" />
					<path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
				</svg>
			),
		},
		{
			title: "Corporates & Enterprises",
			description:
				"Issue certifications for employee training & skill development",
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
						d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
					/>
				</svg>
			),
		},
		{
			title: "Government Departments",
			description:
				"AICTE, MSME, Startup India, NASSCOM, Municipal Corporations",
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
						d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
					/>
				</svg>
			),
		},
		{
			title: "Certification Bodies",
			description: "ICAI, APEDA, SGS, and more",
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
						d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
					/>
				</svg>
			),
		},
		{
			title: "Organic & Online Certification Providers",
			description: "Securely issue and track online credentials",
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
						d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
					/>
				</svg>
			),
		},
	];

	// Duplicate the beneficiaries for continuous scrolling
	const scrollItems = [...beneficiaries, ...beneficiaries];

	return (
		<section
			id="benefits"
			className="py-24 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden"
		>
			{/* Decorative background elements with increased blur and animation */}
			<motion.div
				className="absolute w-[600px] h-[600px] bg-primary-blue opacity-10 rounded-full blur-[200px]"
				initial={{ x: "33%", y: "10%" }}
				animate={{
					x: ["33%", "28%", "35%", "33%"],
					y: ["10%", "15%", "8%", "10%"],
				}}
				transition={{
					duration: 18,
					repeat: Infinity,
					repeatType: "reverse",
					ease: "easeInOut",
				}}
			></motion.div>

			<motion.div
				className="absolute w-[500px] h-[500px] bg-secondary-green opacity-10 rounded-full blur-[200px]"
				initial={{ x: "-33%", y: "75%" }}
				animate={{
					x: ["-33%", "-38%", "-25%", "-33%"],
					y: ["75%", "70%", "80%", "75%"],
				}}
				transition={{
					duration: 20,
					repeat: Infinity,
					repeatType: "reverse",
					ease: "easeInOut",
				}}
			></motion.div>

			<motion.div
				className="absolute w-[400px] h-[400px] bg-secondary-blue opacity-10 rounded-full blur-[200px]"
				initial={{ x: "25%", y: "25%" }}
				animate={{
					x: ["25%", "28%", "22%", "25%"],
					y: ["25%", "22%", "28%", "25%"],
					scale: [1, 1.05, 0.95, 1],
				}}
				transition={{
					duration: 15,
					repeat: Infinity,
					repeatType: "reverse",
					ease: "easeInOut",
				}}
			></motion.div>

			<motion.div
				className="absolute w-[450px] h-[450px] bg-secondary-green opacity-5 rounded-full blur-[200px]"
				initial={{ x: "75%", y: "60%" }}
				animate={{
					x: ["75%", "72%", "78%", "75%"],
					y: ["60%", "65%", "55%", "60%"],
					scale: [1, 0.95, 1.05, 1],
				}}
				transition={{
					duration: 22,
					repeat: Infinity,
					repeatType: "reverse",
					ease: "easeInOut",
				}}
			></motion.div>

			<div className="relative z-10 max-w-[94%] xl:max-w-[1500px] mx-auto">
				<div className="text-center max-w-3xl mx-auto mb-16">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
					>
						<span className="bg-gradient-to-r from-primary-blue/20 to-secondary-green/20 text-primary-blue font-semibold px-6 py-2 rounded-full inline-block mb-6 backdrop-blur-sm border border-primary-blue/30 shadow-sm">
							Industries We Serve
						</span>
					</motion.div>

					<motion.h2
						className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.1 }}
						viewport={{ once: true }}
					>
						<span className="gradient-text drop-shadow-sm">
							Who Can Benefit
						</span>
					</motion.h2>

					<motion.p
						className="text-gray-600 text-xl leading-relaxed"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						viewport={{ once: true }}
					>
						Our blockchain credential verification platform serves a
						diverse range of organizations and organisations across
						multiple sectors.
					</motion.p>
				</div>

				{/* Card container with continuous horizontal scroll */}
				<div className="overflow-hidden relative py-4">
					<div className="flex space-x-8 beneficiaries-scroll">
						{scrollItems.map((item, index) => (
							<motion.div
								key={index}
								className="flex-shrink-0 w-[220px] md:w-[250px] xl:w-[275px]"
								whileHover={{ y: -5, scale: 1.02 }}
								transition={{
									type: "spring",
									stiffness: 300,
									damping: 10,
								}}
							>
								<div className="h-full overflow-hidden group w-full bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative border border-primary-blue/10 hover:border-primary-blue/30">
									<GlowingEffect
										spread={60}
										glow={true}
										disabled={false}
										proximity={100}
										inactiveZone={0.01}
									/>
									<div className="flex items-center p-5 border-b border-primary-blue/10 bg-gradient-to-r from-primary-blue/5 to-secondary-green/5">
										<motion.div
											className="bg-gradient-to-br from-primary-blue to-primary-blue/80 rounded-xl p-2 inline-flex items-center justify-center shadow-md mr-4 w-12 h-12"
											whileHover={{
												rotate: 5,
												scale: 1.05,
											}}
											transition={{
												type: "spring",
												stiffness: 300,
												damping: 15,
											}}
										>
											<div className="text-white">
												{item.icon}
											</div>
										</motion.div>
										<h3 className="text-lg font-bold gradient-text drop-shadow-sm">
											{item.title}
										</h3>
									</div>

									<div className="p-5 h-full overflow-hidden bg-gradient-to-b from-white to-blue-50/30">
										<p className="text-gray-700 text-sm leading-relaxed">
											{item.description}
										</p>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Beneficiaries;
