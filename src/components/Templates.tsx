import {motion} from 'motion/react';
import {ArrowRight} from 'lucide-react';
import {useRef} from 'react';

const templates = [
  {
    title: 'My Portfolio',
    description: 'A personal, modern portfolio showcasing my design and development work.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'E-Commerce Luxe',
    description: 'A sophisticated e-commerce template designed for luxury brands.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Agency Pro',
    description: 'A comprehensive template for digital agencies and creative studios.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
  },
];

export default function Templates() {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <section ref={containerRef} className="relative py-32 bg-lumiere-cream overflow-hidden">
      {/* Creative Background Element */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-lumiere-tan/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-lumiere-brown/20 rounded-full blur-[120px]" />

      <div id="templates" className="relative z-10 max-w-7xl mx-auto px-8 scroll-mt-20">
        <div className="text-center mb-20">
          <h2 className="font-serif text-5xl text-lumiere-dark mb-6">Curated Templates</h2>
          <p className="font-sans text-lg text-lumiere-dark/70">Premium foundations for your next venture.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {templates.map((template, index) => (
            <motion.div
              key={template.title}
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{duration: 0.6, delay: index * 0.2}}
              whileHover={{y: -10, rotate: index % 2 === 0 ? 2 : -2}}
              className="group relative bg-white/40 backdrop-blur-md border border-lumiere-dark/10 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:border-lumiere-tan/50 transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={template.image}
                  alt={template.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl text-lumiere-dark mb-3">{template.title}</h3>
                <p className="font-sans text-lumiere-dark/70 text-sm leading-relaxed mb-6">{template.description}</p>
                <button className="flex items-center gap-2 text-lumiere-tan font-semibold text-sm hover:text-lumiere-brown transition-colors">
                  View Demo <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
