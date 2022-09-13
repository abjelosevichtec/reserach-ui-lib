import Image from "next/image";
import {
  Card,
  Text,
  Badge,
  Button,
  Group,
  Stack,
  Grid,
  Box,
} from "@mantine/core";
import { IconTruckDelivery } from "@tabler/icons";

function CardComponent({ price, title, imageSrc }) {
  return (
    <Card className="!p-0" shadow="xs" radius="md" withBorder>
      <Card.Section className="relative w-full h-[277px] !m-0">
        <Image
          src={imageSrc}
          objectFit="cover"
          layout="fill"
          alt={`Porizvod ${title}`}
        />
      </Card.Section>

      <Card.Section className="!p-4 !pt-0 !m-0 !h-[calc(50%-24px)] !flex !flex-col !justify-between">
        <Stack spacing={8} mt="md" mb="xs">
          <Text weight={500}>{title}</Text>
          <Group spacing={8}>
            <Badge color="blue" variant="light">
              direct
            </Badge>
            <Text>Mison</Text>
          </Group>
          <Group spacing={8}>
            <IconTruckDelivery color="green" size={18} />
            <Text size={12}>Besplatna dostava</Text>
          </Group>
        </Stack>
        <Grid grow gutter={0}>
          <Grid.Col span={12}>
            <Text strikethrough color="red">
              {price?.original}
            </Text>
          </Grid.Col>
          <Grid.Col span={6}>
            <Text>{price?.current}</Text>
          </Grid.Col>
          <Grid.Col span={6}>
            <Text align="right">Usteda</Text>
          </Grid.Col>
        </Grid>
      </Card.Section>
    </Card>
  );
}

export default CardComponent;
