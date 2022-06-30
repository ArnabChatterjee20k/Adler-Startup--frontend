import aboutUs from "./assets/about us.svg"
import { PrimaryBtn } from "../Button/PrimaryBtn"
export const About = () => {
    return (
        <section class="body-font horizontal-container px-4 py-4 flex-col-reverse space-y-reverse space-y-5 lg:flex-row  lg:space-x-20">
            <div className="flex flex-col text-center space-y-5 lg:space-y-6 lg:text-left">
                <div>
                    <h1 className="font-bold text-5xl lg:text-7xl mb-1 text-orange-600">About Us</h1>
                </div>
                <div className="secondary-text">
                    <p>We are digital marketing agency. We provide all the above services. If you dont know how to grow your bussiness we are here as a solution. Our team will be always for you. You can call us 24/7 for call assist. We are the best answer to all digital marketing solutions.</p>
                </div>
                <div className="flex items-center justify-center lg:justify-start ">
                    <PrimaryBtn text={"Read More"} classes={"w-full md:w-auto"} />
                </div>
            </div>
            <img src={aboutUs} alt="Hero" className="max-w-[300px] max-h-[650px] sm:max-w-[400px] md:max-w-[600px]" />
        </section >
    )
}
