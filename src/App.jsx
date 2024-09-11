import About from "./components/about/About";
import Header from "./components/header/Header";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.documentElement.dataset.scroll = window.scrollY.toString();
    const handleScroll = () => {
      document.documentElement.dataset.scroll = window.scrollY.toString();
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main className="container">
      <Header />
      <About />
      <div className="divider" />
      <Projects />
      <div className="divider" />
      <Contact />
      <div className="divider footer-divider" />
      <Footer />
      <button
        onClick={scrollToTop}
        className="icon-keyboard_arrow_up scroll-to-top"
      />
    </main>
  );
}

export default App;
