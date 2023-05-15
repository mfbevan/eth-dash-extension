import { StyleFunctionProps, extendTheme } from "@chakra-ui/react";
import { colors } from "./colors";

export const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
  colors,
  components: {
    Flex: {
      variants: {
        "app-container": {
          width: "100%",
          height: "100%",
          flexDirection: "column",
          bg: (props: StyleFunctionProps) =>
            props.colorMode === "dark" ? "gray.900" : "gray.50",
        },
      },
    },
  },
});
