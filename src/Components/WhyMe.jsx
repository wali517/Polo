
import React, { useEffect, useRef, useState } from "react";

const BENEFITS = [
  {
    positive: "Skilled Professional",
    positiveText:
      "Gain access to top-tier talent with years of experience, ensuring flawless execution",
    negative: "Amateur Designer",
    negativeText:
      "Lack of experience may result in design inconsistencies and overlooked details",
  },
  {
    positive: "Future-Ready Designs",
    positiveText:
      "Crafting modern, scalable designs that grow with your business and stay ahead of trends.",
    negative: "Outdated Concepts",
    negativeText:
      "Stale designs that don’t reflect current trends or your evolving brand narrative.",
  },
  {
    positive: "Client-Centric Collaboration",
    positiveText:
      "Your vision leads the way — I work closely with you to bring ideas to life with precision and creativity.",
    negative: "Detached Communication",
    negativeText:
      "Lack of collaboration and poor feedback loops can result in misaligned outcomes.",
  },
  {
    positive: "Timely Project Tracking",
    positiveText:
      "Stay informed with regular progress updates and timely deliverables",
    negative: "Unstructured & Unreliable Work",
    negativeText:
      "Inconsistent timelines and last-minute changes can compromise quality",
  },
];

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,1,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z" />
    </svg>
  );
}

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

function BenefitCard({
  benefit,
  index,
  style,
  cardRef,
}) {
  return (
    <div
      ref={cardRef}
      className="absolute left-0 top-0 w-full"
      style={{
        ...style,
        zIndex: 20 + index,
      }}
    >
      <div
        className="h-[230px] w-full overflow-hidden rounded-[20px] bg-[#111111]"
        style={{
          boxShadow:
            "rgba(92, 92, 92, 0.08) 0px 2px 0px 0px inset",
        }}
      >
        <div className="flex h-full w-full flex-col md:flex-row">
          <div className="flex flex-1 flex-col items-start p-[40px]">
            {/* ICON AT TOP */}
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 p-[9px] text-white">
              <CheckIcon />
            </div>
            <div className="mt-5 min-w-0">
              <h4 className="text-[20px] font-jakarta sm:text-[25px] leading-[1.25] tracking-[-0.02em] text-white">
                {benefit.positive}
              </h4>
            </div>
            <div className="min-w-0">
              <p className="mt-3 max-w-[430px] font-inter text-[15px] leading-[1.6] text-white/70">
                {benefit.positiveText}
              </p>
            </div>
          </div>

          <div className="mx-6 h-px bg-white/10 md:my-[40px] md:mx-0 md:h-auto md:w-px" />
          <div className="flex flex-1 flex-col items-start p-[40px]">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 p-[9px] text-white">
              <XIcon />
            </div>
            <div className="mt-5 min-w-0">
              <h4 className="text-[20px] font-jakarta sm:text-[25px] leading-[1.25] tracking-[-0.02em] text-white">
                {benefit.negative}
              </h4>
            </div>
            <div className="min-w-0">
              <p className="mt-3 max-w-[430px] font-inter text-[15px] leading-[1.6] text-white/70">
                {benefit.negativeText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileBenefitCard({ benefit }) {
  return (
    <div className="w-full overflow-hidden rounded-[20px] bg-[#111111]">
      <div className="flex w-full flex-col">

        <div className="flex flex-col items-start p-6">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 p-[9px] text-white">
            <CheckIcon />
          </div>
          <h4 className="mt-5 text-[20px] leading-[1.25] tracking-[-0.02em] font-jakarta text-white">
            {benefit.positive}
          </h4>
          <p className="mt-3 text-[15px] leading-[1.6] font-inter text-white/70">
            {benefit.positiveText}
          </p>
        </div>
        <div className="mx-6 h-px bg-white/10" />
        <div className="flex flex-col items-start p-6">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 p-[9px] text-white">
            <XIcon />
          </div>
<h4 className="mt-5 text-[20px] leading-[1.25] tracking-[-0.02em] font-jakarta text-white">
            {benefit.negative}
          </h4>
          <p className="mt-3 text-[15px] leading-[1.6] font-inter text-white/70">
            {benefit.negativeText}
          </p>
        </div>

      </div>
    </div>
  );
}
export default function Benefits() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardStackRef = useRef(null);
  const firstCardRef = useRef(null);

  const [progress, setProgress] = useState(0);

  const [cardHeight, setCardHeight] =
    useState(230);

  const [headingToCard, setHeadingToCard] =
    useState(115);
  const TOTAL_STAGES = 5;

  const COLLAPSE_STAGES = 3;

  const INITIAL_CARD_GAP = 16;

  const STACK_GAP = 15;

  const STACK_MOVE_START = 3;

  const STACK_MOVE_END = 4;

  const SECTION_HEIGHT = "125vh";

  const easeInOut = (value) => {
    return value * value * (3 - 2 * value);
  };

  useEffect(() => {
    const measure = () => {
      const firstCard =
        firstCardRef.current;

      const heading =
        headingRef.current;

      const cardStack =
        cardStackRef.current;

      if (
        !firstCard ||
        !heading ||
        !cardStack
      ) {
        return;
      }

      const cardRect =
        firstCard.getBoundingClientRect();

      const headingRect =
        heading.getBoundingClientRect();

      const stackRect =
        cardStack.getBoundingClientRect();

      if (cardRect.height > 0) {
        setCardHeight(
          cardRect.height
        );
      }

      const distance =
        stackRect.top -
        headingRect.bottom;

      if (distance >= 0) {
        setHeadingToCard(
          distance
        );
      }
    };

    measure();

    const observer =
      new ResizeObserver(
        measure
      );

    if (headingRef.current) {
      observer.observe(
        headingRef.current
      );
    }

    if (cardStackRef.current) {
      observer.observe(
        cardStackRef.current
      );
    }

    if (firstCardRef.current) {
      observer.observe(
        firstCardRef.current
      );
    }

    window.addEventListener(
      "resize",
      measure
    );

    return () => {
      observer.disconnect();

      window.removeEventListener(
        "resize",
        measure
      );
    };
  }, []);

  useEffect(() => {
    let ticking = false;

    const updateProgress = () => {
      const section =
        sectionRef.current;

      if (!section) {
        ticking = false;
        return;
      }

      if (
        window.innerWidth < 768
      ) {
        setProgress(0);
        ticking = false;
        return;
      }

      const rect =
        section.getBoundingClientRect();

      const scrollDistance =
        section.offsetHeight -
        window.innerHeight;

      if (
        scrollDistance <= 0
      ) {
        setProgress(0);
        ticking = false;
        return;
      }

      const traveled =
        Math.max(
          0,
          -rect.top
        );

      const normalized =
        traveled /
        scrollDistance;

      const nextProgress =
        Math.max(
          0,
          Math.min(
            TOTAL_STAGES,
            normalized *
              TOTAL_STAGES
          )
        );

      setProgress(
        nextProgress
      );

      ticking = false;
    };

    const handleScroll = () => {
      if (ticking) {
        return;
      }

      ticking = true;

      window.requestAnimationFrame(
        updateProgress
      );
    };

    updateProgress();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "resize",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );

      window.removeEventListener(
        "resize",
        handleScroll
      );
    };
  }, []);

  const stackVisualHeight =
    cardHeight +
    3 * STACK_GAP;

  const getStackY = () => {
    if (
      progress <=
      STACK_MOVE_START
    ) {
      return 0;
    }

    if (
      progress <
      STACK_MOVE_END
    ) {
      const localProgress =
        progress -
        STACK_MOVE_START;

      const eased =
        easeInOut(
          localProgress
        );

      const targetY =
        -(
          headingToCard +
          stackVisualHeight
        );

      return (
        targetY *
        eased
      );
    }

    return -(
      headingToCard +
      stackVisualHeight
    );
  };

  const getContentTransform = () => {
    if (
      progress <=
      STACK_MOVE_END
    ) {
      return "translate3d(0, 0, 0)";
    }

    const localProgress =
      Math.min(
        1,
        progress -
          STACK_MOVE_END
      );

    const eased =
      easeInOut(
        localProgress
      );

    const y =
      -eased *
      window.innerHeight *
      0.95;

    return `translate3d(0, ${y}px, 0)`;
  };
  const getCardStyle = (
    index
  ) => {

    if (index === 0) {
      return {
        transform: `translate3d(0, ${getStackY()}px, 0)`,
        willChange: "transform",
      };
    }

    const initialY =
      index *
      (cardHeight +
        INITIAL_CARD_GAP);

    const stackOffset =
      index *
      STACK_GAP;
    const startStage =
      index - 1;

    const endStage =
      index;

    if (
      progress <=
      startStage
    ) {
      return {
        transform:
          `translate3d(0, ${initialY}px, 0)`,
        willChange:
          "transform",
      };
    }
    if (
      progress <
      endStage
    ) {
      const localProgress =
        progress -
        startStage;

      const eased =
        easeInOut(
          localProgress
        );

      const y =
        initialY +
        (
          stackOffset -
          initialY
        ) *
          eased;

      return {
        transform:
          `translate3d(0, ${y}px, 0)`,
        willChange:
          "transform",
      };
    }
    return {
      transform:
        `translate3d(0, ${
          getStackY() +
          stackOffset
        }px, 0)`,
      willChange:
        "transform",
    };
  };

  return (
    <>

      <section
        ref={sectionRef}
        id="benefits"
        className="relative hidden w-full bg-[#090909] md:block"
        style={{
          height:
            SECTION_HEIGHT,
        }}
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden">

          <div
            className="mx-auto flex h-full w-full max-w-[1100px] flex-col items-center px-5 pt-[70px] sm:px-8 md:pt-[85px] lg:pt-[140px]"
            style={{
              transform:
                getContentTransform(),
              willChange:
                "transform",
            }}
          >
            <div
              ref={headingRef}
              className="relative z-10 flex w-full flex-col items-center text-center"
            >

              <div className="inline-flex h-[38px] items-center gap-2 rounded-full border-t border-white/10 bg-[#0F0F0F] px-4 py-[6px] font-inter text-[15px] font-medium text-white">
                <BullseyeIcon />

                <span>
                  Why choose me
                </span>
              </div>

              <h2 className="mt-[22px] font-satoshi text-[40px] leading-[1.5] tracking-[-0.04em] text-white lg:text-[54px]">

                <StaggeredHeading
                  startDelay={0.15}
                  step={0.22}
                  className="text-white"
                >
                  Why me as
                </StaggeredHeading>{" "}

                <StaggeredHeading
                  startDelay={0.65}
                  step={0.25}
                  className="text-[#FFFFFF99]"
                >
                  Design Partner
                </StaggeredHeading>

              </h2>

              <StaggeredParagraph
                text="Why Partner with Me for the Design Excellence"
                startDelay={1.15}
                step={0.08}
                className="mt-5 max-w-full font-jakarta text-[15px] text-[#FFFFFF99] md:text-[16px]"
              />

            </div>
            <div
              ref={cardStackRef}
              className="relative z-20 mt-[45px] w-full"
              style={{
                height: `${
                  cardHeight * 4 +
                  INITIAL_CARD_GAP * 3
                }px`,
              }}
            >

              {BENEFITS.map(
                (
                  benefit,
                  index
                ) => (
                  <BenefitCard
                    key={index}
                    benefit={benefit}
                    index={index}
                    cardRef={
                      index === 0
                        ? firstCardRef
                        : undefined
                    }
                    style={getCardStyle(
                      index
                    )}
                  />
                )
              )}

            </div>
          </div>
        </div>
      </section>
      <section
        id="benefits-mobile"
        className="block w-full bg-[#090909] md:hidden"
      >

        <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center px-5 py-[70px]">
          <div className="flex w-full flex-col items-center text-center">

            <div className="inline-flex h-[38px] items-center gap-2 rounded-full border-t border-white/10 bg-[#0F0F0F] px-4 py-[6px] font-inter text-[15px] font-medium text-white">
              <BullseyeIcon />

              <span>
                Why choose me
              </span>
            </div>

            <h2 className="mt-[22px] font-satoshi text-[40px] leading-[1.25] tracking-[-0.04em] text-white">

              <StaggeredHeading
                startDelay={0.15}
                step={0.22}
                className="text-white"
              >
                Why me as
              </StaggeredHeading>{" "}

              <StaggeredHeading
                startDelay={0.65}
                step={0.25}
                className="text-[#FFFFFF99]"
              >
                Design Partner
              </StaggeredHeading>

            </h2>

            <StaggeredParagraph
              text="Why Partner with Me for the Design Excellence"
              startDelay={1.15}
              step={0.08}
              className="mt-5 max-w-full font-jakarta text-[15px] leading-[1.6] text-[#FFFFFF99]"
            />

          </div>

          <div className="mt-[40px] flex w-full flex-col gap-5">

            {BENEFITS.map(
              (
                benefit,
                index
              ) => (
                <MobileBenefitCard
                  key={index}
                  benefit={benefit}
                />
              )
            )}

          </div>

        </div>
      </section>
    </>
  );
}
