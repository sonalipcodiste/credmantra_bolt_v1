"use client";

import { useRef } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface ContactInfoProps {
	icon: React.ReactNode;
	title: string;
	content: string;
	link?: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({
	icon,
	title,
	content,
	link,
}) => {
	return (
		<div className="flex items-start gap-4">
			<div className="inline-flex p-2 rounded-full bg-[#005A8B]/10 text-[#005A8B]">
				{icon}
			</div>
			<div>
				<h3 className="font-medium mb-1">{title}</h3>
				{link ? (
					<a
						href={link}
						className="text-gray-600 hover:text-[#005A8B] transition-colors"
					>
						{content}
					</a>
				) : (
					<p className="text-gray-600 whitespace-pre-line">
						{content}
					</p>
				)}
			</div>
		</div>
	);
};

const LabelInputContainer = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<div className={cn("flex w-full flex-col space-y-2", className)}>
			{children}
		</div>
	);
};

const ContactSection = () => {
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, {
		once: true,
		margin: "-100px 0px",
	});

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log("Form submitted");
	};

	return (
		<section
			id="contact"
			className="py-16 md:py-24 bg-[#F6FCFF]"
			ref={sectionRef}
		>
			<div className="container mx-auto px-4">
				<motion.div
					className="text-center mb-12"
					initial={{ opacity: 0, y: 20 }}
					animate={
						isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
					}
					transition={{ duration: 0.5 }}
				>
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						Get Started with CredMantra
					</h2>
					<p className="text-gray-600 max-w-2xl mx-auto">
						Have questions or ready to transform your credential
						verification process? Contact us today.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={
							isInView
								? { opacity: 1, x: 0 }
								: { opacity: 0, x: -20 }
						}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="h-full"
					>
						<div className="bg-white rounded-xl p-8 shadow-lg h-full">
							<h3 className="text-2xl font-semibold mb-8 text-[#005A8B]">
								Contact Information
							</h3>

							<div className="space-y-8">
								<ContactInfo
									icon={<Mail className="h-5 w-5" />}
									title="Email Us"
									content="info@credmantra.org"
									link="mailto:info@credmantra.org"
								/>
								<ContactInfo
									icon={<Phone className="h-5 w-5" />}
									title="Call Us"
									content="+91 9893288866"
									link="tel:+919893288866"
								/>
								<ContactInfo
									icon={<MapPin className="h-5 w-5" />}
									title="Visit Us"
									content={`Cred Solution Services,\n102, Balaji Corporate,\nNear Curewell Hospital\nPalasia - 452001,\nIndore (MP),\nIndia.`}
								/>
							</div>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={
							isInView
								? { opacity: 1, x: 0 }
								: { opacity: 0, x: 20 }
						}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="h-full"
					>
						<div className="bg-white p-8 rounded-xl shadow-lg h-full">
							<h3 className="text-2xl font-semibold mb-8 text-[#005A8B]">
								Send us a Message
							</h3>

							<form className="space-y-6" onSubmit={handleSubmit}>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<LabelInputContainer>
										<Label htmlFor="name">Name</Label>
										<Input
											id="name"
											placeholder="John Doe"
											type="text"
											className="bg-gray-50/50 border-gray-200 focus-visible:ring-[#005A8B]"
										/>
									</LabelInputContainer>
									<LabelInputContainer>
										<Label htmlFor="email">Email</Label>
										<Input
											id="email"
											placeholder="john@example.com"
											type="email"
											className="bg-gray-50/50 border-gray-200 focus-visible:ring-[#005A8B]"
										/>
									</LabelInputContainer>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
									<LabelInputContainer>
										<Label htmlFor="city">City</Label>
										<Input
											id="city"
											placeholder="Your City"
											className="bg-gray-50/50 border-gray-200 focus-visible:ring-[#005A8B]"
										/>
									</LabelInputContainer>
									<LabelInputContainer>
										<Label htmlFor="state">State</Label>
										<Input
											id="state"
											placeholder="Your State"
											className="bg-gray-50/50 border-gray-200 focus-visible:ring-[#005A8B]"
										/>
									</LabelInputContainer>
									<LabelInputContainer>
										<Label htmlFor="country">Country</Label>
										<Input
											id="country"
											placeholder="Your Country"
											className="bg-gray-50/50 border-gray-200 focus-visible:ring-[#005A8B]"
										/>
									</LabelInputContainer>
								</div>

								<LabelInputContainer>
									<Label htmlFor="message">
										Additional Message
									</Label>
									<Textarea
										id="message"
										placeholder="Tell us how we can help you..."
										className="min-h-[120px] bg-gray-50/50 border-gray-200 focus-visible:ring-[#005A8B]"
									/>
								</LabelInputContainer>

								<button
									className="w-full py-3 px-4 bg-gradient-to-r from-[#005A8B] to-[#008080] text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
									type="submit"
								>
									Send Message
								</button>
							</form>

							<p className="text-sm text-gray-600 mt-6 text-center">
								By submitting this form, you agree to our{" "}
								<a
									href="#"
									className="text-[#005A8B] hover:underline"
								>
									Privacy Policy
								</a>{" "}
								and{" "}
								<a
									href="#"
									className="text-[#005A8B] hover:underline"
								>
									Terms of Service
								</a>
								.
							</p>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
