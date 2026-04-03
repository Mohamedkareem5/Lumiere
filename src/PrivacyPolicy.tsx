import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';

export default function PrivacyPolicy() {
  return (
    <section className="py-32 bg-lumiere-cream">
      <Helmet>
        <title>Privacy Policy | Lumiere</title>
        <meta name="description" content="Privacy policy for Lumiere. Learn how we handle your data." />
      </Helmet>
      <div className="max-w-4xl mx-auto px-8">
        <Link to="/" className="text-lumiere-tan hover:text-lumiere-brown mb-8 inline-block">&larr; Back to Home</Link>
        <h1 className="font-serif text-5xl text-lumiere-dark mb-12">Privacy Policy</h1>
        <div className="font-sans text-lumiere-dark/70 space-y-8 leading-relaxed">
          <p>At Lumiere, your privacy is important to me. This policy outlines how I handle your data.</p>
          
          <h2 className="font-serif text-2xl text-lumiere-dark">Information I Collect</h2>
          <p>I collect basic information when you use the contact form, including your name, email address, and any messages you provide. This information is used solely to communicate with you regarding your project.</p>

          <h2 className="font-serif text-2xl text-lumiere-dark">Analytics & Cookies</h2>
          <p>I use Google Analytics to understand how visitors use my website. This helps me improve the user experience. This tool may use cookies to track usage patterns. You can disable cookies in your browser settings if you prefer.</p>

          <h2 className="font-serif text-2xl text-lumiere-dark">Data Storage & Protection</h2>
          <p>Your data is stored securely and is protected with industry-standard measures. I do not sell, rent, or share your personal information with third parties for marketing purposes.</p>

          <h2 className="font-serif text-2xl text-lumiere-dark">Contact</h2>
          <p>If you have any questions or concerns about your privacy, please contact me via WhatsApp at <a href="https://wa.me/201110956401" className="text-lumiere-tan underline">01110956401</a>.</p>
        </div>
      </div>
    </section>
  );
}
