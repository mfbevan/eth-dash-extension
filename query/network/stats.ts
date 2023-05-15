import { useQuery } from "react-query";
import { apiInstance } from "../../api";
import { NetworkStatsResponse } from "../../pages/api/network/stats";

export const GetNetworkStatsQueryKey = "get-network-stats";

export const getNetworkStats = async (): Promise<NetworkStatsResponse> =>
  apiInstance.get("/network/stats");

export const useGetNetworkStats = () => {
  return useQuery({
    queryKey: [GetNetworkStatsQueryKey],
    queryFn: getNetworkStats,
  });
};
