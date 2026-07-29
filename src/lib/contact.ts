/**
 * The contact enquiry shape and its validation.
 *
 * Shared by the form and the API route so the two can never drift: the client
 * shows the same messages the server enforces, and the server never trusts
 * what the client checked.
 */
export type ContactEnquiry = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  interest: string;
  message: string;
};

export type ContactField = keyof ContactEnquiry;

export const CONTACT_FIELDS: ContactField[] = [
  "firstName",
  "lastName",
  "email",
  "company",
  "interest",
  "message",
];

export const EMPTY_ENQUIRY: ContactEnquiry = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  interest: "Card Issuing",
  message: "",
};

/**
 * The dropdown's options. The frame shows "Card Issuing" selected and does not
 * draw the open list, so these are the site's own product and solution names
 * rather than invented categories.
 */
export const CONTACT_INTERESTS = [
  "Card Issuing",
  "Digital Wallets",
  "Payment Processing",
  "APIs & Integrations",
  "Platform & Operations",
  "B2B Payments",
  "Card-as-a-Service",
  "Wallet & Payment Solutions",
  "Enterprise Card Programmes",
  "Programme Launch & BIN Sponsorship",
  "Something else",
] as const;

/** Deliberately permissive: enough to catch typos, not to police addresses. */
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const LIMITS: Record<ContactField, number> = {
  firstName: 80,
  lastName: 80,
  email: 254,
  company: 120,
  interest: 120,
  message: 4000,
};

export type ContactErrors = Partial<Record<ContactField, string>>;

/**
 * Validates an enquiry and returns one message per bad field. An empty object
 * means the payload is safe to send.
 */
export function validateEnquiry(value: Partial<ContactEnquiry>): ContactErrors {
  const errors: ContactErrors = {};
  const trimmed = (field: ContactField) => (value[field] ?? "").trim();

  if (!trimmed("firstName")) errors.firstName = "Enter your first name.";
  if (!trimmed("lastName")) errors.lastName = "Enter your last name.";

  const email = trimmed("email");
  if (!email) errors.email = "Enter your work email.";
  else if (!EMAIL.test(email)) errors.email = "Enter a valid email address.";

  if (!trimmed("company")) errors.company = "Enter your company name.";

  const interest = trimmed("interest");
  if (!interest) errors.interest = "Choose what you are interested in.";
  else if (
    !CONTACT_INTERESTS.includes(interest as (typeof CONTACT_INTERESTS)[number])
  )
    errors.interest = "Choose one of the listed options.";

  if (!trimmed("message")) errors.message = "Tell us about your requirements.";

  for (const field of CONTACT_FIELDS) {
    if (!errors[field] && trimmed(field).length > LIMITS[field]) {
      errors[field] = `Keep this under ${LIMITS[field]} characters.`;
    }
  }

  return errors;
}

/** Normalises a validated payload for sending. */
export function normaliseEnquiry(value: ContactEnquiry): ContactEnquiry {
  return {
    firstName: value.firstName.trim(),
    lastName: value.lastName.trim(),
    email: value.email.trim(),
    company: value.company.trim(),
    interest: value.interest.trim(),
    message: value.message.trim(),
  };
}
