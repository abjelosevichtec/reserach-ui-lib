import {
  Box,
  Grid,
  GridItem,
  Text,
  HStack,
  VStack,
  Badge,
  Image,
} from "@hope-ui/solid";
import CircleIcon from "../../../../../CircleIcon";

function CardComponent({ price, title, imageSrc }) {
  return (
    <Box
      borderWidth="1px"
      borderColor="#00000038"
      borderRadius="10px"
      overflow="hidden"
    >
      <Box position="relative" w="full" h="277px">
        <Image
          src={imageSrc}
          objectFit="cover"
          alt={`Poroizvod ${title}`}
          htmlHeight={277}
          htmlWidth="100%"
        />
      </Box>

      <VStack
        p={4}
        alignItems="flex-start"
        justifyContent="space-between"
        h="calc(100% - 277px)"
      >
        <VStack spacing={3} alignItems="flex-start">
          <Text fontWeight={500}>{title}</Text>
          <HStack>
            <Badge colorScheme="green">direct</Badge>
            <Text>Mison</Text>
          </HStack>
          <HStack>
            <CircleIcon color="green" size={18} />
            <Text size={12}>Besplatna dostava</Text>
          </HStack>
        </VStack>
        <Grid w="full" templateColumns="repeat(2, 1fr)">
          <GridItem colSpan={2}>
            <Text as="s" color="red.500">
              {price?.original}
            </Text>
          </GridItem>
          <GridItem>
            <Text>{price?.current}</Text>
          </GridItem>
          <GridItem display="flex" justifyContent="flex-end">
            <Text align="right">Usteda</Text>
          </GridItem>
        </Grid>
      </VStack>
    </Box>
  );
}

export default CardComponent;
