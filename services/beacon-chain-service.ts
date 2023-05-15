import axios from "axios";
import { Epoch, ValidatorQueue } from "../types";

export type ApiStateIdentifier = number | "latest" | "finalized";

export class BeaconChainService {
  private static api = axios.create({
    baseURL: "https://beaconcha.in/api/v1",
  });

  public static async getEpoch(epoch: ApiStateIdentifier): Promise<Epoch> {
    const {
      data: { data },
    } = await this.api.get(`/epoch/${epoch}`);
    return data;
  }

  public static async getValidatorQueue(): Promise<ValidatorQueue> {
    const {
      data: { data },
    } = await this.api.get("/validators/queue");
    return data;
  }
}
