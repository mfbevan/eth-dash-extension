import {
  Tabs,
  TabPanels,
  TabPanel,
  Text,
  Flex,
  chakra,
} from "@chakra-ui/react";
import { navigationTabs, useNavigationStore } from "../stores";
import { NavigationButtons } from "./NavigationButtons";
import { TabContainer } from "./TabContainer";

export const Navigation = () => {
  const { page, setPage } = useNavigationStore();

  return (
    <Flex flexDirection="row" h="full">
      <NavigationButtons />
      <Tabs
        isLazy
        index={page}
        onChange={setPage}
        display="flex"
        flexDirection="row"
        variant="unstyled"
      >
        <TabPanels>
          {Object.entries(navigationTabs).map(([title, { Content }]) => {
            return (
              <TabContainer key={title} title={title}>
                <Content />
              </TabContainer>
            );
          })}
        </TabPanels>
      </Tabs>
    </Flex>
  );
};
