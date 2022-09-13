import { Box, Image, Text } from "@hope-ui/solid";

function CardComponent({ title, imageSrc }) {
  return (
    <Box
      borderWidth="1px"
      borderColor="#00000038"
      borderRadius={10}
      overflow="hidden"
    >
      <Box position="relative" w="full" h="277px">
        <Image
          src={imageSrc}
          objectFit="cover"
          alt={`Kategorija ${title}`}
          htmlHeight={277}
          htmlWidth="100%"
        />
      </Box>
      <Text fontWeight={600} align="center" size={18} py={8}>
        {title}
      </Text>
    </Box>
  );
}

export default CardComponent;
