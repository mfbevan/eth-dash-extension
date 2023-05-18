import { Tabs, TabPanels, Flex } from "@chakra-ui/react";
import { NavigationButtons } from "./NavigationButtons";
import { TabContainer } from "./TabContainer";
import { useNavigationStore } from "../../stores";
import { navigationTabs } from "../../constants";

export const Navigation = () => {
  const { page, setPage } = useNavigationStore();

  return (
    <Flex flexDirection="row" h="full" w="full">
      <NavigationButtons />
      <Tabs
        w="full"
        isLazy
        index={page}
        onChange={setPage}
        display="flex"
        flexDirection="row"
        variant="unstyled"
      >
        <TabPanels>
          {Object.keys(navigationTabs).map((title) => {
            const { description, link, Content, index } = navigationTabs[title];
            return (
              <TabContainer
                key={index}
                title={title}
                description={description}
                link={link}
              >
                {Content && <Content />}
              </TabContainer>
            );
          })}
        </TabPanels>
      </Tabs>
    </Flex>
  );
};
