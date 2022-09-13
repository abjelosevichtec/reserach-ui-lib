import useEmblaCarousel from "embla-carousel-react";

import CardGroup from "./components/CardGroup";

function TopProducts() {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <div className="grid items-center grid-cols-2">
      <h1 className="text-4xl">Na akciji</h1>
      <a href="#" className="flex justify-end text-blue-600 no-underline">
        Pogledaj sve proizvode
      </a>
      <div className="col-span-2 mt-2">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            <div className="embla__slide">
              <CardGroup />
            </div>
            <div className="embla__slide">
              <CardGroup />
            </div>
            <div className="embla__slide">
              <CardGroup />
            </div>
          </div>
        </div>
        {/* <Carousel
          className={classes.carousel}
          mx="auto"
          withIndicators
          loop
          slideGap={12}
        >
          <Carousel.Slide>
            <CardGroup />
          </Carousel.Slide>
          <Carousel.Slide>
            <CardGroup />
          </Carousel.Slide>
          <Carousel.Slide>
            <CardGroup />
          </Carousel.Slide>
          <Carousel.Slide>
            <CardGroup />
          </Carousel.Slide>
        </Carousel> */}
      </div>
    </div>
  );
}

export default TopProducts;
