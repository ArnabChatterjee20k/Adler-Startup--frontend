import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { Testimonial } from "./components/Testimonials/Testimonial";
import { About } from "./components/About us/About";
import { SocialMedia } from "./components/SocialBadge/SocialMedia";
import { Contact } from "./components/Contact Us/Contact";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Testimonial />
      <About />
      <SocialMedia />
      <Contact />
    </>
  );
}

export default App;
