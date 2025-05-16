import { useState } from "react";
import { motion } from "framer-motion";
import Button from "./ui/Button";
import useInView from "../hooks/useInView";
import { fadeInLeft, fadeInRight } from "../utils/animations";

const GetStarted = () => {
	const [contactForm, setContactForm] = useState({
		name: "",
		email: "",
		city: "",
		state: "",
		country: "",
		message: "",
	});

	const [formSubmitted, setFormSubmitted] = useState(false);
	const [formError, setFormError] = useState("");
	const [ref, isInView] = useInView({ threshold: 0.1 });

	const handleContactChange = (e) => {
		const { name, value } = e.target;
		setContactForm({ ...contactForm, [name]: value });
	};

	const handleContactSubmit = (e) => {
		e.preventDefault();
		// Validate form
		if (!contactForm.name || !contactForm.email) {
			setFormError("Please fill in all required fields");
			return;
		}

		// Success state - In a real app, this would submit to a backend
		setFormSubmitted(true);
		setFormError("");

		// Reset form after successful submission
		setTimeout(() => {
			setContactForm({
				name: "",
				email: "",
				city: "",
				state: "",
				country: "",
				message: "",
			});
			setFormSubmitted(false);
		}, 3000);
	};

	return (
		<section
			id="contact"
			className="py-24 bg-background-light relative overflow-hidden"
		>
			<div className="container-center relative z-10" ref={ref}>
				<div className="text-center max-w-3xl mx-auto mb-16">
					<motion.h2
						className="text-4xl md:text-5xl font-bold mb-6 leading-tight gradient-text font-merriweather"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
					>
						Get Started with Cred Mantra
					</motion.h2>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
					{/* Left Card - Contact Information */}
					<motion.div
						initial="hidden"
						animate={isInView ? "visible" : "hidden"}
						variants={fadeInLeft}
						className="bg-white rounded-xl shadow-lg p-10 h-auto"
						whileHover={{
							boxShadow: "0 15px 30px -12px rgba(0, 0, 0, 0.1)",
						}}
					>
						<h3 className="text-2xl font-bold mb-10 text-gray-700">
							Contact Information
						</h3>

						<div className="space-y-8">
							{/* Email */}
							<div className="flex items-start">
								<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mr-4">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5 text-primary-blue"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
										/>
									</svg>
								</div>
								<div>
									<p className="text-primary-blue font-medium text-lg">
										Email Us
									</p>
									<p className="text-gray-500">
										info@credmantra.org
									</p>
								</div>
							</div>

							{/* Phone */}
							<div className="flex items-start">
								<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mr-4">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5 text-primary-blue"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
										/>
									</svg>
								</div>
								<div>
									<p className="text-primary-blue font-medium text-lg">
										Call Us
									</p>
									<p className="text-gray-500">
										+91 9893288866
									</p>
								</div>
							</div>

							{/* Address */}
							<div className="flex items-start">
								<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mr-4">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5 text-primary-blue"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
										/>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
										/>
									</svg>
								</div>
								<div>
									<p className="text-primary-blue font-medium text-lg">
										Visit Us
									</p>
									<p className="text-gray-500">
										Cred Solution Services,
									</p>
									<p className="text-gray-500">
										102, Balaji Corporate,
									</p>
									<p className="text-gray-500">
										Near Curewell Hospital
									</p>
									<p className="text-gray-500">
										Palasia - 452001,
									</p>
									<p className="text-gray-500">
										Indore (MP),
									</p>
									<p className="text-gray-500">India.</p>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Right Card - Send Message Form */}
					<motion.div
						initial="hidden"
						animate={isInView ? "visible" : "hidden"}
						variants={fadeInRight}
						className="bg-white rounded-xl shadow-lg p-10 relative overflow-hidden"
					>
						<h3 className="text-2xl font-bold mb-8 text-gray-700">
							Send us a Message
						</h3>

						{formSubmitted ? (
							<div className="bg-green-50 text-green-800 rounded-lg p-4 mb-6">
								<div className="flex items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5 mr-2"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"
										/>
									</svg>
									<p>
										Thank you for your message! We'll be in
										touch soon.
									</p>
								</div>
							</div>
						) : (
							<form onSubmit={handleContactSubmit}>
								{formError && (
									<div className="bg-red-50 text-red-800 rounded-lg p-4 mb-6">
										<p>{formError}</p>
									</div>
								)}

								<div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
									{/* Name */}
									<div>
										<label
											htmlFor="name"
											className="block text-sm text-gray-600 mb-2"
										>
											Name
										</label>
										<input
											type="text"
											id="name"
											name="name"
											value={contactForm.name}
											onChange={handleContactChange}
											className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue"
											placeholder="John Doe"
											required
										/>
									</div>

									{/* Email */}
									<div>
										<label
											htmlFor="email"
											className="block text-sm text-gray-600 mb-2"
										>
											Email
										</label>
										<input
											type="email"
											id="email"
											name="email"
											value={contactForm.email}
											onChange={handleContactChange}
											className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue"
											placeholder="john@example.com"
											required
										/>
									</div>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
									{/* City */}
									<div>
										<label
											htmlFor="city"
											className="block text-sm text-gray-600 mb-2"
										>
											City
										</label>
										<input
											type="text"
											id="city"
											name="city"
											value={contactForm.city}
											onChange={handleContactChange}
											className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue"
											placeholder="Your City"
										/>
									</div>

									{/* State */}
									<div>
										<label
											htmlFor="state"
											className="block text-sm text-gray-600 mb-2"
										>
											State
										</label>
										<input
											type="text"
											id="state"
											name="state"
											value={contactForm.state}
											onChange={handleContactChange}
											className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue"
											placeholder="Your State"
										/>
									</div>

									{/* Country */}
									<div>
										<label
											htmlFor="country"
											className="block text-sm text-gray-600 mb-2"
										>
											Country
										</label>
										<input
											type="text"
											id="country"
											name="country"
											value={contactForm.country}
											onChange={handleContactChange}
											className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue"
											placeholder="Your Country"
										/>
									</div>
								</div>

								<div className="mb-6">
									<label
										htmlFor="message"
										className="block text-sm text-gray-600 mb-2"
									>
										Additional Message
									</label>
									<textarea
										id="message"
										name="message"
										rows="5"
										value={contactForm.message}
										onChange={handleContactChange}
										className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue"
										placeholder="Tell us ..."
									></textarea>
								</div>

								<Button
									variant="primary"
									className="w-full py-3 text-lg rounded-md"
								>
									Send Message
								</Button>

								<p className="text-center text-sm text-gray-500 mt-5">
									By submitting this form, you agree to our{" "}
									<a
										href="#"
										className="text-primary-blue hover:underline"
									>
										Privacy Policy
									</a>{" "}
									and{" "}
									<a
										href="#"
										className="text-primary-blue hover:underline"
									>
										Terms of Service
									</a>
									.
								</p>
							</form>
						)}
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default GetStarted;
