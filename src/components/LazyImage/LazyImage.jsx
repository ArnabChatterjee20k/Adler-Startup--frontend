import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import data from "./Adler  website.png"
const MyImage = ({src,classname,alt}) => (
    <div>
        <LazyLoadImage
            alt={alt}
            effect="blur"
            className={classname||"max-w-[5rem]  rounded-full"}
            src={src} // use normal <img> attributes as props
            />
        {/* <span>{image.caption}</span> */}
    </div>
);

export default MyImage;