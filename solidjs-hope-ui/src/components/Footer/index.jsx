import {
  Box,
  Text,
  Anchor,
  Container,
  IconButton,
  HStack,
  VStack,
  Image,
} from "@hope-ui/solid";

import CircleIcon from "../CircleIcon";

import data from "./data.json";

function Footer() {
  const groups = data.data.map((group) => {
    const links = group.links.map((link, index) => (
      <Anchor
        key={index}
        href={link.link}
        onClick={(event) => event.preventDefault()}
        color="gray.500"
      >
        {link.label}
      </Anchor>
    ));

    return (
      <Box w="160px" key={group.title} mb={4}>
        <Text fontSize="lg" fontWeight={700} mb={2}>
          {group.title}
        </Text>

        <VStack spacing={2} alignItems="flex-start">
          {links}
        </VStack>
      </Box>
    );
  });

  return (
    <Box
      as="footer"
      mt="120px"
      py={16}
      bg="#00000007"
      borderTop="1px solid #0000000C"
    >
      <Container display="flex" justifyContent="space-between" maxW={1277}>
        <Box maxW="200px">
          <Image
            src="/src/assets/logo.svg"
            objectFit="cover"
            alt="logo"
            htmlWidth={124}
            htmlHeight={48}
          />
          <Text fontSize="xs" color="gray.400" mt={2}>
            Build fully functional accessible web applications faster than ever
          </Text>
        </Box>
        <Box display="flex" flexWrap="wrap">
          {groups}
        </Box>
      </Container>
      <Container
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        my={2}
        py={2}
        borderTop="1px solid gray.400"
        maxW={1277}
      >
        <Text color="dimmed" size="sm">
          © 2020 mantine.dev. All rights reserved.
        </Text>

        <HStack spacing={10} justifyContent="flex-end">
          <IconButton
            borderRadius="50%"
            bgColor="rgb(255, 113, 48)"
            icon={<CircleIcon size={18} stroke={1.5} />}
          />
          <IconButton
            borderRadius="50%"
            bgColor="rgb(255, 113, 48)"
            icon={<CircleIcon size={18} stroke={1.5} />}
          />
          <IconButton
            borderRadius="50%"
            bgColor="rgb(255, 113, 48)"
            icon={<CircleIcon size={18} stroke={1.5} />}
          />
        </HStack>
      </Container>
    </Box>
  );
}

export default Footer;
