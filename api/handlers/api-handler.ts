import { NextApiRequest, NextApiResponse } from "next/types";
import nc from "next-connect";

import { InternalServerError } from "../errors";

/**
 * Generic next API handler with error catching
 */
export const apiHandler = () =>
  nc<NextApiRequest, NextApiResponse>({
    onError: (err, req, res, next) => {
      // eslint-disable-next-line no-console
      console.error("API Error", { status: err.status, message: err });
      res
        .status(err.status ? err.status : InternalServerError.statusCode)
        .end(
          err.status !== 500
            ? err.message ?? InternalServerError.message
            : InternalServerError.message
        );
    },
    onNoMatch: (req, res) => {
      res.status(404).end("Not Found");
    },
  });
