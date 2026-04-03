/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';
import {AnimatePresence, motion} from 'motion/react';
import {HelmetProvider} from 'react-helmet-async';
import Home from './Home';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfService from './TermsOfService';
import HowItWorks from './HowItWorks';
import Footer from './components/Footer';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PageTransition><PrivacyPolicy /></PageTransition>} />
        <Route path="/terms-of-service" element={<PageTransition><TermsOfService /></PageTransition>} />
        <Route path="/how-it-works" element={<PageTransition><HowItWorks /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function PageTransition({children}: {children: React.ReactNode}) {
  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      exit={{opacity: 0, y: -20}}
      transition={{duration: 0.3}}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <main className="bg-lumiere-cream">
          <AnimatedRoutes />
          <Footer />
        </main>
      </BrowserRouter>
    </HelmetProvider>
  );
}
