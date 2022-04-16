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
  const sample1 = cld.image("family")
  const sample1Transformed = cld.image("family")

  sample1Transformed
    .resize(thumbnail().width(150).height(150).gravity(focusOn(FocusOn.face())))

  return (
    <div className="container">
      <div className="row">
        <div className="column">
          <AdvancedImage cldImg={sample1} />
        </div>
        <div className="column">
        <AdvancedImage cldImg={sample1Transformed} />
        </div>
      </div>
    </div>
  )
};

