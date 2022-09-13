import { onMount } from "solid-js";
import { Box, Grid, GridItem, Text, Heading, Anchor } from "@hope-ui/solid";
import EmblaCarousel from "embla-carousel";

import CardGroup from "./components/CardGroup";

function TopProducts({ carouselId }) {
  onMount(() => {
    const emblaNode = document.querySelector(`.embla-${carouselId}`);
    const options = { loop: true };
    const embla = EmblaCarousel(emblaNode, options);
  });

  return (
    <Grid w="100%" templateColumns="repeat(2, 1fr)">
      <GridItem>
        <Heading size="2xl">Na akciji</Heading>
      </GridItem>
      <GridItem display="flex" justifyContent="flex-end">
        <Anchor color="blue">Pogledaj sve proizvode</Anchor>
      </GridItem>
      <GridItem colSpan={2} pt={4}>
        <Box overflow="hidden">
          <div className={`embla-${carouselId}`}>
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
        </Box>
      </GridItem>
    </Grid>
  );
}

export default TopProducts;
