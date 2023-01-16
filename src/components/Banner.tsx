import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />

      <Carousel 
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <Image 
            src='https://links.papareact.com/gi1' 
            alt='' 
            loading="lazy"
            width={2000}
            height={500}
          />
        </div>

        <div>
          <Image 
            src='https://links.papareact.com/6ff' 
            alt='' 
            loading="lazy"
            width={2000}
            height={500}
          />
        </div>

        <div>
          <Image 
            src='https://links.papareact.com/7ma' 
            alt='' 
            loading="lazy"
            width={2000}
            height={500}
          />
        </div>
      </Carousel>
    </div>
  )
}
