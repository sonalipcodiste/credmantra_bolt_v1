import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
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
		userType: "",
		message: "",
	});

	const [formSubmitted, setFormSubmitted] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [formError, setFormError] = useState("");
	const [fieldErrors, setFieldErrors] = useState({
		name: "",
		email: "",
		city: "",
		state: "",
		country: "",
		userType: "",
		message: "",
	});
	const [ref, isInView] = useInView({ threshold: 0.1 });

	const handleContactChange = (e) => {
		const { name, value } = e.target;
		setContactForm({ ...contactForm, [name]: value });

		// Clear field-specific error when user types
		if (fieldErrors[name]) {
			setFieldErrors({ ...fieldErrors, [name]: "" });
		}
	};

	// Listen for programmatic changes to the radio buttons
	useEffect(() => {
		const resellerRadio = document.getElementById("reseller");
		const organizationRadio = document.getElementById("organization");

		const handleProgrammaticChange = (e) => {
			if (e.target.checked) {
				setContactForm((prev) => ({
					...prev,
					userType: e.target.value,
				}));
			}
		};

		if (resellerRadio) {
			resellerRadio.addEventListener("change", handleProgrammaticChange);
		}

		if (organizationRadio) {
			organizationRadio.addEventListener(
				"change",
				handleProgrammaticChange
			);
		}

		return () => {
			if (resellerRadio) {
				resellerRadio.removeEventListener(
					"change",
					handleProgrammaticChange
				);
			}
			if (organizationRadio) {
				organizationRadio.removeEventListener(
					"change",
					handleProgrammaticChange
				);
			}
		};
	}, []);

	const handleContactSubmit = async (e) => {
		e.preventDefault();

		// Clear previous errors
		setFieldErrors({
			name: "",
			email: "",
			city: "",
			state: "",
			country: "",
			userType: "",
			message: "",
		});
		setFormError("");

		// Validate individual fields
		let hasErrors = false;
		const errors = {
			name: "",
			email: "",
			city: "",
			state: "",
			country: "",
			userType: "",
			message: "",
		};

		// Name validation
		if (!contactForm.name) {
			errors.name = "Name is required";
			hasErrors = true;
		}

		// Email validation
		if (!contactForm.email) {
			errors.email = "Email is required";
			hasErrors = true;
		} else if (!/\S+@\S+\.\S+/.test(contactForm.email)) {
			errors.email = "Please enter a valid email address";
			hasErrors = true;
		}

		// User type validation
		if (!contactForm.userType) {
			errors.userType = "Please select an option";
			hasErrors = true;
		}

		// City validation
		if (!contactForm.city) {
			errors.city = "City is required";
			hasErrors = true;
		}

		// State validation
		if (!contactForm.state) {
			errors.state = "State is required";
			hasErrors = true;
		}

		// Country validation
		if (!contactForm.country) {
			errors.country = "Country is required";
			hasErrors = true;
		}

		// Message validation
		if (!contactForm.message) {
			errors.message = "Message is required";
			hasErrors = true;
		}

		// Update errors state
		if (hasErrors) {
			setFieldErrors(errors);
			setFormError("Please correct the errors below");
			return;
		}

		try {
			// Set loading state
			setIsSubmitting(true);

			// Submit form to API
			const response = await fetch(
				`${process.env.NEXT_PUBLIC_API_URL}/contact-request/create`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						name: contactForm.name,
						email: contactForm.email,
						city: contactForm.city,
						state: contactForm.state,
						country: contactForm.country,
						type: contactForm.userType,
						additionalMessage: contactForm.message,
					}),
				}
			);

			if (response.ok) {
				// Success state
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
						userType: "",
						message: "",
					});
					setFormSubmitted(false);
				}, 3000);
			} else {
				const errorData = await response.json();
				setFormError(
					"Failed to submit form. " +
						(errorData.message || "Please try again later.")
				);
			}
		} catch (error) {
			console.error("Error submitting form:", error);
			setFormError(
				"Failed to submit form. Please check your connection and try again."
			);
		} finally {
			// Reset loading state
			setIsSubmitting(false);
		}
	};

	return (
		<section
			id="contact"
			className="py-24 bg-white relative overflow-hidden"
		>
			{/* Decorative background elements */}
			<div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary-blue opacity-10 rounded-full transform -translate-x-1/4 -translate-y-1/4 blur-[150px]"></div>
			<div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary-green opacity-10 rounded-full transform translate-x-1/4 translate-y-1/4 blur-[150px]"></div>

			{/* New ellipses with custom colors and blurs */}
			<div className="absolute top-1/4 right-1/3 w-[700px] h-[700px] bg-[#87CEEB] opacity-15 rounded-full blur-[500px]"></div>
			<div className="absolute bottom-1/3 left-1/4 w-[600px] h-[600px] bg-[#50C878] opacity-15 rounded-full blur-[300px]"></div>

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
						className="bg-white/90 backdrop-blur-sm rounded-lg shadow-xl p-10 h-auto border border-white/20"
						whileHover={{
							boxShadow: "0 20px 30px -12px rgba(0, 0, 0, 0.2)",
							y: -5,
						}}
					>
						<h3 className="text-2xl font-bold mb-10 text-primary-blue">
							Contact Information
						</h3>

						<div className="space-y-12">
							{/* Email */}
							<div className="flex items-start">
								<div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mr-5">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6 text-primary-blue"
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
									<p className="text-primary-blue font-medium text-lg mb-2">
										Email Us
									</p>
									<p className="text-gray-500 text-lg">
										info@credmantra.org
									</p>
								</div>
							</div>

							{/* Phone */}
							<div className="flex items-start">
								<div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mr-5">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6 text-primary-blue"
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
									<p className="text-primary-blue font-medium text-lg mb-2">
										Call Us
									</p>
									<p className="text-gray-500 text-lg">
										+91 9893288866
									</p>
									<p className="text-gray-500 text-lg">
										+91 9981322222
									</p>
								</div>
							</div>

							{/* Address */}
							<div className="flex items-start">
								<div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mr-5">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6 text-primary-blue"
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
									<p className="text-primary-blue font-medium text-lg mb-3">
										Visit Us
									</p>
									<p className="text-gray-500 text-base mb-1.5">
										Cred Solution Services,
									</p>
									<p className="text-gray-500 text-base mb-1.5">
										102, Balaji Corporate,
									</p>
									<p className="text-gray-500 text-base mb-1.5">
										Near Curewell Hospital
									</p>
									<p className="text-gray-500 text-base mb-1.5">
										Palasia - 452001,
									</p>
									<p className="text-gray-500 text-base mb-1.5">
										Indore (MP),
									</p>
									<p className="text-gray-500 text-base">
										India.
									</p>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Right Card - Send Message Form */}
					<motion.div
						initial="hidden"
						animate={isInView ? "visible" : "hidden"}
						variants={fadeInRight}
						className="bg-white/90 backdrop-blur-sm rounded-lg shadow-xl p-10 relative overflow-hidden border border-white/20"
						whileHover={{
							boxShadow: "0 20px 30px -12px rgba(0, 0, 0, 0.2)",
							y: -5,
						}}
					>
						<h3 className="text-2xl font-bold mb-10 text-primary-blue">
							Send us a Message
						</h3>

						{formSubmitted ? (
							<div className="bg-green-50 text-green-800 rounded-lg p-6 mb-6 text-center">
								<div className="flex flex-col items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-12 w-12 mb-4 text-green-600"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"
										/>
									</svg>
									<h4 className="text-xl font-bold mb-2">
										Thank You!
									</h4>
									<p className="text-base">
										Your request has been successfully
										submitted. We'll be in touch with you
										shortly.
									</p>
								</div>
							</div>
						) : (
							<form onSubmit={handleContactSubmit}>
								{formError && (
									<div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 mb-6">
										<div className="flex items-center">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-5 w-5 mr-2 text-red-600"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path
													fillRule="evenodd"
													d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
													clipRule="evenodd"
												/>
											</svg>
											<p>{formError}</p>
										</div>
									</div>
								)}

								<div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
									{/* Name */}
									<div>
										<label
											htmlFor="name"
											className="block text-sm text-gray-600 mb-2"
										>
											Name{" "}
											<span className="text-red-500">
												*
											</span>
										</label>
										<input
											type="text"
											id="name"
											name="name"
											value={contactForm.name}
											onChange={handleContactChange}
											className={`w-full p-3 border ${
												fieldErrors.name
													? "border-red-500"
													: "border-gray-200"
											} rounded-lg bg-gray-50 focus:ring-1 focus:ring-primary-blue focus:border-primary-blue`}
											placeholder="John Doe"
										/>
										{fieldErrors.name && (
											<p className="mt-1 text-sm text-red-600">
												{fieldErrors.name}
											</p>
										)}
									</div>

									{/* Email */}
									<div>
										<label
											htmlFor="email"
											className="block text-sm text-gray-600 mb-2"
										>
											Email{" "}
											<span className="text-red-500">
												*
											</span>
										</label>
										<input
											type="email"
											id="email"
											name="email"
											value={contactForm.email}
											onChange={handleContactChange}
											className={`w-full p-3 border ${
												fieldErrors.email
													? "border-red-500"
													: "border-gray-200"
											} rounded-lg bg-gray-50 focus:ring-1 focus:ring-primary-blue focus:border-primary-blue`}
											placeholder="john@example.com"
										/>
										{fieldErrors.email && (
											<p className="mt-1 text-sm text-red-600">
												{fieldErrors.email}
											</p>
										)}
									</div>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
									{/* City */}
									<div>
										<label
											htmlFor="city"
											className="block text-sm text-gray-600 mb-2"
										>
											City{" "}
											<span className="text-red-500">
												*
											</span>
										</label>
										<input
											type="text"
											id="city"
											name="city"
											value={contactForm.city}
											onChange={handleContactChange}
											className={`w-full p-3 border ${
												fieldErrors.city
													? "border-red-500"
													: "border-gray-200"
											} rounded-lg bg-gray-50 focus:ring-1 focus:ring-primary-blue focus:border-primary-blue`}
											placeholder="Your City"
										/>
										{fieldErrors.city && (
											<p className="mt-1 text-sm text-red-600">
												{fieldErrors.city}
											</p>
										)}
									</div>

									{/* State */}
									<div>
										<label
											htmlFor="state"
											className="block text-sm text-gray-600 mb-2"
										>
											State{" "}
											<span className="text-red-500">
												*
											</span>
										</label>
										<input
											type="text"
											id="state"
											name="state"
											value={contactForm.state}
											onChange={handleContactChange}
											className={`w-full p-3 border ${
												fieldErrors.state
													? "border-red-500"
													: "border-gray-200"
											} rounded-lg bg-gray-50 focus:ring-1 focus:ring-primary-blue focus:border-primary-blue`}
											placeholder="Your State"
										/>
										{fieldErrors.state && (
											<p className="mt-1 text-sm text-red-600">
												{fieldErrors.state}
											</p>
										)}
									</div>

									{/* Country */}
									<div>
										<label
											htmlFor="country"
											className="block text-sm text-gray-600 mb-2"
										>
											Country{" "}
											<span className="text-red-500">
												*
											</span>
										</label>
										<input
											type="text"
											id="country"
											name="country"
											value={contactForm.country}
											onChange={handleContactChange}
											className={`w-full p-3 border ${
												fieldErrors.country
													? "border-red-500"
													: "border-gray-200"
											} rounded-lg bg-gray-50 focus:ring-1 focus:ring-primary-blue focus:border-primary-blue`}
											placeholder="Your Country"
										/>
										{fieldErrors.country && (
											<p className="mt-1 text-sm text-red-600">
												{fieldErrors.country}
											</p>
										)}
									</div>
								</div>

								{/* User Type */}
								<div className="mb-5">
									<label className="block text-sm text-gray-600 mb-3 font-medium">
										Are you a:{" "}
										<span className="text-red-500">*</span>
									</label>
									<div className="flex flex-wrap gap-6">
										<div className="flex items-start">
											<div className="flex h-5 items-center">
												<input
													type="radio"
													id="reseller"
													name="userType"
													value="reseller"
													checked={
														contactForm.userType ===
														"reseller"
													}
													onChange={
														handleContactChange
													}
													className={`h-5 w-5 cursor-pointer appearance-none rounded-full border-2 ${
														fieldErrors.userType
															? "border-red-500"
															: "border-gray-300"
													} bg-white transition-all checked:border-[#005A8B] checked:bg-white checked:before:bg-[#005A8B] focus:shadow-outline-blue focus:ring-1 focus:ring-[#005A8B]`}
													style={{
														backgroundPosition:
															"center",
														backgroundRepeat:
															"no-repeat",
														backgroundImage:
															contactForm.userType ===
															"reseller"
																? "radial-gradient(circle, #005A8B 40%, transparent 40%)"
																: "none",
													}}
												/>
											</div>
											<label
												htmlFor="reseller"
												className="ml-3 text-gray-700 cursor-pointer font-medium"
											>
												Reseller
											</label>
										</div>
										<div className="flex items-start">
											<div className="flex h-5 items-center">
												<input
													type="radio"
													id="organization"
													name="userType"
													value="organization"
													checked={
														contactForm.userType ===
														"organization"
													}
													onChange={
														handleContactChange
													}
													className={`h-5 w-5 cursor-pointer appearance-none rounded-full border-2 ${
														fieldErrors.userType
															? "border-red-500"
															: "border-gray-300"
													} bg-white transition-all checked:border-[#008080] checked:bg-white checked:before:bg-[#008080] focus:shadow-outline-blue focus:ring-1 focus:ring-[#008080]`}
													style={{
														backgroundPosition:
															"center",
														backgroundRepeat:
															"no-repeat",
														backgroundImage:
															contactForm.userType ===
															"organization"
																? "radial-gradient(circle, #008080 40%, transparent 40%)"
																: "none",
													}}
												/>
											</div>
											<label
												htmlFor="organization"
												className="ml-3 text-gray-700 cursor-pointer font-medium"
											>
												Organization
											</label>
										</div>
									</div>
									{fieldErrors.userType && (
										<p className="mt-2 text-sm text-red-600">
											{fieldErrors.userType}
										</p>
									)}
								</div>

								<div className="mb-8">
									<label
										htmlFor="message"
										className="block text-sm text-gray-600 mb-2"
									>
										Additional Message{" "}
										<span className="text-red-500">*</span>
									</label>
									<textarea
										id="message"
										name="message"
										rows="5"
										value={contactForm.message}
										onChange={handleContactChange}
										className={`w-full p-3 border ${
											fieldErrors.message
												? "border-red-500"
												: "border-gray-200"
										} rounded-lg bg-gray-50 focus:ring-1 focus:ring-primary-blue focus:border-primary-blue`}
										placeholder="Tell us ..."
									></textarea>
									{fieldErrors.message && (
										<p className="mt-1 text-sm text-red-600">
											{fieldErrors.message}
										</p>
									)}
								</div>

								<Button
									variant="primary"
									className="w-full py-3 text-base font-satoshi-medium rounded-md bg-primary-blue"
									disabled={isSubmitting}
								>
									{isSubmitting ? (
										<span className="flex items-center justify-center">
											<svg
												className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
											>
												<circle
													className="opacity-25"
													cx="12"
													cy="12"
													r="10"
													stroke="currentColor"
													strokeWidth="4"
												></circle>
												<path
													className="opacity-75"
													fill="currentColor"
													d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
												></path>
											</svg>
											Sending...
										</span>
									) : (
										"Send Message"
									)}
								</Button>

								<p className="text-center text-sm text-gray-500 mt-5">
									By submitting this form, you agree to our{" "}
									<Link href="/privacy-policy" legacyBehavior>
										<a className="text-primary-blue hover:underline">
											Privacy Policy
										</a>
									</Link>{" "}
									and{" "}
									<Link
										href="/terms-of-service"
										legacyBehavior
									>
										<a className="text-primary-blue hover:underline">
											Terms of Service
										</a>
									</Link>
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
