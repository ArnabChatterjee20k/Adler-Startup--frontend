import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { Testimonial } from "./components/Testimonials/Testimonial";
import { About } from "./components/About us/About";
import { SocialMedia } from "./components/SocialBadge/SocialMedia";
function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Testimonial/>
    <About/>
    <SocialMedia/>
    </>
  );
}

export default App;
