import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { breakpoints } from './breakpoints';
export const Slider = ({children,custom_breakpoints,one_card_per_slide}) => {
    const responsive = custom_breakpoints || breakpoints();
    return(
        // here itemClass is resembling the li and cards are present inside that
        <Carousel containerClass={`py-10 ${one_card_per_slide?'sm:max-w-[400px]':'md:w-[100vw]'} w-[100%] h-lg z-0`} itemClass='px-4' sliderClass="px-1" responsive={responsive} showDots autoPlay swipeable draggable infinite>
            {children}
        </Carousel>

    )
}
