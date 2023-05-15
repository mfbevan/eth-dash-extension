import { Flex } from "@chakra-ui/react";
import { StatItem } from "../stats";
import { useGetNetworkStats } from "../../query";
import { ErrorState } from "../error";

export const NetworkStats = () => {
  const { data, isFetching } = useGetNetworkStats();

  if (!isFetching && !data) {
    return <ErrorState />;
  }

  const fetchedData = data?.data;

  return (
    <Flex flexDirection="column" gap="20px">
      <Flex gap="20px">
        <StatItem
          label="Ether Price"
          value={fetchedData?.etherPrice}
          isLoading={isFetching}
        />
        <StatItem
          label="Total Supply"
          value={fetchedData?.totalSupply}
          isLoading={isFetching}
        />
      </Flex>

      <Flex gap="20px">
        <StatItem
          label="Gas Low"
          value={fetchedData?.gas?.low}
          color="green.500"
          isLoading={isFetching}
        />
        <StatItem
          label="Gas Average"
          value={fetchedData?.gas?.average}
          color="blue.500"
          isLoading={isFetching}
        />
        <StatItem
          label="Gas High"
          value={fetchedData?.gas?.high}
          color="red.500"
          isLoading={isFetching}
        />
      </Flex>
    </Flex>
  );
};
