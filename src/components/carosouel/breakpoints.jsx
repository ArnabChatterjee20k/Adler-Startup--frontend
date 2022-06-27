export function breakpoints (){
    return  ({
        desktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 640 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 640, min: 0 },
            items: 1
        }
    });
}
