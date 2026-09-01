import { useState } from "react";
import { Plus, Star } from "lucide-react";
import { faqs } from "../data/content";
import "../index.css";

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

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section
      id="faq-section"
      className="border rounded-[50px] bg-[#0a0a0a] py-[20px] sm:py-[30px]"
    >
      <div className="mx-auto w-full max-w-[1120px] px-[24px] py-[80px] sm:px-8 lg:py-[90px]">
        <div className="flex flex-col gap-[50px] min-[1400px]:grid min-[1400px]:grid-cols-[1fr_1.1fr] min-[1400px]:items-start min-[1400px]:gap-[44px]">
          <div className="min-w-0 min-[1400px]:sticky min-[1400px]:top-[105px] min-[1400px]:self-start sm:w-[720px] lg:w-full lg:max-w-[720px]">
            <div className="inline-flex h-[40px] items-center gap-[9px] rounded-[20px] px-[14px]" style={{background: "#111111", boxShadow: "rgba(0,0,0,0.4) 16px 24px 20px 8px, rgba(184,180,180,0.08) 0px 2px 0px 0px inset",}}>
              <BullseyeIcon />
              <span
                className="font-inter text-[15px] font-medium leading-none"
                style={{
                  color: "#ffffff",
                }}
              >
                FAQ Section
              </span>
            </div>
            <h2 className="mt-[22px] font-satoshi text-[42px] font-medium leading-[1.12] tracking-[-0.045em] sm:text-[48px] lg:text-[54px]">
              <StaggeredHeading
                startDelay={0.15}
                step={0.22}
                className="text-white"
              >
                Question,
              </StaggeredHeading>{" "}
              <StaggeredHeading
                startDelay={0.65}
                step={0.25}
                className="text-[#FFFFFF99]"
              >
                Answers
              </StaggeredHeading>
            </h2>
            <StaggeredParagraph
              text="Exceptional creativity and attention to detail! The final product not only looks great but also enhances user engagement"
              startDelay={1.15}
              step={0.08}
              className="mt-[20px] max-w-[500px] font-jakarta text-[15px] leading-[1.65] text-[#FFFFFF99] sm:text-[16px]"
            />
            <div
              className="mt-[32px] overflow-hidden rounded-[16px] p-[20px]"
              style={{
                background:
                  "linear-gradient(121deg, #787878 -52%, #111111 19%, #0a0a0a 100%)",
                boxShadow: "rgba(184,180,180,0.08) 0px 2px 0px 0px inset",
              }}
            >
              <div className="flex items-center gap-[12px]">
                <div className="h-[76px] w-[76px] overflow-hidden rounded-[8px] bg-[#222]">
                  <img
                    src="https://framerusercontent.com/images/DeANEXSHfUPawiwrcmj8Tkiib1o.jpg?width=2000&height=2000"
                    alt="Ryan Harper"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="mb-4 font-jakarta text-[20px] font-semibold text-white">
                    Ryan Harper
                  </p>
                  <p className="mb-2 text-[16px] font-jakarta text-[#FFFFFF99]">
                    Harper Education
                  </p>
                </div>
              </div>
              <div className="mt-[18px] flex items-center gap-[8px]">
                <span className="text-[16px] font-medium text-[rgba(255,255,255,0.6)]">
                  5.0
                </span>
                <div className="flex gap-[4px]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-[18px] w-[18px] fill-[#ffd700] text-[#ffd700]"
                    />
                  ))}
                </div>
              </div>
              <p className="mt-[18px] text-[15px] leading-[1.65] text-[#FFFFFF99]">
                Exceptional creativity and attention to detail! The final
                product not only looks great but also enhances user engagement.
              </p>
            </div>
            <div className="mt-[28px] flex flex-wrap items-center gap-[10px]">
              <a
                href="./projects"
                className="inline-flex h-[55px] items-center justify-center rounded-full px-[26px] font-jakarta text-[15px] font-medium"
                style={{
                  color: "#ffffff",
                  border: "1px solid rgba(255,255,255,0.06)",
                  background:
                    "linear-gradient(180deg, #787878 -382%, #0a0a0a 100%)",
                }}
              >
                See All Projects
              </a>
              <a
                href="./contact#contact"
                className="inline-flex h-[55px] items-center justify-center rounded-full px-[26px] font-jakarta text-[15px] font-medium"
                style={{
                  color: "#0a0a0a",
                  background:
                    "linear-gradient(180deg, #ffffff 0%, #787878 140%)",
                }}
              >
                Contact Now
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-[10px] sm:w-[720px] lg:w-full lg:max-w-[720px]">
            {faqs.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={item.q}
                  className="overflow-hidden rounded-[15px] bg-[#111111]"
                  style={{
                    boxShadow:
                      "rgba(0,0,0,0.4) 16px 24px 20px 8px, rgba(184,180,180,0.08) 0px 2px 0px 0px inset",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-[20px] px-[20px] py-[19px] text-left sm:px-[24px] sm:py-[21px]"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[15px] font-medium leading-[1.5] text-white sm:text-[15px]">
                      {item.q}
                    </span>
                    <Plus
                      className={`h-[18px] w-[18px] shrink-0 text-white transition-transform duration-300 ${
                        isOpen ? "rotate-45" : "rotate-0"
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-[20px] pb-[20px] text-[16px] leading-[1.65] text-[#FFFFFF99] sm:px-[24px] sm:pb-[22px] sm:text-[16px]">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
