import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react'

export default function Hero() {
  const [text, setText] = useState('')
  const fullText = 'Full Stack Developer'
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index])
        setIndex((prev) => prev + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [index])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center grid-pattern overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for freelance work
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Hi, I&apos;m <span className="gradient-text">JH</span>
          </h1>

          <div className="h-16 mb-8">
            <span className="text-2xl md:text-4xl font-mono text-slate-300">
              {text}
              <span className="animate-pulse text-primary">|</span>
            </span>
          </div>

          <p className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed">
            I craft robust, scalable web applications with modern technologies. 
            Passionate about clean code, user experience, and building products that make a difference.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="#projects"
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all hover:scale-105 flex items-center gap-2"
            >
              View My Work
              <ArrowDown className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-xl glass text-white font-semibold hover:bg-slate-800 transition-all hover:scale-105"
            >
              Contact Me
            </a>
          </div>

          <div className="flex gap-4">
            {[Github, Linkedin, Twitter].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-11 h-11 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-white hover:border-primary/50 transition-colors"
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 animate-float" />
            <div className="absolute inset-4 rounded-2xl glass flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow">
                  <span className="text-6xl font-bold text-white">A</span>
                </div>
                <div className="font-mono text-sm text-slate-400 space-y-1">
                  <p>{'<Developer />'}</p>
                  <p>const passion = &quot;coding&quot;;</p>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 px-4 py-2 rounded-xl glass text-sm font-mono text-primary"
            >
              React.js
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 px-4 py-2 rounded-xl glass text-sm font-mono text-secondary"
            >
              Node.js
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="text-slate-500 hover:text-white transition-colors">
          <ArrowDown className="w-6 h-6" />
        </a>
      </motion.div>
    </section>
  )
}
