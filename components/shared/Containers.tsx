import { Flex, FlexProps, useColorModeValue } from "@chakra-ui/react";

export const AppContainer = (props: FlexProps) => {
  const bg = useColorModeValue("gray.50", "gray.800");
  return (
    <Flex
      h="full"
      w="full"
      direction="column"
      alignItems="flex-start"
      bg={bg}
      {...props}
    />
  );
};
