import { FaFacebookF ,  FaTwitter , FaInstagram , FaYoutube} from "react-icons/fa"
import React from 'react'

const SocialMedia = () => {
    const size = undefined;
    const color = "#989898";
    return (
        <section className="horizontal-container space-x-10 md:space-x-20 lg:space-x-30 my-3">
            <a href="">
                <FaFacebookF className={`text-4xl md:text-5xl text-[#989898] hover:text-orange-500 duration-300 hover:-translate-y-1`}/>
            </a>
            <a href="">
                <FaTwitter className={`text-4xl md:text-5xl text-[#989898] hover:text-orange-500 duration-300 hover:-translate-y-1`}/>
            </a>
            <a href="">
                <FaInstagram className={`text-4xl md:text-5xl text-[#989898] hover:text-orange-500 duration-300 hover:-translate-y-1`}/>
            </a>
            <a href="">
                <FaYoutube className={`text-4xl md:text-5xl text-[#989898] hover:text-orange-500 duration-300 hover:-translate-y-1`}/>
            </a>
        </section>
)
}
export default SocialMedia;