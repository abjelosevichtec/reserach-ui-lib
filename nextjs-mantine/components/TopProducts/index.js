import { Title, Anchor, Grid, SimpleGrid } from "@mantine/core";
import { Carousel } from "@mantine/carousel";

import CardGroup from "./components/CardGroup";

function TopProducts() {
  return (
    <Grid grow>
      <Grid.Col span={6}>
        <Title>Na akciji</Title>
      </Grid.Col>
      <Grid.Col span={6} align="right">
        <Anchor color="blue" variant="text">
          Pogledaj sve proizvode
        </Anchor>
      </Grid.Col>
      <Grid.Col span={12}>
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
          unstyled
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
        </Carousel>
      </Grid.Col>
    </Grid>
  );
}

export default TopProducts;
