import {motion} from 'motion/react';
import {useState} from 'react';
import {ChevronDown, ChevronUp} from 'lucide-react';

const faqs = [
  {
    question: 'How long does a website take to build?',
    answer: 'I deliver high-quality, custom websites within 5 to 10 days.'
  },
  {
    question: 'Do you offer revisions?',
    answer: 'Yes, I offer unlimited revisions until you are completely satisfied with the final result.'
  },
  {
    question: 'Do you provide hosting and domain support?',
    answer: 'Yes, I provide full hosting and domain support to ensure your website is always online and secure.'
  },
  {
    question: 'What do you need from me to start?',
    answer: 'To get started, I need your brand assets (logo, colors), content, and a clear idea of your goals for the website.'
  },
  {
    question: 'Do you offer ongoing support after launch?',
    answer: 'Yes, I offer maintenance packages to keep your website updated, secure, and running smoothly after launch.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-32 bg-lumiere-cream scroll-mt-20">
      <div className="max-w-3xl mx-auto px-8">
        <h2 className="font-serif text-5xl text-lumiere-dark mb-16 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-lumiere-dark/10">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 flex items-center justify-between text-left"
              >
                <span className="font-serif text-xl text-lumiere-dark">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-lumiere-tan" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-lumiere-dark/40" />
                )}
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                  marginBottom: openIndex === index ? 24 : 0
                }}
                transition={{duration: 0.4, ease: "easeInOut"}}
                className="overflow-hidden"
              >
                <p className="font-sans text-lumiere-dark/70 leading-relaxed">{faq.answer}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
