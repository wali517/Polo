import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Profile from "./Components/Profile";
import Process from "./Components/Process";
import Services from "./Components/Services";
import Projects from "./Components/Projects";
import WhyMe from "./Components/WhyMe";
import Testimonials from "./Components/Testimonials";
import FAQ from "./Components/FAQ";
import CTA from "./Components/CTA";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
    <div>
        <Hero />
        <Profile />
        <Process />
        <Services />
        <Projects />
        <WhyMe />
        <Testimonials />
        <FAQ />
        <CTA />
    </div>
      <Footer />
      </>
  );
}