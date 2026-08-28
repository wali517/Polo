import React from "react";
import { process } from "../data/content";

/* =========================
   SVG ICONS
========================= */

function CursorIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-[20px] w-[20px]"
    >
      <path
        d="M4.5 3.5L18.8 13.2L12.7 14.2L9.3 20.5L4.5 3.5Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.7 14.2L17 18.5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ListIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-[20px] w-[20px]"
    >
      <path
        d="M9 6H20"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M9 12H20"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M9 18H20"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M4 6.2L5.2 7.4L7.2 5.4"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 12.2L5.2 13.4L7.2 11.4"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 18.2L5.2 19.4L7.2 17.4"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MagicWandIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-[20px] w-[20px]"
    >
      <path
        d="M4.5 19.5L15.8 8.2"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M13.2 5.6L16.1 8.5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M18.2 3.5V6"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M19.5 4.75H17"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M7 4V6.5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M8.25 5.25H5.75"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M18.5 14V16.5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M19.75 15.25H17.25"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function RocketIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-[20px] w-[20px]"
    >
      <path
        d="M14.2 5.1C16.7 2.6 20.5 3.5 20.5 3.5C20.5 3.5 21.4 7.3 18.9 9.8L13.2 15.5L8.5 15.5L8.5 10.8L14.2 5.1Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 15.5L5.2 18.8"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M5.5 13.5L3.5 14.5L5.5 16.5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 18.5L9.5 20.5L7.5 18.5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="16.5"
        cy="7.5"
        r="1.5"
        stroke="white"
        strokeWidth="1.5"
      />
    </svg>
  );
}

/* =========================
   PROCESS ICONS
========================= */

const processIcons = [
  CursorIcon,
  ListIcon,
  MagicWandIcon,
  RocketIcon,
];

/* =========================
   PROCESS COMPONENT
========================= */

export default function Process() {
  return (
    <section
      id="process"
      className="w-full overflow-hidden bg-[#080808] py-[80px] lg:py-[90px]"
    >
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-[34px]">

        {/* =========================
            HEADING
        ========================= */}

        <div className="flex flex-col items-center text-center">

          {/* How it works badge */}

          <div
            className="inline-flex h-[30px] items-center gap-[6px] rounded-[20px] px-[11px] py-[5px]"
            style={{
              backgroundColor: "#111111",
              boxShadow:
                "rgba(0,0,0,0.4) 16px 24px 20px 8px, rgba(184,180,180,0.08) 0px 2px 0px 0px inset",
            }}
          >
            <span className="relative flex h-[12px] w-[12px] items-center justify-center">
              <span className="absolute h-[10px] w-[10px] rounded-full border border-white" />
              <span className="h-[4px] w-[4px] rounded-full bg-white" />
            </span>

            <span className="font-jakarta text-[10px] font-medium leading-none text-white">
              How it works
            </span>
          </div>

          {/* Heading */}

          <h2 className="mt-[14px] font-satoshi text-[32px] font-medium leading-[1.1] tracking-[-0.04em] text-white sm:text-[40px] lg:text-[44px]">
            Process{" "}
            <span className="text-white/60">
              Is Everything
            </span>
          </h2>

          {/* Description */}

          <p className="mt-[10px] font-jakarta text-[10px] font-medium leading-[1.5] text-white/60 sm:text-[11px]">
            Simple, streamlined process is what get's you results
          </p>
        </div>

        {/* =========================
            PROCESS CARDS
        ========================= */}

        <div className="mt-[28px] grid gap-[12px] md:grid-cols-2 xl:grid-cols-4">

          {process.map((item, index) => {
            const Icon = processIcons[index];

            return (
              <div
                key={item.step}
                className="group relative flex min-h-[181px] flex-col rounded-[8px] bg-[#111111] px-[15px] pt-[14px] pb-[15px] transition-transform duration-500 ease-out hover:-translate-y-[3px]"
                style={{
                  boxShadow:
                    "rgba(0,0,0,0.4) 16px 24px 20px 8px, rgba(184,180,180,0.08) 0px 2px 0px 0px inset",
                }}
              >
                {/* Number */}

                <div className="absolute right-[8px] top-[6px] flex h-[20px] w-[20px] items-center justify-center rounded-full bg-[#0A0A0A]">
                  <span className="font-jakarta text-[10px] font-medium text-white">
                    {index + 1}
                  </span>
                </div>

                {/* Icon */}

                <div className="flex h-[24px] items-center">
                  <Icon />
                </div>

                {/* Content */}

                <div className="mt-[13px]">
                  <h3 className="font-jakarta text-[11px] font-bold leading-[1.3] text-white">
                    {item.title}
                  </h3>

                  <p className="mt-[6px] max-w-[245px] font-jakarta text-[8px] font-normal leading-[1.55] text-white/70">
                    {item.body}
                  </p>
                </div>

                {/* Divider */}

                <div className="mt-auto pt-[12px]">
                  <div className="h-px w-full bg-white/10" />

                  {/* Step badge */}

                  <div className="mt-[10px] inline-flex h-[20px] items-center rounded-full border border-white/10 bg-[#111111] px-[8px]">
                    <span className="font-jakarta text-[8px] font-medium leading-none text-white/70">
                      Step {index + 1}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* =========================
            BOTTOM CTA
        ========================= */}

        <div
          className="mx-auto mt-[22px] flex w-full max-w-[420px] flex-col justify-between gap-[18px] rounded-[10px] bg-[#111111] px-[14px] py-[13px] sm:max-w-[420px] sm:flex-row sm:items-center"
          style={{
            boxShadow:
              "rgba(0,0,0,0.4) 16px 24px 20px 8px, rgba(184,180,180,0.08) 0px 2px 0px 0px inset",
          }}
        >
          {/* CTA text */}

          <div className="flex items-start gap-[7px]">
            <span className="mt-[2px] flex h-[12px] w-[12px] shrink-0 items-center justify-center rounded-full border border-white">
              <span className="h-[4px] w-[4px] rounded-full bg-white" />
            </span>

            <div>
              <h3 className="font-jakarta text-[10px] font-bold leading-[1.3] text-white">
                I am with you in every step
              </h3>

              <p className="mt-[3px] font-jakarta text-[8px] leading-[1.4] text-white/60">
                alongside you at each step for seamless experience
              </p>
            </div>
          </div>

          {/* Buttons */}

          <div className="flex shrink-0 items-center gap-[8px]">

            <a
              href="#projects"
              className="flex h-[31px] items-center justify-center rounded-full bg-[#0A0A0A] px-[15px] font-jakarta text-[9px] font-medium text-white transition-all duration-300 hover:bg-white/10"
            >
              See All Projects
            </a>

            <a
              href="#contact"
              className="flex h-[31px] items-center justify-center rounded-full px-[15px] font-jakarta text-[9px] font-medium text-[#0A0A0A] transition-transform duration-300 hover:scale-[1.03]"
              style={{
                background:
                  "linear-gradient(180deg, #FFFFFF 0%, #787878 140%)",
              }}
            >
              Contact Now
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}