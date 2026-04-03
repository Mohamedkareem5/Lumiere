import {motion, useScroll, useTransform} from 'motion/react';
import {useRef} from 'react';
import {Layout, Palette, Globe} from 'lucide-react';

const services = [
  {
    id: 'ui-ux',
    title: '1. UI/UX Design',
    description: 'Seamless, user-centric design that enhances engagement and delivers an intuitive experience.',
    details: [
      'Wireframing & Prototyping',
      'User Interface (UI) Design',
      'User Experience (UX) Research',
      'Web & Mobile App Design'
    ],
    icon: Layout,
  },
  {
    id: 'branding',
    title: '2. Branding & Identity',
    description: 'Transform your brand into a powerful identity with strategic branding solutions.',
    details: [
      'Logo & Visual Identity',
      'Brand Strategy & Positioning',
      'Typography & Color Systems',
      'Brand Guidelines'
    ],
    icon: Palette,
  },
  {
    id: 'development',
    title: '3. Web Development',
    description: 'High-performance, scalable web solutions built with the latest technologies.',
    details: [
      'Frontend Development',
      'E-commerce Solutions',
      'Performance Optimization',
      'CMS Integration'
    ],
    icon: Globe,
  }
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const {scrollYProgress} = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={containerRef} className="relative py-32 bg-lumiere-cream overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 bg-grid opacity-10" />

      <div className="relative z-10 max-w-5xl mx-auto px-8">
        <div className="text-center mb-24">
          <h2 className="font-serif text-5xl text-lumiere-dark mb-6">Our Process</h2>
          <p className="font-sans text-lg text-lumiere-dark/70">Three simple steps to elevate your digital presence.</p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-lumiere-dark/10 -translate-x-1/2">
            <motion.div
              style={{scaleY: lineScale, originY: 0}}
              className="w-full h-full bg-lumiere-tan"
            />
          </div>

          <div className="space-y-16 md:space-y-24">
            {services.map((service, index) => (
              <div key={service.id} className={`relative flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Mobile Icon Node */}
                <div className="md:hidden z-20">
                  <motion.div
                    initial={{scale: 0}}
                    whileInView={{scale: 1}}
                    viewport={{once: true}}
                    className="w-12 h-12 rounded-full bg-lumiere-cream border-2 border-lumiere-tan flex items-center justify-center shadow-lg"
                  >
                    <service.icon className="w-5 h-5 text-lumiere-tan" />
                  </motion.div>
                </div>

                {/* Content Card */}
                <motion.div
                  initial={{opacity: 0, y: 50}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: true, margin: "-100px"}}
                  className="w-full md:w-5/12 p-6 md:p-8 bg-white/50 backdrop-blur-md border border-lumiere-dark/10 rounded-2xl shadow-sm z-10"
                >
                  <h3 className="font-serif text-2xl text-lumiere-dark mb-3">{service.title}</h3>
                  <p className="font-sans text-lumiere-dark/70 text-sm leading-relaxed mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-center text-xs text-lumiere-brown font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-lumiere-tan mr-2 shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Desktop Icon Node */}
                <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <motion.div
                    initial={{scale: 0}}
                    whileInView={{scale: 1}}
                    viewport={{once: true}}
                    className="w-12 h-12 rounded-full bg-lumiere-cream border-2 border-lumiere-tan flex items-center justify-center shadow-lg"
                  >
                    <service.icon className="w-5 h-5 text-lumiere-tan" />
                  </motion.div>
                </div>
                
                {/* Spacer */}
                <div className="hidden md:block w-5/12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
