import { Heart, Github, Linkedin, Twitter, ArrowUp } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/j3f-spec' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/jeff-h-m-dev' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/' },
  ]

  return (
    <footer className="py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold font-mono">
              JH<span className="gradient-text">.dev</span>
            </span>
          </div>

          <div className="flex items-center gap-6 text-slate-400">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms</Link>
            <Link to="/resume" className="hover:text-primary transition-colors">Resume</Link>
          </div>
        
          {/*<Link to="/Resume">Contact Me</Link>*/}
                    
          <div className="flex gap-4">
            {socialLinks.map(({ name, icon: Icon, url }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                title={name}
                className="w-10 h-10 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-white hover:border-primary/50 transition-all"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500 flex items-center gap-1">
            {/* Made with <Heart className="w-4 h-4 text-secondary fill-secondary" />*/}Jh
          </p>
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-secondary text-white flex items-center justify-center shadow-lg shadow-primary/25 hover:scale-110 transition-transform z-40"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
    </footer>
  )
}
