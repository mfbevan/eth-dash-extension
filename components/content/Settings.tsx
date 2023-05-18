import { Checkbox, Flex, Spinner, Text } from "@chakra-ui/react";
import { SettingsKey } from "../../constants/settings";
import { CurrentSettingsQueryKey, useGetSettings } from "../../query";
import { StorageService } from "../../services";
import { useQueryClient } from "react-query";

export const Settings = () => {
  const queryClient = useQueryClient();
  const { data: currentSettings } = useGetSettings();

  const updateFlag = (flag: SettingsKey, value: boolean) => {
    StorageService.setItem(flag, value ? "true" : "false");
    queryClient.invalidateQueries(CurrentSettingsQueryKey);
  };

  if (!currentSettings) return <Spinner />;

  return (
    <Flex flexDirection="column">
      <Flex gap="10px" p="2px">
        <Checkbox
          isChecked={currentSettings["show-testnet-explorers" as SettingsKey]}
          checked={currentSettings["show-testnet-explorers" as SettingsKey]}
          onChange={(e) =>
            updateFlag("show-testnet-explorers", e.target.checked)
          }
        >
          Show testnet explorers in wallet tracker
        </Checkbox>
      </Flex>
    </Flex>
  );
};
