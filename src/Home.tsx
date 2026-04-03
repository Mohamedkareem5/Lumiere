import {Helmet} from 'react-helmet-async';
import Hero from './components/Hero';
import Services from './components/Services';
import Templates from './components/Templates';
import FAQ from './components/FAQ';
import Contact from './components/Contact';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Lumiere | Premium Web Design Agency</title>
        <meta name="description" content="Lumiere is a premium web design agency crafting high-performance digital experiences to drive business growth." />
      </Helmet>
      <Hero />
      <Services />
      <Templates />
      <FAQ />
      <Contact />
    </>
  );
}
