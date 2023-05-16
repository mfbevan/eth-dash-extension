import { Text, chakra, useColorModeValue, Image, Flex } from "@chakra-ui/react";
import { IDashboard } from "../../constants";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

export const DashboardCard = ({ name, image, url, tags }: IDashboard) => (
  <Link href={url} target="_blank">
    <CardContainer
      bg={useColorModeValue("white", "gray.800")}
      borderColor={useColorModeValue("gray.100", "gray.900")}
    >
      <DashboardImage src={`dashboard-images/${image}`} alt={image} />
      <Flex>
        <Title>{name}</Title> <FiExternalLink />
      </Flex>
    </CardContainer>
  </Link>
);

const DashboardImage = chakra(Image, {
  baseStyle: {
    w: "210px",
    h: "138px",
    rounded: "md",
    objectFit: "cover",
  },
});

const Title = chakra(Text, {
  baseStyle: {
    maxW: "210px",
    noOfLines: 1,
    fontSize: "0.7rem",
    fontWeight: 600,
  },
});

const CardContainer = chakra(Flex, {
  baseStyle: {
    borderWidth: "1px",
    rounded: "lg",
    shadow: "lg",
    flexDirection: "column",
    justify: "center",
    alignItems: "center",
    gap: "10px",
    pb: "5px",
  },
});
