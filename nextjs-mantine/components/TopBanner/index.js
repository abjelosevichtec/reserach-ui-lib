import { useRef } from "react";
import Image from "next/image";

import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import { IconHeart } from "@tabler/icons";
import { Box } from "@mantine/core";

function TopBanner() {
  const autoplay = useRef(Autoplay({ delay: 5000 }));

  return (
    <Box className="overflow-hidden rounded-lg">
      <Carousel
        classNames={{
          control:
            "!bg-transparent !text-white !border-0 !h-full hover:!bg-[#2d29261a]",
          controls: "!top-0 !h-full !p-0",
        }}
        mx="auto"
        withIndicators
        loop
        height={320}
        plugins={[autoplay.current]}
      >
        <Carousel.Slide>
          <Image
            layout="fixed"
            src="https://images.unsplash.com/photo-1662226699990-3a01a4798e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
            alt="img 1"
            width={1172}
            objectFit="cover"
            height={320}
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image
            layout="fixed"
            src="https://images.unsplash.com/photo-1662309939831-91e791f03acf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80"
            alt="img 2"
            width={1172}
            objectFit="cover"
            height={320}
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image
            layout="fixed"
            src="https://images.unsplash.com/photo-1662286844552-81c31af1416c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="img 3"
            width={1172}
            objectFit="cover"
            height={320}
          />
        </Carousel.Slide>
      </Carousel>
    </Box>
  );
}

export default TopBanner;
