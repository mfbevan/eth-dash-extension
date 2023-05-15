import axios from "axios";
import { formatEther, parseUnits } from "ethers";
import { formatBigNumberString } from "../utils";

export class EtherscanService {
  private static api = axios.create({
    baseURL: "https://api.etherscan.io/api",
    params: {
      apiKey: process.env.ETHERSCAN_API_KEY,
    },
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  public static async getEtherSupply() {
    const {
      data: {
        result: { EthSupply, Eth2Staking, BurntFees },
      },
    } = await this.api.get("", {
      params: {
        module: "stats",
        action: "ethSupply2",
      },
    });

    const ethSupply = parseUnits(EthSupply, "wei");
    const stakingFees = parseUnits(Eth2Staking, "wei");
    const burntFees = parseUnits(BurntFees, "wei");

    const etherSupply = ethSupply + stakingFees - burntFees;

    return {
      totalSupply: formatBigNumberString(formatEther(etherSupply), 2),
      totalSupplyWei: formatEther(etherSupply),
    };
  }

  public static async getEtherPrice() {
    const {
      data: {
        result: { ethusd, ethbtc },
      },
    } = await this.api.get("", {
      params: {
        module: "stats",
        action: "ethprice",
      },
    });

    return {
      etherPrice: ethusd,
      etherBTC: ethbtc,
    };
  }

  public static async getGasPrices() {
    const {
      data: {
        result: { SafeGasPrice, ProposeGasPrice, FastGasPrice },
      },
    } = await this.api.get("", {
      params: {
        module: "gastracker",
        action: "gasoracle",
      },
    });

    return {
      low: SafeGasPrice,
      average: ProposeGasPrice,
      high: FastGasPrice,
    };
  }
}
