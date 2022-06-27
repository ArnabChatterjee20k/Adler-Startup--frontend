import Proptypes from "prop-types";

export const Card = ({ static_card,lottie_animation, bg, heading, description, website: { website_name, website_link } }) => {
    return (
        <>
            {/* since we will be using this card component in the carsouel so for that static_card condition is used */}
            <div className={`flex flex-col items-center ${bg} py-4 px-6 ${static_card?"max-w-xs sm:max-w-sm":null} shadow-md gap-2 text-left rounded`}>
                {lottie_animation}
                <div className="flex flex-col gap-3">
                    <h1 className="font-bold text-2xl">{heading}</h1>
                    <p>{description}</p>
                </div>
                <a href={website_link} className="text-[#611B8B] font-bold text-2xl mt-3 hover:text-[#7727aa] hover:underline duration-300">{website_name}</a>
            </div>
        </>
    )
}
Card.prototype = {
    static_card:Proptypes.bool,
    bg: Proptypes.string,
    lottie_animation:Proptypes.element,
    heading: Proptypes.string.isRequired,
    description: Proptypes.string.isRequired,
    website: Proptypes.shape({
        website_name: Proptypes.string,
        website_link: Proptypes.string
    })
}

Card.defaultProps = {
    static_card:false,
    bg: "bg-white",
    lottie_animation:null,
    heading: "Heading",
    description: "Description",
    website: {
        website_link: null,
        website_name: "website name"
    }
}