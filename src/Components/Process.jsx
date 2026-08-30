import React, { useEffect, useRef, useState } from "react";
import { MousePointer2, ListChecks, WandSparkles, Rocket } from "lucide-react";
import { process } from "../data/content";
import "../index.css";

const processIcons = [MousePointer2, ListChecks, WandSparkles, Rocket];

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
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);
  const [ctaVisible, setCtaVisible] = useState(false);
  const ctaRef = useRef(null);
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
  useEffect(() => {
    const observers = [];
    cardRefs.current.forEach((card, index) => {
      if (!card) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => {
              if (prev.includes(index)) return prev;
              return [...prev, index];
            });
            observer.unobserve(card);
          }
        },
        {
          threshold: 0.15,
        },
      );
      observer.observe(card);
      observers.push(observer);
    });
    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);
  useEffect(() => {
    if (!ctaRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCtaVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15,
      },
    );
    observer.observe(ctaRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="process"
      className="w-full overflow-hidden rounded-[30px] border border-b-0 bg-[#080808] py-[90px] lg:py-[100px]"
    >
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
      <div className="relative mt-[44px] w-full overflow-hidden">
        <div
          className="mx-auto flex w-max gap-[24px] transition-transform duration-[2800ms] ease-[cubic-bezier(0.16,1,0.3,1)] max-[1400px]:grid max-[1400px]:grid-cols-2 max-[1400px]:gap-[24px] max-[1400px]:w-full max-[1400px]:max-w-[1104px] max-[1400px]:justify-items-center max-[991px]:grid max-[991px]:grid-cols-1 max-[991px]:grid-[24px] max-[991px]:w-full max-[991px]:max-w-[540px] max-[991px]:justify-items-center"
          style={{
            position: "relative",
            transform:
              window.innerWidth <= 1400
                ? "none"
                : scrollDirection === "down"
                  ? "translateX(-70px)"
                  : "translateX(40px)",
          }}
        >
          {process.map((item, i) => {
            const Icon = processIcons[i] || MousePointer2;
            const isVisible = visibleCards.includes(i);
            return (
              <div
                key={item.step}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                className="relative flex shrink-0 flex-col rounded-[16px] bg-[#0F0F0F] p-[30px] max-[567px]:w-[calc(100vw-40px)] max-[567px]:max-w-full max-[1400px]:h-[340px] max-[1400px]:w-full max-[991px]:h-[330px] max-[991px]:w-[540px] max-[991px]:max-w-[540px]"
                style={{
                  transform:
                    window.innerWidth <= 1400
                      ? visibleCards.includes(i)
                        ? "translateX(0)"
                        : "translateX(-100px)"
                      : "translateX(0)",
                  opacity:
                    window.innerWidth <= 1400
                      ? visibleCards.includes(i)
                        ? 1
                        : 0
                      : 1,
                  transition:
                    "transform 900ms cubic-bezier(0.16, 1, 0.3, 1), opacity 900ms ease",
                  transitionDelay: `${i * 120}ms`,
                  boxShadow:
                    "rgba(0, 0, 0, 0.4) 16px 24px 20px 8px, rgba(184, 180, 180, 0.08) 0px 2px 0px 0px inset",
                }}
              >
                <div className="flex w-full items-start justify-between">
                  <div className="flex h-[80px] w-[30px] items-center justify-center">
                    <Icon
                      className="h-[28px] w-[28px] text-white"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div
                    className="absolute right-[10px] top-[10px] flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#0A0A0A]"
                    style={{
                      boxShadow:
                        "rgba(184, 180, 180, 0.14) 0px 2px 0px 0px inset",
                    }}
                  >
                    <span className="font-jakarta text-[16px] font-medium leading-none text-white">
                      {" "}
                      {i + 1}{" "}
                    </span>
                  </div>
                </div>
                <div className="mb-[25px]">
                  <h3 className="font-jakarta text-[20px] font-bold leading-[1.3] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-[10px] max-w-[320px] font-inter text-[15px] font-medium leading-[1.55] text-[#FFFFFF99]">
                    {item.body}
                  </p>
                </div>
                <div className="mt-auto h-px w-full bg-white/10" />
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
      <div
        ref={ctaRef}
        className="mx-auto mt-[44px] flex h-[112px] w-[calc(100%-40px)] max-w-[840px] flex-col items-start justify-between rounded-[25px] bg-[#0F0F0F] p-[24px] max-[1399px]:h-[195px] max-[767px]:h-[316px] max-md:w-[calc(100%-40px)] max-md:max-w-full max-md:p-[24px] max-sm:w-[calc(100%-40px)] max-sm:max-w-full max-sm:p-[20px] min-[1400px]:flex-row min-[1400px]:items-center"
        style={{
          transform: ctaVisible ? "translateX(0)" : "translateX(-100px)",
          opacity: ctaVisible ? 1 : 0,
          transition:
            "transform 900ms cubic-bezier(0.16, 1, 0.3, 1), opacity 900ms ease",
          transitionDelay: "120ms",
          boxShadow:
            "rgba(0, 0, 0, 0.4) 16px 24px 20px 8px, rgba(184, 180, 180, 0.08) 0px 2px 0px 0px inset",
        }}
      >
        <div>
          <div className="flex items-center gap-[7px] max-sm:flex-col max-sm:items-start max-sm:gap-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              className="h-[24px] w-[24px] shrink-0 max-sm:h-[24px] max-sm:w-[24px]"
              fill="white"
            >
              <g>
                <path
                  d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z"
                  opacity="0.2"
                />
                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM80,108a12,12,0,1,1,12,12A12,12,0,0,1,80,108Zm104,0a8,8,0,0,1-8,8H152a8,8,0,0,1,0-16h24A8,8,0,0,1,184,108Zm-9.08,48c-10.29,17.79-27.39,28-46.92,28s-36.63-10.2-46.92-28a8,8,0,1,1,13.84-8c7.47,12.91,19.21,20,33.08,20s25.61-7.1,33.08-20a8,8,0,1,1,13.84,8Z" />
              </g>
            </svg>
            <h3 className="font-jakarta text-[20px] font-bold leading-[32px] text-[#FFFFFF] max-sm:mt-[12px] max-sm:w-full">
              I am with you in every step
            </h3>
          </div>
          <p className="mt-[8px] w-full font-inter text-[15px] font-medium leading-[27px] text-[#FFFFFF99] max-sm:w-full max-sm:mb-[-60px]">
            alongside you at each step for seamless experience
          </p>
        </div>
        <div className="flex items-center gap-[16px] max-sm:w-full max-sm:flex-col max-sm:gap-[20px] sm:mb-4">
          <a
            href="#projects"
            className="flex h-[58px] w-[175px] items-center justify-center rounded-full px-[26px] py-[13px] font-jakarta text-[16px] font-bold leading-none text-white md:mt-5 sm:mt-[84px] max-sm:h-[58px] max-sm:w-[310px]"
            style={{
              background:
                "linear-gradient(180deg, rgba(120,120,120) -382%, #0A0A0A 100%)",
            }}
          >
            See All Projects
          </a>
          <a
            href="#contact"
            className="flex h-[58px] w-[154px] items-center justify-center rounded-full px-[26px] py-[13px] font-jakarta text-[16px] font-medium leading-none text-[#0A0A0A] md:mt-5 sm:mt-[84px] max-sm:h-[58px] max-sm:w-[310px]"
            style={{
              background: "linear-gradient(180deg, #FFFFFF 0%, #787878 140%)",
            }}
          >
            Contact Now
          </a>
        </div>
      </div>
    </section>
  );
}
