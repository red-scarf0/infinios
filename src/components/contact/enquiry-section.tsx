import { PlateBackdrop } from "@/components/shared/plate-backdrop";
import { ContactForm } from "@/components/contact/contact-form";

/**
 * The enquiry block: the frame's form card floating on the same plate the
 * capability sections use, pulled up over the hero exactly as drawn (the plate
 * starts at 1177 against a hero that ends at 1367).
 */
export function EnquirySection() {
  return (
    <section
      id="enquiry"
      className="relative scroll-mt-[120px] pt-0 pb-16 lg:-mt-[190px] lg:pb-[161px]"
    >
      <PlateBackdrop />

      <div className="relative px-5 pt-14 sm:px-8 lg:px-12 lg:pt-[70px]">
        <div className="mx-auto w-full max-w-[1399px]">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
