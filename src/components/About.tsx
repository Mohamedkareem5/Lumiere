import {motion} from 'motion/react';

export default function About() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{opacity: 0, x: -50}}
          whileInView={{opacity: 1, x: 0}}
          viewport={{once: true}}
          className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
            alt="About Me"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <motion.div
          initial={{opacity: 0, x: 50}}
          whileInView={{opacity: 1, x: 0}}
          viewport={{once: true}}
        >
          <h2 className="font-serif text-5xl text-lumiere-dark mb-8">Crafting Digital Experiences</h2>
          <p className="font-sans text-lg text-lumiere-dark/70 mb-8 leading-relaxed">
            I'm a passionate web designer and developer who believes that great design is not just about aesthetics, but about solving problems and creating meaningful connections. My journey started with a fascination for how technology can bridge the gap between ideas and reality.
          </p>
          <p className="font-sans text-lg text-lumiere-dark/70 mb-8 leading-relaxed">
            What makes me different? I don't just build websites; I build digital ecosystems that are optimized for growth, user engagement, and performance. I listen, I strategize, and I execute with precision.
          </p>
          <div className="flex flex-wrap gap-4">
            {['Web Design', 'UI/UX', 'Frontend Development', 'Brand Strategy'].map((skill) => (
              <span key={skill} className="px-4 py-2 bg-lumiere-cream text-lumiere-dark rounded-full font-sans text-sm font-semibold">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
