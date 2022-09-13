import Head from "next/head";

import { Container, Stack } from "@mantine/core";

import Header from "../components/Header";
import Footer from "../components/Footer";
import TopBanner from "../components/TopBanner";
import TopProducts from "../components/TopProducts";
import TopCategories from "../components/TopCategories";

import AppShell from "../components/AppShell";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppShell />

      {/* <Header />

      <Container size="1204px" pt={120}>
        <Stack spacing={40}>
          <TopBanner />
          <TopProducts />
          <TopCategories />
          <TopProducts />
          <TopCategories />
        </Stack>
      </Container>

      <Footer /> */}
    </div>
  );
}