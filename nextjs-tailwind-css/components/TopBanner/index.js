import { useRef } from "react";
import Image from "next/image";

import useEmblaCarousel from "embla-carousel-react";

import Autoplay from "embla-carousel-autoplay";
import { IconHeart } from "@tabler/icons";

function TopBanner() {
  const autoplay = useRef(Autoplay({ delay: 5000 }));
  const [emblaRef] = useEmblaCarousel({ loop: true }, [autoplay.current]);

  return (
    <div className="overflow-hidden rounded embla h-[320px]" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <Image
            layout="fixed"
            src="https://images.unsplash.com/photo-1662226699990-3a01a4798e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
            alt="img 1"
            width={1024}
            objectFit="cover"
            height={320}
          />
        </div>
        <div className="embla__slide">
          <Image
            layout="fixed"
            src="https://images.unsplash.com/photo-1662309939831-91e791f03acf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80"
            alt="img 1"
            width={1024}
            objectFit="cover"
            height={320}
          />
        </div>
        <div className="embla__slide">
          <Image
            layout="fixed"
            src="https://images.unsplash.com/photo-1662286844552-81c31af1416c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="img 1"
            width={1024}
            objectFit="cover"
            height={320}
          />
        </div>
      </div>
    </div>
  );
}

export default TopBanner;
