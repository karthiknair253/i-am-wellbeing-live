import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

import image1 from '../imgs/program-images/image-1.webp';
import image2 from '../imgs/program-images/image-2.webp';
import image3 from '../imgs/program-images/image-3.png';
import image4 from '../imgs/program-images/image-4.png';

const CollageImage = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="flex flex-col gap-6 md:gap-10">
      {/* Image 1 */}
      <div className="flex justify-start" data-aos="fade-right">
        <img
          src={image1}
          alt="image1"
          className="w-[70%] md:w-[60%] h-[24vh] md:h-[54vh] object-cover"
        />
      </div>

      {/* Image 2 */}
      <div className="flex justify-end" data-aos="fade-left">
        <img
          src={image2}
          alt="image2"
          className="w-[70%] md:w-[68%] h-[24vh] md:h-[54vh] -mt-12 md:-mt-[15%] object-cover"
        />
      </div>

      {/* Image 3 */}
      <div className="flex justify-start" data-aos="fade-right">
        <img
          src={image3}
          alt="image3"
          className="w-[70%] md:w-[60%] h-[24vh] md:h-[54vh] -mt-10 md:-mt-[7%] object-cover"
        />
      </div>

      {/* Image 4 */}
      <div className="flex justify-end" data-aos="fade-left">
        <img
          src={image4}
          alt="image4"
          className="w-[70%] md:w-[68%] h-[24vh] md:h-[54vh] -mt-12 md:-mt-[15%] object-cover"
        />
      </div>
    </div>
  );
};

export default CollageImage;
