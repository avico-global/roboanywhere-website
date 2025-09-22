export const metadata = {
  title: 'Cookie Policy - RoboAnywhere',
  description: 'Learn about how RoboAnywhere uses cookies and similar tracking technologies.',
}

export default function CookiePolicy() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
            Cookie Policy
          </h1>
          <p className="text-xl text-text-secondary">
            This policy explains how we use cookies and similar technologies on our website and services.
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
              <h2 className="text-2xl font-bold text-text-primary mb-4">1. What Are Cookies</h2>
              <p>
                Cookies are small text files that are placed on your computer or mobile device when you 
                visit a website. They are widely used to make websites work more efficiently and provide 
                a better user experience.
              </p>
              <p>
                Cookies allow websites to remember your preferences, analyze how you use the site, 
                and provide personalized content and advertisements.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">2. How We Use Cookies</h2>
              <p>
                RoboAnywhere uses cookies and similar tracking technologies for several purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Essential Functions:</strong> To enable core website functionality</li>
                <li><strong>User Experience:</strong> To remember your preferences and settings</li>
                <li><strong>Analytics:</strong> To understand how visitors use our website</li>
                <li><strong>Marketing:</strong> To deliver relevant advertisements and content</li>
                <li><strong>Security:</strong> To protect against fraud and enhance security</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">3. Types of Cookies We Use</h2>
              
              <div className="space-y-6">
                <div className="bg-secondary-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-text-primary mb-3">Essential Cookies</h3>
                  <p>
                    These cookies are necessary for the website to function properly. They enable basic 
                    functions like page navigation, access to secure areas, and user authentication.
                  </p>
                  <p className="mt-2"><strong>Examples:</strong></p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Session management cookies</li>
                    <li>Authentication cookies</li>
                    <li>Security cookies</li>
                    <li>Load balancing cookies</li>
                  </ul>
                  <p className="mt-2 text-sm"><strong>Storage Duration:</strong> Session or up to 1 year</p>
                </div>

                <div className="bg-primary-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-text-primary mb-3">Performance Cookies</h3>
                  <p>
                    These cookies collect information about how visitors use our website, such as which 
                    pages are visited most often and if users get error messages.
                  </p>
                  <p className="mt-2"><strong>Examples:</strong></p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Google Analytics cookies</li>
                    <li>Page load time measurement</li>
                    <li>Error tracking cookies</li>
                    <li>A/B testing cookies</li>
                  </ul>
                  <p className="mt-2 text-sm"><strong>Storage Duration:</strong> Up to 2 years</p>
                </div>

                <div className="bg-accent-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-text-primary mb-3">Functionality Cookies</h3>
                  <p>
                    These cookies allow the website to remember choices you make and provide enhanced, 
                    more personal features.
                  </p>
                  <p className="mt-2"><strong>Examples:</strong></p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Language preference cookies</li>
                    <li>Theme and display settings</li>
                    <li>Form data retention</li>
                    <li>User interface preferences</li>
                  </ul>
                  <p className="mt-2 text-sm"><strong>Storage Duration:</strong> Up to 1 year</p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-text-primary mb-3">Marketing Cookies</h3>
                  <p>
                    These cookies are used to track visitors across websites to display relevant 
                    advertisements and measure campaign effectiveness.
                  </p>
                  <p className="mt-2"><strong>Examples:</strong></p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Google Ads cookies</li>
                    <li>Facebook Pixel</li>
                    <li>LinkedIn Insight Tag</li>
                    <li>Retargeting cookies</li>
                  </ul>
                  <p className="mt-2 text-sm"><strong>Storage Duration:</strong> Up to 2 years</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">4. Third-Party Cookies</h2>
              <p>
                We work with third-party service providers who may place cookies on your device. 
                These include:
              </p>
              
              <div className="overflow-x-auto mt-4">
                <table className="min-w-full border border-secondary-300">
                  <thead className="bg-secondary-100">
                    <tr>
                      <th className="border border-secondary-300 px-4 py-2 text-left font-semibold">Service</th>
                      <th className="border border-secondary-300 px-4 py-2 text-left font-semibold">Purpose</th>
                      <th className="border border-secondary-300 px-4 py-2 text-left font-semibold">Privacy Policy</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-secondary-300 px-4 py-2">Google Analytics</td>
                      <td className="border border-secondary-300 px-4 py-2">Website analytics</td>
                      <td className="border border-secondary-300 px-4 py-2">
                        <a href="https://policies.google.com/privacy" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">
                          Google Privacy Policy
                        </a>
                      </td>
                    </tr>
                    <tr className="bg-secondary-50">
                      <td className="border border-secondary-300 px-4 py-2">Google Ads</td>
                      <td className="border border-secondary-300 px-4 py-2">Advertising and remarketing</td>
                      <td className="border border-secondary-300 px-4 py-2">
                        <a href="https://policies.google.com/privacy" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">
                          Google Privacy Policy
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-secondary-300 px-4 py-2">Facebook Pixel</td>
                      <td className="border border-secondary-300 px-4 py-2">Social media advertising</td>
                      <td className="border border-secondary-300 px-4 py-2">
                        <a href="https://www.facebook.com/privacy/policy/" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">
                          Facebook Privacy Policy
                        </a>
                      </td>
                    </tr>
                    <tr className="bg-secondary-50">
                      <td className="border border-secondary-300 px-4 py-2">LinkedIn Insight</td>
                      <td className="border border-secondary-300 px-4 py-2">Professional network advertising</td>
                      <td className="border border-secondary-300 px-4 py-2">
                        <a href="https://www.linkedin.com/legal/privacy-policy" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">
                          LinkedIn Privacy Policy
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">5. Managing Your Cookie Preferences</h2>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-text-primary">Browser Settings</h3>
                <p>
                  Most web browsers allow you to control cookies through their settings. You can:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>View what cookies are stored on your device</li>
                  <li>Delete cookies individually or all at once</li>
                  <li>Block third-party cookies</li>
                  <li>Block cookies from specific sites</li>
                  <li>Block all cookies (may affect website functionality)</li>
                </ul>

                <h3 className="text-xl font-semibold text-text-primary mt-6">Browser-Specific Instructions</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <a href="https://support.google.com/chrome/answer/95647" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">
                      Google Chrome
                    </a>
                  </li>
                  <li>
                    <a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">
                      Mozilla Firefox
                    </a>
                  </li>
                  <li>
                    <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">
                      Safari
                    </a>
                  </li>
                  <li>
                    <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">
                      Microsoft Edge
                    </a>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-text-primary mt-6">Opt-Out Tools</h3>
                <p>You can also opt out of certain tracking cookies using these industry tools:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <a href="https://optout.aboutads.info/" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">
                      Digital Advertising Alliance Opt-Out
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youronlinechoices.com/" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">
                      Your Online Choices (EU)
                    </a>
                  </li>
                  <li>
                    <a href="https://tools.google.com/dlpage/gaoptout" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">
                      Google Analytics Opt-Out
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">6. Mobile Devices</h2>
              <p>
                Mobile devices may use advertising identifiers instead of cookies. You can manage these through your device settings:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>iOS:</strong> Settings → Privacy & Security → Apple Advertising → Personalized Ads</li>
                <li><strong>Android:</strong> Settings → Google → Ads → Reset advertising ID or Opt out of Ads Personalization</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">7. Do Not Track Signals</h2>
              <p>
                Some browsers include a &ldquo;Do Not Track&rdquo; feature. Currently, there is no industry standard 
                for how to respond to these signals. We do not currently respond to Do Not Track signals, 
                but we are monitoring industry developments in this area.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">8. Updates to This Policy</h2>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in our practices 
                or for other operational, legal, or regulatory reasons. We will notify you of any 
                material changes by updating the &ldquo;Last updated&rdquo; date at the top of this policy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">9. Contact Us</h2>
              <p>
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
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
