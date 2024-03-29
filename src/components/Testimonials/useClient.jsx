import cBuddy from "./clients/codding-min.png"
import swastik from "./clients/swastik-min.jpeg"
import rGroup from "./clients/R-group-min.png"
import LazyImage from "../LazyImage/LazyImage"
export default function useClient() {
    const clients = [
        {
            heading:null,
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra",
            lottie_animation:<LazyImage src={swastik} alt="swastik foundation"/>,
            website:{
                website_name:"R-Group",
                website_link:"#"
            }
        },
        
        {
            heading:null,
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra",
            lottie_animation:<LazyImage src={cBuddy} alt="Coding Buddy"/>,
            website:{
                website_name:"Swastik",
                website_link:"#"
            }
        },

        {
            heading:null,
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra",
            lottie_animation:<LazyImage src={rGroup} alt="RGroup"/>,
            website:{
                website_name:"Coding Buddy",
                website_link:"#"
            }
        }
    ]

    return (
        clients
    )
}
