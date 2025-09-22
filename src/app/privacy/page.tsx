export const metadata = {
  title: 'Privacy Policy - RoboAnywhere',
  description: 'Learn how RoboAnywhere collects, uses, and protects your personal information and data.',
}

export default function PrivacyPolicy() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-text-secondary">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-text-secondary mt-4">
            Last updated: January 1, 2024
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg">
          <div className="space-y-8 text-text-secondary">
            
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">1. Information We Collect</h2>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-text-primary">Personal Information</h3>
                <p>
                  We collect information you provide directly to us, such as when you create an account, 
                  request a demo, contact us, or use our services. This may include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name and contact information (email address, phone number)</li>
                  <li>Company information and job title</li>
                  <li>Account credentials and preferences</li>
                  <li>Payment information (processed securely through third-party providers)</li>
                  <li>Communications with us, including support requests</li>
                </ul>

                <h3 className="text-xl font-semibold text-text-primary mt-6">Usage Information</h3>
                <p>
                  We automatically collect information about how you use our services, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Log data (IP addresses, browser type, pages visited)</li>
                  <li>Device information (device type, operating system)</li>
                  <li>Usage patterns and feature interactions</li>
                  <li>Performance and analytics data</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices, updates, and support messages</li>
                <li>Respond to your comments, questions, and customer service requests</li>
                <li>Communicate about products, services, and promotional offers</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">3. Information Sharing and Disclosure</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties, 
                except in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Service Providers:</strong> We may share information with third-party vendors who perform services on our behalf</li>
                <li><strong>Legal Requirements:</strong> We may disclose information if required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> Information may be transferred in connection with a merger, acquisition, or sale of assets</li>
                <li><strong>Consent:</strong> We may share information with your explicit consent</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">4. Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your 
                personal information against unauthorized access, alteration, disclosure, or destruction. 
                These measures include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication measures</li>
                <li>Employee training on data protection</li>
                <li>Incident response procedures</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">5. Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to fulfill the purposes 
                outlined in this privacy policy, unless a longer retention period is required or 
                permitted by law. We will delete or anonymize your information when it is no longer needed.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">6. Your Rights and Choices</h2>
              <p>Depending on your location, you may have certain rights regarding your personal information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request a copy of your information in a portable format</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us at privacy@roboanywhere.com.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">7. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to collect and use personal information. 
                For more detailed information about our use of cookies, please see our 
                <a href="/cookie-policy" className="text-primary-600 hover:underline"> Cookie Policy</a>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">8. International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than your own. 
                We ensure that such transfers comply with applicable data protection laws and implement 
                appropriate safeguards to protect your information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">9. Children&apos;s Privacy</h2>
              <p>
                Our services are not intended for children under the age of 13. We do not knowingly 
                collect personal information from children under 13. If we become aware that we have 
                collected such information, we will delete it promptly.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">10. Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. We will notify you of any changes 
                by posting the new policy on this page and updating the &ldquo;Last updated&rdquo; date. We encourage 
                you to review this policy periodically.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">11. Contact Us</h2>
              <p>
                If you have any questions about this privacy policy or our privacy practices, 
                please contact us at:
              </p>
              <div className="bg-secondary-50 p-6 rounded-lg mt-4">
                <p><strong>Email:</strong> privacy@roboanywhere.com</p>
                <p><strong>Address:</strong> RoboAnywhere Inc., 123 Tech Street, San Francisco, CA 94105</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
