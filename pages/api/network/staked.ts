import { apiHandler } from "../../../api";
import { NextApiRequest, NextApiResponse } from "next/types";
import { NextHandler } from "next-connect";
import { BeaconChainService } from "../../../services";
import { parseUnits, formatEther } from "ethers";
import { cache } from "../../../api/middleware/cache";

export interface NetworkStakedResponse {
  validators: string;
  totalStaked: string;
  epoch: number;
  queueEntering: number;
  queueExiting: number;
}

export default apiHandler()
  .use(cache())
  .get(
    async (
      req: NextApiRequest,
      res: NextApiResponse<NetworkStakedResponse>,
      next: NextHandler
    ) => {
      const { eligibleether, epoch } = await BeaconChainService.getEpoch(
        "finalized"
      );

      const { beaconchain_entering, beaconchain_exiting, validatorscount } =
        await BeaconChainService.getValidatorQueue();

      res.status(200).send({
        validators: validatorscount.toLocaleString(),
        totalStaked: parseFloat(
          formatEther(parseUnits(eligibleether.toString(), "gwei"))
        ).toLocaleString(),
        epoch,
        queueEntering: beaconchain_entering,
        queueExiting: beaconchain_exiting,
      });
    }
  );
