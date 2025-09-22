# RoboAnywhere - SEO Automation Platform

A modern, responsive website for RoboAnywhere, the all-in-one platform for streamlining SEO tasks and enhancing backlink strategy.

## 🚀 Features

- **Modern Design**: Clean, professional interface with a cohesive color scheme
- **Responsive Layout**: Optimized for all devices and screen sizes
- **SEO Optimized**: Built with Next.js for excellent SEO performance
- **Interactive Components**: Contact forms, demo requests, and user interactions
- **Performance Focused**: Fast loading times and optimized user experience

## 🎨 Design System

### Color Scheme
- **Primary Blue**: #1D4ED8 - Trust, professionalism, and tech
- **Light Gray**: #F3F4F6 - Clean, minimalist backgrounds
- **Accent Green**: #10B981 - Buttons, CTAs, and highlights
- **Dark Gray**: #1F2937 - Readable body text
- **CTA Blue**: #2563EB - Call-to-action buttons

### Typography
- **Primary Font**: Geist Sans (modern, clean)
- **Monospace Font**: Geist Mono (code and technical content)

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── about/          # About page
│   ├── contact/        # Contact page
│   ├── demo/           # Demo request page
│   ├── features/       # Features page
│   ├── login/          # Login page
│   ├── pricing/        # Pricing page
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Homepage
├── components/         # Reusable components
│   ├── Header.tsx      # Navigation header
│   └── Footer.tsx      # Site footer
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Deployment**: Vercel-ready

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📄 Pages Overview

### Homepage
- Hero section with compelling value proposition
- Key features showcase
- "How it Works" process explanation
- Call-to-action sections

### Features Page
- Detailed feature descriptions
- User testimonials
- Feature screenshots (placeholders included)
- Benefits explanations

### Pricing Page
- Three-tier pricing structure (Starter, Pro, Enterprise)
- Feature comparison table
- FAQ section
- Clear call-to-action buttons

### About Page
- Company mission and vision
- Team member profiles
- Technology stack showcase
- Company values

### Contact Page
- Contact form with validation
- Company contact information
- Office hours
- Map placeholder for office location

### Demo & Login Pages
- Demo request form with lead qualification
- Professional login interface
- Social authentication options (UI only)

## 🎯 Key Features Implemented

- ✅ Responsive design for all screen sizes
- ✅ Modern gradient backgrounds and animations
- ✅ Interactive forms with loading states
- ✅ SEO-optimized meta tags and structure
- ✅ Professional color scheme and typography
- ✅ Accessible navigation and components
- ✅ Clean, maintainable code structure

## 🔧 Customization

The project uses CSS custom properties and Tailwind configuration for easy customization:

- Colors can be modified in `tailwind.config.ts`
- Global styles are in `src/app/globals.css`
- Component styles use Tailwind utility classes

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

The project is ready for deployment on Vercel:

```bash
npm run build
npm run start
```

## 📞 Contact

For questions about this implementation:
- Email: hello@roboanywhere.com
- Phone: +1 (555) 123-4567

---

Built with ❤️ using Next.js and Tailwind CSS