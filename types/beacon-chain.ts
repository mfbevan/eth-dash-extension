export interface Epoch {
  attestationscount: number;
  attesterslashingscount: number;
  averagevalidatorbalance: number;
  blockscount: number;
  depositscount: number;
  eligibleether: number;
  epoch: number;
  globalparticipationrate: number;
  missedblocks: number;
  orphanedblocks: number;
  proposedblocks: number;
  proposerslashingscount: number;
  scheduledblocks: number;
  totalvalidatorbalance: number;
  ts: string;
  validatorscount: number;
  voluntaryexitscount: number;
  votedether: number;
  withdrawalcount: number;
}

export interface ValidatorQueue {
  beaconchain_entering: number;
  beaconchain_exiting: number;
  validatorscount: number;
}
