import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import WorkExperience from "./sections/WorkExperience";
import Testimonials from "./sections/Testimonials";
import FAQ from "./sections/FAQ";
import Contact from "./sections/Contact";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className=" bg-black h-screen">
      <Navbar />
      <main className="">
        <Hero />
        <Services />
        <About />
        <Skills />
        <Projects />
        <Testimonials />
        <FAQ />
        <Contact />
        {/* <WorkExperience /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
