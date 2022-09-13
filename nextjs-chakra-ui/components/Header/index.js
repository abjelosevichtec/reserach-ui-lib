import Image from "next/image";

import {
  Box,
  Grid,
  GridItem,
  InputGroup,
  Input,
  InputRightElement,
  IconButton,
  HStack,
  Link,
  Badge,
  Divider,
} from "@chakra-ui/react";

import {
  IconSearch,
  IconHeart,
  IconUserPlus,
  IconShoppingCart,
} from "@tabler/icons";

function Header() {
  return (
    <Grid
      position="fixed"
      zIndex={999999}
      gridTemplateColumns="124px 700px 1fr"
      background="white"
      w="full"
      gap="0px 24px"
      alignItems="center"
      justifyContent="center"
      gridAutoColumns="1fr"
      padding="12px 24px"
      boxShadow="0 1px 3px rgb(0 0 0 / 5%), 0 1px 2px rgb(0 0 0 / 10%)"
    >
      <GridItem>
        <Image
          layout="fixed"
          src="/logo.svg"
          alt="logo"
          width={124}
          height={48}
        />
      </GridItem>
      <GridItem>
        <InputGroup>
          <Input radius="md" placeholder="Unesi pojam za pretragu..." />
          <InputRightElement>
            <IconButton
              bgColor="rgb(255, 113, 48)"
              icon={<IconSearch color="white" size={18} />}
              borderRadius="full"
              _hover={{
                background: "rgb(255, 113, 48)",
              }}
              position="relative"
              right={-3}
            />
          </InputRightElement>
        </InputGroup>
      </GridItem>
      <GridItem display="flex" justifyContent="flex-end">
        <HStack spacing={4}>
          <HStack spacing={0}>
            <IconButton
              bgColor="white"
              icon={<IconHeart size={18} />}
              _hover={{
                background: "white",
              }}
            />
            <Box position="relative">
              <Link>Lista zelja</Link>
              <Badge
                position="absolute"
                bg="black"
                color="white"
                borderRadius="md"
                top={-2}
                right={-2}
              >
                3
              </Badge>
            </Box>
          </HStack>
          <Divider orientation="vertical" />
          <IconButton
            bgColor="white"
            icon={<IconUserPlus size={18} />}
            _hover={{
              background: "white",
            }}
          />
          <Divider orientation="vertical" />
          <Box position="relative">
            <IconButton
              bgColor="white"
              icon={<IconShoppingCart size={18} />}
              _hover={{
                background: "white",
              }}
            />
            <Badge
              position="absolute"
              bg="black"
              color="white"
              borderRadius="md"
              top={0}
              right={0}
            >
              0
            </Badge>
          </Box>
        </HStack>
      </GridItem>
    </Grid>
  );
}

export default Header;
