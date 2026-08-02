# Portfolio Project Documentation

## Overview
A modern, responsive portfolio website built with React, featuring smooth animations, glass morphism effects, and a dark theme design. The project showcases a full-stack developer's skills, projects, and contact information.

## Tech Stack

### Core Framework
- **React 18.3.0** - UI library
- **React Router DOM 6.30.0** - Client-side routing
- **Vite 6.0.0** - Build tool and dev server

### Styling & UI
- **Tailwind CSS 4.0.0** - Utility-first CSS framework
- **Framer Motion 11.0.0** - Animation library
- **Lucide React 0.400.0** - Icon library

### Additional Dependencies
- **clean 4.0.2** - Utility library

## Project Structure

```
portfolio/
├── index.html              # HTML entry point
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── src/
│   ├── main.jsx           # React entry point
│   ├── App.jsx            # Main app component with routing
│   ├── index.css          # Global styles and Tailwind config
│   └── components/
│       ├── Navbar.jsx     # Navigation bar with mobile menu
│       ├── Hero.jsx       # Hero section with typing effect
│       ├── About.jsx      # About section with stats
│       ├── Skills.jsx     # Skills section with progress bars
│       ├── Projects.jsx   # Projects showcase
│       ├── Contact.jsx    # Contact form
│       └── Footer.jsx     # Footer with scroll-to-top
└── node_modules/          # Dependencies
```

## Component Breakdown

### App.jsx
- Main application component with React Router setup
- Mouse tracking effect for dynamic background gradient
- Smooth scroll on route changes
- Routes: `/`, `/about`, `/skills`, `/projects`, `/contact`

### Navbar.jsx
- Fixed navigation bar with glass morphism effect
- Responsive design with mobile menu
- Active route highlighting with animated underline
- Scroll-based background change (transparent → glass)

### Hero.jsx
- Landing section with typing animation ("Full Stack Developer")
- Availability status indicator
- Social media links (GitHub, LinkedIn, Twitter)
- Call-to-action buttons
- Animated floating elements with tech badges
- Gradient background with grid pattern

### About.jsx
- Personal introduction section
- Placeholder for profile photo
- Statistics display (Years Experience, Coffee, Projects, Location)
- Scroll-triggered animations using Framer Motion

### Skills.jsx
- Categorized skill display (Frontend, Backend, DevOps & Tools)
- Animated progress bars for skill levels
- Technology tags cloud
- Skills include: React, TypeScript, Vue.js, PostgreSQL, GraphQL, SpringBoot, Git, Linux, Firebase

### Projects.jsx
- Project showcase with grid layout
- Featured project highlighting
- Gradient backgrounds for project cards
- Technology tags per project
- GitHub and live demo links
- Current projects: E-Commerce Platform, Real Estate Platform, Hotel Management System

### Contact.jsx
- Contact information display (Email, Phone, Location)
- Functional contact form with validation
- Form submission feedback animation
- Glass morphism styling

### Footer.jsx
- Branding and navigation links
- Social media icons
- Copyright information
- Scroll-to-top button

## Design System

### Color Palette
- **Primary**: `#6366f1` (Indigo)
- **Primary Dark**: `#4f46e5`
- **Secondary**: `#ec4899` (Pink)
- **Dark Background**: `#0f172a` (Slate 900)
- **Dark Light**: `#1e293b` (Slate 800)

### Typography
- **Sans-serif**: Inter (Google Fonts)
- **Monospace**: JetBrains Mono (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800

### Custom CSS Classes
- `.gradient-text` - Gradient text effect
- `.glass` - Glass morphism with backdrop blur
- `.grid-pattern` - Radial gradient grid background
- `.animate-float` - Floating animation
- `.glow` - Pulsing glow effect

### Animations
- **Float**: Vertical movement (6s ease-in-out infinite)
- **Pulse Glow**: Box shadow animation (3s ease-in-out infinite)
- **Typing Effect**: Character-by-character text reveal
- **Scroll Animations**: Fade-in and slide-up on viewport entry

## Features

### Interactive Elements
- Mouse tracking gradient background
- Smooth scroll navigation
- Mobile-responsive hamburger menu
- Form submission with feedback
- Scroll-to-top button
- Hover effects on cards and buttons

### Performance Optimizations
- React.StrictMode enabled
- Lazy loading with React Router
- Optimized animations with Framer Motion
- Efficient re-renders with proper state management

### Accessibility
- Semantic HTML structure
- Proper heading hierarchy
- Keyboard navigation support
- Focus states on interactive elements

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## Configuration

### Vite Config
- React plugin for JSX transformation
- Tailwind CSS Vite plugin for styling

### Tailwind CSS Theme
- Custom font families
- Custom color variables
- Dark theme by default

## Contact Information
- **Email**: j3f.dev@gmail.com
- **Phone**: +254 759 063224
- **Location**: Nairobi, Kenya

## Notes
- Currently, only the Hero section is displayed on the home page (other sections are commented out in App.jsx)
- Social media links are placeholder links (#)
- Project GitHub and live demo links are placeholders
- Profile photo placeholder in About section
- Resume link in Footer is not yet implemented

## Future Enhancements
- Add actual project links and GitHub repositories
- Implement real social media links
- Add profile photo
- Create resume page
- Implement backend for contact form
- Add more projects to showcase
- Implement dark/light theme toggle
- Add blog section
