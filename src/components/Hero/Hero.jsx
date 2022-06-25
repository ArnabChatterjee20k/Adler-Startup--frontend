import HeroImage from "./assets/Hero Image.svg"
import { PrimaryBtn } from "../button/PrimaryBtn"
export const Hero = () => {
    return (
        <section class="body-font horizontal-container mt-8 px-4 flex-col-reverse space-y-reverse space-y-5 lg:h-[700px] lg:space-x-20">
            <div className="flex flex-col  text-center space-y-7 lg:space-y-6 lg:mr-auto lg:ml-40 lg:text-left">
                <div>
                    <h1 className="font-bold text-4xl lg:text-7xl mb-1">Adler</h1>
                    <h1 className="font-bold text-4xl lg:text-7xl">Digital Solutions</h1>
                </div>
                <div className="secondary-text">
                    <p>Adler digital verse is with you to scale your bussiness digitally.</p>
                    <p>We are here to serve you the best digital marketing service</p>
                    <p>Don't know to scale your bussiness?</p>
                    <p>Why fear when we are here !!</p>
                </div>
                <div className="space-x-5 p-2 flex items-center justify-center flex-wrap lg:justify-start ">
                    <PrimaryBtn text={"Services"} />
                    <PrimaryBtn text={"Contact Us"} />
                </div>
            </div>
            {/*
                img is set to absolute to use the advantage of the height of image
                img is absolute to body so that it can cover almost the whole canvas and z -index is set to -1
             */}
            <img src={HeroImage} alt="Hero" className="w-[500px] h-[500px] lg:h-[700px] z-[-1] lg:absolute lg:right-32 lg:top-5" />
        </section >
    )
}
