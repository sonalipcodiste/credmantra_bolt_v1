"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { PopupButton } from "react-calendly";

const CTASection = () => {
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, {
		once: true,
		margin: "-100px 0px",
	});

	return (
		<section
			ref={sectionRef}
			className="relative h-[600px] overflow-hidden"
		>
			<BackgroundGradientAnimation
				gradientBackgroundStart="#005A8B"
				gradientBackgroundEnd="#008080"
				firstColor="0, 90, 139"
				secondColor="0, 128, 128"
				thirdColor="135, 206, 235"
				fourthColor="80, 200, 120"
				fifthColor="135, 206, 235"
				pointerColor="0, 90, 139"
				size="100%"
				blendingValue="screen"
				containerClassName="absolute inset-0"
			>
				<div className="relative z-10 h-full flex items-center justify-center py-16">
					<div className="container mx-auto px-4">
						<motion.div
							className="max-w-3xl mx-auto text-center space-y-8"
							initial={{ opacity: 0, y: 20 }}
							animate={
								isInView
									? { opacity: 1, y: 0 }
									: { opacity: 0, y: 20 }
							}
							transition={{ duration: 0.5 }}
						>
							<h2 className="text-3xl md:text-4xl font-bold text-white">
								Ready to Transform Your Credentialing Process?
							</h2>
							<p className="text-white/90 text-lg max-w-2xl mx-auto">
								Join the leading institutions that have already
								embraced secure digital credentials with Cred
								Mantra.
							</p>
							<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
								<PopupButton
									url="https://calendly.com/credmantra/demo"
									rootElement={document.getElementById("__next")}
									text="Request a demo"
									className="rounded-md text-base px-8 py-3 font-medium bg-white text-[#005A8B] hover:bg-white/90 w-full sm:w-auto"
								/>
								<Button
									size="lg"
									variant="outline"
									className="rounded-md text-base px-8 font-medium border-white"
								>
									Sign up
								</Button>
							</div>
						</motion.div>
					</div>
				</div>
			</BackgroundGradientAnimation>
		</section>
	);
};

export default CTASection;