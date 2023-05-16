import { Flex } from "@chakra-ui/react";
import { useGetNetworkStats } from "../../query";
import { ErrorState, FixedLoading, StatItem } from "..";

const favourites = [
  "0x12345780317480210384091",
  "0x12345780317480210384092",
  "0x12345780317480210384093",
  "0x12345780317480210384094",
];

export const Favourites = () => {
  return (
    <Flex flexDirection="column" gap="20px">
      {/* <FixedLoading isLoading={isFetching} /> */}
    </Flex>
  );
};
