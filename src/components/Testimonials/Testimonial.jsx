import { Card } from "../Card/Card"
import useClient from "./useClient"
import {Slider} from "../Carosouel/Slider"
import { useBreakpoints } from "./useBreakpoints"
const Testimonial = ({id}) => {
    const clients = useClient();
    const breakpoints = useBreakpoints()
    return (
        <>
        <section id={id} className="flex flex-col justify-center items-center bg-[#F2F5FF] py-4 mt-8">
                <h1 className="text-4xl font-bold p-4 pt-8">Testimonials</h1>
                <Slider custom_breakpoints={breakpoints} one_card_per_slide>
                    {clients.map((client)=><Card static_card bg="bg-[#F9F9F9]" {...client} key={client.heading} textCenter/>)}
                </Slider>
        </section>
        </>
    )
}

export default Testimonial
