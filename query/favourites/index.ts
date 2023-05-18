import { useQuery } from "react-query";
import { StorageService } from "../../services";

export const FavouriteWalletQueryKey = "favourite-wallets";

export interface FavouriteWallet {
  name: string;
  address: string;
}

const getFavouriteWallets = async (): Promise<FavouriteWallet[]> => {
  const wallets = await StorageService.getItem(FavouriteWalletQueryKey);
  return wallets ? JSON.parse(wallets) : [];
};

export const useFavouriteWallets = () => {
  return useQuery({
    queryKey: [FavouriteWalletQueryKey],
    queryFn: getFavouriteWallets,
  });
};

export const setFavouriteWallets = (wallets: FavouriteWallet[]) => {
  StorageService.setItem(FavouriteWalletQueryKey, JSON.stringify(wallets));
};
