import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import { motion } from "framer-motion";

export default function NewHero() {
	return (
		<div className="flex flex-col overflow-hidden mt-16 md:mt-24">
			<ContainerScroll
				titleComponent={
					<>
						<motion.h1
							className="text-4xl md:text-5xl font-bold mb-4 gradient-text font-merriweather"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
						>
							Blockchain-Powered Credential
						</motion.h1>
						<motion.h2
							className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-6 font-medium"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.1 }}
						>
							Tamper-Proof Digital Credentials for a Trusted
							Future
						</motion.h2>
						<motion.div
							className="max-w-2xl mx-auto mb-8"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
						>
							<p className="text-lg md:text-xl text-gray-500 leading-relaxed">
								Empower your organisations with secure,
								verifiable, and future-proof digital
								credentials. issue, manage, and verify
								credentials effortlessly while ensuring
								compliance with global standards.
							</p>
						</motion.div>
					</>
				}
			>
				<img
					src="/assets/certificate-hero.png"
					alt="Blockchain Credential Certificate"
					className="mx-auto object-contain h-full w-full"
					draggable={false}
				/>
			</ContainerScroll>
		</div>
	);
}
