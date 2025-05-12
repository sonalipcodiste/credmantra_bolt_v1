"use client";

import { motion } from "framer-motion";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-[#F6FCFF] pt-24 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-[#005A8B]">Privacy Policy</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-3 text-[#005A8B]">1. Introduction</h2>
              <p className="text-gray-600">
                CredMantra is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-[#005A8B]">2. Information Collection</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Personal Information:</h3>
                  <p className="text-gray-600">
                    We collect personal information such as name, email address, and contact details when you register or interact with our platform.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Usage Data:</h3>
                  <p className="text-gray-600">
                    We gather data on how you interact with our services to improve user experience.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-[#005A8B]">3. Use of Information</h2>
              <p className="text-gray-600 mb-3">Your information is used to:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Provide and maintain our services.</li>
                <li>Communicate with you regarding updates or support.</li>
                <li>Enhance and personalize user experience.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-[#005A8B]">4. Data Sharing and Disclosure</h2>
              <p className="text-gray-600 mb-3">
                We do not sell or rent your personal information. We may share information with:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Service Providers: Trusted partners who assist in operating our platform.</li>
                <li>Legal Requirements: When required by law or to protect our rights.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-[#005A8B]">5. Data Security</h2>
              <p className="text-gray-600">
                We implement robust security measures to protect your data from unauthorized access or disclosure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-[#005A8B]">6. Your Rights</h2>
              <p className="text-gray-600">
                You have the right to access, correct, or delete your personal information. To exercise these rights, contact us at{" "}
                <a href="mailto:info@credmantra.org" className="text-[#005A8B] hover:underline">
                  info@credmantra.org
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-[#005A8B]">7. Cookies and Tracking Technologies</h2>
              <p className="text-gray-600">
                Our platform uses cookies to enhance user experience. You can control cookie preferences through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-[#005A8B]">8. Third-Party Links</h2>
              <p className="text-gray-600">
                CredMantra may contain links to external sites. We are not responsible for the privacy practices of these third parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-[#005A8B]">9. Changes to This Privacy Policy</h2>
              <p className="text-gray-600">
                We may update this policy periodically. We will notify users of significant changes and indicate the latest revision date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-[#005A8B]">10. Contact Us</h2>
              <p className="text-gray-600">
                For questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:info@credmantra.org" className="text-[#005A8B] hover:underline">
                  info@credmantra.org
                </a>
              </p>
            </section>

            <div className="text-sm text-gray-500 pt-8">
              <p>Effective Date: 15 Jan 2025</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicyPage;