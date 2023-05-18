import {
  Divider,
  Flex,
  IconButton,
  Input,
  Spacer,
  Text,
  Tooltip,
  chakra,
  useBoolean,
  useClipboard,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  FavouriteWallet,
  FavouriteWalletQueryKey as FavouriteWalletQueryKey,
  setFavouriteWallets,
  useFavouriteWallets,
} from "../../query/favourites";
import { useQueryClient } from "react-query";
import { AddIcon, CopyIcon, EditIcon, MinusIcon } from "@chakra-ui/icons";
import { shortenAddress } from "../../utils/shorten-address";
import { OpenWalletButton } from "../buttons";

export const Favourites = () => {
  const client = useQueryClient();
  const toast = useToast();

  const { data: favouriteWallets } = useFavouriteWallets();

  const [editMode, setEditMode] = useBoolean(false);
  const [newWallet, setWallet] = useState<FavouriteWallet>({
    name: "",
    address: "",
  });

  const handleAddWallet = async () => {
    if (
      favouriteWallets?.find(
        (wallet) => wallet.address === newWallet.address
      ) !== undefined
    ) {
      toast({
        title: "Wallet already exists",
        description: "This wallet is already in your favourites",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setFavouriteWallets(
      favouriteWallets ? [...favouriteWallets, newWallet] : [newWallet]
    );
    await client.invalidateQueries(FavouriteWalletQueryKey);
  };

  const handleRemoveWallet = async (wallet: string) => {
    setFavouriteWallets(
      favouriteWallets?.filter((_wallet) => _wallet.address !== wallet) ?? []
    );
    await client.invalidateQueries(FavouriteWalletQueryKey);
  };

  const copyToClipboard = (wallet: string) => {
    navigator.clipboard.writeText(wallet);
    toast({
      title: "Copied to clipboard",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const walletBgColor = useColorModeValue("gray.50", "gray.800");

  return (
    <Flex flexDirection="column" gap="20px">
      <IconButton
        right="30px"
        top="30px"
        position="absolute"
        size="sm"
        aria-label="edit-mode"
        onClick={setEditMode.toggle}
        icon={<EditIcon />}
      />
      <Flex p="10px" gap="10px" display={editMode ? "flex" : "none"}>
        <Input
          size="sm"
          rounded="lg"
          placeholder="Enter wallet name"
          value={newWallet.name}
          onChange={(e) => setWallet({ ...newWallet, name: e.target.value })}
        />
        <Input
          size="sm"
          rounded="lg"
          placeholder="Enter wallet address"
          value={newWallet.address}
          onChange={(e) => setWallet({ ...newWallet, address: e.target.value })}
        />

        <IconButton
          aria-label="add-wallet"
          icon={<AddIcon />}
          size="sm"
          colorScheme="gray"
          onClick={handleAddWallet}
        >
          Add
        </IconButton>
      </Flex>

      <Flex flexDirection="column" gap="10px" fontSize="0.8rem">
        {favouriteWallets && favouriteWallets.length > 0 ? (
          favouriteWallets?.map((wallet) => {
            return (
              <WalletContainer key={wallet.address} bg={walletBgColor}>
                <Text w="120px">{wallet.name}</Text>
                <Divider orientation="vertical" />
                <CopyContainer onClick={() => copyToClipboard(wallet.address)}>
                  <StyledTooltip label={wallet.address}>
                    <Text>
                      {shortenAddress(wallet.address, 10, 10)}
                      <CopyIcon ml="10px" />
                    </Text>
                  </StyledTooltip>
                </CopyContainer>
                <Spacer />
                <OpenWalletButton wallet={wallet} />
                {editMode && (
                  <IconButton
                    aria-label="remove-wallet"
                    size="xs"
                    icon={<MinusIcon />}
                    onClick={() => handleRemoveWallet(wallet.address)}
                  />
                )}
              </WalletContainer>
            );
          })
        ) : (
          <Text>Click the Edit Button in the top right to add wallets</Text>
        )}
      </Flex>
    </Flex>
  );
};

const StyledTooltip = chakra(Tooltip, {
  baseStyle: {
    fontSize: "0.8rem",
    rounded: "md",
  },
});

const WalletContainer = chakra(Flex, {
  baseStyle: {
    rounded: "lg",
    alignItems: "center",
    p: "5px",
    pl: "10px",
    gap: "10px",
  },
});

const CopyContainer = chakra(Flex, {
  baseStyle: {
    gap: "10px",
    alignItems: "center",
    _hover: {
      cursor: "pointer",
    },
  },
});
