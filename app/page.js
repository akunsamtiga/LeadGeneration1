// app/page.js
import Hero from "./components/hero/Hero";
import Testimonials from "./components/testimonials/Testimonials";
import LeadForm from "./components/leadform/LeadForm";
import CTA from "./components/cta/CTA";
import Footer from "./components/footer/Footer";
import Message from "./components/Message";

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-900">
      <main>
        <Message />
        <Hero />
        <LeadForm />
        <Testimonials />
        <CTA />
        <Footer />
      </main>
    </div>
  );
}
