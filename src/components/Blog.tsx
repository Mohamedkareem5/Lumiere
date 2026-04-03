import {motion} from 'motion/react';
import {ArrowRight} from 'lucide-react';

const posts = [
  {
    title: 'Why Every Business Needs a Website in 2025',
    description: 'In a digital-first world, your website is your most valuable asset. Discover why.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'How Good Design Increases Sales',
    description: 'Design is not just for looks. It is a powerful tool to drive conversions and sales.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: '5 Mistakes That Make Your Website Look Unprofessional',
    description: 'Avoid these common pitfalls to ensure your website builds trust and credibility.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
  },
];

export default function Blog() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="font-serif text-5xl text-lumiere-dark mb-16 text-center">Insights & Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{duration: 0.6, delay: index * 0.2}}
              className="bg-lumiere-cream rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl text-lumiere-dark mb-3">{post.title}</h3>
                <p className="font-sans text-lumiere-dark/70 text-sm leading-relaxed mb-6">{post.description}</p>
                <button className="flex items-center gap-2 text-lumiere-tan font-semibold text-sm hover:text-lumiere-brown transition-colors">
                  Read More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
