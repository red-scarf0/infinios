import { banksFinancialInstitutions } from "./banks-financial-institutions";
import { fintech } from "./fintech";
import { paymentServiceProviders } from "./payment-service-providers";
import { remittanceMoneyTransferOperators } from "./remittance-money-transfer-operators";
import { travel } from "./travel";

export type { IndustryDetail, IndustrySection } from "./types";

export { industryApproach } from "./approach";
export { industryCards } from "./cards";

export {
  banksFinancialInstitutions,
  fintech,
  paymentServiceProviders,
  remittanceMoneyTransferOperators,
  travel,
};

/** Every industry detail page, in the order the industries grid lists them. */
export const industryDetails = [
  travel,
  fintech,
  banksFinancialInstitutions,
  paymentServiceProviders,
  remittanceMoneyTransferOperators,
] as const;
