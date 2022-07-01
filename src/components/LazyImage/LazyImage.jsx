import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const MyImage = ({src,className,alt}) => (
    <div>
        <LazyLoadImage
            alt={alt}
            effect="blur"
            className={className||"max-w-[5rem]  rounded-full"}
            src={src} // use normal <img> attributes as props
            />
        {/* <span>{image.caption}</span> */}
    </div>
);

export default MyImage;