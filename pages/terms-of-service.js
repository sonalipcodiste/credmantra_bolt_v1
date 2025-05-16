import { motion } from "framer-motion";
import Layout from "../components/Layout";
import Head from "next/head";

const TermsOfService = () => {
	return (
		<Layout>
			<Head>
				<title>Terms of Service | Cred Mantra</title>
				<meta
					name="description"
					content="Cred Mantra terms of service and legal information."
				/>
			</Head>

			<div className="pt-32 pb-20 bg-background-light">
				<div className="container-center">
					<motion.div
						className="max-w-4xl mx-auto"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						<h1 className="text-3xl md:text-4xl font-bold mb-6 gradient-text text-center font-merriweather">
							Terms of Service (ToS)
						</h1>

						<div className="bg-white rounded-xl shadow-md p-8 mb-8">
							<p className="text-primary-blue font-medium mb-8 text-center">
								Effective Date: 15 Jan 2025
							</p>

							<div className="space-y-8">
								<section>
									<h2 className="text-xl font-bold mb-4 text-primary-blue font-merriweather">
										1. Introduction
									</h2>
									<p className="text-text-medium leading-relaxed">
										Welcome to Cred Mantra. By accessing or
										using our platform, you agree to comply
										with and be bound by these Terms of
										Service. If you do not agree with these
										terms, please do not use our services.
									</p>
								</section>

								<section>
									<h2 className="text-xl font-bold mb-4 text-primary-blue font-merriweather">
										2. Services Provided
									</h2>
									<p className="text-text-medium leading-relaxed">
										Cred Mantra offers a digital
										certification issuance platform
										utilizing blockchain technology,
										enabling users to create, issue, and
										verify digital certificates securely.
									</p>
								</section>

								<section>
									<h2 className="text-xl font-bold mb-4 text-primary-blue font-merriweather">
										3. User Responsibilities
									</h2>
									<ul className="text-text-medium leading-relaxed list-disc pl-6 space-y-2">
										<li>
											<span className="font-medium">
												Account Registration:
											</span>{" "}
											Users must provide accurate and
											complete information during
											registration and keep their account
											information updated.
										</li>
										<li>
											<span className="font-medium">
												Compliance:
											</span>{" "}
											Users agree to use Cred Mantra's
											services in compliance with all
											applicable laws and regulations.
										</li>
										<li>
											<span className="font-medium">
												Prohibited Activities:
											</span>{" "}
											Users shall not engage in activities
											that are harmful, fraudulent, or
											violate the rights of others.
										</li>
									</ul>
								</section>

								<section>
									<h2 className="text-xl font-bold mb-4 text-primary-blue font-merriweather">
										4. Fees and Payments
									</h2>
									<p className="text-text-medium leading-relaxed">
										Details regarding subscription plans,
										fees, and payment terms will be provided
										during the service agreement process.
									</p>
								</section>

								<section>
									<h2 className="text-xl font-bold mb-4 text-primary-blue font-merriweather">
										5. Termination
									</h2>
									<p className="text-text-medium leading-relaxed">
										Cred Mantra reserves the right to
										suspend or terminate user accounts that
										violate these Terms of Service or engage
										in unauthorized activities.
									</p>
								</section>

								<section>
									<h2 className="text-xl font-bold mb-4 text-primary-blue font-merriweather">
										6. Limitation of Liability
									</h2>
									<p className="text-text-medium leading-relaxed">
										Cred Mantra is not liable for any
										indirect, incidental, or consequential
										damages arising from the use of our
										services.
									</p>
								</section>

								<section>
									<h2 className="text-xl font-bold mb-4 text-primary-blue font-merriweather">
										7. Changes to Terms
									</h2>
									<p className="text-text-medium leading-relaxed">
										We may update these Terms of Service
										periodically. Continued use of the
										platform after changes indicates
										acceptance of the new terms.
									</p>
								</section>

								<section>
									<h2 className="text-xl font-bold mb-4 text-primary-blue font-merriweather">
										8. Contact Information
									</h2>
									<p className="text-text-medium leading-relaxed">
										For any questions regarding these Terms,
										please contact us at{" "}
										<a
											href="mailto:support@credmantra.com"
											className="text-primary-blue hover:underline"
										>
											support@credmantra.com
										</a>
										.
									</p>
								</section>
							</div>
						</div>

						<div className="bg-primary-gradient p-6 rounded-lg text-white text-center">
							<p className="text-lg font-medium">
								By using our platform, you acknowledge that you
								have read, understood, and agree to be bound by
								these Terms of Service.
							</p>
						</div>
					</motion.div>
				</div>
			</div>
		</Layout>
	);
};

export default TermsOfService;
