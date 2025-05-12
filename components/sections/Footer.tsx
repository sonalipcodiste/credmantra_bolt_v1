"use client";

import Link from "next/link";
import { Shield, Twitter, Linkedin, Facebook, Instagram } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";

interface SocialLinkProps {
	href: string;
	icon: React.ReactNode;
	label: string;
}

const SocialLink = ({ href, icon, label }: SocialLinkProps) => {
	const ref = useRef<HTMLDivElement>(null);
	const mouseX = useMotionValue(Infinity);

	const distance = useTransform(mouseX, (val) => {
		const bounds = ref.current?.getBoundingClientRect() ?? {
			x: 0,
			width: 0,
		};
		return val - bounds.x - bounds.width / 2;
	});

	const widthTransform = useTransform(distance, [-100, 0, 100], [30, 50, 30]);
	const heightTransform = useTransform(
		distance,
		[-100, 0, 100],
		[30, 50, 30]
	);

	const width = useSpring(widthTransform, {
		mass: 0.1,
		stiffness: 150,
		damping: 12,
	});

	const height = useSpring(heightTransform, {
		mass: 0.1,
		stiffness: 150,
		damping: 12,
	});

	const [hovered, setHovered] = useState(false);

	return (
		<motion.div
			ref={ref}
			onMouseMove={(e) => mouseX.set(e.pageX)}
			onMouseLeave={() => mouseX.set(Infinity)}
		>
			<Link href={href} target="_blank" rel="noopener noreferrer">
				<motion.div
					style={{ width, height }}
					onMouseEnter={() => setHovered(true)}
					onMouseLeave={() => setHovered(false)}
					className="relative flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
				>
					<motion.div
						className="text-gray-600 hover:text-[#005A8B] transition-colors"
						style={{ scale: hovered ? 1.2 : 1 }}
					>
						{icon}
					</motion.div>
					{hovered && (
						<motion.div
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: -30 }}
							exit={{ opacity: 0, y: 10 }}
							className="absolute whitespace-nowrap text-sm bg-gray-800 text-white px-2 py-1 rounded"
						>
							{label}
						</motion.div>
					)}
				</motion.div>
			</Link>
		</motion.div>
	);
};

const Footer = () => {
	return (
		<footer className="bg-white text-gray-800">
			<div className="container mx-auto px-4">
				<div className="py-8">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<div className="flex items-center gap-3">
							<Link href="/" className="flex items-center">
								<img
									src="/CredMantraLogo.png"
									alt="CredMantra"
									className="h-10"
								/>
							</Link>
						</div>

						<div className="flex flex-col items-end gap-2 mt-4 md:mt-0">
							<div className="text-sm text-right text-gray-600">
								Quick Links
							</div>
							<Link
								href="/privacy-policy"
								className="text-gray-600 hover:text-gray-900 transition-colors"
							>
								Privacy Policy
							</Link>
							<Link
								href="#"
								className="text-gray-600 hover:text-gray-900 transition-colors"
							>
								Terms of Service
							</Link>
						</div>
					</div>

					<div className="flex justify-center mt-8 min-h-[60px]">
						<div className="flex items-center gap-6">
							<SocialLink
								href="https://facebook.com/credmantra"
								icon={<Facebook className="h-5 w-5" />}
								label="Follow us on Facebook"
							/>
							<SocialLink
								href="https://instagram.com/credmantra"
								icon={<Instagram className="h-5 w-5" />}
								label="Follow us on Instagram"
							/>
							<SocialLink
								href="https://twitter.com/credmantra"
								icon={<Twitter className="h-5 w-5" />}
								label="Follow us on Twitter"
							/>
							<SocialLink
								href="https://linkedin.com/company/credmantra"
								icon={<Linkedin className="h-5 w-5" />}
								label="Connect on LinkedIn"
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="border-t border-gray-100">
				<div className="container mx-auto px-4 py-4">
					<p className="text-sm text-gray-600 text-center">
						© {new Date().getFullYear()} CredMantra. All rights
						reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;