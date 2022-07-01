import webDev from "../lottie/assets/web dev.svg"
import digitalMarketting from "../lottie/assets/digital marketting.svg"
import designing from "../lottie/assets/design.svg"
import seo from "../lottie/assets/seo.svg"
import automation from "../lottie/assets/automation.svg"
import call from "../lottie/assets/call.svg"
import LazyImage from "../LazyImage/LazyImage"
const services = [
    {
        lottie_animation: <LazyImage src={webDev} className="max-w-[10rem] max-h-[5rem]"/>,
        website:{website_name:null,website_link:null},
        heading:"Web Development Services",
        description:"Web development refers to building website and deploying on the web. Web development requires use of scripting languages both at the server end as well as at client end."
    },

    {
        lottie_animation: <LazyImage src={digitalMarketting} className="max-w-[10rem] max-h-[5rem]"/>,
        website:{website_name:null,website_link:null},
        heading:"Digital Marketing Services",
        description:"We give the best digital marketing services to scale your bussiness digitally." 
    },

    {
        lottie_animation: <LazyImage src={seo} className="max-w-[10rem] max-h-[5rem]"/>,
        website:{website_name:null,website_link:null},
        heading:"SEO Services",
        description:"Search engine optimization (SEO) services are services offered by a marketing agency to help a company improve a website or web page so it increases organic traffic quality and quantity from search engines."
    }, 

    {
        lottie_animation: <LazyImage src={designing} className="max-w-[10rem] max-h-[5rem]"/>,
        website:{website_name:null,website_link:null},
        heading:"Creative Consultancy",
        description:"A creative consultant is brought in to help improve a screenplay, advertising campaign, or other arts or sales projects. A creative consultant balances the commercial viability of a project against the goals of the writer or creative elements of the project."
    },
    {
        lottie_animation: <LazyImage src={automation} className="max-w-[10rem] max-h-[5rem]"/>,
        website:{website_name:null,website_link:null},
        heading:"System Automation",
        description:"We can automate the whole system to save your valuable time."
    },
    {
        lottie_animation: <LazyImage src={call} className="max-w-[10rem] max-h-[5rem]"/>,
        website:{website_name:null,website_link:null},
        heading:"24/7 call center services",
        description:"Call Assist 24/7 is a modern solution for multifamily call management, designed with the retention of residents in mind."
    },
]
// const services = [
//     {
//         lottie_animation: <Lottie lottie_object={webDev} style={{ height: '100px', width: '100px' }} />
//     },
//     {
//         lottie_animation: <Lottie lottie_object={seo} style={{ height: '100px', width: '100px' }} />},
//     {
//         lottie_animation: <Lottie lottie_object={designing} style={{ height: '100px', width: '100px' }} />},
//     {
//         lottie_animation: <Lottie lottie_object={automation} style={{ height: '100px', width: '100px' }} />},
//     {
//         lottie_animation: <Lottie lottie_object={digitalMarketting} style={{ height: '100px', width: '100px' }} />},
//     {
//         lottie_animation: <Lottie lottie_object={call}  style={{ height: '100px', width: '100px' }}/>},
// ]
export const useService = () => {
    return (
        services
    )
}

