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
  description,
  children,
}: {
  title: string;
  description?: string;
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
    <Text variant="tab-description">{description}</Text>
    <Divider mt="5px" mb="10px" />
    {children}
  </TabPanel>
);
