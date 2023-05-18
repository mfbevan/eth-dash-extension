import {
  useColorModeValue,
  Button,
  Flex,
  Spacer,
  Tooltip,
} from "@chakra-ui/react";
import { DarkModeButton } from "../buttons";
import { useNavigationStore } from "../../stores";
import { navigationTabs } from "../../constants";

export const NavigationButtons = () => {
  const { page, setPage } = useNavigationStore();

  const selectedBg = useColorModeValue("gray.200", "gray.800");

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
              bg={selected ? selectedBg : "none"}
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
