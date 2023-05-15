import { Flex } from "@chakra-ui/react";
import { StatItem } from "../stats";
import { useGetNetworkStats } from "../../query";
import { ErrorState } from "../error";

export const NetworkStats = () => {
  const { data, isFetching } = useGetNetworkStats();

  if (!isFetching && !data) {
    return <ErrorState />;
  }

  return (
    <Flex flexDirection="column" gap="20px">
      <Flex gap="20px">
        <StatItem label="Ether Price" value="$1200.00" isLoading={isFetching} />
        <StatItem
          label="Total Supply"
          value="100000000"
          isLoading={isFetching}
        />
      </Flex>

      <Flex gap="20px">
        <StatItem
          label="Gas Low"
          value="50 gwei"
          color="green.500"
          isLoading={isFetching}
        />
        <StatItem
          label="Gas Average"
          value="100 gwei"
          color="blue.500"
          isLoading={isFetching}
        />
        <StatItem
          label="Gas High"
          value="200 gwei"
          color="red.500"
          isLoading={isFetching}
        />
      </Flex>
    </Flex>
  );
};
