import { SimpleGrid } from "@mantine/core";

import Card from "./components/Card";

function CardGroup() {
  return (
    <SimpleGrid cols={4} p={3}>
      <Card
        price={{
          original: "28.999 RSD",
          current: "22.999 RSD",
        }}
        title="BEKO Frižider RSSE265K30WN"
        imageSrc="https://images.unsplash.com/photo-1662321791202-f7b0a54f9121?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
      />
      <Card
        price={{
          original: "21.999 RSD",
          current: "20.999 RSD",
        }}
        title="BEKO Mašina za pranje i sušenje veša HTV8716XO"
        imageSrc="https://images.unsplash.com/photo-1662328726445-420b076334ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
      />
      <Card
        price={{
          original: "18.999 RSD",
          current: "12.999 RSD",
        }}
        title="MISS MERYEM Ženska satenska pidžama sa poljupcima"
        imageSrc="https://images.unsplash.com/photo-1662314964544-7d75abce9ee2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
      />
      <Card
        price={{
          original: "8.999 RSD",
          current: "2.999 RSD",
        }}
        title="KAPPA Ženski gornji deo trenerke 222 Banda Wanniston Slim crveni"
        imageSrc="https://images.unsplash.com/photo-1662323510625-1b2912f71688?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
      />
    </SimpleGrid>
  );
}

export default CardGroup;
