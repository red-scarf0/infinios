import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { SectionLabel } from "@/components/ui/section-label";

export function BusinessModel() {
  return (
    <section className="bg-white pt-14 pb-10 lg:pt-[150px] lg:pb-[108px]">
      <Reveal>
        <SectionLabel ruled align="center">
          BUILT FOR YOUR BUSINESS MODEL
        </SectionLabel>
      </Reveal>

      <Container>
        <Reveal className="mx-auto mt-10 max-w-[596px] text-center lg:mt-[162px]">
          <h2 className="text-[28px] leading-[0.9606] font-semibold text-brand sm:text-[36px] lg:text-[50px]">
            Infrastructure shaped around the way you move money.
          </h2>
          <p className="mx-auto mt-6 max-w-[590px] text-[16px] leading-[1.1488] text-body sm:text-[20px] lg:mt-[29px] lg:text-[24px]">
            INFINIOS supports regulated institutions and digital businesses
            across different products, markets and operating models.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
