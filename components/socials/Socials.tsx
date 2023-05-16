import { HStack, Tooltip, Link, Text, Flex, Center } from "@chakra-ui/react";
import { socials } from "../../constants";

export const Socials = () => (
  <Flex gap="15px" textAlign="center" justify="center">
    {socials.map(({ label, link, icon }) => (
      <Tooltip key={label} label={label} rounded="md">
        <Flex flexDirection="column">
          <Link href={link} target="_blank">
            <Center>{icon}</Center>
            <Text>{label}</Text>
          </Link>
        </Flex>
      </Tooltip>
    ))}
  </Flex>
);
