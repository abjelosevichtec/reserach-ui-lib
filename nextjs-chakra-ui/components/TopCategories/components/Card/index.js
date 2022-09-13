import { Box, Image, Text } from "@chakra-ui/react";

function CardComponent({ title, imageSrc }) {
  return (
    <Box shadow="xs" borderRadius="md" overflow="hidden">
      <Box position="relative" w="full" h="277px">
        <Image
          src={imageSrc}
          objectFit="cover"
          layout="fill"
          alt={`Kategorija ${title}`}
        />
      </Box>
      <Text fontWeight={600} align="center" size={18} py={2}>
        {title}
      </Text>
    </Box>
  );
}

export default CardComponent;
