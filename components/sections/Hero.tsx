"use client";
import { Button } from "@/components/ui/button";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="flex flex-col overflow-hidden"
		>
			<ContainerScroll
				titleComponent={
					<>
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#005A8B] to-[#008080] text-transparent bg-clip-text">
							Cred Solution Services
						</h1>
						<h2 className="text-xl md:text-2xl text-[#374151] font-medium mb-8">
							Tamper-Proof Digital Credentials for a Trusted
							Future
						</h2>
						<p className="text-lg text-[#4B5563] mb-10 max-w-3xl mx-auto leading-relaxed">
							Empower your institution with blockchain-based
							digital credentials that are secure, verifiable, and
							future-proof. Issue, manage, and verify credentials
							effortlessly while ensuring compliance with global
							and national educational standards.
						</p>
						<div className="flex justify-center mb-20">
							<Button
								size="lg"
								className="rounded-md text-base px-12 bg-gradient-to-r from-[#005A8B] to-[#008080] hover:opacity-90 transition-opacity"
							>
								Get Started
							</Button>
						</div>
					</>
				}
			>
				<motion.img
					initial={{ opacity: 0, scale: 0.95 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					src="/Hero-image.png"
					alt="Cred Solution Services"
					className="mx-auto rounded-2xl object-cover h-full w-full"
					draggable={false}
				/>
			</ContainerScroll>
		</motion.div>
	);
};

export default HeroSection;
