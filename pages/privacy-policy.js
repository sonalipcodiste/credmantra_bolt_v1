import { motion } from "framer-motion";
import Layout from "../components/Layout";
import Head from "next/head";

const PrivacyPolicy = () => {
	return (
		<Layout>
			<Head>
				<title>Privacy Policy | Cred Mantra</title>
				<meta
					name="description"
					content="Cred Mantra privacy policy and data processing information."
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
							Privacy Policy
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
										Cred Mantra is committed to protecting
										your privacy. This Privacy Policy
										outlines how we collect, use, and
										safeguard your information.
									</p>
								</section>

								<section>
									<h2 className="text-xl font-bold mb-4 text-primary-blue font-merriweather">
										2. Information Collection
									</h2>
									<ul className="text-text-medium leading-relaxed list-disc pl-6 space-y-2">
										<li>
											<span className="font-medium">
												Personal Information:
											</span>{" "}
											We collect personal information such
											as name, email address, and contact
											details when you register or
											interact with our platform.
										</li>
										<li>
											<span className="font-medium">
												Usage Data:
											</span>{" "}
											We gather data on how you interact
											with our services to improve user
											experience.
										</li>
									</ul>
								</section>

								<section>
									<h2 className="text-xl font-bold mb-4 text-primary-blue font-merriweather">
										3. Use of Information
									</h2>
									<p className="text-text-medium leading-relaxed mb-3">
										Your information is used to:
									</p>
									<ul className="text-text-medium leading-relaxed list-disc pl-6 space-y-2">
										<li>
											Provide and maintain our services.
										</li>
										<li>
											Communicate with you regarding
											updates or support.
										</li>
										<li>
											Enhance and personalize user
											experience.
										</li>
									</ul>
								</section>

								<section>
									<h2 className="text-xl font-bold mb-4 text-primary-blue font-merriweather">
										4. Data Sharing and Disclosure
									</h2>
									<p className="text-text-medium leading-relaxed mb-3">
										We do not sell or rent your personal
										information. We may share information
										with:
									</p>
									<ul className="text-text-medium leading-relaxed list-disc pl-6 space-y-2">
										<li>
											<span className="font-medium">
												Service Providers:
											</span>{" "}
											Trusted partners who assist in
											operating our platform.
										</li>
										<li>
											<span className="font-medium">
												Legal Requirements:
											</span>{" "}
											When required by law or to protect
											our rights.
										</li>
									</ul>
								</section>

								<section>
									<h2 className="text-xl font-bold mb-4 text-primary-blue font-merriweather">
										5. Data Security
									</h2>
									<p className="text-text-medium leading-relaxed">
										We implement robust security measures to
										protect your data from unauthorized
										access or disclosure.
									</p>
								</section>

								<section>
									<h2 className="text-xl font-bold mb-4 text-primary-blue font-merriweather">
										6. Your Rights
									</h2>
									<p className="text-text-medium leading-relaxed">
										You have the right to access, correct,
										or delete your personal information. To
										exercise these rights, contact us at{" "}
										<a
											href="mailto:info@credmantra.org"
											className="text-primary-blue hover:underline"
										>
											info@credmantra.org
										</a>
									</p>
								</section>

								<section>
									<h2 className="text-xl font-bold mb-4 text-primary-blue font-merriweather">
										7. Cookies and Tracking Technologies
									</h2>
									<p className="text-text-medium leading-relaxed">
										Our platform uses cookies to enhance
										user experience. You can control cookie
										preferences through your browser
										settings.
									</p>
								</section>

								<section>
									<h2 className="text-xl font-bold mb-4 text-primary-blue font-merriweather">
										8. Third-Party Links
									</h2>
									<p className="text-text-medium leading-relaxed">
										Cred Mantra may contain links to
										external sites. We are not responsible
										for the privacy practices of these third
										parties.
									</p>
								</section>

								<section>
									<h2 className="text-xl font-bold mb-4 text-primary-blue font-merriweather">
										9. Changes to This Privacy Policy
									</h2>
									<p className="text-text-medium leading-relaxed">
										We may update this policy periodically.
										We will notify users of significant
										changes and indicate the latest revision
										date.
									</p>
								</section>

								<section>
									<h2 className="text-xl font-bold mb-4 text-primary-blue font-merriweather">
										10. Contact Us
									</h2>
									<p className="text-text-medium leading-relaxed">
										For questions about this Privacy Policy,
										please contact us at{" "}
										<a
											href="mailto:info@credmantra.org"
											className="text-primary-blue hover:underline"
										>
											info@credmantra.org
										</a>
									</p>
								</section>
							</div>
						</div>

						<div className="bg-primary-gradient p-6 rounded-lg text-white text-center">
							<p className="text-lg font-medium">
								Your privacy is important to us. We only collect
								and process your information as described in
								this Privacy Policy.
							</p>
						</div>
					</motion.div>
				</div>
			</div>
		</Layout>
	);
};

export default PrivacyPolicy;
