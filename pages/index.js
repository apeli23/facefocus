import { AdvancedImage } from '@cloudinary/react';
import { CloudinaryImage, Cloudinary } from '@cloudinary/url-gen';
import Image from 'next/image';
import Sample from '../public/sample.jpg';
import { useRef, useEffect } from 'react';

// Import required actions and qualifiers.
import { thumbnail } from "@cloudinary/url-gen/actions/resize";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";
import { fill } from "@cloudinary/url-gen/actions/resize";

export default function Home() {
  const cloudinary = new CloudinaryImage();
 
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'demo'
    }
  }, []);

  const myImage = cld.image("butterfly")
   
  myImage
  .resize(thumbnail().width(150).height(150).gravity(focusOn(FocusOn.face()))) 
  
  return (
    <div>
      <img
        id="image"
        width={850}
        height={600}
        src={myImage}
        alt="samples"
      />
      <div id="final">
        <AdvancedImage cldImg = {myImage}   />
      </div>
    </div>
  )
}
