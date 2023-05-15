import { Flex, FlexProps, useColorModeValue } from "@chakra-ui/react";

export const AppContainer = (props: FlexProps) => {
  const bg = useColorModeValue("gray.50", "gray.800");

  return (
    <Flex
      id="app-container"
      h="400px"
      w="600px"
      direction="row"
      alignItems="flex-start"
      bg={bg}
      flex={1}
      {...props}
    />
  );
};
