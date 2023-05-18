import { Flex } from "@chakra-ui/react";
import { Dashboards } from "../dashboards/Dashboards";

export const Bookmarks = () => {
  return (
    <Flex flexDirection="column" gap="20px">
      <Dashboards />
    </Flex>
  );
};
