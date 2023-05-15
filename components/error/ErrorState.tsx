import { Flex, Text } from "@chakra-ui/react";

export const ErrorState = () => (
  <Flex flexDirection="column" textAlign="center">
    <Text fontSize="6xl">🫤</Text>
    <Text fontSize="2xl">Something went wrong...</Text>
    <Text fontSize="lg">Try reloading your extension or try again later</Text>
  </Flex>
);
