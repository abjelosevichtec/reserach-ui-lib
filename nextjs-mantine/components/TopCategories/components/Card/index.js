import Image from "next/image";
import { Card, Text } from "@mantine/core";

function CardComponent({ title, imageSrc }) {
  return (
    <Card className="!p-0" shadow="xs" radius="md" withBorder>
      <Card.Section className="relative w-full !m-0 h-[277px]">
        <Image
          src={imageSrc}
          objectFit="cover"
          layout="fill"
          alt={`Kategorija ${title}`}
        />
      </Card.Section>
      <Card.Section className="p-4 !m-0">
        <Text weight={600} align="center" size={18}>
          {title}
        </Text>
      </Card.Section>
    </Card>
  );
}

export default CardComponent;
