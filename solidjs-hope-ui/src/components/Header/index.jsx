import {
  Box,
  Anchor,
  Badge,
  Divider,
  Grid,
  GridItem,
  Image,
  InputGroup,
  Input,
  InputRightElement,
  IconButton,
  HStack,
} from "@hope-ui/solid";

import CircleIcon from "../CircleIcon";

function Header() {
  return (
    <Grid
      position="fixed"
      zIndex={999999}
      gridTemplateColumns="124px 700px 1fr"
      background="white"
      w="100%"
      gap="0px 24px"
      alignItems="center"
      justifyContent="center"
      gridAutoColumns="1fr"
      padding="12px 24px"
      boxShadow="0 1px 3px rgb(0 0 0 / 5%), 0 1px 2px rgb(0 0 0 / 10%)"
    >
      <GridItem>
        <Image
          src="/src/assets/logo.svg"
          objectFit="cover"
          alt="logo"
          htmlWidth={124}
          htmlHeight={48}
        />
      </GridItem>
      <GridItem>
        <InputGroup>
          <Input radius="md" placeholder="Unesi pojam za pretragu..." />
          <InputRightElement>
            <IconButton
              bgColor="rgb(255, 113, 48)"
              icon={<CircleIcon color="white" size={18} />}
              borderRadius="100%"
              _hover={{
                background: "rgb(255, 113, 48)",
              }}
              position="relative"
              right={-15}
            />
          </InputRightElement>
        </InputGroup>
      </GridItem>
      <GridItem display="flex" justifyContent="flex-end">
        <HStack spacing={4}>
          <HStack spacing={0}>
            <IconButton
              bgColor="white"
              icon={<CircleIcon color="black" size={18} />}
              _hover={{
                background: "white",
              }}
            />
            <Box position="relative">
              <Anchor>Lista zelja</Anchor>
              <Badge
                position="absolute"
                bg="black"
                color="white"
                borderRadius="md"
                top={-8}
                right={-8}
              >
                3
              </Badge>
            </Box>
          </HStack>
          <Divider orientation="vertical" />
          <IconButton
            bgColor="white"
            icon={<CircleIcon color="black" size={18} />}
            _hover={{
              background: "white",
            }}
          />
          <Divider orientation="vertical" />
          <Box position="relative">
            <IconButton
              bgColor="white"
              icon={<CircleIcon color="black" size={18} />}
              _hover={{
                background: "white",
              }}
            />
            <Badge
              position="absolute"
              bg="black"
              color="white"
              borderRadius="md"
              top={-2}
              right={-2}
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
