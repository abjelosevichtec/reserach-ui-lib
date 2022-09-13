import { Box, Grid, GridItem, Text, Heading, Link } from "@chakra-ui/react";
import useEmblaCarousel from "embla-carousel-react";

import CardGroup from "./components/CardGroup";

function TopProducts() {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
  });

  return (
    <Grid w="full" templateColumns="repeat(2, 1fr)">
      <GridItem>
        <Heading>Na akciji</Heading>
      </GridItem>
      <GridItem display="flex" justifyContent="flex-end">
        <Link color="blue">Pogledaj sve proizvode</Link>
      </GridItem>
      <GridItem colSpan={2} pt={4}>
        <Box
          overflow="hidden"
          __css={{
            ".embla": {
              height: "auto",
            },
          }}
        >
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
        </Box>
      </GridItem>
    </Grid>
  );
}

export default TopProducts;
