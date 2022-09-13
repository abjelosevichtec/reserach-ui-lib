import Image from "next/image";

import {
  Box,
  Group,
  Divider,
  TextInput,
  ActionIcon,
  Indicator,
  Anchor,
} from "@mantine/core";
import {
  IconSearch,
  IconHeart,
  IconUserPlus,
  IconShoppingCart,
} from "@tabler/icons";

function Header() {
  return (
    <Box className="shadow fixed py-4 px-4 items-center justify-center grid grid-cols-header auto-cols-fr gap-x-6 gap-y-0 w-full bg-white z-[99999]">
      <Image
        layout="fixed"
        src="/logo.svg"
        alt="logo"
        width={124}
        height={48}
      />
      <TextInput
        radius="md"
        placeholder="Unesi pojam za pretragu..."
        rightSection={
          <ActionIcon
            size={36}
            className="-right-[10px] !rounded-full !bg-primary-orange"
            aria-label="Search button"
          >
            <IconSearch color="white" size={18} />
          </ActionIcon>
        }
      />
      <Group align="center" position="right">
        <Group spacing={8}>
          <ActionIcon
            color="dark"
            className="hover:!bg-white"
            aria-label="Favorites"
          >
            <IconHeart size={18} />
          </ActionIcon>
          <Indicator
            color="dark"
            label="10"
            size={20}
            inline
            aria-label="Wishlist"
          >
            <Anchor variant="text">Lista zelja</Anchor>
          </Indicator>
        </Group>
        <Divider orientation="vertical" />
        <ActionIcon
          color="dark"
          className="hover:!bg-white"
          aria-label="Profile"
        >
          <IconUserPlus size={18} />
        </ActionIcon>
        <Divider orientation="vertical" />
        <Indicator color="dark" label="0" size={20} inline>
          <ActionIcon
            color="dark"
            className="hover:!bg-white"
            aria-label="Cart"
          >
            <IconShoppingCart size={18} />
          </ActionIcon>
        </Indicator>
      </Group>
    </Box>
  );
}

export default Header;
