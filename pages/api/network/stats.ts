import { apiHandler } from "../../../api";
import { NextApiRequest, NextApiResponse } from "next/types";
import { NextHandler } from "next-connect";

export interface NetworkStatsResponse {
  etherPrice: string;
  totalSupply: string;
  gas: {
    low: string;
    average: string;
    high: string;
  };
}

export default apiHandler().get(
  (
    req: NextApiRequest,
    res: NextApiResponse<NetworkStatsResponse>,
    next: NextHandler
  ) => {
    res.status(200).send({
      etherPrice: "1234.56",
      totalSupply: "999999999999",
      gas: {
        low: "123",
        average: "456",
        high: "789",
      },
    });
  }
);
