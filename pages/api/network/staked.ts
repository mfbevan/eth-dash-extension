import { apiHandler } from "../../../api";
import { NextApiRequest, NextApiResponse } from "next/types";
import { NextHandler } from "next-connect";
import { cache } from "../../../api/middleware/cache";

export interface NetworkStakedResponse {
  validators: string;
  totalStaked: string;
}

export default apiHandler()
  // TODO enable cache
  // .use(cache())
  .get(
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
