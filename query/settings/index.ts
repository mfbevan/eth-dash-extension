import { useQuery } from "react-query";
import { SettingsKey, settingsKeys } from "../../constants/settings";
import { StorageService } from "../../services";

export const CurrentSettingsQueryKey = "settings";

const getSettings = async (): Promise<Record<SettingsKey, boolean>> => {
  const currentSettings: Record<string, boolean> = {};

  await Promise.all(
    settingsKeys.map(async (key) => {
      const value = await StorageService.getItem(key);
      currentSettings[key] = !!value && value === "true";
    })
  );

  return currentSettings;
};

export const useGetSettings = () => {
  return useQuery({
    queryKey: [CurrentSettingsQueryKey],
    queryFn: getSettings,
  });
};
