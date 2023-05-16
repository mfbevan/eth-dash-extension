import { Flex } from "@chakra-ui/react";
import { useGetNetworkStats } from "../../query";
import { ErrorState, FixedLoading, StatItem } from "..";

export const NetworkStats = () => {
  const { data, isLoading, isFetching } = useGetNetworkStats();

  if (!isLoading && !data) {
    return <ErrorState />;
  }

  const fetchedData = data?.data;

  return (
    <Flex flexDirection="column" gap="20px">
      <FixedLoading isLoading={isFetching} />
      <Flex gap="20px">
        <StatItem
          label="Ether Price"
          value={fetchedData?.etherPrice}
          unit="USD"
          isLoading={isLoading}
        />
        <StatItem
          label="Ether/BTC Ratio"
          value={fetchedData?.etherBTC}
          isLoading={isLoading}
        />
      </Flex>

      <Flex gap="20px">
        <StatItem
          label="Total Supply"
          value={fetchedData?.totalSupply}
          isLoading={isLoading}
        />
        <StatItem
          label="Market Capitalization"
          value={fetchedData?.marketCap}
          unit="USD"
          isLoading={isLoading}
        />
      </Flex>

      <Flex gap="20px">
        <StatItem
          label="Gas Low"
          value={fetchedData?.gas?.low}
          unit="gwei"
          color="green.500"
          isLoading={isLoading}
        />
        <StatItem
          label="Gas Average"
          value={fetchedData?.gas?.average}
          unit="gwei"
          color="blue.500"
          isLoading={isLoading}
        />
        <StatItem
          label="Gas High"
          value={fetchedData?.gas?.high}
          unit="gwei"
          color="red.500"
          isLoading={isLoading}
        />
      </Flex>
    </Flex>
  );
};
