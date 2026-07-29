import { b2bPayments } from "./b2b-payments";
import { cardAsAService } from "./card-as-a-service";
import { enterpriseCardProgrammes } from "./enterprise-card-programmes";
import { programmeLaunchBinSponsorship } from "./programme-launch-bin-sponsorship";
import { walletPaymentSolutions } from "./wallet-payment-solutions";

export type { SolutionCta, SolutionDetail, SolutionSection } from "./types";

export { deliveryModel } from "./delivery-model";
export { solutionCards } from "./cards";

export {
  b2bPayments,
  cardAsAService,
  enterpriseCardProgrammes,
  programmeLaunchBinSponsorship,
  walletPaymentSolutions,
};

/** Every solution detail page, in the order the solutions grid lists them. */
export const solutionDetails = [
  b2bPayments,
  cardAsAService,
  walletPaymentSolutions,
  enterpriseCardProgrammes,
  programmeLaunchBinSponsorship,
] as const;
