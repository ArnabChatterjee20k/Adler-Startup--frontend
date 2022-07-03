import React, { Suspense } from "react";
import DotLoader from "react-spinners/DotLoader"
const Hero = React.lazy(() => import("./components/Hero/Hero"))
const Testimonial = React.lazy(() => import("./components/Testimonials/Testimonial"))
const About = React.lazy(() => import("./components/About us/About"))
const SocialMedia = React.lazy(() => import("./components/SocialBadge/SocialMedia"))
const Contact = React.lazy(() => import('./components/Contact Us/Contact'))
const Service = React.lazy(() => import("./components/Services/Service.jsx"))

const Home = () => {
    return (
        <>
            <Suspense fallback={<div className="w-full flex justify-center items-center min-h-screen"><DotLoader color="#D0021B" /></div>}>
                <Hero id="home"/>
                <Service id="services"/>
                <Testimonial id="reviews"/>
                <About id="about us"/>
                <SocialMedia />
                <Contact id="contact us"/>
            </Suspense>
        </>
    )
}
export default Home;