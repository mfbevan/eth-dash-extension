import { useColorModeValue, Button, Flex, Spacer } from "@chakra-ui/react";
import { navigationTabs, useNavigationStore } from "../stores";
import { DarkModeButton } from "../buttons";

export const NavigationButtons = () => {
  const { page, setPage } = useNavigationStore();

  const selectedBg = useColorModeValue("gray.50", "gray.700");

  return (
    <Flex flexDirection="column" w="50px" gap="10px">
      {Object.entries(navigationTabs).map(([title, { icon, index }]) => {
        const selected = page === index;
        return (
          <Button
            onClick={() => {
              setPage(index);
            }}
            key={title}
            rounded="lg"
            boxSize="50px"
            _hover={{
              boxShadow: "base",
            }}
            {...(selected
              ? { bg: selectedBg, boxShadow: "base" }
              : { bg: "transparent" })}
          >
            {icon}
          </Button>
        );
      })}
      <Spacer />
      <DarkModeButton />
    </Flex>
  );
};
