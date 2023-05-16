import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Divider,
  Flex,
  TabPanel,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { ReactNode } from "react";

export const TabContainer = ({
  title,
  description,
  children,
  link,
}: {
  title: string;
  description?: string;
  children: ReactNode;
  link?: string;
}) => {
  return (
    <TabPanel
      as={Flex}
      display="flex"
      flexDirection="column"
      flex={1}
      boxShadow="inner"
      rounded="xl"
      m="20px"
      bg={useColorModeValue("gray.100", "gray.700")}
      w="512px"
      maxH="368px"
    >
      <Text variant="tab-title">{title}</Text>
      <Text variant="tab-description">
        {description}
        {link && (
          <Link href={link} target="_blank">
            <ExternalLinkIcon ml="5px" />
          </Link>
        )}
      </Text>
      <Divider mt="5px" mb="10px" />
      <Flex flexDirection="column" overflowY="scroll">
        {children}
      </Flex>
    </TabPanel>
  );
};
