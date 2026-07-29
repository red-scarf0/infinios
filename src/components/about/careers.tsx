import Image from "next/image";

import { Button } from "@/components/ui/button";
import { SectionLabel } from "@/components/ui/section-label";
import { ColorFlowText } from "@/components/ui/color-flow-text";
import { NotchedCard } from "@/components/ui/notched-card";
import { Reveal, RevealItem } from "@/components/motion/reveal";

const PRINCIPLES = [
  {
    title: "Grow through Ownership",
    body: "Take responsibility for meaningful work and develop through hands-on experience.",
  },
  {
    title: "Work Across Disciplines",
    body: "Collaborate with technology, operations, product and commercial teams.",
  },
  {
    title: "Create Practical Impact",
    body: "Contribute to infrastructure used by financial businesses and their customers.",
  },
  {
    title: "Build for the Long Term",
    body: "Work in an environment that values reliability, discipline and continuous improvement.",
  },
];

/**
 * Careers — one rounded plate (1772x2323 at x=81 in the frame) carrying the
 * binary artwork at the top and a vertical gradient beneath it, sampled from
 * the frame: #4F78BA just under the image down to #E9EFF7 at the base.
 */
export function AboutCareers() {
  return (
    <section
      id="careers"
      className="scroll-mt-[120px] bg-white pb-16 lg:pb-[242px]"
    >
      <div
        className="relative mx-[clamp(16px,4.22vw,81px)] overflow-hidden rounded-t-[72px] rounded-b-[48px] lg:rounded-t-[241px] lg:rounded-b-[110px]"
        style={{
          backgroundImage:
            "linear-gradient(180deg,#0b4cad 0%,#4f78ba 25%,#d7e0ef 92%,#eaf0f8 100%)",
        }}
      >
        {/* Artwork band */}
        <div className="relative h-[240px] sm:h-[360px] lg:h-[586px]">
          <Image
            src="/images/careers-bg.jpg"
            alt=""
            fill
            aria-hidden
            sizes="100vw"
            className="object-cover"
          />
          <Image
            src="/images/ring.png"
            alt=""
            width={190}
            height={193}
            aria-hidden
            className="absolute top-[6%] right-[3.6%] h-auto w-[70px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] sm:w-[110px] lg:top-[87px] lg:w-[190px]"
          />
          <Reveal
            trigger="mount"
            className="absolute top-[16%] left-[7.3%] lg:top-[128px]"
          >
            <h2 className="text-[28px] leading-[1.1488] font-semibold text-[#fbfdfe] sm:text-[38px] lg:text-[50px]">
              Careers
            </h2>
          </Reveal>
        </div>

        {/* Glass panel overlapping the artwork */}
        <Reveal className="relative z-10 -mt-[70px] px-5 sm:px-8 lg:-mt-[186px] lg:px-0">
          <div className="rounded-[32px] border border-white/20 bg-white/15 p-6 backdrop-blur-md sm:p-8 lg:ml-[25.4%] lg:w-[42.4%] lg:rounded-[58px] lg:p-[41px_0_0_60px]">
            <h3 className="max-w-[426px] text-[22px] leading-[1.1488] font-semibold text-white sm:text-[28px] lg:text-[36px]">
              Build payment infrastructure that matters.
            </h3>
            <p className="mt-4 max-w-[652px] text-[15px] leading-[1.1488] font-light text-white lg:mt-[19px] lg:text-[22px]">
              Join a team working across technology, operations, product and
              financial services to solve real payment challenges.
            </p>
            <Button
              href="#careers"
              variant="light"
              className="mt-6 h-12 w-full px-6 text-[15px] sm:w-[314px] lg:mt-[30px] lg:mb-[41px] lg:text-[18px]"
            >
              View Current Opportunities
            </Button>
          </div>
        </Reveal>

        {/* Copy + principles */}
        <div className="px-5 pt-14 pb-16 sm:px-8 lg:px-[130px] lg:pt-[172px] lg:pb-[79px]">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,737px)_minmax(0,715px)] lg:justify-between lg:gap-[93px]">
            <Reveal stagger={0.14}>
              <RevealItem>
                <SectionLabel tone="navy">CAREERS AT INFINIOS</SectionLabel>
              </RevealItem>
              <RevealItem>
                <h3 className="mt-6 max-w-[737px] text-[28px] leading-[1.1488] font-semibold text-navy sm:text-[36px] lg:mt-[89px] lg:text-[50px]">
                  Do meaningful work with people who take the details seriously.
                </h3>
              </RevealItem>
              <RevealItem>
                <p className="group/flow mt-5 max-w-[664px] text-[18px] leading-[1.1488] sm:text-[26px] lg:mt-[27px] lg:text-[40px]">
                  <span className="text-navy">
                    INFINIOS brings together specialists who build, operate and
                    impr
                  </span>
                  <ColorFlowText from="#c3bee9" to="#151d48">
                    ove financial infrastructure. We value sound judgement,
                    practical problem-solving and collaboration across
                    disciplines.
                  </ColorFlowText>
                </p>
              </RevealItem>
            </Reveal>

            <Reveal
              as="ul"
              stagger={0.13}
              className="grid gap-8 sm:grid-cols-2 lg:gap-x-[45px] lg:gap-y-[32px]"
            >
              {PRINCIPLES.map((principle) => (
                <RevealItem as="li" key={principle.title}>
                  <NotchedCard
                    title={principle.title}
                    body={principle.body}
                    tone="navy"
                    className="h-full"
                  />
                </RevealItem>
              ))}
            </Reveal>
          </div>

          <Reveal stagger={0.12} className="mt-14 lg:mt-[165px]">
            <RevealItem>
              <p className="max-w-[1545px] text-[18px] leading-[1.1488] text-navy sm:text-[26px] lg:text-[40px]">
                Open roles will be listed on this page. We are also interested
                in meeting people who bring strong judgement, technical depth
                and a collaborative mindset.
              </p>
            </RevealItem>

            <RevealItem>
              <p className="mt-8 flex min-h-[80px] items-center justify-center rounded-[20px] bg-[#9aafd0]/50 px-6 text-center text-[20px] leading-[1.1488] font-bold text-navy sm:text-[28px] lg:mt-[26px] lg:min-h-[121px] lg:text-[40px]">
                Send your CV to careers@infinios.com
              </p>
            </RevealItem>

            <RevealItem>
              <p className="mx-auto mt-10 max-w-[1143px] text-center text-[14px] leading-[1.1488] text-navy lg:mt-[212px] lg:text-[20px]">
                INFINIOS provides equal employment opportunities based on
                qualifications, merit and business needs. We welcome applicants
                from different backgrounds and experiences.
              </p>
            </RevealItem>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
