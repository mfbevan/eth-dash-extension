import { TabPanel, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

export const TabContainer = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <TabPanel display="flex" flexDirection="column" flex={1}>
      <Text variant="tab-title">{title}</Text>
    </TabPanel>
  );
};
