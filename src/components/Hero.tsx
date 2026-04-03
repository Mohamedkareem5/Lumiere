import {motion} from 'motion/react';
import {ArrowRight} from 'lucide-react';
import {Link} from 'react-router-dom';
import HeroParticles from './HeroParticles';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col bg-lumiere-cream overflow-hidden">
      {/* Teleskope-inspired Ambient Glow */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: ['-20%', '20%', '-20%'],
            y: ['-10%', '10%', '-10%'],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 left-0 w-full h-full opacity-40"
          style={{
            background: 'radial-gradient(circle at 50% 50%, #C08552 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <motion.div
          animate={{
            x: ['20%', '-20%', '20%'],
            y: ['10%', '-10%', '10%'],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-0 left-0 w-full h-full opacity-30"
          style={{
            background: 'radial-gradient(circle at 30% 70%, #8C5A3C 0%, transparent 60%)',
            filter: 'blur(100px)',
          }}
        />
        <motion.div
          animate={{
            x: ['-10%', '10%', '-10%'],
            y: ['20%', '-20%', '20%'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
          className="absolute top-0 left-0 w-full h-full opacity-20"
          style={{
            background: 'radial-gradient(circle at 70% 30%, #D4A373 0%, transparent 50%)',
            filter: 'blur(120px)',
          }}
        />
      </div>

      {/* Animated Particle Background */}
      <HeroParticles />

      {/* Grid Background */}
      <motion.div 
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute inset-0 z-0 bg-grid opacity-10" 
      />
      
      {/* Subtle Vignette */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,248,240,0.8)_100%)]" />

      {/* Navigation Bar */}
      <nav className="relative z-20 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">
        <div className="text-2xl font-serif font-bold text-lumiere-dark italic">
          Lumiere
        </div>
        <div className="hidden md:flex items-center gap-8">
          <Link to="/how-it-works" className="text-sm font-medium text-lumiere-dark/80 hover:text-lumiere-dark transition-colors">How it Works</Link>
          <button onClick={() => document.getElementById('templates')?.scrollIntoView({behavior: 'smooth'})} className="text-sm font-medium text-lumiere-dark/80 hover:text-lumiere-dark transition-colors">Templates</button>
          <button onClick={() => document.getElementById('faq')?.scrollIntoView({behavior: 'smooth'})} className="text-sm font-medium text-lumiere-dark/80 hover:text-lumiere-dark transition-colors">FAQs</button>
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})} className="px-6 py-2.5 bg-lumiere-dark text-lumiere-cream text-sm font-semibold rounded-full hover:bg-lumiere-dark/90 transition-all">
            Get a Quote
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{opacity: 0, y: 10}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
          className="px-4 py-1.5 border border-lumiere-dark/10 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-lumiere-dark/60 mb-8 bg-white/30 backdrop-blur-sm"
        >
          Premium Web Design Agency
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8, delay: 0.2}}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-lumiere-dark leading-[1.1] tracking-tight mb-8"
        >
          We Design Digital <br />
          <span className="text-lumiere-tan italic font-medium">Experiences</span> That Convert.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8, delay: 0.4}}
          className="font-sans text-lg md:text-xl text-lumiere-dark/70 mb-12 max-w-2xl leading-relaxed"
        >
          Crafting modern, high-performance websites for ambitious brands in Egypt and beyond. We blend aesthetics with strategy to drive real business growth.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8, delay: 0.6}}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
            className="group px-8 py-4 bg-lumiere-dark text-lumiere-cream font-semibold rounded-full hover:bg-lumiere-dark/90 transition-all flex items-center gap-2 shadow-lg shadow-lumiere-dark/10"
          >
            Get a Quote
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={() => document.getElementById('templates')?.scrollIntoView({behavior: 'smooth'})}
            className="px-8 py-4 border border-lumiere-dark/20 text-lumiere-dark font-semibold rounded-full hover:bg-lumiere-dark/5 transition-all"
          >
            View Our Work
          </button>
        </motion.div>
      </div>
    </div>
  );
}
