export const metadata = {
  title: 'About - RoboAnywhere SEO Automation Platform',
  description: 'Learn about RoboAnywhere\'s mission to revolutionize SEO automation and backlink management. Meet our team and discover our technology stack.',
}

export default function About() {
  const team = [
    {
      name: 'Alex Thompson',
      role: 'CEO & Co-Founder',
      bio: 'Former SEO director at major tech companies with 10+ years of experience in search engine optimization and digital marketing strategy.',
      image: '/placeholder-user.jpg',
    },
    {
      name: 'Sarah Kim',
      role: 'CTO & Co-Founder',
      bio: 'Full-stack engineer with expertise in AI/ML and automation systems. Previously led engineering teams at fast-growing SaaS companies.',
      image: '/placeholder-user.jpg',
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Head of Product',
      bio: 'Product strategist with deep understanding of SEO workflows and user experience design. Former product manager at leading marketing platforms.',
      image: '/placeholder-user.jpg',
    },
    {
      name: 'Emily Chen',
      role: 'VP of Engineering',
      bio: 'Seasoned software architect specializing in scalable systems and data processing. Expert in building high-performance web applications.',
      image: '/placeholder-user.jpg',
    },
  ]

  const techStack = [
    {
      category: 'Frontend',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      description: 'Modern, responsive user interfaces built with the latest web technologies for optimal performance and user experience.',
      icon: (
        <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      category: 'Backend',
      technologies: ['Node.js', 'Python', 'PostgreSQL', 'Redis'],
      description: 'Robust backend infrastructure designed for scalability, reliability, and high-performance data processing.',
      icon: (
        <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
    },
    {
      category: 'Cloud & DevOps',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
      description: 'Cloud-native architecture with automated deployment pipelines and container orchestration for maximum reliability.',
      icon: (
        <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
    },
    {
      category: 'AI & Analytics',
      technologies: ['TensorFlow', 'scikit-learn', 'Apache Spark', 'Elasticsearch'],
      description: 'Advanced machine learning algorithms and big data processing for intelligent SEO insights and automation.',
      icon: (
        <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
  ]

  const values = [
    {
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible in SEO automation, leveraging cutting-edge technology to solve complex challenges.',
      icon: (
        <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Transparency',
      description: 'We believe in open communication, clear pricing, and honest reporting. Our clients always know exactly what they\'re getting.',
      icon: (
        <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
    {
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from product development to customer support, ensuring the highest quality experience.',
      icon: (
        <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
              About{' '}
              <span className="gradient-text">RoboAnywhere</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              We&apos;re on a mission to revolutionize SEO automation and make advanced backlink management accessible to businesses of all sizes.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              RoboAnywhere was founded with a simple yet powerful vision: to democratize advanced SEO automation and make it accessible to businesses of all sizes. We believe that every company, regardless of its resources, should have access to enterprise-grade SEO tools and backlink management capabilities.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              Our platform combines cutting-edge artificial intelligence with intuitive user experience design to create a solution that not only automates complex SEO tasks but also provides actionable insights that drive real business results.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              We&apos;re committed to continuous innovation, constantly evolving our platform to meet the changing needs of the SEO landscape and helping our clients stay ahead of the competition.
            </p>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-primary-50 rounded-lg mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-text-secondary">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience in SEO, software engineering, and product development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-24 h-24 bg-secondary-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-text-primary">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Our Technology Stack
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              We leverage the latest technologies to build a platform that&apos;s fast, reliable, and scalable.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {techStack.map((tech, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-secondary-200">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary-50 rounded-lg mr-4">
                    {tech.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary">
                    {tech.category}
                  </h3>
                </div>
                <p className="text-text-secondary mb-4 leading-relaxed">
                  {tech.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {tech.technologies.map((technology, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-primary-50 text-primary-600 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Why These Technologies?
            </h3>
            <div className="max-w-4xl mx-auto text-lg text-text-secondary leading-relaxed">
              <p className="mb-4">
                We carefully selected each technology in our stack based on three key criteria: performance, scalability, and developer experience. Next.js provides us with server-side rendering capabilities and excellent SEO optimization, while Tailwind CSS enables rapid, consistent UI development.
              </p>
              <p className="mb-4">
                Our backend infrastructure is built on proven technologies like Node.js and Python, which offer excellent performance for data processing and API development. PostgreSQL provides robust data persistence, while Redis handles caching and real-time features.
              </p>
              <p>
                Cloud-native deployment on AWS ensures global availability and automatic scaling, while our AI/ML stack powered by TensorFlow and scikit-learn delivers intelligent insights and automation capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Our Vision for the Future
          </h2>
          <p className="text-xl text-primary-100 mb-8 leading-relaxed">
            We envision a future where SEO automation is not just a luxury for large enterprises, but a standard tool available to every business. Our goal is to continue pushing the boundaries of what&apos;s possible with AI-driven SEO optimization, making it easier than ever for businesses to achieve their digital marketing goals.
          </p>
          <p className="text-lg text-primary-100 mb-8">
            Join us on this journey as we revolutionize the way businesses approach SEO and backlink management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/demo"
              className="bg-white text-primary-600 hover:bg-secondary-50 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl text-lg"
            >
              Experience RoboAnywhere
            </a>
            <a
              href="/contact"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
