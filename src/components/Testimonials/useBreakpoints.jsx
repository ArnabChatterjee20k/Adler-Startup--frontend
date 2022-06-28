export function useBreakpoints (){
    return  ({
        desktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 640 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 640, min: 0 },
            items: 1
        }
    });
}