import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { breakpoints } from './breakpoints';
export const Slider = ({children}) => {
    const responsive = breakpoints();
    return(
        // here itemClass is resembling the li and cards are present inside that
        <Carousel containerClass='py-10  max-w-[100vw]' itemClass='px-4' responsive={responsive} showDots autoPlay swipeable draggable infinite>
            {children}
        </Carousel>

    )
}
