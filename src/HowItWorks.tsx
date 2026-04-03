import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import {motion} from 'motion/react';

const steps = [
  {
    title: 'Discovery',
    description: 'We start by discussing your goals, target audience, and vision for the project.',
  },
  {
    title: 'Design & Development',
    description: 'I create a custom design based on our discussion and then build your website using modern, high-performance technologies.',
  },
  {
    title: 'Feedback & Revisions',
    description: 'We review the progress together, and I make necessary revisions to ensure everything is perfect.',
  },
  {
    title: 'Launch',
    description: 'Once you\'re happy with the final result, I launch your website and provide support for any post-launch needs.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-32 bg-lumiere-cream">
      <Helmet>
        <title>How It Works | Lumiere</title>
        <meta name="description" content="Learn about our streamlined web design and development process at Lumiere." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-8">
        <Link to="/" className="text-lumiere-tan hover:text-lumiere-brown mb-8 inline-block">&larr; Back to Home</Link>
        <h1 className="font-serif text-5xl text-lumiere-dark mb-12">How It Works</h1>
        <p className="font-sans text-lumiere-dark/70 mb-16 leading-relaxed max-w-2xl">I follow a streamlined process to ensure your project is delivered on time and exceeds your expectations.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{duration: 0.6, delay: index * 0.1}}
              className="bg-white p-8 rounded-3xl border border-lumiere-dark/10 shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-lumiere-tan/10 flex items-center justify-center font-serif text-2xl text-lumiere-tan mb-6">
                {index + 1}
              </div>
              <h3 className="font-serif text-2xl text-lumiere-dark mb-4">{step.title}</h3>
              <p className="font-sans text-lumiere-dark/70 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
