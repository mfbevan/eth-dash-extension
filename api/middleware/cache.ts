import { NextApiRequest, NextApiResponse } from "next/types";
import { NextHandler } from "next-connect";

const DEFAULT_CACHE_TIME = 60; // 1 minute

/**
 * Middleware to add response caching to a Next.js serverless route
 *
 * Usage:
 *
 * ```ts
 * // For a default cache time of 60 seconds
 * export default apiHandler()
 *  .use(cache())
 *  .get(async (req, res) => { ... }
 *
 * // For a custom cache time of 100000 seconds
 * export default apiHandler()
 *  .use(cache(100000))
 *  .get(async (req, res) => { ... }
 * ```
 *
 * @param cacheTime The time to cache in seconds
 * @param req NextApiRequest
 * @param res NextApiResponse
 * @param next NextHandler
 */
export const cache =
  (cacheTime: number = DEFAULT_CACHE_TIME) =>
  (req: NextApiRequest, res: NextApiResponse, next: NextHandler) => {
    res.setHeader(
      "Cache-Control",
      `s-maxage=${cacheTime}, stale-while-revalidate`
    );
    next();
  };
