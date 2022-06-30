import React, { Suspense } from "react";

const Navbar = React.lazy(() => import("./components/Navbar/Navbar"))
const Hero = React.lazy(() => import("./components/Hero/Hero"))
const Testimonial = React.lazy(() => import("./components/Testimonials/Testimonial"))
const About = React.lazy(()=>import("./components/About us/About"))
const SocialMedia = React.lazy(() => import("./components/SocialBadge/SocialMedia"))
const Contact = React.lazy(() => import('./components/Contact Us/Contact'))

function App() {
  return (
    <>
      <Suspense>
        <Navbar />
        <Hero />
        <Testimonial />
        <About />
        <SocialMedia />
        <Contact />
      </Suspense>
    </>
  );
}

export default App;
