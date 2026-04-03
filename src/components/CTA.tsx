import {motion} from 'motion/react';

export default function CTA({title, description, buttonText}: {title: string, description: string, buttonText: string}) {
  return (
    <section className="py-24 bg-lumiere-dark text-lumiere-cream">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <motion.h2
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          className="font-serif text-5xl mb-6"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{delay: 0.2}}
          className="font-sans text-lg text-lumiere-cream/80 mb-10"
        >
          {description}
        </motion.p>
        <motion.button
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{delay: 0.4}}
          className="px-8 py-4 bg-lumiere-tan text-lumiere-dark font-semibold rounded-full hover:bg-white transition-all duration-300"
        >
          {buttonText}
        </motion.button>
      </div>
    </section>
  );
}
