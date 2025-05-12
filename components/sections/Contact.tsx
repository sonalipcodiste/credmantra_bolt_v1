"use client";

import { ChangeEvent, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
	Mail,
	Phone,
	MapPin,
	CheckCircle,
	AlertTriangle,
	XCircle,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { submitContactRequest } from "@/utils/api";
import Link from "next/link";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";

interface ContactInfoProps {
	icon: React.ReactNode;
	title: string;
	content: string;
	link?: string;
}

interface FormData {
	name: string;
	email: string;
	city: string;
	state: string;
	country: string;
	additionalMessage: string;
}

interface FormErrors {
	name?: string;
	email?: string;
	city?: string;
	state?: string;
	country?: string;
	additionalMessage?: string;
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

	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		city: "",
		state: "",
		country: "",
		additionalMessage: "",
	});

	const [formErrors, setFormErrors] = useState<FormErrors>({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmissionSuccessful, setIsSubmissionSuccessful] = useState(false);
	const [submissionError, setSubmissionError] = useState<string | null>(null);

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));

		if (formErrors[name as keyof FormErrors]) {
			const newErrors = { ...formErrors };
			delete newErrors[name as keyof FormErrors];
			setFormErrors(newErrors);
		}
	};

	const validateForm = (): FormErrors => {
		const errors: FormErrors = {};

		if (!formData.name.trim()) {
			errors.name = "Name is required";
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!formData.email.trim()) {
			errors.email = "Email is required";
		} else if (!emailRegex.test(formData.email)) {
			errors.email = "Invalid email format";
		}

		if (!formData.city.trim()) {
			errors.city = "City is required";
		}

		if (!formData.state.trim()) {
			errors.state = "State is required";
		}

		if (!formData.country.trim()) {
			errors.country = "Country is required";
		}

		if (!formData.additionalMessage.trim()) {
			errors.additionalMessage = "Message is required";
		}

		return errors;
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const errors = validateForm();

		setSubmissionError(null);
		if (Object.keys(errors).length > 0) {
			setFormErrors(errors);
			return;
		}

		setIsSubmitting(true);

		try {
			await submitContactRequest(formData);
			setIsSubmissionSuccessful(true);
			setFormData({
				name: "",
				email: "",
				city: "",
				state: "",
				country: "",
				additionalMessage: "",
			});
			setFormErrors({});

			const timer = setTimeout(() => {
				setIsSubmissionSuccessful(false);
			}, 10000);

			return () => clearTimeout(timer);
		} catch (error) {
			const errorMessage =
				"Failed to submit your message. Please try again later.";
			setSubmissionError(errorMessage);
		} finally {
			setIsSubmitting(false);
		}
	};

	const clearSubmissionError = () => {
		setSubmissionError(null);
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

							{isSubmissionSuccessful ? (
								<div className="inset-0 flex items-center justify-center p-8">
									<Alert
										variant="default"
										className="max-w-full w-full bg-green-50 border-green-200"
									>
										<CheckCircle className="h-5 w-5 text-green-600" />
										<AlertTitle className="text-green-800">
											Request Received
										</AlertTitle>
										<AlertDescription className="text-green-700">
											Thank you for your request. Our team
											will be in touch with you shortly.
										</AlertDescription>
									</Alert>
								</div>
							) : (
								<>
									{submissionError && (
										<div className="mb-4">
											<Alert variant="destructive">
												<AlertTriangle className="h-5 w-5" />
												<AlertTitle>Oops!</AlertTitle>
												<AlertDescription>
													{submissionError ||
														"Something went wrong. Please give it another try in a little while."}
												</AlertDescription>
												<button
													onClick={
														clearSubmissionError
													}
													className="absolute top-2 right-2 text-sm text-red-700 hover:text-red-900"
												>
													<XCircle />
												</button>
											</Alert>
										</div>
									)}
									<form
										className="space-y-6"
										onSubmit={handleSubmit}
									>
										<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
											<LabelInputContainer>
												<Label htmlFor="name">
													Name
												</Label>
												<Input
													id="name"
													placeholder="John Doe"
													type="text"
													name="name"
													value={formData.name}
													onChange={handleChange}
													className={cn(
														"block w-full rounded-md border-gray-300 shadow-sm focus:border-[#005A8B] focus:ring-[#005A8B] sm:text-sm",
														formErrors.name &&
															"border-red-500 focus:border-red-500"
													)}
													// className="bg-gray-50/50 border-gray-200 focus-visible:ring-[#005A8B]"
												/>
												{formErrors.name && (
													<p className="text-red-500 text-sm mt-1">
														{formErrors.name}
													</p>
												)}
											</LabelInputContainer>
											<LabelInputContainer>
												<Label htmlFor="email">
													Email
												</Label>
												<Input
													id="email"
													placeholder="john@example.com"
													type="text"
													name="email"
													value={formData.email}
													onChange={handleChange}
													className={cn(
														"block w-full rounded-md border-gray-300 shadow-sm focus:border-[#005A8B] focus:ring-[#005A8B] sm:text-sm",
														formErrors.email &&
															"border-red-500 focus:border-red-500"
													)}
													// className="bg-gray-50/50 border-gray-200 focus-visible:ring-[#005A8B]"
												/>
												{formErrors.email && (
													<p className="text-red-500 text-sm mt-1">
														{formErrors.email}
													</p>
												)}
											</LabelInputContainer>
										</div>

										<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
											<LabelInputContainer>
												<Label htmlFor="city">
													City
												</Label>
												<Input
													id="city"
													placeholder="Your City"
													name="city"
													value={formData.city}
													onChange={handleChange}
													className={cn(
														"block w-full rounded-md border-gray-300 shadow-sm focus:border-[#005A8B] focus:ring-[#005A8B] sm:text-sm",
														formErrors.city &&
															"border-red-500 focus:border-red-500"
													)}
													// className="bg-gray-50/50 border-gray-200 focus-visible:ring-[#005A8B]"
												/>
												{formErrors.city && (
													<p className="text-red-500 text-sm mt-1">
														{formErrors.city}
													</p>
												)}
											</LabelInputContainer>
											<LabelInputContainer>
												<Label htmlFor="state">
													State
												</Label>
												<Input
													id="state"
													placeholder="Your State"
													name="state"
													value={formData.state}
													onChange={handleChange}
													className={cn(
														"block w-full rounded-md border-gray-300 shadow-sm focus:border-[#005A8B] focus:ring-[#005A8B] sm:text-sm",
														formErrors.state &&
															"border-red-500 focus:border-red-500"
													)}
													// className="bg-gray-50/50 border-gray-200 focus-visible:ring-[#005A8B]"
												/>
												{formErrors.state && (
													<p className="text-red-500 text-sm mt-1">
														{formErrors.state}
													</p>
												)}
											</LabelInputContainer>
											<LabelInputContainer>
												<Label htmlFor="country">
													Country
												</Label>
												<Input
													id="country"
													placeholder="Your Country"
													name="country"
													value={formData.country}
													onChange={handleChange}
													className={cn(
														"block w-full rounded-md border-gray-300 shadow-sm focus:border-[#005A8B] focus:ring-[#005A8B] sm:text-sm",
														formErrors.country &&
															"border-red-500 focus:border-red-500"
													)}
													// className="bg-gray-50/50 border-gray-200 focus-visible:ring-[#005A8B]"
												/>
												{formErrors.country && (
													<p className="text-red-500 text-sm mt-1">
														{formErrors.country}
													</p>
												)}
											</LabelInputContainer>
										</div>

										<LabelInputContainer>
											<Label htmlFor="message">
												Additional Message
											</Label>
											<Textarea
												id="message"
												placeholder="Tell us ..."
												name="additionalMessage"
												value={
													formData.additionalMessage
												}
												onChange={handleChange}
												className={cn(
													"block w-full rounded-md border-gray-300 shadow-sm focus:border-[#005A8B] focus:ring-[#005A8B] sm:text-sm min-h-[120px]",
													formErrors.additionalMessage &&
														"border-red-500 focus:border-red-500"
												)}
												// className="min-h-[120px] bg-gray-50/50 border-gray-200 focus-visible:ring-[#005A8B]"
											/>
											{formErrors.additionalMessage && (
												<p className="text-red-500 text-sm mt-1">
													{
														formErrors.additionalMessage
													}
												</p>
											)}
										</LabelInputContainer>

										<button
											className="w-full py-3 px-4 bg-gradient-to-r from-[#005A8B] to-[#008080] text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
											type="submit"
											disabled={isSubmitting}
										>
											{isSubmitting
												? "Sending..."
												: "Send Message"}
										</button>
									</form>
									<p className="text-sm text-gray-600 mt-6 text-center">
										By submitting this form, you agree to
										our{" "}
										<Link
											href="/privacy-policy"
											className="text-[#005A8B] hover:underline"
										>
											Privacy Policy
										</Link>{" "}
										and{" "}
										<Link
											href="/terms"
											className="text-[#005A8B] hover:underline"
										>
											Terms of Service
										</Link>
										.
									</p>
								</>
							)}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
