import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/animations";
import useInView from "../hooks/useInView";

const testimonialData = [
	{
		id: 1,
		name: "Priya Sharma",
		location: "India",
		image: "/assets/testimonials/priya.svg",
		quote: "Blockchain-verified credentials reduced our verification time by 80% while improving security.",
		role: "Director of Digital Initiatives",
	},
	{
		id: 2,
		name: "Michael Thompson",
		location: "United States",
		image: "/assets/testimonials/michael.svg",
		quote: "Students now share credentials instantly with employers while maintaining complete data ownership.",
		role: "Academic Dean",
	},
	{
		id: 3,
		name: "Thabo Ndlovu",
		location: "South Africa",
		image: "/assets/testimonials/thabo.svg",
		quote: "Our graduates showcase achievements globally without document fraud or verification delays.",
		role: "Chief Operating Officer",
	},
	{
		id: 4,
		name: "Ananya Patel",
		location: "India",
		image: "/assets/testimonials/ananya.svg",
		quote: "Blockchain verification adds a level of trust impossible with traditional paper certificates.",
		role: "Head of Certifications",
	},
	{
		id: 5,
		name: "David Miller",
		location: "United States",
		image: "/assets/testimonials/david.svg",
		quote: "We've eliminated credential fraud completely with impressive ROI in cost savings and reputation.",
		role: "VP of Academic Affairs",
	},
	{
		id: 6,
		name: "Lerato Moloi",
		location: "South Africa",
		image: "/assets/testimonials/lerato.svg",
		quote: "The analytics dashboard provides valuable insights for improving our program offerings.",
		role: "Director of Student Success",
	},
	{
		id: 7,
		name: "Rajesh Kumar",
		location: "India",
		image: "/assets/testimonials/default-avatar.svg",
		quote: "Our certification body has seen a 95% reduction in verification queries since implementing Cred Mantra.",
		role: "Certification Authority",
	},
];

// Marquee animation component for testimonials
const TestimonialMarquee = ({ items, direction = "left", speed = 35 }) => {
	const marqueeRef = useRef(null);

	useEffect(() => {
		const marqueeElement = marqueeRef.current;
		if (!marqueeElement) return;

		// Clone testimonials for seamless loop
		const original = marqueeElement.querySelector(".marquee-content");
		const clone = original.cloneNode(true);
		marqueeElement.appendChild(clone);

		// Calculate animation duration based on content width and desired speed
		const contentWidth = original.offsetWidth;
		const duration = contentWidth / speed;

		// Apply animation
		const elements = marqueeElement.querySelectorAll(".marquee-content");
		elements.forEach((el) => {
			el.style.animationDuration = `${duration}s`;
			el.style.animationDirection =
				direction === "right" ? "reverse" : "normal";
		});
	}, [direction, speed]);

	return (
		<div
			ref={marqueeRef}
			className="marquee-container overflow-hidden whitespace-nowrap relative"
		>
			<div className="marquee-content inline-block animate-marquee align-top">
				{items}
			</div>
		</div>
	);
};

const TestimonialCard = ({ testimonial }) => {
	return (
		<div className="inline-block w-96 h-64 p-6 mx-4 my-6 bg-white rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100 hover:border-primary-blue/20 align-top">
			<div className="flex items-center mb-4">
				<div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-primary-blue shadow-md">
					<img
						src={testimonial.image}
						alt={testimonial.name}
						className="w-full h-full object-cover"
						onError={(e) => {
							e.target.onerror = null;
							e.target.src =
								"/assets/testimonials/default-avatar.svg";
						}}
					/>
				</div>
				<div>
					<h4 className="font-satoshi-bold text-lg text-gray-800">
						{testimonial.name}
					</h4>
					<p className="font-satoshi-medium text-sm text-primary-blue">
						{testimonial.location}
					</p>
					<p className="text-xs text-gray-500 mt-1 font-satoshi-medium">
						{testimonial.role}
					</p>
				</div>
			</div>
			<div className="bg-gray-50 p-4 rounded-lg relative w-full h-28 flex items-center">
				<div className="absolute top-0 left-6 transform -translate-y-1/2 w-4 h-4 bg-gray-50 rotate-45"></div>
				<div className="w-full">
					<p className="text-gray-600 italic text-sm whitespace-normal word-wrap break-word hyphens-auto">
						"{testimonial.quote}"
					</p>
				</div>
			</div>
		</div>
	);
};

export default function Testimonials() {
	const ref = useRef(null);
	const isInView = useInView(ref, { threshold: 0.1 });

	return (
		<section
			id="testimonials"
			className="py-20 bg-gradient-to-b from-light-blue-50 to-white overflow-hidden"
		>
			<div className="container mx-auto px-4 mb-12">
				<motion.div
					ref={ref}
					variants={fadeIn}
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					className="text-center mb-10"
				>
					<h2 className="text-4xl md:text-5xl font-merriweather font-bold mb-4 text-primary-blue">
						What Our Users Say
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Here's what organisations around the world have to say
						about their experience with Cred Mantra.
					</p>
				</motion.div>
			</div>

			{/* Single row marquee */}
			<div>
				<TestimonialMarquee
					direction="left"
					speed={20}
					items={testimonialData.map((testimonial) => (
						<TestimonialCard
							key={testimonial.id}
							testimonial={testimonial}
						/>
					))}
				/>
			</div>
		</section>
	);
}
