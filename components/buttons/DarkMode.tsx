import {
  useColorMode,
  Button,
  Box,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export enum ColorMode {
  Light = "light",
  Dark = "dark",
}
export const DarkModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button
      boxSize="50px"
      onClick={toggleColorMode}
      // boxShadow="base"
      // bg={useColorModeValue("gray.50", "gray.700")}
      bg="none"
    >
      {colorMode === ColorMode.Light ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
};
