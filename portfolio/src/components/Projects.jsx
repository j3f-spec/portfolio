import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Github, Star } from 'lucide-react'

const projects=[
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'SpringBoot'],
    github: '#',
    live: '#',
    featured: true,
  },
  {
    title: 'Real Estate Platform',
    description: 'Property listing and management system with virtual tours and mortgage calculator.',
    tags: ['React', 'Node.js', 'MongoDB', 'AWS'],
    github: '#',
    live: '#',
    featured: false,
  },
  {
    title: 'Hotel Management System',
    description: 'Hotel Management operations tracking application system.',
    tags: ['React Native', 'Firebase', 'Redux', 'Spring'],
    github: '#',
    live: '#',
    featured: false,
  },
]
const project = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    github: '#',
    live: '#',
    featured: true,
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates, drag-and-drop, and team workspaces.',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'Socket.io'],
    github: '#',
    live: '#',
    featured: true,
  },
  {
    title: 'AI Content Generator',
    description: 'AI-powered content creation platform with custom trained models and SEO optimization.',
    tags: ['Python', 'FastAPI', 'React', 'OpenAI'],
    github: '#',
    live: '#',
    featured: false,
  },
  {
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media managers with scheduling and reporting features.',
    tags: ['Vue.js', 'Django', 'Redis', 'Chart.js'],
    github: '#',
    live: '#',
    featured: false,
  },
  {
    title: 'Real Estate Platform',
    description: 'Property listing and management system with virtual tours and mortgage calculator.',
    tags: ['React', 'Node.js', 'MongoDB', 'AWS'],
    github: '#',
    live: '#',
    featured: false,
  },
  {
    title: 'Health & Fitness App',
    description: 'Mobile-first fitness tracking application with workout plans and nutrition logging.',
    tags: ['React Native', 'Firebase', 'Redux', 'HealthKit'],
    github: '#',
    live: '#',
    featured: false,
  },
  
]

const gradients = [
  'from-primary/30 to-secondary/30',
  'from-secondary/30 to-primary/30',
  'from-blue-500/30 to-primary/30',
  'from-purple-500/30 to-secondary/30',
  'from-emerald-500/30 to-primary/30',
  'from-orange-500/30 to-secondary/30',
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-2 block">MY WORK</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden glass hover:border-primary/50 transition-all duration-300"
            >
              <div className={`h-48 bg-gradient-to-br ${gradients[index]} flex items-center justify-center relative overflow-hidden`}>
                {project.featured && (
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium flex items-center gap-1">
                    <Star className="w-3 h-3" /> Featured
                  </div>
                )}
                <div className="text-6xl font-bold text-white/20 group-hover:scale-110 transition-transform duration-500">
                  {project.title[0]}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded-md bg-slate-800 text-xs text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="flex-1 py-2 rounded-lg glass text-sm text-center text-slate-300 hover:text-white hover:border-primary/50 transition-all flex items-center justify-center gap-2"
                  >
                    <Github className="w-4 h-4" /> Code
                  </a>
                  <a
                    href={project.live}
                    className="flex-1 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-white text-sm text-center font-medium hover:shadow-lg hover:shadow-primary/25 transition-all flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" /> Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
