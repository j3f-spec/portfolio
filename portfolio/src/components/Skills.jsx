import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React / Next.js', level: 75 },
      { name: 'TypeScript', level: 50 },
      //{ name: 'Tailwind CSS', level: 95 },
      { name: 'Vue.js', level: 75 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      //{ name: 'Node.js / Express', level: 92 },
      //{ name: 'Python / Django', level: 80 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'GraphQL', level: 78 },
      { name: 'SpringBoot / Java', level: 82 },
    ],
  },
  {
    title: 'DevOps & Tools',
    skills: [
      //{ name: 'Docker / Kubernetes', level: 82 },
      //{ name: 'AWS / GCP', level: 80 },
      { name: 'Git / CI/CD', level: 90 },
      { name: 'Linux', level: 85 },
      { name: 'Firebase', level: 20 }
    ],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-24 bg-dark-light/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-2 block">MY EXPERTISE</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIndex * 0.2 }}
              className="p-6 rounded-2xl glass"
            >
              <h3 className="text-xl font-bold mb-6 text-center">{category.title}</h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                      <span className="text-sm font-mono text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 flex flex-wrap justify-center gap-4"
        >
          {['React', 'Node.js', 'TypeScript', 'Python', 'AWS', 'Docker', 'PostgreSQL', 'GraphQL'].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-lg glass text-sm text-slate-300 hover:text-white hover:border-primary/50 transition-all cursor-default"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
