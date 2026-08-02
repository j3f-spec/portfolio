import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Phone, MapPin, Github, Linkedin, Download, Calendar, GraduationCap, Briefcase } from 'lucide-react'

const experience = [
  {
    title: 'Full Stack Developer',
    company: 'Tech Company',
    period: '2025 - Present',
    description: [
      'Developed and maintained web applications using React and Node.js',
      'Implemented RESTful APIs and integrated with PostgreSQL databases',
      'Collaborated with cross-functional teams to deliver high-quality software',
      'Optimized application performance, reducing load times by 40%',
    ],
  },
  {
    title: 'Junior Developer',
    company: 'Startup Inc',
    period: '2022 - 2025',
    description: [
      'Built responsive user interfaces with React and Tailwind CSS',
      'Assisted in backend development using SpringBoot and Java',
      'Participated in code reviews and agile development processes',
      'Contributed to the development of e-commerce platform features',
    ],
  },
]

const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Technical University of Mombasa',
    period: '2023 - ',
    details: 'Ongoing',
  },
]

const skills = {
  frontend: ['React', 'Next.js', 'TypeScript', 'Vue.js', 'Tailwind CSS'],
  backend: ['Node.js', 'SpringBoot', 'Java', 'PostgreSQL', 'GraphQL'],
  tools: ['Git', 'Docker', 'Linux', 'CI/CD', 'Firebase'],
}

export default function Resume() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const handleDownload = () => {
    window.print()
  }

  return (
    <section ref={ref} className="min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-2 block">RESUME</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">My Resume</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-8" />
          
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass text-white font-semibold hover:bg-slate-800 transition-all hover:scale-105"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </button>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-8 rounded-2xl glass mb-8"
        >
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold mb-2">
              Jeph Humphrey<span className="gradient-text">.</span>
            </h2>
            <p className="text-xl text-slate-400">Full Stack Developer</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="flex items-center gap-3 text-slate-300">
              <Mail className="w-5 h-5 text-primary" />
              <span>j3f.dev@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300">
              <Phone className="w-5 h-5 text-primary" />
              <span>+254 759 063224</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Nairobi, Kenya</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300">
              <Github className="w-5 h-5 text-primary" />
              <span>github.com/j3f</span>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-6">
            <h3 className="text-lg font-semibold mb-3">Professional Summary</h3>
            <p className="text-slate-400 leading-relaxed">
              Passionate full-stack developer with over 2 years of experience building web applications. 
              Specialized in React, SpringBoot, and modern cloud architectures. Committed to writing 
              clean, maintainable code and creating intuitive user experiences. Strong problem-solving 
              skills with a focus on delivering high-quality software solutions.
            </p>
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="p-8 rounded-2xl glass mb-8"
        >
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Briefcase className="w-6 h-6 text-primary" />
            Work Experience
          </h3>

          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div key={index} className="border-l-2 border-primary/30 pl-6">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h4 className="text-xl font-semibold">{exp.title}</h4>
                  <span className="text-slate-500">•</span>
                  <span className="text-primary font-medium">{exp.company}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500 text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-slate-400 flex items-start gap-2">
                      <span className="text-primary mt-1.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="p-8 rounded-2xl glass mb-8"
        >
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <GraduationCap className="w-6 h-6 text-primary" />
            Education
          </h3>

          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="border-l-2 border-secondary/30 pl-6">
                <h4 className="text-xl font-semibold mb-1">{edu.degree}</h4>
                <p className="text-primary font-medium mb-1">{edu.institution}</p>
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{edu.period}</span>
                </div>
                <p className="text-slate-400 mt-2">{edu.details}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="p-8 rounded-2xl glass"
        >
          <h3 className="text-2xl font-bold mb-6">Skills</h3>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-primary">Frontend</h4>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-lg bg-slate-800 text-sm text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-primary">Backend</h4>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-lg bg-slate-800 text-sm text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-primary">Tools</h4>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-lg bg-slate-800 text-sm text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
