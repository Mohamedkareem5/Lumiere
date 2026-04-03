import {motion} from 'motion/react';
import {Sparkles, Clock} from 'lucide-react';
import {useRef} from 'react';

export default function Templates() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section ref={containerRef} className="relative py-32 bg-lumiere-cream overflow-hidden">
      {/* Creative Background Element */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-lumiere-tan/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-lumiere-brown/20 rounded-full blur-[120px]" />

      <div id="templates" className="relative z-10 max-w-7xl mx-auto px-8 scroll-mt-20">
        
        <div className="flex flex-col items-center justify-center">
          <motion.div 
            initial={{opacity: 0, y: 40}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.8, ease: "easeOut"}}
            className="group relative w-full max-w-5xl rounded-[2rem] overflow-hidden p-[1px] shadow-2xl"
          >
            {/* Animated gradient border effect via padding */}
            <div className="absolute inset-0 bg-gradient-to-r from-lumiere-tan/50 via-lumiere-brown/50 to-lumiere-tan/50 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animate-pulse" />
            
            <div className="relative bg-white/60 backdrop-blur-2xl border border-white/50 rounded-[2rem] overflow-hidden flex flex-col md:flex-row shadow-inner">
              
              {/* Left Content Side */}
              <div className="w-full md:w-[55%] p-10 md:p-16 flex flex-col justify-center bg-white/40">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lumiere-tan/10 text-lumiere-brown text-xs uppercase tracking-widest font-semibold mb-8 w-fit border border-lumiere-tan/20">
                  <Clock className="w-3.5 h-3.5" />
                  <span>In Development</span>
                </div>
                
                <h2 className="font-serif text-4xl lg:text-5xl text-lumiere-dark mb-6 leading-tight">
                  Premium Templates <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-lumiere-brown to-lumiere-tan italic">Coming Soon</span>
                </h2>
                
                <p className="font-sans text-lumiere-dark/70 text-lg leading-relaxed mb-10 pr-4">
                  We are currently crafting a curated collection of high-end, conversion-focused templates specifically meticulously designed for modern digital agencies, luxury brands, and top-tier professionals. 
                </p>
                
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
                  className="font-sans font-medium text-white bg-lumiere-dark hover:bg-lumiere-brown transition-colors cursor-pointer px-6 py-3 rounded-xl flex items-center justify-center gap-2 w-fit shadow-lg hover:shadow-xl duration-300"
                >
                  Join the Waitlist <Sparkles className="w-4 h-4" />
                </button>
              </div>

              {/* Right Visual Side */}
              <div className="w-full md:w-[45%] relative min-h-[350px] md:min-h-full overflow-hidden bg-lumiere-cream">
                <div className="absolute inset-0 bg-gradient-to-br from-lumiere-tan/30 to-transparent z-10 mix-blend-overlay"></div>
                <motion.img 
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop" 
                  alt="Abstract minimal design"
                  className="absolute inset-0 w-full h-full object-cover opacity-90"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating Glass Element 1 */}
                <motion.div 
                  animate={{ y: [-15, 15, -15], rotate: [0, 5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-[20%] left-[15%] w-32 h-32 bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl z-20 shadow-[0_8px_32px_rgba(0,0,0,0.1)]"
                />
                
                {/* Floating Glass Element 2 */}
                <motion.div 
                  animate={{ y: [15, -15, 15], rotate: [0, -5, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-[20%] right-[15%] w-24 h-24 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full z-20 shadow-[0_8px_32px_rgba(0,0,0,0.1)]"
                />
              </div>

            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
