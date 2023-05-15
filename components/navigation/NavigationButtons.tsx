import { TabList, Tab, Button, Spacer, DarkMode } from "@chakra-ui/react";
import { navigationTabs, useNavigationStore } from "../stores";

export const NavigationButtons = () => {
  const { page, setPage } = useNavigationStore();

  return (
    <TabList flexDirection="column" w="50px" h="full">
      {Object.entries(navigationTabs).map(([title, { icon }]) => (
        <Tab
          key={title}
          rounded="lg"
          boxSize="50px"
          _selected={{ boxShadow: "inner" }}
        >
          {icon}
        </Tab>
      ))}
      <DarkMode />
    </TabList>
  );
};
