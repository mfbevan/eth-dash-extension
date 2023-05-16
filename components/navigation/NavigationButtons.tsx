import {
  useColorModeValue,
  Button,
  Flex,
  Spacer,
  Tooltip,
} from "@chakra-ui/react";
import { DarkModeButton } from "../buttons";
import { navigationTabs, useNavigationStore } from "../../stores";

export const NavigationButtons = () => {
  const { page, setPage } = useNavigationStore();

  const selectedBorder = useColorModeValue(
    "var(--chakra-colors-gray-200)",
    "var(--chakra-colors-gray-600)"
  );

  return (
    <Flex
      flexDirection="column"
      w="50px"
      boxShadow="base"
      bg={useColorModeValue("gray.50", "gray.700")}
    >
      {Object.entries(navigationTabs).map(([title, { icon, index }]) => {
        const selected = page === index;
        return (
          <Tooltip key={title} label={title}>
            <Button
              onClick={() => {
                setPage(index);
              }}
              rounded="lg"
              boxSize="50px"
              _hover={{
                boxShadow: "base",
              }}
              bg="none"
              borderRight={selected ? `4px solid ${selectedBorder}` : ""}
              transition="all 0.1s ease"
              boxShadow={selected ? "base" : "none"}
            >
              {icon}
            </Button>
          </Tooltip>
        );
      })}
      <Spacer />
      <DarkModeButton />
    </Flex>
  );
};
