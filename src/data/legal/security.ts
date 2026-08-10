import type { LegalDocument } from "./types";

/**
 * Approved wording, transcribed verbatim from "Security- Tazeem (1).docx".
 * No control, certification or compliance claim beyond that document belongs
 * on this page.
 */
export const security: LegalDocument = {
  title: "Information Security and Cybersecurity Commitment",
  blocks: [
    {
      type: "paragraph",
      text: "At Infinios Financial Services, protecting our customers, partners, employees, and stakeholders is fundamental to maintaining trust in our payment and financial services.",
    },
    {
      type: "paragraph",
      text: "As a provider of card issuing, payment processing, and financial technology services, we maintain a risk-based information security and cybersecurity program designed to protect the confidentiality, integrity, availability, and privacy of information entrusted to us. Our approach is guided by internationally recognized security frameworks, regulatory expectations, and industry best practices relevant to the financial services and payments sectors.",
    },
    {
      type: "paragraph",
      text: "Our cybersecurity program is built upon four principles:",
    },
    {
      type: "terms",
      items: [
        {
          term: "Risk-Informed",
          text: "We continuously identify, assess, monitor, and manage cyber risks in line with business objectives and regulatory requirements.",
        },
        {
          term: "Resilient",
          text: "We maintain capabilities to detect, respond to, recover from, and learn from cyber incidents while supporting the continuity of critical services.",
        },
        {
          term: "Governed",
          text: "We apply clear accountability, oversight, policies, standards, and risk management processes across our operations.",
        },
        {
          term: "Enabling",
          text: "We view cybersecurity as a business enabler that supports innovation, customer trust, operational excellence, and sustainable growth.",
        },
      ],
    },
    {
      type: "paragraph",
      text: "We are committed to complying with applicable regulatory, contractual, and industry security requirements relevant to our business. Security risks, threats, and controls are continuously reviewed and enhanced to address evolving technologies, business needs, and cyber threats. We incorporate security considerations into the selection, onboarding, and ongoing oversight of third-party service providers and partners where appropriate.",
    },
    {
      type: "paragraph",
      text: "Cybersecurity is a shared responsibility across our organization and is supported by executive leadership, governance oversight, risk management processes, security awareness, and a culture of continuous improvement. Through these efforts, we strive to maintain a secure, resilient, and trusted environment for our customers, partners, and stakeholders",
    },
    {
      type: "paragraph",
      text: "Disclaimer: This statement provides a high-level overview of Infinios Financial Services' approach to information security and cybersecurity. It is intended for general informational purposes only and does not describe all security controls, processes, technologies, monitoring activities, or governance practices employed by the Company. Security measures are subject to ongoing review and enhancement in response to evolving business, regulatory, operational, and threat landscape requirements.",
    },
  ],
};
