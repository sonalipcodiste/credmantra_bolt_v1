"use client";

import { motion } from "framer-motion";

const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen bg-[#F6FCFF] pt-24 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-[#005A8B]">Terms of Service</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-3 text-[#005A8B]">1. Introduction</h2>
              <p className="text-gray-600">
                Welcome to CredMantra. By accessing or using our platform, you agree to comply with and be bound by these Terms of Service. If you do not agree with these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-[#005A8B]">2. Services Provided</h2>
              <p className="text-gray-600">
                CredMantra offers a digital certification issuance platform utilizing blockchain technology, enabling users to create, issue, and verify digital certificates securely.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-[#005A8B]">3. User Responsibilities</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Account Registration:</h3>
                  <p className="text-gray-600">
                    Users must provide accurate and complete information during registration and keep their account information updated.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Compliance:</h3>
                  <p className="text-gray-600">
                    Users agree to use CredMantra's services in compliance with all applicable laws and regulations.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Prohibited Activities:</h3>
                  <p className="text-gray-600">
                    Users shall not engage in activities that are harmful, fraudulent, or violate the rights of others.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-[#005A8B]">4. Fees and Payments</h2>
              <p className="text-gray-600">
                Details regarding subscription plans, fees, and payment terms will be provided during the service agreement process.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-[#005A8B]">5. Termination</h2>
              <p className="text-gray-600">
                CredMantra reserves the right to suspend or terminate user accounts that violate these Terms of Service or engage in unauthorized activities.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-[#005A8B]">6. Limitation of Liability</h2>
              <p className="text-gray-600">
                CredMantra is not liable for any indirect, incidental, or consequential damages arising from the use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-[#005A8B]">7. Changes to Terms</h2>
              <p className="text-gray-600">
                We may update these Terms of Service periodically. Continued use of the platform after changes indicates acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-[#005A8B]">8. Contact Information</h2>
              <p className="text-gray-600">
                For any questions regarding these Terms, please contact us at{" "}
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

export default TermsOfServicePage;