import React from "react";

function BullseyeIcon() {
  return (
    <span
      className="flex h-[10px] w-[10px] shrink-0 items-center justify-center rounded-[10px]"
      style={{ background: "#ffffff" }}
    >
      <span
        className="h-[6px] w-[6px] rounded-[10px]"
        style={{ background: "#111111" }}
      />
    </span>
  );
}

function StaggeredHeading({
  children,
  className = "",
  startDelay = 0,
  step = 0.22,
}) {
  const words = children.trim().split(/\s+/);
  return (
    <span className={className}>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="inline-block overflow-hidden align-bottom"
        >
          <span
            className="inline-block"
            style={{
              animation: `heroWordReveal 1.4s cubic-bezier(0.16,1,0.3,1) ${
                startDelay + index * step
              }s both`,
            }}
          >
            {word}
          </span>
          {index < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
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
      className="relative rounded-[50px] border w-full border-white/10 px-[10px] py-[80px] sm:px-4 sm:py-[100px]"
    >
      <div className="mx-auto w-full max-w-[1150px]">
        <div className="relative grid gap-[45px] p-[22px] sm:gap-[50px] sm:p-[32px] lg:grid-cols-[0.90fr_1.10fr] lg:items-center lg:gap-[50px] lg:py-[20px]">
          <div className="flex min-w-0 flex-col">
            <div className="flex flex-col">
              <div
                className="flex h-[40px] w-fit items-center gap-[9px] rounded-[20px] px-[14px]"
                style={{
                  background: "#111111",
                  boxShadow:
                    "rgba(0, 0, 0, 0.4) 16px 24px 20px 8px, rgba(184, 180, 180, 0.08) 0px 2px 0px 0px inset",
                }}
              >
                <BullseyeIcon />
                <p className="m-0 font-inter text-[15px] leading-none text-white">
                  Let's Connect
                </p>
              </div>
              <h2 className="mt-[22px] whitespace-nowrap m-0 font-satoshi text-[40px] leading-[1.5] sm:text-[48px] lg:text-[54px]">
                <StaggeredHeading
                  startDelay={0.15}
                  step={0.22}
                  className="text-white"
                >
                  Let's Grow
                </StaggeredHeading>{" "}
                <StaggeredHeading
                  startDelay={0.65}
                  step={0.25}
                  className="text-[#FFFFFF99]"
                >
                  Together
                </StaggeredHeading>
              </h2>
            </div>
            <div className="mt-[30px] w-full">
              <div
                className="h-[1px] w-full"
                style={{ background: "rgba(255, 255, 255, 0.1)", opacity: 0.8 }}
              />
              {services.map((service) => (
                <div key={service.title}>
                  <div className="rounded-[48px] py-[20px]">
                    <div className="flex flex-col">
                      <div className="flex flex-wrap items-center gap-[10px]">
                        <h5 className="m-0 font-jakarta text-[20px] font-semibold leading-[1.4] text-white sm:text-[20px]">
                          {service.title}
                        </h5>
                        <span
                          className="inline-flex shrink-0 items-center rounded-full px-[10px] py-[5px] font-jakarta text-[11px] font-medium leading-none text-[#FFFFFF] sm:text-[12px]"
                          style={{
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                          }}
                        >
                          {service.price}
                        </span>
                      </div>
                      <p className="mt-[8px] mb-0 font-inter text-[15px] leading-[1.6] text-[#FFFFFF99] opacity-60 sm:text-[15px]">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <div
                    className="h-[1px] w-full"
                    style={{
                      background: "rgba(255, 255, 255, 0.1)",
                      opacity: 0.8,
                    }}
                  />
                </div>
              ))}
            </div>
            <div className="mt-[28px] flex flex-wrap items-center gap-[10px]">
              <a
                href="./projects#projects"
                className="inline-flex sm:w-[180px] sm:h-[55px] w-[280px] h-[55px] items-center justify-center rounded-full px-[26px] font-jakarta text-[15px] text-white"
                style={{
                  background:
                    "linear-gradient(180deg, #787878 -382%, #0a0a0a 100%)",
                }}
              >
                See All Projects
              </a>
              <a
                href="./contact#contact"
                className="inline-flex sm:w-[180px] sm:h-[55px] w-[280px] h-[55px] items-center justify-center gap-[7px] rounded-full px-[26px] font-jakarta text-[15px] font-medium text-[#0a0a0a]"
                style={{
                  background:
                    "linear-gradient(180deg, #ffffff 0%, #787878 140%)",
                }}
              >
                Get Started Now
              </a>
            </div>
          </div>
          <div
            className="relative min-h-[200px] w-full rounded-[20px] bg-[#111111] sm:min-h-[410px] lg:h-[300px]"
            style={{ boxShadow: "rgba(0, 0, 0, 0.4) 16px 24px 20px 8px" }}
          >
            <div
              className="absolute inset-[14px] overflow-hidden rounded-[7px]"
              style={{
                borderRadius: "7px",
                boxShadow: "rgba(0, 0, 0, 0.4) 20px 30px 20px 8px",
              }}
            >
              <div
                className="absolute inset-0"
                style={{ borderRadius: "inherit" }}
              >
                <img
                  src="https://framerusercontent.com/images/IwwlXF60xjgLFBH3Sj6kzl9eXs.png?scale-down-to=2048"
                  alt="Image banner"
                  className="h-full w-full"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "fill",
                    objectPosition: "center top",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
