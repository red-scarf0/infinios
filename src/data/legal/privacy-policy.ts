import type { LegalDocument } from "./types";

/**
 * Approved wording, transcribed verbatim from
 * "Privacy Policy Infinios new website 1607 (2).docx". Do not edit the copy
 * without a corresponding update to that document.
 */
export const privacyPolicy: LegalDocument = {
  title: "Privacy Policy",
  blocks: [
    { type: "heading", text: "Introduction" },
    {
      type: "paragraph",
      text: 'INFINIOS Financial Services B.S.C. (c) ("INFINIOS", "we", "our", or "us") is committed to protecting your privacy and handling your personal data in a secure and transparent manner.',
    },
    {
      type: "paragraph",
      text: "This Privacy Policy explains how we collect, use, disclose, store and protect your personal data when you visit our website, contact us, or use our products and services.",
    },
    {
      type: "paragraph",
      text: "By using our website or interacting with us, you acknowledge that you have read and understood this Privacy Policy.",
    },

    { type: "heading", text: "Who We Are" },
    {
      type: "paragraph",
      text: "INFINIOS Financial Services B.S.C. (c) is licensed and regulated by the Central Bank of Bahrain as an Ancillary Services Provider.",
    },
    {
      type: "paragraph",
      text: "Where we determine the purposes and means of processing your personal data, we act as the data controller.",
    },

    { type: "heading", text: "Personal Data We Collect" },
    {
      type: "paragraph",
      text: "Depending on how you interact with us, we may collect:",
    },
    {
      type: "bullets",
      items: [
        "Contact information, including your name, email address, telephone number and company details.",
        "Information you provide through enquiry forms, correspondence or other communications.",
        "Technical information, including your IP address, browser type, device information and website usage data.",
        "Information required to provide our products and services, including customer due diligence and Know Your Customer (KYC) information where applicable.",
        "Information obtained from publicly available sources or trusted third parties where permitted by law.",
      ],
    },
    {
      type: "paragraph",
      text: "Our website and services are not intended for individuals under the age of 18. We do not knowingly collect personal data from minors.",
    },

    { type: "heading", text: "How We Use Your Personal Data" },
    { type: "paragraph", text: "We use your personal data to:" },
    {
      type: "bullets",
      items: [
        "Respond to enquiries and provide customer support.",
        "Provide and administer our products and services.",
        "Verify identity and conduct customer due diligence where required.",
        "Comply with legal, regulatory and compliance obligations, including anti-money laundering and counter-terrorist financing requirements.",
        "Improve our website, products and services.",
        "Protect our systems, detect fraud and maintain security.",
        "Send marketing communications where you have consented or where otherwise permitted by applicable law. You may opt out of marketing communications at any time by using the unsubscribe mechanism included in communications or by contacting us.",
      ],
    },

    { type: "heading", text: "Legal Basis for Processing" },
    {
      type: "paragraph",
      text: "We process personal data where necessary to:",
    },
    {
      type: "bullets",
      items: [
        "comply with legal or regulatory obligations;",
        "pursue our legitimate business interests, provided these do not override your rights and freedoms; or",
        "obtain your consent where required by applicable law.",
      ],
    },
    {
      type: "paragraph",
      text: "Where processing is based on consent, you may withdraw your consent at any time.",
    },
    {
      type: "paragraph",
      text: "Subject to applicable law, you may have the right to:",
    },
    {
      type: "bullets",
      items: [
        "Access your personal data;",
        "Request correction of inaccurate or incomplete data;",
        "Request deletion of personal data where legally permissible;",
        "Object to certain processing activities;",
        "Request restriction of processing;",
        "Withdraw consent where processing is based on consent; and",
        "Lodge a complaint with the relevant supervisory authority.",
      ],
    },

    { type: "heading", text: "Sharing Your Personal Data" },
    { type: "paragraph", text: "We may share your personal data with:" },
    {
      type: "bullets",
      items: [
        "our affiliated companies;",
        "trusted service providers who assist us in delivering our services;",
        "financial institutions, payment networks and identity verification providers;",
        "regulators, law enforcement agencies or governmental authorities where required by law; and",
        "professional advisers, auditors and other authorised third parties.",
      ],
    },
    { type: "paragraph", text: "We do not sell your personal data." },
    {
      type: "paragraph",
      text: "INFINIOS processes personal data in accordance with applicable data protection and privacy laws, including the Kingdom of Bahrain Personal Data Protection Law (Law No. 30 of 2018), where applicable.",
    },

    { type: "heading", text: "International Transfers" },
    {
      type: "paragraph",
      text: "Where personal data is transferred outside Bahrain, we implement appropriate safeguards such as contractual protections, security measures, adequacy assessments, or other mechanisms required by applicable law.",
    },

    { type: "heading", text: "Changes to this Privacy Policy" },
    {
      type: "paragraph",
      text: "We may update this Privacy Policy from time to time to reflect changes in our business, legal requirements or technology.",
    },

    { type: "heading", text: "Data Retention" },
    {
      type: "paragraph",
      text: "We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, including compliance with legal, regulatory, accounting, anti-money laundering and reporting obligations.",
    },

    { type: "heading", text: "Contact Us" },
    {
      type: "paragraph",
      text: "If you have any questions about this Privacy Policy or wish to exercise your privacy rights, please contact us at:",
    },
    {
      type: "contact",
      name: "INFINIOS Financial Services B.S.C. (c)",
      email: "legal@infinios.com",
      address:
        "Park Place, 11th Floor, Building 2420, Road 2831, Block 428, Seef District, Kingdom of Bahrain",
    },
  ],
};
