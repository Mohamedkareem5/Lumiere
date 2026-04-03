import {Link} from 'react-router-dom';
import {Facebook, Instagram, MessageCircle} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-12 bg-lumiere-dark text-lumiere-cream/60 text-sm font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col gap-8 md:gap-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="order-2 md:order-1 text-xs md:text-sm">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-8 order-1 md:order-2">
            <Link to="/privacy-policy" className="hover:text-lumiere-tan transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-lumiere-tan transition-colors">Terms of Service</Link>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})} className="hover:text-lumiere-tan transition-colors">Contact</button>
          </div>
        </div>
        <div className="flex justify-center gap-6 order-3">
          <a href="https://www.facebook.com/profile.php?id=61582148528601" target="_blank" rel="noopener noreferrer" className="hover:text-lumiere-tan transition-colors">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/lumiere.account1/" target="_blank" rel="noopener noreferrer" className="hover:text-lumiere-tan transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="https://wa.me/201110956401" target="_blank" rel="noopener noreferrer" className="hover:text-lumiere-tan transition-colors">
            <MessageCircle className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
