export const metadata = {
  title: 'Terms of Service - RoboAnywhere',
  description: 'Read the terms and conditions for using RoboAnywhere SEO automation platform.',
}

export default function TermsOfService() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-text-secondary">
            These terms govern your use of RoboAnywhere and our services. Please read them carefully.
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
              <h2 className="text-2xl font-bold text-text-primary mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using RoboAnywhere (&ldquo;Service&rdquo;), you agree to be bound by these Terms of Service 
                (&ldquo;Terms&rdquo;). If you disagree with any part of these terms, you may not access the Service.
              </p>
              <p>
                These Terms apply to all visitors, users, and others who access or use the Service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">2. Description of Service</h2>
              <p>
                RoboAnywhere is a comprehensive SEO automation platform that provides:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Backlink management and analysis tools</li>
                <li>SEO analytics and reporting</li>
                <li>Task automation and workflow management</li>
                <li>User management and collaboration features</li>
                <li>API access and integrations</li>
              </ul>
              <p>
                We reserve the right to modify, suspend, or discontinue the Service at any time 
                without notice or liability.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">3. User Accounts</h2>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-text-primary">Account Creation</h3>
                <p>
                  To access certain features of the Service, you must register for an account. 
                  You agree to provide accurate, current, and complete information during registration 
                  and to update such information as necessary.
                </p>
                
                <h3 className="text-xl font-semibold text-text-primary">Account Security</h3>
                <p>
                  You are responsible for safeguarding your account credentials and for all activities 
                  that occur under your account. You must notify us immediately of any unauthorized 
                  use of your account.
                </p>
                
                <h3 className="text-xl font-semibold text-text-primary">Account Termination</h3>
                <p>
                  We may terminate or suspend your account at any time for violation of these Terms 
                  or for any other reason at our sole discretion.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">4. Acceptable Use</h2>
              <p>You agree not to use the Service to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Transmit harmful, offensive, or objectionable content</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt the Service</li>
                <li>Use automated means to access the Service without permission</li>
                <li>Reverse engineer or attempt to extract source code</li>
                <li>Use the Service for competitive analysis or to build competing products</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">5. Subscription and Payment</h2>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-text-primary">Subscription Plans</h3>
                <p>
                  We offer various subscription plans with different features and usage limits. 
                  Current pricing and plan details are available on our website.
                </p>
                
                <h3 className="text-xl font-semibold text-text-primary">Payment Terms</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Subscription fees are billed in advance on a monthly or annual basis</li>
                  <li>All fees are non-refundable except as expressly stated</li>
                  <li>We may change our fees with 30 days&apos; notice</li>
                  <li>Failure to pay may result in account suspension or termination</li>
                </ul>
                
                <h3 className="text-xl font-semibold text-text-primary">Free Trial</h3>
                <p>
                  We may offer free trial periods. At the end of the trial, your subscription 
                  will automatically begin unless you cancel before the trial expires.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">6. Intellectual Property Rights</h2>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-text-primary">Our Rights</h3>
                <p>
                  The Service and its original content, features, and functionality are owned by 
                  RoboAnywhere and are protected by international copyright, trademark, patent, 
                  trade secret, and other intellectual property laws.
                </p>
                
                <h3 className="text-xl font-semibold text-text-primary">Your Content</h3>
                <p>
                  You retain ownership of any content you submit to the Service. By submitting content, 
                  you grant us a worldwide, non-exclusive license to use, reproduce, and display such 
                  content solely for the purpose of providing the Service.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">7. Data and Privacy</h2>
              <p>
                Your privacy is important to us. Our collection and use of personal information 
                is governed by our <a href="/privacy" className="text-primary-600 hover:underline">Privacy Policy</a>, 
                which is incorporated into these Terms by reference.
              </p>
              <p>
                You are responsible for ensuring that any data you provide or process through 
                the Service complies with applicable data protection laws.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">8. Service Availability</h2>
              <p>
                While we strive to provide reliable service, we do not guarantee that the Service 
                will be available at all times. The Service may be subject to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Scheduled maintenance and updates</li>
                <li>Unscheduled downtime due to technical issues</li>
                <li>Service interruptions beyond our control</li>
              </ul>
              <p>
                We will make reasonable efforts to provide advance notice of scheduled maintenance.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">9. Disclaimers</h2>
              <p>
                THE SERVICE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT WARRANTIES OF ANY KIND, 
                WHETHER EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE</li>
                <li>NON-INFRINGEMENT OF THIRD-PARTY RIGHTS</li>
                <li>ACCURACY, COMPLETENESS, OR RELIABILITY OF CONTENT</li>
                <li>UNINTERRUPTED OR ERROR-FREE SERVICE</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">10. Limitation of Liability</h2>
              <p>
                IN NO EVENT SHALL ROBOANYWHERE BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, 
                CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, 
                DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
              </p>
              <p>
                OUR TOTAL LIABILITY FOR ALL CLAIMS RELATED TO THE SERVICE SHALL NOT EXCEED THE 
                AMOUNT YOU PAID US IN THE 12 MONTHS PRECEDING THE CLAIM.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">11. Indemnification</h2>
              <p>
                You agree to defend, indemnify, and hold harmless RoboAnywhere and its officers, 
                directors, employees, and agents from and against any claims, liabilities, damages, 
                losses, and expenses arising out of or in any way connected with your use of the 
                Service or violation of these Terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">12. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of 
                the State of California, without regard to its conflict of law provisions.
              </p>
              <p>
                Any disputes arising under these Terms shall be subject to the exclusive 
                jurisdiction of the courts located in San Francisco, California.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">13. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will notify users of 
                material changes by email or through the Service. Your continued use of the Service 
                after such changes constitutes acceptance of the new Terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">14. Contact Information</h2>
              <p>
                If you have any questions about these Terms, please contact us:
              </p>
              <div className="bg-secondary-50 p-6 rounded-lg mt-4">
                <p><strong>Email:</strong> legal@roboanywhere.com</p>
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
