import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import "../styles/globals.css";
import Head from "next/head";
import WhatsAppButton from "../components/WhatsAppButton";

function MyApp({ Component, pageProps, router }) {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// Simulate a loading delay
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 500);

		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			<Head>
				<title>
					Cred Mantra | Blockchain-Based Credentials Verification
				</title>
				<meta
					name="description"
					content="Empower your organisation with blockchain-based digital credentials that are secure, verifiable, and future-proof."
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<meta name="theme-color" content="#005A8B" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="icon" type="image/png" href="/favicon.png" />
				<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
			</Head>
			<AnimatePresence mode="wait">
				{isLoading ? (
					<div className="fixed inset-0 flex items-center justify-center bg-background-light z-50">
						<div className="w-16 h-16 border-4 border-primary-blue border-t-transparent rounded-full animate-spin"></div>
					</div>
				) : (
					<>
						<Component {...pageProps} key={router.route} />
						<WhatsAppButton />
					</>
				)}
			</AnimatePresence>
		</>
	);
}

export default MyApp;
