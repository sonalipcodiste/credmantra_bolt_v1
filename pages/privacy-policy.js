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
								Last updated: 21 May 2025
							</p>

							<div className="space-y-8">
								<section>
									<p className="text-text-medium leading-relaxed mb-4">
										We, Cred Solution Services (“
										<strong>we</strong>”, “
										<strong>us</strong>”, or “
										<strong>our”</strong>), are committed to
										protecting the privacy of your personal
										data. This Privacy Policy explains how
										we collect, use, disclose, and protect
										personal data when you use our website
										https://www.credmantra.org ("
										<strong>Website</strong>”) and our
										blockchain-based credential verification
										platform (“<strong>Platform</strong>”)
										for the purpose of various services,
										products, and content we provide
										(collectively “<strong>Services</strong>
										”) via any mobile, tablet, or internet
										connected device or otherwise use to
										access our Website and/or Platform. It
										is clarified that we maintain, operate,
										and own the above-said Platform and
										Website.
									</p>
									<p className="text-text-medium leading-relaxed mb-4">
										The term "<strong>User</strong>" for the
										purposes of this Privacy Policy shall
										mean You (or “<strong>Your</strong> or{" "}
										<strong>Yours</strong>”), in the
										capacity of an individual (in personal
										capacity or on behalf of an HUF, minor,
										proprietary firm or a Body of
										Individuals), an education
										institution/organisation, an
										institution, a guest user, browser and/
										or representative of a partnership firm
										or any entity, who visits, accesses,
										uses, downloads, deals with, avails
										Services or transacts through, the
										Platform and Website through your
										institution, education institution, body
										corporate, or your firm (collectively
										“organisations”). These organisations
										(the “<strong>Data Fiduciary</strong> or{" "}
										<strong>Data Controller</strong>”) are
										responsible for determining the extent
										of personal data collected from you and
										how it is used.
									</p>

									<p className="text-text-medium leading-relaxed mb-4">
										Based on the Services you avail or
										intend to avail, we collect data from
										you for the express purpose of meeting
										your needs in respect of the provision
										of the services. Upon visiting the
										Website and Platform, you agree that any
										information or data that you provide
										while availing the Services, through
										your Data Fiduciary, you hereby agree
										and acknowledge that you submit your
										information and data to us. Further, you
										confirm that you have read and reviewed
										this Privacy Policy and any other
										polices referenced herein and agree that
										we may process your data and information
										in accordance with this privacy policy.
									</p>

									<p className="text-text-medium leading-relaxed mb-4">
										All terms herein refer to the
										collection, storage, transmission, and
										processing of any information or data
										necessary to undertake the process of
										our assistance to you most
										appropriately, for the purpose of
										meeting your needs in respect of the
										provision of Services, in accordance
										with and subject to the governing law.
										If, for any reason, we believe that you
										have not complied with the Privacy
										Policy, Terms of Use, user undertakings
										and/or product-specific terms and
										conditions (the “
										<strong>
											other referenced policies
										</strong>
										”), we may, at our sole discretion,
										cancel or restrict your access to all or
										part of the Services and the Website and
										direct your data fiduciary to cancel
										your registration.
									</p>

									<h2 className="text-xl font-bold mb-4 text-primary-blue font-merriweather">
										1. Consent
									</h2>
									<p className="text-text-medium leading-relaxed mb-2">
										By accessing our Website and Platform,
										you acknowledge and confirm that you
										have either (i) completed 18 years of
										age; (ii) in the event that you are
										below 18 years old, you have adequate
										and lawful parental or guardian consent
										as prescribed under the law to avail the
										Services herein. You confirm that any
										information that you have provided that
										may describe you and your identity is
										true and complete.
									</p>

									<p className="text-text-medium leading-relaxed mb-2">
										By accessing our Website and Platform,
										and availing the Services provided
										therein, you agree and consent to the
										collection, transfer, use, storage,
										disclosure, and sharing of your personal
										data as collected by us in accordance
										with this policy and any other policies
										referenced herein. If you do not agree
										with this policy and the referenced
										policies, kindly do not access the
										Website and Platform and contact your
										respective Data Fiduciary. You further
										agree and confirm that the right to use
										the Website and Platform is personal to
										you, the User, and is not transferable
										to any other person or entity unless
										authorised by you or your Data
										Fiduciary.
									</p>

									<p className="text-text-medium leading-relaxed">
										For the purposes of the terms herein,
										the term “
										<strong>
											Personal Information or Personal
											Data
										</strong>
										” includes information about a person,
										whether true or not and whether recorded
										in a material form or not and
										information that relates to a natural
										person, which, either directly or
										indirectly, in combination with other
										information available or likely to be
										available with a body corporate, is
										capable of identifying such person. And
										the term “
										<strong>sensitive information</strong>”
										shall mean personal information that
										consists of information relating to
										passwords, financial information,
										information relating to an individual’s
										race, ethnicity, politics, religion,
										philosophy, membership of professional
										or trade associations or unions, sexual
										preferences or practices, criminal
										record, and health or genetic
										information.
									</p>
								</section>

								<section>
									<h2 className="text-xl font-bold mb-4 text-primary-blue font-merriweather">
										2. Our Role as a Data Processor
									</h2>
									<p className="text-text-medium leading-relaxed">
										Primarily, we act as a data processor
										for the personal data of individuals
										that Data Fiduciaries upload to the
										Platform. We provide the Platform for
										the issuance, management, and
										verification of blockchain-based
										credentials.
									</p>
								</section>

								<section>
									<h2 className="text-xl font-bold mb-4 text-primary-blue font-merriweather">
										3. What We Collect
									</h2>
									<p className="text-text-medium leading-relaxed mb-2">
										We do not have any control over the
										specific personal data uploaded by Data
										Fiduciaries to the Platform. This data
										may include name, degree information,
										duration of study, and other details
										necessary for generating certificates.
										We agree to keep all such information
										confidential and to use it only in the
										manner which would be beneficial to You.
										We consider our relationship with You as
										invaluable and strive to respect and
										safeguard your right to privacy as
										available under the law.
									</p>
									<p className="text-text-medium leading-relaxed mb-2">
										When you visit our Website to verify
										someone else’s certificate, we do not
										collect any personal data from you.
									</p>
									<p className="text-text-medium leading-relaxed mb-2">
										We may collect information from other
										users of our Website, such as
										representatives or affiliates of data
										controllers or our partners, when they
										interact with us through inquiries or
										for account setup. This information may
										include name, contact details, and
										communication data.
									</p>
									<p className="text-text-medium leading-relaxed">
										The information about the User collected
										by us is (a) information provided by
										Users through their Data Fiduciary, and
										(b) information automatically tracked
										while a User uses the Website and
										Platform, and (c) information generated
										while availing our Services including
										but not limited to transactional
										information and such other information
										for processing personal data.
									</p>
								</section>

								<section>
									<h2 className="text-xl font-bold mb-4 text-primary-blue font-merriweather">
										4. How We Use Your Data
									</h2>
									<p className="text-text-medium leading-relaxed mb-2">
										We use the data uploaded by Data
										Fiduciaries to generate and facilitate
										the verification of blockchain-based
										credentials.
									</p>
									<p className="text-text-medium leading-relaxed mb-2">
										We use information collected from
										website users to respond to inquiries.
									</p>
									<p className="text-text-medium leading-relaxed mb-2">
										We use contact information to
										communicate with Data Fiduciaries and
										their representatives and affiliates,
										our partners, and other users about our
										services, updates, and support.
									</p>
									<p className="text-text-medium leading-relaxed mb-2">
										We may use contact information to send
										marketing communications about our
										services. Users will have the option to
										opt out of receiving such
										communications.
									</p>
									<p className="text-text-medium leading-relaxed">
										While we use your data for the above
										purpose, any use of your data for any
										secondary purpose shall be directly
										related to the primary purposes
										mentioned hereinabove. Notwithstanding
										the foregoing, we may use or disclose
										any personal data as required or
										authorised under applicable laws.
									</p>
								</section>

								<section>
									<h2 className="text-xl font-bold mb-4 text-primary-blue font-merriweather">
										5. Data Sharing
									</h2>
									<p className="text-text-medium leading-relaxed mb-2">
										We may share personal data with the
										following third-party service providers
										who assist us in providing our services.
										We will not disclose any personal data
										to third parties, except under the
										following circumstances:
									</p>
									<ul className="text-text-medium leading-relaxed list-[upper-roman] pl-6 space-y-2 mb-2">
										<li>
											We may use your personal information
											to improve our service to you and to
											keep you updated about our new
											products or information that may be
											of interest to you.
										</li>
										<li>
											We may disclose your personal
											information to companies that
											provide support services that assist
											us in our services to you and such
											disclosure would be limited to the
											performance of the specific service
											we have requested.
										</li>
										<li>
											We may also disclose information if
											required by law, court order, or
											other legal process, or to protect
											our rights or the rights of others.
										</li>
									</ul>
									<p className="text-text-medium leading-relaxed mb-2">
										Provided that nothing contained herein
										shall be deemed to restrict our right to
										make available any information as may be
										procured by us to such a third party as
										may be consented to by you in writing.
									</p>
									<p className="text-text-medium leading-relaxed">
										We will also ensure that your personal
										information is protected by a
										confidentiality agreement with third
										parties whenever it is disclosed to a
										third party, so as to enable such a
										third party to provide you with certain
										specified services. We respect your
										privacy and understand the sensitivity
										of the information. Hence, we are
										committed to protect it in all respects.
										Any personal information that we may
										share or use other than for the purposes
										mentioned under this policy shall be
										immediately notified to you, the user,
										and we shall request for your consent of
										the same.
									</p>
								</section>

								<section>
									<h2 className="text-xl font-bold mb-4 text-primary-blue font-merriweather">
										6. Data Security
									</h2>
									<p className="text-text-medium leading-relaxed mb-2">
										We implement reasonable security
										measures that are commercially available
										to protect personal data from
										unauthorised access, use, or disclosure.
										These measures include secure data
										transmission, database security,
										role-based access control, and proper
										authentication and authorisation for the
										REST API.
									</p>
									<p className="text-text-medium leading-relaxed ">
										However, no method of transmission over
										the Internet or electronic storage is
										entirely secure, and we cannot guarantee
										absolute security.
									</p>
								</section>

								<section>
									<h2 className="text-xl font-bold mb-4 text-primary-blue font-merriweather">
										7. Data Retention
									</h2>
									<p className="text-text-medium leading-relaxed ">
										We will retain personal data for as long
										as necessary to provide our services,
										comply with all applicable laws and
										regulations, regulatory bodies, resolve
										disputes, and enforce our agreements.
									</p>
								</section>

								<section>
									<h2 className="text-xl font-bold mb-4 text-primary-blue font-merriweather">
										8. Your Rights
									</h2>
									<p className="text-text-medium leading-relaxed mb-2">
										You may have certain rights regarding
										your personal data depending on
										applicable data protection laws, such as
										the right to access, modify, delete, or
										restrict processing of your data. If you
										are a learner or student whose
										credentials have been issued using our
										Platform, please get in touch with the
										issuing organisation to exercise your
										rights, as they are the Data Controllers
										or Data Fiduciaries.
									</p>
									<p className="text-text-medium leading-relaxed ">
										Further, you should be very careful in
										handling your personal data and strictly
										ensure that you disclose it for a lawful
										purpose.
									</p>
								</section>

								<section>
									<h2 className="text-xl font-bold mb-4 text-primary-blue font-merriweather">
										9. Cookies and web beacons
									</h2>

									<p className="text-text-medium leading-relaxed ">
										To enhance your experience with our
										Website and Platform, many of our web
										pages use "<strong>cookies</strong>." In
										addition, "<strong>web beacons</strong>"
										or “<strong>.gifs</strong>” are small
										pieces of code placed on a web page to
										monitor your website behaviour and
										collect data about the visitors viewing
										a web page. We use cookies and web
										beacons to understand site usage and to
										improve the content and offerings on our
										sites. We may also use cookies to offer
										you products, programs, or services on
										the Website and the Platform. By
										accessing the website, you agree to use
										cookies and web beacons in agreement
										with our Privacy Policy.
									</p>
								</section>

								<section>
									<h2 className="text-xl font-bold mb-4 text-primary-blue font-merriweather">
										10. Changes to this Privacy Policy
									</h2>
									<p className="text-text-medium leading-relaxed mb-2">
										We may update this Privacy Policy from
										time to time. We will publish any
										changes on our Website and update the
										“Last Updated” date. By using this
										website and the Platform, you agree to
										be bound by any such revisions and
										should therefore periodically visit our
										website to determine the most current
										version of the Privacy Policy to which
										you are bound. Changes could be made by
										us after the first posting to the
										Website, and you will be deemed to have
										accepted any change if you continue to
										access the website after that time.
										Certain provisions of this Policy may be
										superseded by expressly designated legal
										notices or terms located on particular
										pages on the website.
									</p>
									<p className="text-text-medium leading-relaxed ">
										Hence, you are requested to check this
										page from time to time to ensure that
										you are aware of the changes and your
										protection under this Policy.
									</p>
								</section>

								<section>
									<h2 className="text-xl font-bold mb-4 text-primary-blue font-merriweather">
										11. Governing Law
									</h2>

									<p className="text-text-medium leading-relaxed ">
										Any dispute or claim arising out of or
										in connection with this Policy or any of
										the referenced policies or their subject
										matter shall be governed by and
										construed in accordance with the laws of
										India. Any legal suit, action, or
										proceeding arising from or relating to
										these Terms or the Website shall be
										instituted exclusively in the courts at
										Indore, Madhya Pradesh.
									</p>
								</section>

								<section>
									<h2 className="text-xl font-bold mb-4 text-primary-blue font-merriweather">
										12. Contact Us
									</h2>
									<p className="text-text-medium leading-relaxed mb-2">
										Any notice or communication required
										shall be in writing and emailed to {""}
										<a
											href="mailto:info@credmantra.org"
											className="text-primary-blue hover:underline"
										>
											info@credmantra.org
										</a>
										. For emails sent to this email address,
										the date and time of receipt shall be
										the time and date when your email enters
										our mail servers.
									</p>
									<p className="text-text-medium leading-relaxed ">
										For any queries related to this Privacy
										Policy or to exercise your rights under
										applicable data protection laws, please
										get in touch with us using the following
										details.
									</p>
								</section>

								<section>
									<h2 className="text-xl font-bold mb-4 text-primary-blue font-merriweather">
										Data Protection Officer
									</h2>
									<p lassName="text-text-medium leading-relaxed mb-2">
										Mr Ketan Bindra
									</p>

									<p className="text-text-medium leading-relaxed">
										Address: 102, Balaji Corporate, Near
										Curewell Hospital, Palasia, Indore,
										Madhya Pradesh – 452001
									</p>
									<p className="text-text-medium leading-relaxed">
										Email: {""}
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
