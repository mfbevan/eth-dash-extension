import { Flex, Text } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { apiInstance } from "../../api";
import { StatItem } from "../stats";
import axios from "axios";

export const NetworkStats = () => {
  const { data } = useQuery({
    queryFn: () => apiInstance.get("health"),
  });

  return (
    <Flex flexDirection="column" gap="20px">
      <Flex gap="20px">
        <StatItem label="Ether Price" value="$1200.00" />
        <StatItem label="Total Supply" value="100000000" />
      </Flex>

      <Flex gap="20px">
        <StatItem label="Gas Low" value="50 gwei" color="green.500" />
        <StatItem label="Gas Average" value="100 gwei" color="blue.500" />
        <StatItem label="Gas High" value="200 gwei" color="red.500" />
      </Flex>
    </Flex>
  );
};
