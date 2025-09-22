import Link from "next/link";

export const metadata = {
  title: "Features - RoboAnywhere SEO Automation Platform",
  description:
    "Discover powerful SEO automation features including backlink management, advanced analytics, task automation, and real-time monitoring.",
};

export default function Features() {
  const dashboardMockups = {
    userManagement: (
      <div className="bg-white rounded-lg shadow-lg p-4 w-full h-64">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">
            User Management
          </h3>
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center space-x-3 p-2 bg-gray-50 rounded">
            <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
              JD
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-800">John Doe</div>
              <div className="text-xs text-gray-500">
                Admin • john@company.com
              </div>
            </div>
            <div className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
              Active
            </div>
          </div>
          <div className="flex items-center space-x-3 p-2 bg-gray-50 rounded">
            <div className="w-8 h-8 bg-accent-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
              SM
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-800">
                Sarah Miller
              </div>
              <div className="text-xs text-gray-500">
                Editor • sarah@company.com
              </div>
            </div>
            <div className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
              Active
            </div>
          </div>
          <div className="flex items-center space-x-3 p-2 bg-gray-50 rounded">
            <div className="w-8 h-8 bg-secondary-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
              MJ
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-800">
                Mike Johnson
              </div>
              <div className="text-xs text-gray-500">
                Viewer • mike@company.com
              </div>
            </div>
            <div className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">
              Pending
            </div>
          </div>
        </div>
        <div className="mt-4 flex justify-between text-xs text-gray-500">
          <span>3 of 10 users</span>
          <span>Role permissions managed</span>
        </div>
      </div>
    ),
    backlinkReporting: (
      <div className="bg-white rounded-lg shadow-lg p-4 w-full h-64">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">
            Backlink Analytics
          </h3>
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="bg-primary-50 p-3 rounded-lg text-center">
            <div className="text-2xl font-bold text-primary-600">1,247</div>
            <div className="text-xs text-gray-600">Total Backlinks</div>
          </div>
          <div className="bg-accent-50 p-3 rounded-lg text-center">
            <div className="text-2xl font-bold text-accent-600">89</div>
            <div className="text-xs text-gray-600">High Quality</div>
          </div>
          <div className="bg-secondary-50 p-3 rounded-lg text-center">
            <div className="text-2xl font-bold text-secondary-600">67.2</div>
            <div className="text-xs text-gray-600">Avg Domain Auth</div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">techcrunch.com</span>
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
              DA: 95
            </span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">forbes.com</span>
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
              DA: 92
            </span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">entrepreneur.com</span>
            <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">
              DA: 78
            </span>
          </div>
        </div>
        <div className="mt-3 h-8 bg-gradient-to-r from-primary-200 via-accent-200 to-secondary-200 rounded"></div>
      </div>
    ),
    taskAutomation: (
      <div className="bg-white rounded-lg shadow-lg p-4 w-full h-64">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">
            Task Automation
          </h3>
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex items-center space-x-3 p-3 bg-green-50 border-l-4 border-green-400 rounded">
            <div className="w-4 h-4 bg-green-400 rounded-full"></div>
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-800">
                Weekly SEO Audit
              </div>
              <div className="text-xs text-gray-500">
                Automated • Every Monday 9:00 AM
              </div>
            </div>
            <div className="text-xs text-green-600 font-medium">Running</div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-blue-50 border-l-4 border-blue-400 rounded">
            <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-800">
                Backlink Outreach
              </div>
              <div className="text-xs text-gray-500">
                Batch process • 50 prospects
              </div>
            </div>
            <div className="text-xs text-blue-600 font-medium">Scheduled</div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded">
            <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-800">
                Content Analysis
              </div>
              <div className="text-xs text-gray-500">
                Priority: High • 12 pages
              </div>
            </div>
            <div className="text-xs text-yellow-600 font-medium">
              In Progress
            </div>
          </div>
        </div>
        <div className="mt-4 flex justify-between text-xs text-gray-500">
          <span>15 active automations</span>
          <span>92% success rate</span>
        </div>
      </div>
    ),
    seoAnalytics: (
      <div className="bg-white rounded-lg shadow-lg p-4 w-full h-64">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">
            SEO Analytics Dashboard
          </h3>
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-3 rounded-lg text-white">
            <div className="text-lg font-bold">2,847</div>
            <div className="text-xs opacity-90">Organic Traffic</div>
            <div className="text-xs opacity-75">↑ 23% this month</div>
          </div>
          <div className="bg-gradient-to-r from-accent-500 to-accent-600 p-3 rounded-lg text-white">
            <div className="text-lg font-bold">156</div>
            <div className="text-xs opacity-90">Keywords Ranking</div>
            <div className="text-xs opacity-75">↑ 12 new rankings</div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600">SEO Score</span>
            <div className="flex items-center space-x-2">
              <div className="w-16 h-2 bg-gray-200 rounded-full">
                <div className="w-12 h-2 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-green-600 font-medium">85/100</span>
            </div>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600">Page Speed</span>
            <div className="flex items-center space-x-2">
              <div className="w-16 h-2 bg-gray-200 rounded-full">
                <div className="w-14 h-2 bg-yellow-500 rounded-full"></div>
              </div>
              <span className="text-yellow-600 font-medium">78/100</span>
            </div>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600">Mobile Friendly</span>
            <div className="flex items-center space-x-2">
              <div className="w-16 h-2 bg-gray-200 rounded-full">
                <div className="w-15 h-2 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-green-600 font-medium">92/100</span>
            </div>
          </div>
        </div>
      </div>
    ),
  };

  const mainFeatures = [
    {
      title: "User Management",
      description:
        "Complete user management system with role-based permissions and comprehensive user tracking.",
      features: [
        "Role-based access control",
        "Team collaboration tools",
        "User activity tracking",
        "Permission management",
        "Multi-team support",
      ],
      mockupKey: "userManagement",
      icon: (
        <svg
          className="w-12 h-12 text-primary-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
          />
        </svg>
      ),
    },
    {
      title: "Backlink Reporting",
      description:
        "Advanced backlink analysis with data-driven insights, comprehensive backlink types analysis, and content performance tracking.",
      features: [
        "Comprehensive backlink analysis",
        "Link quality assessment",
        "Competitor backlink research",
        "Content performance metrics",
        "Historical data tracking",
      ],
      mockupKey: "backlinkReporting",
      icon: (
        <svg
          className="w-12 h-12 text-primary-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
          />
        </svg>
      ),
    },
    {
      title: "Task Automation",
      description:
        "Streamline your workflow with batch task assignments, automated scheduling, and real-time progress tracking.",
      features: [
        "Batch task assignments",
        "Automated workflow triggers",
        "Priority-based scheduling",
        "Real-time progress tracking",
        "Custom automation rules",
      ],
      mockupKey: "taskAutomation",
      icon: (
        <svg
          className="w-12 h-12 text-primary-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
        </svg>
      ),
    },
    {
      title: "SEO Analytics",
      description:
        "In-depth SEO reports and analytics for data-driven decision making and strategic optimization.",
      features: [
        "Comprehensive SEO reports",
        "Keyword ranking tracking",
        "Traffic analysis",
        "Conversion tracking",
        "Competitive analysis",
      ],
      mockupKey: "seoAnalytics",
      icon: (
        <svg
          className="w-12 h-12 text-primary-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
              Powerful Features for{" "}
              <span className="gradient-text">SEO Success</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
              Discover how RoboAnywhere&apos;s comprehensive feature set can
              revolutionize your SEO workflow and drive better results for your
              business.
            </p>
            <Link
              href="/demo"
              className="btn-cta text-lg px-8 py-4 inline-flex items-center"
            >
              Request a Demo
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-text-primary mb-6">
            The Importance of Effective Backlink Management
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            In today&apos;s competitive digital landscape, effective backlink
            management and SEO optimization are crucial for success.
            RoboAnywhere provides the tools and automation you need to stay
            ahead of the competition, improve your search rankings, and
            streamline your SEO processes for maximum efficiency and results.
          </p>
        </div>
      </section>

      {/* Feature Details */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Platform Features
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Everything you need to automate and optimize your SEO strategy in
              one comprehensive platform.
            </p>
          </div>

          <div className="space-y-20">
            {mainFeatures.map((feature, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-12`}
              >
                <div className="flex-1">
                  <div className="bg-white p-8 rounded-xl shadow-lg">
                    <div className="flex items-center mb-6">
                      <div className="flex items-center justify-center w-16 h-16 bg-primary-50 rounded-lg mr-4">
                        {feature.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-text-primary">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-text-secondary mb-6 text-lg leading-relaxed">
                      {feature.description}
                    </p>
                    <ul className="space-y-3">
                      {feature.features.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <svg
                            className="w-5 h-5 text-accent-500 mt-0.5 mr-3 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-text-secondary">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-xl p-4 h-64 flex items-center justify-center">
                    {
                      dashboardMockups[
                        feature.mockupKey as keyof typeof dashboardMockups
                      ]
                    }
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Experience These Features?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Start your free trial today and see how RoboAnywhere can transform
            your SEO workflow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo"
              className="bg-white text-primary-600 hover:bg-secondary-50 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl text-lg"
            >
              Start Free Trial
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
