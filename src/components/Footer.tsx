import Link from "next/link";

const Footer = () => {
  const navigation = {
    company: [
      { name: "About", href: "/about" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "/contact" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookie-policy" },
    ],
  };

  return (
    <footer className="bg-gradient-to-b from-secondary-50 to-secondary-100 border-t border-secondary-200">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-6">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <img src="/logo.png" className="h-12" alt="RoboAnywhere" />
              </Link>
            </div>

            <p className="text-text-secondary text-lg leading-relaxed max-w-md mt-2">
              Automate your SEO, backlink, and domain management with the
              all-in-one platform for streamlining SEO tasks and enhancing
              backlink strategy.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-8 sm:gap-12">
              <div>
                <h3 className="text-base font-bold text-text-primary mb-6 flex items-center">
                  <div className="w-1 h-6 bg-gradient-to-b from-primary-600 to-accent-500 rounded-full mr-3"></div>
                  Company
                </h3>
                <ul className="space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-text-secondary hover:text-primary-600 transition-all duration-200 hover:translate-x-1 inline-block"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-base font-bold text-text-primary mb-6 flex items-center">
                  <div className="w-1 h-6 bg-gradient-to-b from-primary-600 to-accent-500 rounded-full mr-3"></div>
                  Legal
                </h3>
                <ul className="space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-text-secondary hover:text-primary-600 transition-all duration-200 hover:translate-x-1 inline-block"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-8 border-t border-secondary-200">
          <div className="text-center">
            <p className="text-text-secondary">
              &copy; 2024 RoboAnywhere. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
