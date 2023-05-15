import { StyleFunctionProps, extendTheme } from "@chakra-ui/react";
import { colors } from "./colors";
import { fonts } from "./fonts";

export const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
  colors,
  fonts,
  components: {
    Text: {
      variants: {
        "tab-title": {
          fontSize: "xl",
          fontWeight: "bold",
        },
      },
    },
  },
});
