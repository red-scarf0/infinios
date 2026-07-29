import { apisIntegrations } from "./apis-integrations";
import { cardIssuing } from "./card-issuing";
import { digitalWallets } from "./digital-wallets";
import { paymentProcessing } from "./payment-processing";
import { platformOperations } from "./platform-operations";

export type {
  Cta,
  JourneyConnector,
  JourneyStep,
  ProductDetail,
  ProductFeature,
  ProgrammeJourneyData,
} from "./types";

export {
  apisIntegrations,
  cardIssuing,
  digitalWallets,
  paymentProcessing,
  platformOperations,
};

/** Every product detail page, in the order the products grid lists them. */
export const productDetails = [
  cardIssuing,
  digitalWallets,
  paymentProcessing,
  apisIntegrations,
  platformOperations,
] as const;
