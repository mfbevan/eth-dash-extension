import { apiHandler } from "../../../api";
import { NextApiRequest, NextApiResponse } from "next/types";
import { NextHandler } from "next-connect";
import { cache } from "../../../api/middleware/cache";
import { EtherscanService } from "../../../services";

export interface NetworkStatsResponse {
  etherPrice: string;
  totalSupply: string;
  marketCap: string;
  etherBTC: string;
  gas: {
    low: string;
    average: string;
    high: string;
  };
}

export default apiHandler()
  // TODO enable cache
  // .use(cache())
  .get(
    async (req: NextApiRequest, res: NextApiResponse<NetworkStatsResponse>) => {
      const { totalSupply, totalSupplyWei } =
        await EtherscanService.getEtherSupply();
      const { etherPrice, etherBTC } = await EtherscanService.getEtherPrice();

      const { low, average, high } = await EtherscanService.getGasPrices();

      const marketCap = parseFloat(
        (parseFloat(etherPrice) * parseFloat(totalSupplyWei)).toFixed(0)
      ).toLocaleString();

      res.status(200).send({
        etherPrice: `$${etherPrice}`,
        marketCap: `$${marketCap}`,
        etherBTC,
        totalSupply,
        gas: {
          low,
          average,
          high,
        },
      });
    }
  );
