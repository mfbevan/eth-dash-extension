import { useQuery } from "react-query";
import { apiInstance } from "../../api";
import { NetworkStakedResponse } from "../../pages/api/network/staked";
import { AxiosResponse } from "axios";

export const GetNetworkStakedQueryKey = "get-network-staked";

export const getNetworkStaked = async (): Promise<
  AxiosResponse<NetworkStakedResponse>
> => apiInstance.get("/network/staked");

export const useGetNetworkStaked = () => {
  return useQuery({
    queryKey: [GetNetworkStakedQueryKey],
    queryFn: getNetworkStaked,
  });
};
