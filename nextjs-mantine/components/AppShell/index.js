import { useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Title,
  Text,
  Footer,
  Box,
  MediaQuery,
  Burger,
  useMantineTheme,
  Container,
} from "@mantine/core";

import HeaderComponent from "./components/Header";
import FooterComponent from "../Footer";
import TopProducts from "./components/TopProducts";
import Hero from "./components/Hero";
import Featured from "./components/Featured";
import Form from "./components/Form";

function Shell() {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();

  return (
    <AppShell
      padding="md"
      navbarOffsetBreakpoint="sm"
      header={<HeaderComponent />}
      footer={<FooterComponent />}
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <Container>
        <Form />
        {/* <TopProducts />
        <Hero />
        <Featured /> */}
      </Container>
    </AppShell>
  );
}

export default Shell;
