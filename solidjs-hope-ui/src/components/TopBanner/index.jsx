import { onMount } from "solid-js";
import { Box, Image } from "@hope-ui/solid";
import EmblaCarousel from "embla-carousel";

function TopBanner() {
  onMount(() => {
    const emblaNode = document.querySelector(".embla");
    const options = { loop: true };
    const embla = EmblaCarousel(emblaNode, options);
  });

  return (
    <Box borderRadius={10} overflow="hidden">
      <div className="embla">
        <div className="embla__container">
          <div className="embla__slide">
            <Image
              src="https://images.unsplash.com/photo-1662226699990-3a01a4798e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
              objectFit="cover"
              alt="img 1"
              htmlWidth={1277}
              objectFit="cover"
              htmlHeight={320}
            />
          </div>
          <div className="embla__slide">
            <Image
              src="https://images.unsplash.com/photo-1662309939831-91e791f03acf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80"
              objectFit="cover"
              alt="img 2"
              htmlWidth={1277}
              objectFit="cover"
              htmlHeight={320}
            />
          </div>
          <div className="embla__slide">
            <Image
              src="https://images.unsplash.com/photo-1662286844552-81c31af1416c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              objectFit="cover"
              alt="img 3"
              htmlWidth={1277}
              objectFit="cover"
              htmlHeight={320}
            />
          </div>
        </div>
      </div>
    </Box>
  );
}

export default TopBanner;
