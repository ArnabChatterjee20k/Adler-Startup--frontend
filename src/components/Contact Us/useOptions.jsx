import { GoLocation } from "react-icons/go"
import { AiOutlineMail } from "react-icons/ai"
import { BiPhone } from "react-icons/bi"
export const useOptions = () => {
    const details = [
        {
            icon: <GoLocation className="text-4xl md:text-5xl secondary-text" />,
            details: ["Ashok Pally", "Raniganj, Asansol", "West Bengal"]
        },
        {
            icon: <AiOutlineMail className="text-4xl md:text-5xl secondary-text" />,
            details: ["adlerovas01@gmail.com"]
        },
        {
            icon: <BiPhone className="text-4xl md:text-5xl secondary-text" />,
            details: ["+91 9732031031", "+91 9064846599"]
        }
    ]
    return (
        details
    )
}
