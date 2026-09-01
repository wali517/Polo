import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import card1 from "../assets/images/Recent/card1.avif";
import card2 from "../assets/images/Recent/card2.avif";
import card3 from "../assets/images/Recent/card3.avif";
import card4 from "../assets/images/Recent/card4.avif";
import "../index.css";

const PROJECTS = [
  {
    id: "fade",
    href: "./projects/fade",
    image:
      card1,
  },
  {
    id: "brandin",
    href: "./projects/brandin",
    image:
      card2,
  },
  {
    id: "studio",
    href: "./projects/studio",
    image:
      card3,
  },
  {
    id: "atom-ai",
    href: "./projects/atom-ai",
    image:
      card4,
  },
];

function BullseyeIcon() {
  return (
    <span className="flex h-3 w-3 shrink-0 items-center justify-center rounded-full border border-white/70">
      <span className="h-1.5 w-1.5 rounded-full bg-white" />
    </span>
  );
}

function useFadeInLeft() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return [ref, visible];
}

function ProjectCard({ project, className = "", animationDelay = 0 }) {
  const [fadeRef, fadeVisible] = useFadeInLeft();
  const [hovered, setHovered] = useState(false);
  const [cursorPos, setCursorPos] = useState({
    x: 0,
    y: 0,
  });
  const handleMouseMove = (e) => {
    setCursorPos({
      x: e.clientX,
      y: e.clientY,
    });
  };
  const handleMouseEnter = (e) => {
    setCursorPos({
      x: e.clientX,
      y: e.clientY,
    });
    setHovered(true);
  };

  return (
    <a
      ref={fadeRef}
      href={project.href}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      className={`relative block w-full ${className}`}
    >
      <div
        className={`relative h-full w-full overflow-hidden rounded-[20px] border border-white/[0.08] bg-[#111111] p-4 transition-all duration-[1100ms] ease-[cubic-bezier(0.19,1,0.22,1)] ${
          fadeVisible
            ? "translate-x-0 opacity-100"
            : "-translate-x-[100px] opacity-0"
        }`}
        style={{
          transitionDelay: fadeVisible ? `${animationDelay}s` : "0s",
          boxShadow:
            "rgba(0,0,0,0.4) 16px 24px 20px 8px, rgba(184,180,180,0.08) 0px 2px 0px 0px inset",
        }}
      >
        <img
          src={project.image}
          alt=""
          className="h-full w-full object-cover object-left"
        />
        <div className="absolute bottom-2 left-2 flex h-[50px] w-[50px] items-center justify-center overflow-hidden rounded-full border border-white/10 bg-[#0a0a0a] text-white">
          <span
            className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              transform: hovered ? "translateY(-100%)" : "translateY(0)",
            }}
          >
            <ArrowUpRight
              className="h-[22px] w-[22px]"
              style={{
                transform: "rotate(10.5deg)",
              }}
            />
          </span>
          <span
            className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              transform: hovered ? "translateY(0)" : "translateY(100%)",
            }}
          >
            <ArrowUpRight
              className="h-[22px] w-[22px]"
              style={{
                transform: "rotate(10.5deg)",
              }}
            />
          </span>
        </div>
      </div>
      {hovered && (
        <div
          className="pointer-events-none fixed z-[9999] hidden md:block"
          style={{
            left: `${cursorPos.x}px`,
            top: `${cursorPos.y}px`,
            transform: "translate3d(-50%, -50%, 0)",
            transition:
              "left 120ms cubic-bezier(0.16,1,0.3,1), top 120ms cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <div className="flex h-[40px] min-w-[120px] items-center justify-center rounded-full border border-white/70 bg-white/[0.08] px-4 text-[13px] font-medium text-white backdrop-blur-md">
            View project
          </div>
        </div>
      )}
    </a>
  );
}

function MobileProjectCard({ project, className = "" }) {
  const [fadeRef, fadeVisible] = useFadeInLeft();

  return (
    <a
      ref={fadeRef}
      href={project.href}
      className={`group relative block w-full transition-all duration-[1100ms] ease-[cubic-bezier(0.19,1,0.22,1)] ${
        fadeVisible
          ? "translate-x-0 opacity-100"
          : "-translate-x-[100px] opacity-0"
      } ${className}`}
    >
      <div className="relative overflow-hidden rounded-[20px] border border-white/[0.08] bg-[#111111] p-3 shadow-[0_20px_45px_rgba(0,0,0,0.45)]">
        <div className="relative h-full overflow-hidden rounded-[14px]">
          <img
            src={project.image}
            alt=""
            className="h-full w-full object-cover object-left"
            loading="eager"
          />
          <div className="pointer-events-none absolute inset-0 bg-black/10" />
          <div className="absolute bottom-[-4px] left-[-4px] flex h-[50px] w-[50px] items-center justify-center overflow-hidden rounded-full border border-white/10 bg-[#0a0a0a] text-white">
            <ArrowUpRight
              className="h-[22px] w-[22px]"
              style={{
                transform: "rotate(10.5deg)",
              }}
            />
          </div>
        </div>
      </div>
    </a>
  );
}

function StaggeredParagraph({
  text,
  className = "",
  startDelay = 0,
  step = 0.06,
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

export default function Projects() {
  const [headingArrowHover, setHeadingArrowHover] = useState(false);
  return (
    <div>
      <section className="border rounded-[50px] pb-36 sm:pb-20">
        <div className="relative w-full px-6 sm:px-8">
          <div className="mx-auto w-full max-w-[1050px]">
            <div className="flex w-full flex-col gap-7 pb-4 pt-[100px] md:pt-24 colg:pt-24">
              <div className="w-full">
                <div className="inline-flex h-[34px] items-center gap-2 rounded-full border border-white/10 bg-[#111111] px-3.5 font-inter text-[15px] font-medium text-white">
                  <BullseyeIcon />
                  <span>Recent Projects</span>
                </div>
                <div className="relative mt-5 flex w-full items-center gap-2 md:gap-4">
                  <h1 className="w-max max-w-none whitespace-nowrap font-satoshi text-[56px] leading-[0.98] sm:text-[64px] md:text-[72px]">
                    <span className="text-[#FFFFFF]">Recent</span>{" "}
                    <span className="text-[#FFFFFF99]">Designs</span>
                  </h1>
                  <div className="relative hidden h-[50px] w-[50px] shrink-0 sm:flex">
                    <a
                      href="./#profile"
                      onMouseEnter={() => setHeadingArrowHover(true)}
                      onMouseLeave={() => setHeadingArrowHover(false)}
                      className="relative flex h-[50px] w-[50px] items-center justify-center overflow-hidden rounded-full border border-white/10 bg-[#0a0a0a] text-white"
                      style={{
                        boxShadow: "0 2px 0 0 rgba(184,180,180,0.14) inset",
                      }}
                    >
                      <span
                        className="absolute inset-0 flex items-center justify-center transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                        style={{
                          transform: headingArrowHover
                            ? "translateY(-100%)"
                            : "translateY(0)",
                        }}
                      >
                        <ArrowUpRight
                          className="h-6 w-6"
                          style={{
                            transform: "rotate(10.5deg)",
                          }}
                        />
                      </span>
                      <span
                        className="absolute inset-0 flex items-center justify-center transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                        style={{
                          transform: headingArrowHover
                            ? "translateY(0)"
                            : "translateY(100%)",
                        }}
                      >
                        <ArrowUpRight
                          className="h-6 w-6"
                          style={{
                            transform: "rotate(10.5deg)",
                          }}
                        />
                      </span>
                    </a>
                    <span
                      className="pointer-events-none absolute bottom-[2px] left-[14px] whitespace-nowrap text-[12px] font-medium text-white"
                      style={{
                        opacity: headingArrowHover ? 1 : 0,
                        transform: headingArrowHover
                          ? "translate3d(0,0,0) rotate(-30.5deg)"
                          : "translate3d(6px,4px,0) rotate(-20.5deg)",
                        transition:
                          "opacity 400ms cubic-bezier(0.16,1,0.3,1) 100ms, transform 500ms cubic-bezier(0.16,1,0.3,1) 100ms",
                        transformOrigin: "right center",
                      }}
                    >
                      ( see all )
                    </span>
                  </div>
                </div>
                <StaggeredParagraph
                  text="Showcase of some of my recent sleek websites"
                  startDelay={0.55}
                  step={0.06}
                  className="mt-7 max-w-full font-jakarta text-[15px] text-[#FFFFFF99] md:text-[16px]"
                />
                <div className="mt-7 flex w-full flex-col gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center min-[1400px]:absolute min-[1400px]:left-1/2 min-[1400px]:bottom-4 min-[1400px]:-translate-x-[-180px]">
                  <a
                    href="./projects"
                    className="inline-flex h-[62px] w-[290px] items-center justify-center rounded-full border border-white/[0.06] px-[26px] py-[13px] font-jakarta text-[15px] font-medium text-[#FFFFFF] sm:h-[60px] sm:w-auto sm:text-[16px]"
                    style={{
                      background:
                        "linear-gradient(180deg, #222222 0%, #0a0a0a 100%)",
                    }}
                  >
                    See All Projects
                  </a>
                  <a
                    href="./contact#contact"
                    className="inline-flex h-[62px] w-[290px] items-center justify-center rounded-full px-[26px] py-[13px] font-jakarta text-[15px] font-medium text-[#080808] sm:h-[60px] sm:w-auto sm:text-[16px]"
                    style={{
                      background:
                        "linear-gradient(180deg, #ffffff 0%, #c8c8c8 140%)",
                    }}
                  >
                    Contact Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="projects"
          className="relative mt-7 w-full px-6 sm:px-8 sm:mt-0 lg:mt-6"
        >
          <div className="mx-auto w-full max-w-[1050px]">
            <div className="hidden sm:grid grid-cols-1 gap-4 lg:gap-5 min-[1400px]:grid-cols-2">
              <div className="flex w-full flex-col gap-4 lg:gap-5">
                <ProjectCard
                  project={PROJECTS[0]}
                  animationDelay={0}
                  className="h-[280px] md:h-[440px] lg:h-[509px]"
                />
                <ProjectCard
                  project={PROJECTS[1]}
                  animationDelay={0.5}
                  className="h-[200px] md:h-[234px]"
                />
              </div>
              <div className="hidden min-[1400px]:flex w-full flex-col gap-4 lg:gap-5">
                <ProjectCard
                  project={PROJECTS[2]}
                  animationDelay={0}
                  className="h-[220px] md:h-[234px]"
                />
                <ProjectCard
                  project={PROJECTS[3]}
                  animationDelay={0.5}
                  className="h-[280px] md:h-[440px] lg:h-[509px]"
                />
              </div>
            </div>
            <div className="flex flex-col gap-0 sm:hidden">
              <MobileProjectCard project={PROJECTS[0]} className="h-[300px]" />
              <MobileProjectCard project={PROJECTS[1]} className="h-[300px]" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
