import { Flex } from "@chakra-ui/react";
import { StatItem } from "../stats";
import { useGetNetworkStaked } from "../../query";
import { ErrorState } from "../error";

export const NetworkStaked = () => {
  const { data, isLoading } = useGetNetworkStaked();

  if (!isLoading && !data) {
    return <ErrorState />;
  }

  const fetchedData = data?.data;

  return (
    <Flex flexDirection="column">
      <Flex gap="20px">
        <StatItem
          label="Staked Ether"
          value={fetchedData?.totalStaked}
          isLoading={isLoading}
        />
        <StatItem
          label="Total Validators"
          value={fetchedData?.validators}
          isLoading={isLoading}
        />
      </Flex>
    </Flex>
  );
};
