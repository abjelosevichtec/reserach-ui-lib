import { SimpleGrid } from "@mantine/core";
import { Carousel } from "@mantine/carousel";

import Card from "./components/Card";

function TopProducts() {
  return (
    <Carousel
      classNames={{
        root: "pb-10 !overflow-visible",
        viewport: "overflow-hidden",
        indicators: "!bottom-0",
        indicator: "!bg-gray-500 rounded-full !w-4 !h-4",
        controls:
          "!p-0 [&>:nth-child(1)]:absolute [&>:nth-child(1)]:!left-[-12px] [&>:nth-child(2)]:absolute [&>:nth-child(2)]:!right-[-12px]",
        control: "w-10 h-10 !opacity-100 [&>svg]:w-5 [&>svg]:h-5",
      }}
      mx="auto"
      withIndicators
      loop
      slideGap={12}
      previousControlLabel="Previous button"
      nextControlLabel="Next button"
    >
      <Carousel.Slide>
        <SimpleGrid
          cols={3}
          breakpoints={[
            { maxWidth: "lg", cols: 3 },
            { maxWidth: "xs", cols: 1 },
          ]}
        >
          <Card />
          <Card />
          <Card />
        </SimpleGrid>
      </Carousel.Slide>
      <Carousel.Slide>
        <SimpleGrid
          cols={3}
          breakpoints={[
            { maxWidth: "lg", cols: 3 },
            { maxWidth: "xs", cols: 1 },
          ]}
        >
          <Card />
          <Card />
          <Card />
        </SimpleGrid>
      </Carousel.Slide>
      <Carousel.Slide>
        <SimpleGrid
          cols={3}
          breakpoints={[
            { maxWidth: "lg", cols: 3 },
            { maxWidth: "xs", cols: 1 },
          ]}
        >
          <Card />
          <Card />
          <Card />
        </SimpleGrid>
      </Carousel.Slide>
      <Carousel.Slide>
        <SimpleGrid
          cols={3}
          breakpoints={[
            { maxWidth: "lg", cols: 3 },
            { maxWidth: "xs", cols: 1 },
          ]}
        >
          <Card />
          <Card />
          <Card />
        </SimpleGrid>
      </Carousel.Slide>
    </Carousel>
  );
}

export default TopProducts;
