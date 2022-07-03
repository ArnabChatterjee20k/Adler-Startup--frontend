import { useRef } from "react"
import contactUs from "../lottie/assets/contact us.json"
import { Player } from '@lottiefiles/react-lottie-player'
import { PrimaryBtn } from "../Button/PrimaryBtn"
import { useOptions } from "./useOptions"
import { Options } from "./Options"
import { Message } from "../Button/Message"
const Contact = ({id}) => {
    const contactRef = useRef()
    const options_array = useOptions()
    return (
        <>
            <section id={id} className='flex justify-center items-center flex-col space-y-3 mt-8'>
                <div className="flex flex-col items-center justify-center">
                    <div className='flex justify-center items-center mx-auto'>
                        <h1 className='text-3xl md:text-4xl font-bold'>Contact Us</h1>
                        <Player
                            autoplay
                            loop
                            ref={contactRef}
                            src={contactUs}
                            renderer="svg"
                            style={{ height: '100px', width: '100px' }}
                        >
                        </Player>
                    </div>
                    <Message text={"Message Us"} extra_classes="w-full font-bold"/>
                </div>
                
                    <div className="px-3 flex flex-col space-y-4 justify-center items-start md:space-y-0 md:flex-row  md:space-x-10 bg-[#111111ef] text-white py-16 min-w-full">
                        {options_array.map(({ icon, details },index) => <Options key={index} icon={icon} details={details} />)}
                    </div>
            </section>
        </>
    )
}
export default Contact;