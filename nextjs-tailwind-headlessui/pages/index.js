import Head from "next/head";

import Header from "../components/Header";
import HeadingSection from "../components/HeadingSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="container pt-28 h-[2000px] mx-auto">
        <HeadingSection />
      </div>
    </>
  );
}
