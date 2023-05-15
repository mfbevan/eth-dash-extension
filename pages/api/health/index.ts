import { apiHandler } from "../../../api";
import { NextApiRequest, NextApiResponse } from "next/types";
import { NextHandler } from "next-connect";

export default apiHandler().get(
  (req: NextApiRequest, res: NextApiResponse, next: NextHandler) => {
    res.status(200).send("Eth Dash API Healthy (get) 🚀");
  }
);
