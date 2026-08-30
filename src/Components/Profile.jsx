import React, { useEffect, useRef, useState } from "react";
import { DribbbleIcon, InstagramIcon, XIcon } from "./SocialIcons";
import { experience, skills } from "../data/content";
import "../index.css";

const PROFILE_IMAGE =
  "https://framerusercontent.com/images/bS5yI534QrgZ6plEFuXPt84TkA.png?width=673&height=962";

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
            animation: `heroWordReveal 1.1s cubic-bezier(0.19,1,0.22,1) ${startDelay + index * step}s both`,
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
              animation: `heroWordReveal 1.4s cubic-bezier(0.16,1,0.3,1) ${startDelay + index * step}s both`,
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

export default function Profile() {
  const [showBottomContent, setShowBottomContent] = useState(false);
  const bottomContentRef = useRef(null);
  useEffect(() => {
    const element = bottomContentRef.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowBottomContent(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.15,
      },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="profile"
      className="w-full rounded-t-[40px] rounded-b-none bg-[#0f0f0f] py-[90px]"
    >
      <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center px-5 sm:px-8">
        <div className="flex w-full flex-col items-center text-center">
          <div className="inline-flex h-[38px] items-center gap-2 rounded-full border-t border-white/10 bg-[#0F0F0F] px-4 py-[6px] font-inter text-[15px] font-medium text-white">
            <BullseyeIcon />
            <span>Expert Designer</span>
          </div>
          <h2 className="mt-[22px] font-satoshi text-[40px] leading-[1.5] tracking-[-0.04em] text-white lg:text-[54px]">
            <StaggeredHeading
              startDelay={0.15}
              step={0.22}
              className="text-white"
            >
              Johan Beker,
            </StaggeredHeading>{" "}
            <StaggeredHeading
              startDelay={0.65}
              step={0.25}
              className="text-[#FFFFFF99]"
            >
              Your Designer
            </StaggeredHeading>
          </h2>
          <StaggeredParagraph
            text="Brief initial presentation of myself and my previous experiences."
            startDelay={1.15}
            step={0.08}
            className="mt-5 max-w-full font-jakarta text-[15px] text-[#FFFFFF99] md:text-[16px]"
          />
        </div>
        <div className="mt-[45px] flex w-full flex-col gap-[40px] min-[1400px]:grid min-[1400px]:grid-cols-[453px_603px] min-[1400px]:items-start min-[1400px]">
          <div
            className="h-[694px] w-full rounded-[15px] bg-[#0F0F0F] px-[22px] pt-[22px] pb-[32px] lg:h-[703px]"
            style={{
              boxShadow:
                "rgba(0,0,0,0.4) 16px 24px 20px 8px, rgba(184,180,180,0.08) 0px 2px 0px 0px inset",
            }}
          >
            <div
              className="relative h-[382px] w-full overflow-hidden rounded-[8px] bg-[#080808]"
              style={{
                boxShadow:
                  "rgba(0,0,0,0.4) 16px 24px 20px 8px, rgba(184,180,180,0.08) 0px 2px 0px 0px inset",
              }}
            >
              <img
                src={PROFILE_IMAGE}
                alt="Johan Beker"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/[0.08]" />
              <div className="absolute bottom-[12px] left-1/2 -translate-x-1/2">
                <div className="flex h-[33px] w-full items-center justify-center gap-[10px] px-[12px] py-[6px]">
                  <span className="relative flex h-[7px] w-[7px] shrink-0 items-center justify-center">
                    <span className="absolute h-[15px] w-[15px] animate-ping rounded-full bg-[#31EE33]" />
                    <span
                      className="relative h-[7px] w-[7px] rounded-full bg-[#31EE33]"
                      style={{
                        boxShadow: "0 0 12px rgba(49,238,51,0.5)",
                      }}
                    />
                  </span>
                  <span className="font-plus-jakarta text-[12px] font-bold leading-none text-white">
                    Available for work
                  </span>
                </div>
              </div>
            </div>
            <div className="pt-[24px]">
              <h3 className="font-jakarta text-[20px] font-bold leading-[2.2] tracking-[-0.01em] text-white lg:text-[25px]">
                Hello I am Johan Beker
              </h3>
              <p className="font-inter text-[15px] font-normal leading-[1.4] text-white">
                UI/UX Interaction Designer Based in Berlin.
              </p>
              <div className="mt-[25px] flex items-center gap-[20px]">
                <a
                  href="https://x.com/home"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="X"
                  className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#080808] p-[8px] text-white"
                >
                  <XIcon className="h-[18px] w-[18px]" />
                </a>
                <span className="h-[20px] w-[1px] bg-white/20" />
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#080808] p-[8px] text-white"
                >
                  <InstagramIcon className="h-[22px] w-[22px]" />
                </a>
                <span className="h-[20px] w-[1px] bg-white/20" />
                <a
                  href="https://dribbble.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Dribbble"
                  className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#080808] p-[8px] text-white"
                >
                  <DribbbleIcon className="h-[22px] w-[22px]" />
                </a>
              </div>
              <div className="mt-[22px] h-px w-full bg-white/10" />
              <div
                ref={bottomContentRef}
                className={`mt-[22px] fade-up-button ${
                  showBottomContent ? "fade-up-button-show" : ""
                }`}
              >
                <a
                  href="#contact"
                  className="flex h-[56px] w-[175px] items-center justify-center rounded-full px-[26px] py-[13px] font-jakarta text-[15px] font-medium leading-none text-white lg:h-[58px] lg:w-[182px] lg:text-[16px]"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(120,120,120) -382%, #080808 100%)",
                  }}
                >
                  Connect with me
                </a>
              </div>
            </div>
          </div>
          <div
            className="h-full w-full rounded-[20px] bg-[#0F0F0F] px-[30px] pt-[30px] pb-[24px] lg:h-[738px]"
            style={{
              boxShadow:
                "rgba(0,0,0,0.4) 16px 24px 20px 8px, rgba(184,180,180,0.08) 0px 2px 0px 0px inset",
            }}
          >
            <div className="w-full">
              <p className="font-jakarta text-[15px] font-medium leading-[1.7] tracking-[0.5px] lg:tracking-[0px] md:tracking-[0.5px] text-white lg:text-[16px] lg:leading-[2]">
                I&rsquo;m Johan Beker, a dedicated Web Designer &amp; Developer
                based in the vibrant city of Berlin, Germany. I specialize in
                creative design with seamless technical execution to craft
                exceptional digital experiences.
              </p>
            </div>
            <div className="mt-8 h-px w-full bg-white/[0.10]" />
            <div
              id="skills"
              className="flex w-full flex-wrap content-start gap-[14px] pt-[20px] lg:pt-[30px]"
            >
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center justify-center rounded-[8px] bg-[#080808] px-[12px] py-[8px]"
                >
                  <span className="flex h-[28px] items-center font-jakarta text-[15px] font-medium leading-none text-[#FFFFFF99] lg:text-[16px]">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-8 h-px w-full bg-white/[0.10]" />
            <div id="exp" className="mt-[28px] w-full">
              <div className="flex h-full w-full flex-col gap-[25px]">
                {experience.map((row) => (
                  <div
                    key={`${row.role}-${row.year}`}
                    className="group flex min-h-[60px] w-full flex-col items-start justify-between gap-3 rounded-[10px] bg-[#080808] px-[28px] py-[28px] md:min-h-0 md:h-[64px] md:flex-row md:items-center md:justify-between md:gap-[15px] md:px-[22px] md:py-[14px]"
                    style={{
                      boxShadow: "rgba(0,0,0,0.6) 12px 24px 20px 8px",
                    }}
                  >
                    <span className="md:w-1/3 font-jakarta text-[15px] font-medium leading-[1.3] text-[#FFFFFF99] lg:text-[16px]">
                      {row.role}
                    </span>
                    <span className="md:w-1/3 font-jakarta text-[15px] font-medium leading-[1.3] text-[#FFFFFF99] lg:text-[16px]">
                      {row.company}
                    </span>
                    <span className="md:w-1/3 text-right font-jakarta text-[15px] font-medium leading-[1.3] text-[#FFFFFF99] lg:text-[16px]">
                      {row.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
