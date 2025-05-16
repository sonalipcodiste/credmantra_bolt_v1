import { motion } from "framer-motion";
import Head from "next/head";
import Header from "../components/Header";
import NewHero from "../components/NewHero";
import Stats from "../components/Stats";
import FeatureCards from "../components/FeatureCards";
import Beneficiaries from "../components/Beneficiaries";
import HowItWorks from "../components/HowItWorks";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import GetStarted from "../components/GetStarted";
import Footer from "../components/Footer";

export default function Home() {
	return (
		<div>
			<Head>
				<title>
					Cred Mantra | Blockchain-Based Credentials Verification
				</title>
				<meta
					name="description"
					content="Empower your organisation with blockchain-based digital credentials that are secure, verifiable, and future-proof. Issue, manage, and verify credentials effortlessly."
				/>
				<link rel="icon" href="/favicon.ico" />
				{/* Open Graph / Facebook */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://credmantra.com/" />
				<meta
					property="og:title"
					content="Cred Mantra | Blockchain-Based Credentials Verification"
				/>
				<meta
					property="og:description"
					content="Secure, verifiable, and future-proof blockchain-based digital credentials."
				/>
				<meta
					property="og:image"
					content="https://credmantra.com/og-image.jpg"
				/>
				{/* Twitter */}
				<meta property="twitter:card" content="summary_large_image" />
				<meta
					property="twitter:url"
					content="https://credmantra.com/"
				/>
				<meta
					property="twitter:title"
					content="Cred Mantra | Blockchain-Based Credentials Verification"
				/>
				<meta
					property="twitter:description"
					content="Secure, verifiable, and future-proof blockchain-based digital credentials."
				/>
				<meta
					property="twitter:image"
					content="https://credmantra.com/twitter-image.jpg"
				/>
			</Head>

			<Header />

			<main>
				<NewHero />
				<Stats />
				<FeatureCards />
				<Beneficiaries />
				<HowItWorks />
				<About />
				<Testimonials />
				<GetStarted />
			</main>

			<Footer />
		</div>
	);
}
