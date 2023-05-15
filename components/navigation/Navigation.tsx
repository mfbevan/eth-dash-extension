import { Tabs, TabPanels, TabPanel } from "@chakra-ui/react";
import { useNavigationStore } from "../stores";
import { NavigationButtons } from "./NavigationButtons";

export const Navigation = () => {
  const { page, setPage } = useNavigationStore();

  return (
    <Tabs index={page} onChange={setPage} flexDirection="row">
      <NavigationButtons />
      <TabPanels>
        <TabPanel>
          <p>Click the tabs or pull the slider around</p>
        </TabPanel>
        <TabPanel>
          <p>Yeah yeah. up?</p>
        </TabPanel>
        <TabPanel>
          <p>Oh, hello there.</p>
        </TabPanel>
        <TabPanel>
          <p>Content</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
