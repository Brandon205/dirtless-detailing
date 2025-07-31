import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Dirt-Less Detailing",
  description: "Our privacy policy and how we protect your personal information.",
  robots: {
    index: false,
    follow: false
  }
};

export default function PrivacyPolicy() {
  return (
    // <div className="min-h-screen bg-[#18181b] py-12">
    //   <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
    //     <div className="bg-[#27272a] shadow-sm rounded-lg overflow-hidden">
    //       <div className="px-6 py-8 sm:px-8 sm:py-12">
    <div className="py-24 w-screen bg-[#18181b]">
      <div className=" bg-[#27272a] py-4 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">Privacy Policy</h1>
          <div className="text-sm text-gray-100 space-y-1">
            <p>
              <strong>Effective Date:</strong> 1st January 2025
            </p>
            <p>
              <strong>Last Updated:</strong> 30th July 2025
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="">
          {/* Introduction */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Introduction</h2>
            <p className="text-gray-200 leading-relaxed">
              Dirt-Less Detailing is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your
              information when you visit our website or use our car detailing services.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Information We Collect</h2>

            <div className="mb-6">
              <h3 className="text-xl font-medium text-white mb-3">Personal Information</h3>
              <p className="text-gray-200 mb-3">We may collect the following personal information when you:</p>
              <ul className="list-disc pl-6 text-gray-200 space-y-1 mb-4">
                <li>Request a quote or book our services</li>
                <li>Contact us through our website or phone</li>
                <li>Subscribe to our newsletter or marketing communications</li>
              </ul>
              <p className="text-gray-200 mb-3">This information may include:</p>
              <ul className="list-disc pl-6 text-gray-200 space-y-1">
                <li>Name and contact information (email address, phone number, mailing address)</li>
                <li>Payment information (processed securely through third-party payment processors)</li>
                <li>Communication preferences and service history</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium text-white mb-3">Automatically Collected Information</h3>
              <p className="text-gray-200 mb-3">We may automatically collect certain information about your device and usage of our website, including:</p>
              <ul className="list-disc pl-6 text-gray-200 space-y-1">
                <li>IP address and browser type</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referring website information</li>
                <li>Device and browser settings</li>
              </ul>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">How We Use Your Information</h2>
            <p className="text-gray-200 mb-3">We use your information to:</p>
            <ul className="list-disc pl-6 text-gray-200 space-y-1">
              <li>Provide and improve our car detailing services</li>
              <li>Process bookings and communicate about appointments</li>
              <li>Send service reminders and follow-up communications</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Analyze website usage and improve our online experience</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          {/* Information Sharing */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Information Sharing and Disclosure</h2>

            <div className="mb-6">
              <h3 className="text-xl font-medium text-white mb-3">Third-Party Service Providers</h3>
              <p className="text-gray-200 mb-3">We share your information with trusted third-party service providers who assist us in:</p>
              <ul className="list-disc pl-6 text-gray-200 space-y-1 mb-4">
                <li>
                  <strong>Payment processing</strong> (credit card processors, payment gateways)
                </li>
                <li>
                  <strong>Communication services</strong> (email providers, SMS services)
                </li>
                <li>
                  <strong>Website analytics</strong> (Google Analytics and similar services)
                </li>
                <li>
                  <strong>Advertising and marketing measurement</strong> (Google Ads, Facebook Ads, and other advertising platforms)
                </li>
              </ul>

              <div className="bg-blue-900/50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                <p className="text-blue-300 font-medium mb-2">Important Notice About Advertising:</p>
                <p className="text-blue-200 text-sm">
                  We share customer information with third parties, including Google, Facebook, and other advertising platforms, to perform ad measurement
                  services on our behalf. This helps us understand the effectiveness of our advertising and improve our marketing efforts.
                </p>
              </div>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-medium text-white mb-3">Legal Requirements</h3>
              <p className="text-gray-200">
                We may disclose your information if required by law, court order, or government regulation, or to protect our rights, property, or safety.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-white mb-3">Business Transfers</h3>
              <p className="text-gray-200">
                In the event of a merger, acquisition, or sale of our business, your information may be transferred to the new owner.
              </p>
            </div>
          </section>

          {/* Consent and Rights */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Your Consent and Rights</h2>

            <div className="mb-6">
              <h3 className="text-xl font-medium text-white mb-3">Consent for Information Sharing</h3>
              <p className="text-gray-200">
                By using our services, you consent to our sharing of your information with third-party service providers for the purposes described in this
                policy, including advertising measurement services, where legally permissible.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-white mb-3">Your Rights</h3>
              <p className="text-gray-200 mb-3">Depending on your location, you may have the right to:</p>
              <ul className="list-disc pl-6 text-gray-200 space-y-1 mb-4">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to or restrict processing of your information</li>
                <li>Withdraw consent for marketing communications</li>
                <li>Request data portability</li>
              </ul>
              <p className="text-gray-200">To exercise these rights, please contact us using the information provided below.</p>
            </div>
          </section>

          {/* Data Security */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Data Security</h2>
            <p className="text-gray-200">
              We implement appropriate technical and organizational security measures to protect your information against unauthorized access, alteration,
              disclosure, or destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          {/* Data Retention */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Data Retention</h2>
            <p className="text-gray-200">
              We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations,
              resolve disputes, and enforce our agreements.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Children's Privacy</h2>
            <p className="text-gray-200">
              Our services are not intended for individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we
              discover that we have collected information from a child under 13, we will promptly delete such information.
            </p>
          </section>

          {/* International Data Transfers */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">International Data Transfers</h2>
            <p className="text-gray-200">
              If you are located outside the United States, please note that your information may be transferred to and processed in the United States, where
              data protection laws may differ from those in your country.
            </p>
          </section>

          {/* EU User Consent */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">EU User Consent (GDPR Compliance)</h2>
            <p className="text-gray-200 mb-3">
              For users in the European Union, we comply with the General Data Protection Regulation (GDPR) and obtain appropriate consent for:
            </p>
            <ul className="list-disc pl-6 text-gray-200 space-y-1 mb-4">
              <li>Processing your personal data</li>
              <li>Sharing information with third parties for advertising purposes</li>
              <li>Using cookies and tracking technologies</li>
              <li>Sending marketing communications</li>
            </ul>
            <p className="text-gray-200">You may withdraw your consent at any time by contacting us.</p>
          </section>

          {/* Cookies */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Cookies and Tracking Technologies</h2>
            <p className="text-gray-200 mb-3">Our website uses cookies and similar tracking technologies to:</p>
            <ul className="list-disc pl-6 text-gray-200 space-y-1 mb-4">
              <li>Remember your preferences and settings</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Provide targeted advertising</li>
              <li>Improve website functionality</li>
            </ul>
            <p className="text-gray-200">
              You can control cookie settings through your browser preferences. Please note that disabling cookies may affect website functionality.
            </p>
          </section>

          {/* Marketing Communications */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Marketing Communications</h2>
            <p className="text-gray-200 mb-3">With your consent, we may send you:</p>
            <ul className="list-disc pl-6 text-gray-200 space-y-1 mb-4">
              <li>Service reminders and appointment confirmations</li>
              <li>Promotional offers and special deals</li>
              <li>Company news and updates</li>
              <li>Customer satisfaction surveys</li>
            </ul>
            <p className="text-gray-200 mb-3">You can opt out of marketing communications at any time by:</p>
            <ul className="list-disc pl-6 text-gray-200 space-y-1">
              <li>Clicking the unsubscribe link in our emails</li>
              <li>Contacting us directly</li>
              <li>Updating your preferences in your account settings</li>
            </ul>
          </section>

          {/* Policy Updates */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Updates to This Policy</h2>
            <p className="text-gray-200 mb-3">We may update this Privacy Policy from time to time. We will notify you of any material changes by:</p>
            <ul className="list-disc pl-6 text-gray-200 space-y-1">
              <li>Posting the updated policy on our website</li>
              <li>Sending an email notification (if you have provided your email address)</li>
              <li>Displaying a notice on our website</li>
            </ul>
          </section>

          {/* Contact Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Contact Information</h2>
            <p className="text-gray-200 mb-4">If you have any questions about this Privacy Policy or our privacy practices, please contact us:</p>

            <div className="bg-blue-900/50 p-6 rounded-lg border border-blue-700/30">
              <div className="space-y-2 text-gray-200">
                <p>
                  <strong>Dirt-Less Detailing</strong>
                </p>
                <p>
                  Email:{" "}
                  <a href="mailto:brenden@dirtlessdetailing.com" className="text-blue-300 hover:text-blue-200 break-all">
                    brenden@dirtlessdetailing.com
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <a href="tel:253-252-9758" className="text-blue-300 hover:text-blue-200">
                    253-252-9758
                  </a>
                </p>
                <p>Address: [your-business-address]</p>
              </div>
            </div>
          </section>

          {/* Footer Message */}
          <section className="pt-6 border-t border-gray-600">
            <div className="bg-blue-900/50 p-6 rounded-lg border border-blue-700/30">
              <p className="text-blue-200 font-medium text-center">
                Your Privacy Matters: We are committed to protecting your privacy and handling your information responsibly. This policy is designed to be
                transparent about our practices and your rights regarding your personal information.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
