import {
  Box,
  Button,
  Flex,
  Icon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { FavouriteWallet } from "../../query";
import { BsArrowRight } from "react-icons/bs";
import { ChevronRightIcon } from "@chakra-ui/icons";

const openWalletOptions: {
  title: string;
  baseUrl: string;
}[] = [
  {
    title: "Etherscan",
    baseUrl: "https://etherscan.io/address/",
  },
  {
    title: "OpenSea",
    baseUrl: "https://opensea.io/",
  },
  {
    title: "Polygon Explorer",
    baseUrl: "https://polygonscan.com/address/",
  },
  {
    title: "Optimism Explorer",
    baseUrl: "https://optimistic.etherscan.io/address/",
  },
  {
    title: "Arbitrum Explorer",
    baseUrl: "https://arbiscan.io/address/",
  },
];

/**
 * Open Wallet in explorer in new tab
 */
export const OpenWalletButton = ({
  wallet: { address },
}: {
  wallet: FavouriteWallet;
}) => (
  <Popover placement="top">
    <PopoverTrigger>
      <Button size="xs">Open</Button>
    </PopoverTrigger>
    <PopoverContent w="175px">
      <PopoverArrow />
      <PopoverBody>
        {openWalletOptions.map(({ title, baseUrl }) => (
          <Link href={`${baseUrl}${address}`} key={title}>
            <Box
              role="group"
              display="block"
              p="2px"
              pl="5px"
              rounded="md"
              _hover={{ bg: "blue.50" }}
              w="150px"
            >
              <Flex direction="row" align="center">
                <Box>
                  <Text
                    transition="all .3s ease"
                    _groupHover={{ color: "blue.500" }}
                    fontWeight={500}
                  >
                    {title}
                  </Text>
                </Box>
                <Flex
                  transition="all .3s ease"
                  transform="translateX(-10px)"
                  opacity={0}
                  _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
                  justify="flex-end"
                  align="center"
                  flex={1}
                >
                  <Icon color="blue.400" w={5} h={5} as={ChevronRightIcon} />
                </Flex>
              </Flex>
            </Box>
          </Link>
        ))}
      </PopoverBody>
    </PopoverContent>
  </Popover>
);
