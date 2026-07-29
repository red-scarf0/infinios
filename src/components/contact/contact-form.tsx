"use client";

import { useId, useRef, useState } from "react";

import {
  CONTACT_INTERESTS,
  EMPTY_ENQUIRY,
  validateEnquiry,
  type ContactEnquiry,
  type ContactErrors,
  type ContactField,
} from "@/lib/contact";
import { cn } from "@/lib/utils";

/**
 * "How can we help?" — the frame's form card.
 *
 * The card is a 1399x738 plate at r=28 on 78% white with a 1px #2563FF/12
 * hairline, a 24/70 shadow and a backdrop blur; the fields are 14px-radius
 * boxes with a 1px #15214E border and #757575 placeholders, all straight from
 * the frame.
 *
 * Submission posts to `/api/contact`, which validates again and mails the
 * enquiry to sales@infinios.com. The button is disabled while in flight and a
 * ref guard drops any second submit, so one enquiry can only be sent once. On
 * failure the values stay put so nothing has to be retyped.
 */
export function ContactForm() {
  const formId = useId();
  const [values, setValues] = useState<ContactEnquiry>(EMPTY_ENQUIRY);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "failed">(
    "idle",
  );
  const [failure, setFailure] = useState<string | null>(null);
  const inFlight = useRef(false);

  const field = (name: ContactField) => ({
    id: `${formId}-${name}`,
    name,
    value: values[name],
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${formId}-${name}-error` : undefined,
    onChange: (
      event: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      setValues((v) => ({ ...v, [name]: event.target.value }));
      setErrors((e) => (e[name] ? { ...e, [name]: undefined } : e));
    },
  });

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (inFlight.current) return;

    const found = validateEnquiry(values);
    setErrors(found);
    if (Object.keys(found).length) {
      const first = Object.keys(found)[0];
      document.getElementById(`${formId}-${first}`)?.focus();
      return;
    }

    inFlight.current = true;
    setStatus("sending");
    setFailure(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const body = await response.json().catch(() => ({}));

      if (!response.ok) {
        if (body?.errors) setErrors(body.errors as ContactErrors);
        setFailure(
          body?.error ??
            "We could not send your enquiry just now. Please try again.",
        );
        setStatus("failed");
        return;
      }

      setValues(EMPTY_ENQUIRY);
      setErrors({});
      setStatus("sent");
    } catch {
      setFailure(
        "We could not reach the server. Check your connection and try again.",
      );
      setStatus("failed");
    } finally {
      inFlight.current = false;
    }
  }

  const sending = status === "sending";

  return (
    <div className="rounded-[20px] border border-[rgba(37,99,255,0.12)] bg-white/78 p-6 shadow-[0px_24px_70px_0px_rgba(6,27,58,0.08)] backdrop-blur-[9px] sm:p-8 lg:rounded-[28px] lg:p-[42px]">
      <h2 className="text-[22px] leading-[1.286] font-bold text-[#061b3a] sm:text-[25px] lg:text-[28px]">
        How can we help?
      </h2>

      <p className="mt-[27px] text-[15px] leading-[1.7] text-[#63728a] lg:text-[16px]">
        Looking for a focused platform discussion? Request a demo and our team
        will prepare around your use case.
      </p>

      <form
        noValidate
        onSubmit={onSubmit}
        className="mt-[27px] flex flex-col gap-[18px] pt-[12px]"
      >
        <div className="flex flex-col gap-[18px] sm:flex-row sm:gap-[17.99px]">
          <Field
            label="First Name"
            error={errors.firstName}
            formId={formId}
            name="firstName"
          >
            <input
              {...field("firstName")}
              type="text"
              autoComplete="given-name"
              placeholder="Enter first name"
              className={inputClass(errors.firstName)}
            />
          </Field>

          <Field
            label="Last Name"
            error={errors.lastName}
            formId={formId}
            name="lastName"
          >
            <input
              {...field("lastName")}
              type="text"
              autoComplete="family-name"
              placeholder="Enter last name"
              className={inputClass(errors.lastName)}
            />
          </Field>
        </div>

        <div className="flex flex-col gap-[18px] sm:flex-row sm:gap-[17.99px]">
          <Field
            label="Work Email"
            error={errors.email}
            formId={formId}
            name="email"
          >
            <input
              {...field("email")}
              type="email"
              inputMode="email"
              autoComplete="email"
              placeholder="name@company.com"
              className={inputClass(errors.email)}
            />
          </Field>

          <Field
            label="Company"
            error={errors.company}
            formId={formId}
            name="company"
          >
            <input
              {...field("company")}
              type="text"
              autoComplete="organization"
              placeholder="Company name"
              className={inputClass(errors.company)}
            />
          </Field>
        </div>

        <Field
          label="What are you interested in?"
          error={errors.interest}
          formId={formId}
          name="interest"
        >
          {/* The frame draws a 51px box with a 20/32 inset; the chevron is
              painted rather than left to the platform control. */}
          <div className="relative">
            <select
              {...field("interest")}
              className={cn(
                inputClass(errors.interest),
                "h-[51px] cursor-pointer appearance-none py-[15.5px] pr-[33px] pl-[20px] leading-[18px] text-[#061b3a]",
              )}
            >
              {CONTACT_INTERESTS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <span
              aria-hidden
              className="pointer-events-none absolute top-1/2 right-[18px] size-[9px] -translate-y-[3px] rotate-45 border-r-2 border-b-2 border-[#15214e]"
            />
          </div>
        </Field>

        <Field
          label="Message"
          error={errors.message}
          formId={formId}
          name="message"
        >
          <textarea
            {...field("message")}
            rows={5}
            placeholder="Tell us about your requirements"
            className={cn(
              inputClass(errors.message),
              "min-h-[144px] resize-y py-[15px] text-[15px]",
            )}
          />
        </Field>

        <div className="flex flex-wrap items-center gap-4 pt-[8px]">
          <button
            type="submit"
            disabled={sending}
            className={cn(
              "rounded-[14px] bg-brand-button px-[28px] py-[16px] text-[14.9px] leading-[16px] font-bold text-white",
              "shadow-[0px_14px_15px_rgba(18,100,255,0.28)]",
              "transition-[transform,opacity,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
              "hover:-translate-y-0.5 hover:opacity-95 active:scale-[0.99]",
              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
              "disabled:pointer-events-none disabled:opacity-70 motion-reduce:transform-none",
            )}
          >
            {sending ? "Sending…" : "Submit Enquiry"}
          </button>

          {/* One live region for both outcomes, so a screen reader hears
              whichever one lands without the layout jumping. */}
          <p
            role="status"
            aria-live="polite"
            className={cn(
              "text-[14px] leading-[1.4]",
              status === "sent" && "text-brand",
              status === "failed" && "text-[#b42318]",
            )}
          >
            {status === "sent"
              ? "Thanks — your enquiry is on its way. Our team will be in touch."
              : status === "failed"
                ? failure
                : ""}
          </p>
        </div>
      </form>
    </div>
  );
}

/** Frame field box: 14px radius, 1px #15214E, 17/16 inset, #757575 placeholder. */
function inputClass(error?: string) {
  return cn(
    "w-full rounded-[14px] border bg-white px-[17px] py-[16px] text-[14.3px] leading-[16px] text-[#061b3a]",
    "placeholder:text-[#757575] transition-[border-color,box-shadow] duration-200",
    "focus:outline-none focus-visible:border-brand focus-visible:ring-2 focus-visible:ring-brand/25",
    error ? "border-[#b42318]" : "border-[#15214e]",
  );
}

function Field({
  label,
  error,
  formId,
  name,
  children,
}: {
  label: string;
  error?: string;
  formId: string;
  name: ContactField;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-1 flex-col gap-[8px]">
      <label
        htmlFor={`${formId}-${name}`}
        className="text-[13px] leading-[16px] font-bold text-[#10284d]"
      >
        {label}
      </label>
      {children}
      {error ? (
        <p
          id={`${formId}-${name}-error`}
          className="text-[12.5px] leading-[1.35] text-[#b42318]"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}
