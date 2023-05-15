import { Flex } from "@chakra-ui/react";
import { StatItem } from "../stats";
import { useGetNetworkStaked } from "../../query";
import { ErrorState } from "../error";

export const NetworkStaked = () => {
  const { data, isFetching } = useGetNetworkStaked();

  if (!isFetching && !data) {
    return <ErrorState />;
  }

  const fetchedData = data?.data;

  return (
    <Flex flexDirection="column">
      <Flex gap="20px">
        <StatItem label="Staked Ether" value={fetchedData?.totalStaked} />
        <StatItem label="Total Validators" value={fetchedData?.validators} />
      </Flex>
    </Flex>
  );
};
