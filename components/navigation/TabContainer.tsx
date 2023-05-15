import {
  Divider,
  Flex,
  TabPanel,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";

export const TabContainer = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <TabPanel
    as={Flex}
    display="flex"
    flexDirection="column"
    flex={1}
    boxShadow="inner"
    rounded="xl"
    m="20px"
    bg={useColorModeValue("gray.100", "gray.700")}
  >
    <Text variant="tab-title">{title}</Text>
    <Divider />
    {children}
  </TabPanel>
);
