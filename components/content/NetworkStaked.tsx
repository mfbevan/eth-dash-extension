import { Flex } from "@chakra-ui/react";
import { StatItem } from "../stats";

export const NetworkStaked = () => {
  return (
    <Flex flexDirection="column">
      <Flex gap="20px">
        <StatItem label="Staked Ether" value="18,296,485" />
        <StatItem label="Total Validators" value="571,771" />
      </Flex>
    </Flex>
  );
};
