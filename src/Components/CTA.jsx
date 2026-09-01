
import { ArrowUpRight } from "lucide-react";

function BullseyeIcon() {
  return (
    <span className="flex h-[12px] w-[12px] shrink-0 items-center justify-center rounded-[4px] bg-white">
      <span className="h-[7px] w-[7px] rounded-full bg-[#111111]">
        <span className="mx-auto mt-[2px] block h-[3px] w-[3px] rounded-full bg-white" />
      </span>
    </span>
  );
}

const services = [
  {
    title: "Web Design",
    price: "Starting from $1,999",
    description:
      "Showcasing sleek, high-performance designs tailored for impact",
  },
  {
    title: "Framer Development",
    price: "Starting from $4,999",
    description:
      "Building visually stunning, user-focused websites that elevate brands.",
  },
];

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative z-[2] border-t border-white/[0.06] bg-[#0a0a0a] px-[18px] py-[80px] sm:px-8 sm:py-[100px]"
    >
      <div className="mx-auto w-full max-w-[1120px]">
        {/* MAIN CTA */}
        <div
          className="relative overflow-hidden rounded-[32px] bg-[#0d0d0d] sm:rounded-[48px]"
          style={{
            boxShadow:
              "rgba(0,0,0,0.4) 16px 24px 20px 8px",
          }}
        >
          {/* BORDER GLOW / FADE */}
          <div
            className="pointer-events-none absolute inset-0 rounded-[32px] sm:rounded-[48px]"
            style={{
              border: "1px solid rgba(255,255,255,0.1)",
              maskImage:
                "linear-gradient(rgb(0,0,0) 0%, rgba(0,0,0,0.16) 82.8442%)",
              WebkitMaskImage:
                "linear-gradient(rgb(0,0,0) 0%, rgba(0,0,0,0.16) 82.8442%)",
            }}
          />

          <div className="relative grid gap-[45px] p-[22px] sm:p-[32px] lg:grid-cols-[1.05fr_0.95fr] lg:gap-[50px] lg:p-[48px]">

            {/* =========================
                LEFT CONTENT
            ========================== */}
            <div className="flex min-w-0 flex-col">

              {/* BADGE */}
              <div
                className="inline-flex h-[40px] w-fit items-center gap-[9px] rounded-[20px] px-[14px]"
                style={{
                  background: "#111111",
                  boxShadow:
                    "rgba(0,0,0,0.4) 16px 24px 20px 8px, rgba(184,180,180,0.08) 0px 2px 0px 0px inset",
                }}
              >
                <BullseyeIcon />

                <span
                  className="font-inter text-[15px] font-medium leading-none text-white"
                >
                  Let's Connect
                </span>
              </div>

              {/* HEADING */}
              <h2 className="mt-[20px] font-satoshi text-[40px] font-medium leading-[1.08] tracking-[-0.045em] text-white sm:text-[48px] lg:text-[54px]">
                Let's Grow{" "}
                <span className="text-[rgba(255,255,255,0.6)]">
                  Together
                </span>
              </h2>

              {/* SERVICES */}
              <div className="mt-[30px]">

                {services.map((service, index) => (
                  <div key={service.title}>

                    {/* TOP BORDER */}
                    {index === 0 && (
                      <div
                        className="h-[1px] w-full"
                        style={{
                          background: "rgba(255,255,255,0.1)",
                          opacity: 0.8,
                        }}
                      />
                    )}

                    {/* SERVICE ROW */}
                    <div className="py-[20px]">
                      <div className="flex flex-col gap-[10px] sm:flex-row sm:items-center sm:justify-between">

                        {/* TITLE + PRICE */}
                        <div className="flex min-w-0 items-center gap-[10px]">
                          <h5 className="font-jakarta text-[13px] font-semibold leading-[1.4] text-white sm:text-[14px]">
                            {service.title}
                          </h5>

                          <span
                            className="inline-flex shrink-0 items-center rounded-full px-[10px] py-[5px] font-jakarta text-[10px] font-medium leading-none text-white sm:text-[11px]"
                            style={{
                              border:
                                "1px solid rgba(255,255,255,0.1)",
                            }}
                          >
                            {service.price}
                          </span>
                        </div>
                      </div>

                      {/* DESCRIPTION */}
                      <p className="mt-[8px] font-inter text-[12px] leading-[1.6] text-[rgba(255,255,255,0.6)] sm:text-[13px]">
                        {service.description}
                      </p>
                    </div>

                    {/* BOTTOM BORDER */}
                    <div
                      className="h-[1px] w-full"
                      style={{
                        background: "rgba(255,255,255,0.1)",
                        opacity: 0.8,
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* BUTTONS */}
              <div className="mt-[26px] flex flex-wrap items-center gap-[10px]">

                {/* SEE PROJECTS */}
                <a
                  href="./projects#projects"
                  className="inline-flex h-[48px] items-center justify-center rounded-full px-[22px] font-jakarta text-[13px] font-medium text-white transition-transform duration-300 hover:scale-[1.02] sm:h-[50px] sm:px-[24px] sm:text-[14px]"
                  style={{
                    background:
                      "linear-gradient(180deg, #787878 -382%, #0a0a0a 100%)",
                    borderRadius: "100px",
                  }}
                >
                  See All Projects
                </a>

                {/* GET STARTED */}
                <a
                  href="#contact"
                  className="inline-flex h-[48px] items-center justify-center gap-[7px] rounded-full px-[22px] font-jakarta text-[13px] font-medium text-[#0a0a0a] transition-transform duration-300 hover:scale-[1.02] sm:h-[50px] sm:px-[24px] sm:text-[14px]"
                  style={{
                    background:
                      "linear-gradient(180deg, #ffffff 0%, #787878 140%)",
                    borderRadius: "100px",
                  }}
                >
                  Get Started Now

                  <ArrowUpRight className="h-[15px] w-[15px]" />
                </a>
              </div>
            </div>

            {/* =========================
                RIGHT IMAGE CARD
            ========================== */}
            <div
              className="relative min-h-[270px] overflow-hidden rounded-[20px] bg-[#111111] lg:min-h-full"
              style={{
                boxShadow:
                  "rgba(0,0,0,0.4) 16px 24px 20px 8px",
              }}
            >
              {/* IMAGE */}
              <div
                className="absolute inset-0 overflow-hidden rounded-[7px]"
                style={{
                  boxShadow:
                    "rgba(0,0,0,0.4) 20px 30px 20px 8px",
                }}
              >
                <img
                  src="https://framerusercontent.com/images/IwwlXF60xjgLFBH3Sj6kzl9eXs.png?scale-down-to=2048"
                  alt="Website design showcase"
                  className="block h-full w-full object-cover object-top"
                />
              </div>

              {/* DARK OVERLAY */}
              <div className="pointer-events-none absolute inset-0 bg-black/[0.04]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
