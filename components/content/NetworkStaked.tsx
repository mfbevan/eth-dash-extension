import { Flex, Text } from "@chakra-ui/react";
import { StatItem } from "../stats";
import { useGetNetworkStaked } from "../../query";
import { ErrorState } from "../error";
import { FixedLoading } from "../loading";

export const NetworkStaked = () => {
  const { data, isLoading, isFetching } = useGetNetworkStaked();

  if (!isLoading && !data) {
    return <ErrorState />;
  }

  const fetchedData = data?.data;

  return (
    <Flex flexDirection="column" gap="20px">
      <FixedLoading isLoading={isFetching} />
      <Flex gap="20px">
        <StatItem
          label="Deposit Queue"
          value={fetchedData?.queueEntering}
          isLoading={isLoading}
          color="green.500"
        />
        <StatItem
          label="Exit Queue"
          value={fetchedData?.queueExiting}
          isLoading={isLoading}
          color="red.500"
        />
        <StatItem
          label="Total Validators *"
          value={fetchedData?.validators}
          isLoading={isLoading}
        />
      </Flex>

      <Flex gap="20px">
        <StatItem
          label="Epoch *"
          value={fetchedData?.epoch}
          isLoading={isLoading}
        />
        <StatItem
          label="Staked Ether *"
          value={fetchedData?.totalStaked}
          isLoading={isLoading}
        />
      </Flex>
      <Text variant="tab-description" mt="-10px">
        * as of last finalized epoch
      </Text>
    </Flex>
  );
};
