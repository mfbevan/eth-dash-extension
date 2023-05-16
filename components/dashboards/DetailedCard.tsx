import { Text, chakra, useColorModeValue, Image, Flex } from "@chakra-ui/react";
import { IDashboard } from "../../constants";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

export const DashboardCardDetailed = ({
  name,
  image,
  url,
  tags,
  description,
}: IDashboard) => (
  <Link href={url} target="_blank">
    <Card
      bg={useColorModeValue("white", "gray.800")}
      borderColor={useColorModeValue("gray.100", "gray.900")}
    >
      <Flex>
        <DashboardImage src={`dashboard-images/${image}`} alt={image} />
        <Flex flexDirection="column" p="10px" alignContent="center">
          <Flex justify="center">
            <Title>{name}</Title> <FiExternalLink />
          </Flex>
          <Description>{description ?? ""}</Description>
        </Flex>
      </Flex>
    </Card>
  </Link>
);

const DashboardImage = chakra(Image, {
  baseStyle: {
    w: "200px",
    h: "138px",
    rounded: "md",
    objectFit: "cover",
  },
});

const Title = chakra(Text, {
  baseStyle: {
    fontSize: "0.8rem",
    fontWeight: 600,
  },
});

const Description = chakra(Text, {
  baseStyle: {
    fontSize: "0.8rem",
    textAlign: "center",
    h: { base: "100px", sm: "70px" },
  },
});

const Card = chakra(Flex, {
  baseStyle: {
    w: "460px",
    h: "140px",
    borderWidth: "1px",
    rounded: "lg",
    shadow: "lg",
  },
});
