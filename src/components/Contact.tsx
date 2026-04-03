import React, {useState} from 'react';
import {motion} from 'motion/react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "73614cea-0f5f-409f-ad4a-3bee97f07112", 
          name: formData.name,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      if (response.status === 200) {
        setStatus('success');
        setTimeout(() => {
          setStatus('idle');
          setFormData({ name: '', phone: '', message: '' });
        }, 5000);
      } else {
        console.error("Submission failed");
        setStatus('idle');
      }
    } catch (error) {
      console.error(error);
      setStatus('idle');
    }
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
            <div className="h-full flex flex-col items-center justify-center text-center py-8 gap-4">
              <div>
                <h3 className="font-serif text-3xl text-lumiere-dark mb-2">Message Sent!</h3>
                <p className="font-sans text-lumiere-dark/70">We will be in touch shortly.</p>
              </div>
              <div className="w-16 h-[1px] bg-lumiere-dark/20 my-2"></div>
              <style>{`.rtl-text { font-family: 'Tajawal', 'Cairo', sans-serif; }`}</style>
              <div dir="rtl" className="rtl-text">
                <h3 className="text-3xl text-lumiere-dark mb-2 font-bold">تم إرسال رسالتك بـنجاح!</h3>
                <p className="text-lumiere-dark/70 text-lg">شكراً لتواصلك معنا. سنقوم بالرد في أقرب وقت.</p>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-sans text-sm font-semibold text-lumiere-dark mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required 
                  className="w-full px-4 py-3 rounded-xl border border-lumiere-dark/20 focus:border-lumiere-tan outline-none transition-colors" 
                />
              </div>
              <div>
                <label htmlFor="phone" className="block font-sans text-sm font-semibold text-lumiere-dark mb-2">WhatsApp Number</label>
                <PhoneInput
                  defaultCountry="eg"
                  value={formData.phone}
                  onChange={(phone) => setFormData({...formData, phone})}
                  inputClassName="!w-full !px-4 !py-[13px] !rounded-r-xl !border-y !border-r !border-lumiere-dark/20 focus:!border-lumiere-tan !outline-none !transition-colors !text-base"
                  countrySelectorStyleProps={{
                    buttonClassName: "!h-auto !py-[13px] !px-3 !bg-white !rounded-l-xl !border-y !border-l !border-lumiere-dark/20 hover:!bg-gray-50 !transition-colors"
                  }}
                  className="flex w-full font-sans"
                />
              </div>
              <div>
                <label htmlFor="message" className="block font-sans text-sm font-semibold text-lumiere-dark mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required 
                  className="w-full px-4 py-3 rounded-xl border border-lumiere-dark/20 focus:border-lumiere-tan outline-none transition-colors"
                ></textarea>
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
