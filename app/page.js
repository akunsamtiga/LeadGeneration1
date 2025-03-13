// app/page.js
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Testimonials from "./components/testimonials/Testimonials";
import LeadForm from "./components/leadform/LeadForm";
import CTA from "./components/cta/CTA";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-900">
      <Header />
      <main>
        <Hero />
        <LeadForm />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
