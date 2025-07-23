import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Project />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
