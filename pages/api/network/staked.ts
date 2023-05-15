import { apiHandler } from "../../../api";
import { NextApiRequest, NextApiResponse } from "next/types";
import { NextHandler } from "next-connect";

export interface NetworkStakedResponse {
  validators: string;
  totalStaked: string;
}

export default apiHandler().get(
  (
    req: NextApiRequest,
    res: NextApiResponse<NetworkStakedResponse>,
    next: NextHandler
  ) => {
    res.status(200).send({
      validators: "123,456",
      totalStaked: "999999999999",
    });
  }
);
