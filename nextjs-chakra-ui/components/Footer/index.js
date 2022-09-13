import Image from "next/image";
import {
  Box,
  Text,
  Link,
  Container,
  IconButton,
  HStack,
  VStack,
} from "@chakra-ui/react";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons";
import data from "./data.json";

function Footer() {
  const groups = data.data.map((group) => {
    const links = group.links.map((link, index) => (
      <Link
        key={index}
        href={link.link}
        onClick={(event) => event.preventDefault()}
        color="gray.500"
      >
        {link.label}
      </Link>
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
      py={4}
      bg="gray.100"
      borderTop="1px solid gray.300"
    >
      <Container display="flex" justifyContent="space-between">
        <Box maxW="200px">
          <Image
            layout="fixed"
            src="/logo.svg"
            alt="logo"
            width={124}
            height={48}
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
      >
        <Text color="dimmed" size="sm">
          © 2020 mantine.dev. All rights reserved.
        </Text>

        <HStack spacing={0} justifyContent="flex-end">
          <IconButton icon={<IconBrandTwitter size={18} stroke={1.5} />} />
          <IconButton icon={<IconBrandYoutube size={18} stroke={1.5} />} />
          <IconButton icon={<IconBrandInstagram size={18} stroke={1.5} />} />
        </HStack>
      </Container>
    </Box>
  );
}

export default Footer;
