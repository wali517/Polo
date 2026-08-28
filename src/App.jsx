import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Process from "./components/Process";
import Services from "./components/Services";
import Projects from "./components/Projects";
import WhyMe from "./components/WhyMe";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
        <Hero />
        <Profile />
        <Process />
        <Services />
        <Projects />
        <WhyMe />
        <Testimonials />
        <FAQ />
        <CTA />
      <Footer />
    </div>
  );
}