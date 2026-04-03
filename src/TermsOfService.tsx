import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';

export default function TermsOfService() {
  return (
    <section className="py-32 bg-lumiere-cream">
      <Helmet>
        <title>Terms of Service | Lumiere</title>
        <meta name="description" content="Terms of service for Lumiere web design services." />
      </Helmet>
      <div className="max-w-4xl mx-auto px-8">
        <Link to="/" className="text-lumiere-tan hover:text-lumiere-brown mb-8 inline-block">&larr; Back to Home</Link>
        <h1 className="font-serif text-5xl text-lumiere-dark mb-12">Terms of Service</h1>
        <div className="font-sans text-lumiere-dark/70 space-y-8 leading-relaxed">
          <p>By using my web design services, you agree to these terms.</p>
          
          <h2 className="font-serif text-2xl text-lumiere-dark">Services</h2>
          <p>I provide custom web design and development services. The scope of work will be defined in a separate agreement.</p>

          <h2 className="font-serif text-2xl text-lumiere-dark">Payment Terms</h2>
          <p>A partial upfront payment is required to secure your project slot. The remaining balance is due upon completion.</p>

          <h2 className="font-serif text-2xl text-lumiere-dark">Revisions & Timelines</h2>
          <p>I offer limited revisions to ensure your satisfaction. Timelines are estimates, not strict deadlines, as projects can vary in complexity.</p>

          <h2 className="font-serif text-2xl text-lumiere-dark">Client Responsibilities</h2>
          <p>You are responsible for providing all necessary content, brand assets, and timely feedback throughout the project.</p>

          <h2 className="font-serif text-2xl text-lumiere-dark">Ownership & Portfolio</h2>
          <p>Full ownership of the website transfers to you upon full payment. I reserve the right to showcase the completed work in my portfolio.</p>
        </div>
      </div>
    </section>
  );
}
