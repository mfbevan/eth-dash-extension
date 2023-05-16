import {
  Text,
  chakra,
  useColorModeValue,
  Box,
  HStack,
  Spacer,
  Flex,
} from "@chakra-ui/react";
import { IDashboard } from "../../constants";
import { DashboardTag } from "./Tag";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

export const DashboardListItem = ({ name, url, tags }: IDashboard) => (
  <Link href={url} target="_blank">
    <DashboardItemContainer
      bg={useColorModeValue("white", "gray.800")}
      borderColor={useColorModeValue("gray.200", "gray.900")}
    >
      <Flex p="10px" w="full" gap="5px">
        <Title>{name}</Title>
        <Spacer flex={1} />
        {tags?.map((_tag) => (
          <DashboardTag key={_tag} tag={_tag} />
        ))}
        <FiExternalLink />
      </Flex>
    </DashboardItemContainer>
  </Link>
);

const Title = chakra(Text, {
  baseStyle: {
    fontSize: { base: "0.8rem", sm: "1rem" },
    noOfLines: 1,
    maxW: "240px",
  },
});

const DashboardItemContainer = chakra(Flex, {
  baseStyle: {
    w: "460px",
    h: "44px",
    border: "1px solid",
    rounded: "md",
    m: "3px",
    boxShadow: "base",
  },
});
