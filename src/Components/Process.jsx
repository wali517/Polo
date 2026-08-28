import React, { useEffect, useState } from "react";
import {
  MousePointer2,
  ListChecks,
  WandSparkles,
  Rocket,
  CircleDot,
} from "lucide-react";
import { process } from "../data/content";

const processIcons = [
  MousePointer2,
  ListChecks,
  WandSparkles,
  Rocket,
];

function BullseyeIcon() {
  return (
    <span className="flex h-3 w-3 shrink-0 items-center justify-center rounded-full border border-white/70">
      <span className="h-1.5 w-1.5 rounded-full bg-white" />
    </span>
  );
}

function StaggeredParagraph({
  text,
  className = "",
  startDelay = 0,
  step = 0.08,
}) {
  const words = text.split(" ");

  return (
    <p className={className}>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="inline-block"
          style={{
            animation: `heroWordReveal 1.1s cubic-bezier(0.19,1,0.22,1) ${
              startDelay + index * step
            }s both`,
          }}
        >
          {word}
          {index < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </p>
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

export default function Process() {
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [isTabletOrBelow, setIsTabletOrBelow] = useState(
  window.innerWidth <= 1400
);

useEffect(() => {
  const handleResize = () => {
    setIsTabletOrBelow(window.innerWidth <= 1400);
  };

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);

  return (
    <section
      id="process"
      className="w-full overflow-hidden rounded-[30px] border border-b-0 bg-[#080808] py-[90px] lg:py-[100px]"
    >
      {/* ================= HEADER ================= */}
      <div className="mx-auto w-full max-w-full">
        <div className="flex w-full flex-col items-center text-center">
          <div className="inline-flex h-[38px] items-center gap-2 rounded-full border-t border-white/10 bg-[#0F0F0F] px-4 py-[6px] font-inter text-[15px] font-medium text-white">
            <BullseyeIcon />

            <span>How it works</span>
          </div>

          <h2 className="mt-[16px] font-satoshi text-[40px] leading-[1.5] tracking-[-0.04em] text-white lg:text-[54px]">
            <StaggeredHeading
              startDelay={0.15}
              step={0.22}
              className="text-white"
            >
              Process
            </StaggeredHeading>{" "}

            <StaggeredHeading
              startDelay={0.65}
              step={0.25}
              className="text-[#FFFFFF99]"
            >
              Is Everything
            </StaggeredHeading>
          </h2>

          <StaggeredParagraph
            text="Simple, streamlined process is what gets you results."
            startDelay={1.15}
            step={0.08}
            className="mt-3 max-w-full font-jakarta text-[15px] text-[#FFFFFF99] md:text-[16px]"
          />
        </div>
      </div>

      {/* ================= PROCESS CARDS ================= */}
<div className="relative mt-[44px] w-full overflow-hidden">
  <div
  className="
    mx-auto
    flex
    w-max
    gap-[24px]
    transition-transform
    duration-[2800ms]
    ease-[cubic-bezier(0.16,1,0.3,1)]

    max-[1400px]:grid
    max-[1400px]:grid-cols-2
    max-[1400px]:gap-[24px]
    max-[1400px]:w-full
    max-[1400px]:max-w-[1104px]
    max-[1400px]:justify-items-center
  "
  style={{
    position: "relative",
    transform:
      window.innerWidth <= 1400
        ? "none"
        : scrollDirection === "down"
        ? "translateX(-50px)"
        : "translateX(30px)",
  }}
>
    {process.map((item, i) => {
      const Icon = processIcons[i] || MousePointer2;

      return (
        <div
          key={item.step}
          className="relative flex h-[361px] w-[399px] shrink-0 flex-col rounded-[16px] bg-[#0F0F0F] p-[30px] max-[1400px]:h-full
  max-[1400px]:w-full"
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.4) 16px 24px 20px 8px, rgba(184, 180, 180, 0.08) 0px 2px 0px 0px inset",
          }}
        >
          {/* Top row */}
          <div className="flex w-full items-start justify-between">
            {/* Icon */}
            <div className="flex h-[25px] w-[25px] items-center justify-center">
              <Icon
                className="h-[18px] w-[18px] text-white"
                strokeWidth={1.5}
              />
            </div>

            {/* Number */}
            <div
              className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#0A0A0A]"
              style={{
                boxShadow:
                  "rgba(184, 180, 180, 0.14) 0px 2px 0px 0px inset",
              }}
            >
              <span className="font-jakarta text-[16px] font-medium leading-none text-white">
                {i + 1}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="mt-[55px]">
            <h3 className="font-jakarta text-[20px] font-bold leading-[1.3] text-white">
              {item.title}
            </h3>

            <p className="mt-[10px] max-w-[320px] font-inter text-[15px] font-medium leading-[1.55] text-[#FFFFFF99]">
              {item.body}
            </p>
          </div>

          {/* Divider */}
          <div className="mt-auto h-px w-full bg-white/10" />

          {/* Step */}
          <div className="mt-[20px]">
            <div className="inline-flex h-[38px] items-center rounded-full border border-white/10 bg-[#111111] px-[14px]">
              <span className="font-jakarta text-[13px] font-medium leading-none text-white/70">
                Step {i + 1}
              </span>
            </div>
          </div>
        </div>
      );
    })}
  </div>
</div>
      {/* ================= BOTTOM CTA ================= */}
      <div
        className="
          mx-auto
          mt-[34px]
          flex
          w-full
          max-w-[568px]
          flex-col
          items-start
          justify-between
          gap-[18px]
          rounded-[12px]
          bg-[#0F0F0F]
          px-[20px]
          py-[18px]
          sm:flex-row
          sm:items-center
        "
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.4) 16px 24px 20px 8px, rgba(184, 180, 180, 0.08) 0px 2px 0px 0px inset",
        }}
      >
        {/* CTA text */}
        <div>
          <div className="flex items-center gap-[7px]">
            <CircleDot
              className="h-[14px] w-[14px] text-white"
              strokeWidth={1.5}
            />

            <h3 className="font-jakarta text-[12px] font-bold leading-none text-white">
              I am with you in every step
            </h3>
          </div>

          <p className="mt-[8px] font-jakarta text-[9px] font-medium leading-[1.4] text-white/60">
            alongside you at each step for seamless experience
          </p>
        </div>

        {/* Buttons */}
        <div className="flex shrink-0 items-center gap-[8px]">
          <a
            href="#projects"
            className="
              flex
              h-[36px]
              items-center
              justify-center
              rounded-full
              px-[16px]
              font-jakarta
              text-[10px]
              font-bold
              leading-none
              text-white
              transition-transform
              duration-300
              hover:scale-[1.03]
            "
            style={{
              background:
                "linear-gradient(180deg, rgba(120,120,120) -382%, #0A0A0A 100%)",
            }}
          >
            See All Projects
          </a>

          <a
            href="#contact"
            className="
              flex
              h-[36px]
              items-center
              justify-center
              rounded-full
              px-[16px]
              font-jakarta
              text-[10px]
              font-medium
              leading-none
              text-[#0A0A0A]
              transition-transform
              duration-300
              hover:scale-[1.03]
            "
            style={{
              background:
                "linear-gradient(180deg, #FFFFFF 0%, #787878 140%)",
            }}
          >
            Contact Now
          </a>
        </div>
      </div>
    </section>
  );
}