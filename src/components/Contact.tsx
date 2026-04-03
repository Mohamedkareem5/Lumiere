import React, {useState} from 'react';
import {motion} from 'motion/react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <section className="py-32 bg-white">
      <div id="contact" className="relative max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 scroll-mt-20">
        <div>
          <h2 className="font-serif text-5xl text-lumiere-dark mb-6">Start Your Project</h2>
          <p className="font-sans text-lg text-lumiere-dark/70 mb-12">
            Ready to bring your vision to life? Reach out today and let's build something great together.
          </p>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-lumiere-cream p-10 rounded-3xl border border-lumiere-dark/10"
        >
          {status === 'success' ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <h3 className="font-serif text-3xl text-lumiere-dark mb-4">Message Sent!</h3>
              <p className="font-sans text-lumiere-dark/70">Thank you for reaching out. I'll get back to you shortly.</p>
            </div>
          ) : (
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-sans text-sm font-semibold text-lumiere-dark mb-2">Name</label>
                <input type="text" id="name" required className="w-full px-4 py-3 rounded-xl border border-lumiere-dark/20 focus:border-lumiere-tan outline-none transition-colors" />
              </div>
              <div>
                <label htmlFor="email" className="block font-sans text-sm font-semibold text-lumiere-dark mb-2">Email</label>
                <input type="email" id="email" required className="w-full px-4 py-3 rounded-xl border border-lumiere-dark/20 focus:border-lumiere-tan outline-none transition-colors" />
              </div>
              <div>
                <label htmlFor="message" className="block font-sans text-sm font-semibold text-lumiere-dark mb-2">Message</label>
                <textarea id="message" rows={4} required className="w-full px-4 py-3 rounded-xl border border-lumiere-dark/20 focus:border-lumiere-tan outline-none transition-colors"></textarea>
              </div>
              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full py-4 bg-lumiere-dark text-lumiere-cream font-semibold rounded-full hover:bg-lumiere-tan transition-all duration-300 disabled:opacity-50"
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          )}
        </motion.form>
      </div>
    </section>
  );
}
