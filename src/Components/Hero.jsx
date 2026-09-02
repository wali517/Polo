import React, { useState, useRef, useEffect } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import heroVideo from "../assets/images/Hero/Hero.mp4";
import card1 from "../assets/Images/Hero/card1.avif";
import card2 from "../assets/Images/Hero/card2.avif";
import card3 from "../assets/Images/Hero/card3.avif";
import card4 from "../assets/Images/Hero/card4.avif";
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

const STARS = [
  { left: "12%", dx: 520, dy: 210, duration: 3.2, delay: 0, scale: 1 },
  { left: "15%", dx: 520, dy: 210, duration: 4.2, delay: 3.2, scale: 0.9 },
  { left: "18%", dx: 520, dy: 210, duration: 4.2, delay: 7.4, scale: 0.8 },
  { right: "12%", dx: 520, dy: 210, duration: 3.2, delay: 0, scale: 1 },
];

function ShootingStars() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[10]">
      <div className="relative mx-auto h-full w-full">
        {STARS.map((star, index) => {
          const angle = (Math.atan2(star.dy, star.dx) * 180) / Math.PI;
          const distance = Math.hypot(star.dx, star.dy);
          return (
            <span
              key={index}
              className="polo-star"
              style={{
                top: star.top,
                left: star.left,
                "--star-dx": `${star.dx}px`,
                "--star-dy": `${star.dy}px`,
                "--star-angle": `${angle}deg`,
                "--star-distance": `${distance}px`,
                "--star-duration": `${star.duration}s`,
                "--star-delay": `${star.delay}s`,
                "--star-scale": star.scale,
              }}
            >
              <span className="polo-star-line" />
            </span>
          );
        })}
      </div>
    </div>
  );
}

function BullseyeIcon() {
  return (
    <span className="flex h-2.5 w-2.5 shrink-0 items-center justify-center rounded-full border border-white/70">
      <span className="h-1 w-1 rounded-full bg-white" />
    </span>
  );
}

function CommentCard({
  children,
  author,
  rotate,
  className = "",
  floatDelay = "0s",
}) {
  return (
    <div
      className={`md:mt-24 absolute ${className}`}
      style={{ "--card-rotate": `${rotate}deg`, "--float-delay": floatDelay }}
    >
      <div
        className="polo-card-float relative w-[220px] overflow-hidden rounded-xl border border-white/10 bg-[#111111] xl:p-6"
        style={{
          boxShadow:
            "16px 24px 20px 8px rgba(0,0,0,0.4), 0 2px 0 0 rgba(184,180,180,0.08) inset",
        }}
      >
        <p className="font-inter text-[15px] font-normal leading-[2] text-[#FFFFFF]">
          "{children}"
        </p>
        <p className="mt-3 font-inter text-right text-[15px] font-medium text-white/50">
          -{author}
        </p>
      </div>
    </div>
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
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" },
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
              style={{ transform: "rotate(10.5deg)" }}
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
              style={{ transform: "rotate(10.5deg)" }}
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
            animation: `heroWordReveal 1.1s cubic-bezier(0.19,1,0.22,1) ${startDelay + index * step}s both`,
          }}
        >
          {" "}
          {word} {index < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </p>
  );
}

export default function Hero() {
  const [headingArrowHover, setHeadingArrowHover] = useState(false);
  return (
    <div>
      <section className="relative flex w-full container-page flex-col items-center overflow-hidden">
        <div
          className="absolute left-1/2 top-0 h-[320px] w-[460px] -translate-x-1/2 overflow-hidden md:h-[620px] md:w-[920px] lg:h-[1065px] lg:w-[1471px] lg:left-[calc(50%+120px)]"
          style={{
            maskImage:
              "linear-gradient(to bottom, black 0%, black 55%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 55%, transparent 100%)",
          }}
        >
          <video
            src={heroVideo}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="h-full w-full object-cover object-top opacity-[0.09]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#090909]/30 via-[#090909]/50 to-[#090909]" />
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[360px] overflow-hidden sm:h-[520px] md:h-[640px] lg:h-[820px]">
          <ShootingStars />
        </div>
        <div className="relative flex w-full container-page flex-col px-0 pt-[120px] pb-4 md:pt-40 colg:pt-34 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex w-full max-w-[600px] flex-col items-start lg:pl-12">
            <div className="inline-flex h-[34px] items-center gap-2 rounded-full border border-white/10 bg-[#111111] px-3.5 text-[15px] font-medium text-white font-inter">
              <BullseyeIcon />
              <span>UI/UX & Graphic Designer</span>
            </div>
            <div
              className="relative mt-5 flex w-full items-center gap-2 md:gap-4"
              style={{
                animation:
                  "heroWordReveal 1.3s cubic-bezier(0.19,1,0.22,1) 0.25s both",
              }}
            >
              <h1 className="w-max max-w-none whitespace-nowrap font-satoshi text-[72px] leading-[0.98]">
                <span className="text-[#FFFFFF]">Johan</span>{" "}
                <span
                  className="text-[#FFFFFF99]"
                  style={{
                    animation:
                      "heroWordReveal 1.4s cubic-bezier(0.19,1,0.22,1) 0.4s both",
                  }}
                >
                  Beker
                </span>
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
                      style={{ transform: "rotate(10.5deg)" }}
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
                      style={{ transform: "rotate(10.5deg)" }}
                    />
                  </span>
                </a>
                <span
                  className="pointer-events-none absolute left-[14px] bottom-[2px] whitespace-nowrap text-[12px] font-medium text-white"
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
                  ( about me )
                </span>
              </div>
            </div>
            <StaggeredParagraph
              text="I'm a versatile designer specializing in graphic, web, and product design to help grow your business. Let's build something great!"
              startDelay={0.55}
              step={0.06}
              className="mt-5 max-w-full font-jakarta text-[15px] text-[#FFFFFF99] md:text-[16px]"
            />
            <div className="mt-7 flex w-full flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:w-auto">
              <a
                href="./projects"
                className="inline-flex h-[52px] w-full items-center justify-center rounded-full border border-white/[0.06] px-[26px] py-[13px] font-jakarta text-[15px] font-medium text-[#FFFFFF] sm:h-[50px] sm:w-auto sm:text-[16px]"
                style={{
                  background:
                    "linear-gradient(180deg, #222222 0%, #0a0a0a 100%)",
                }}
              >
                See All Projects
              </a>
              <a
                href="./contact#contact"
                className=" inline-flex h-[52px] w-full items-center justify-center rounded-full px-[26px] py-[13px] font-jakarta text-[15px] font-medium text-[#080808] sm:h-[50px] sm:w-auto sm:text-[16px]"
                style={{
                  background:
                    "linear-gradient(180deg, #ffffff 0%, #c8c8c8 140%)",
                }}
              >
                Contact Now
              </a>
            </div>
          </div>
          <div className="relative z-[30] hidden h-[300px] w-full items-center justify-center xl:flex xl:h-[330px] xl:max-w-[520px]">
            <CommentCard
              author="pranavnb"
              rotate={-14}
              floatDelay="0s"
              className="bottom-[140px] xl:right-[62%]"
            >
              Working with him was a game changer!
            </CommentCard>
            <div
              className="absolute z-[40] left-[40%] top-[45%] h-7 w-7 text-white/70"
              style={{ animation: "cardCursorPulse 5s ease-in-out infinite" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                className="h-full w-full"
                fill="currentColor"
                style={{ transform: "rotate(85deg)" }}
              >
                <g color="currentColor" fill="currentColor">
                  <path
                    d="M213.66,201,201,213.66a8,8,0,0,1-11.31,0l-51.31-51.31a8,8,0,0,0-13,2.46l-17.82,46.41a8,8,0,0,1-14.85-.71L40.41,50.44a8,8,0,0,1,10-10L210.51,92.68a8,8,0,0,1,.71,14.85l-46.41,17.82a8,8,0,0,0-2.46,13l51.31,51.31A8,8,0,0,1,213.66,201Z"
                    opacity="0.2"
                  />
                  <path d="M168,132.69,214.08,115l.33-.13A16,16,0,0,0,213,85.07L52.92,32.8A15.95,15.95,0,0,0,32.8,52.92L85.07,213a15.82,15.82,0,0,0,14.41,11l.78,0a15.84,15.84,0,0,0,14.61-9.59l.13-.33L132.69,168,184,219.31a16,16,0,0,0,22.63,0l12.68-12.68a16,16,0,0,0,0-22.63ZM195.31,208,144,156.69a16,16,0,0,0-26,4.93c0,.11-.09.22-.13.32l-17.65,46L48,48l159.85,52.2-45.95,17.64-.32.13a16,16,0,0,0-4.93,26h0L208,195.31Z" />
                </g>
              </svg>
            </div>

            <div
              className="absolute z-[40] left-[50%] top-[38%] h-7 w-7 text-white/70"
              style={{ animation: "cardCursorPulse 5s ease-in-out infinite" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                className="h-full w-full"
                fill="currentColor"
                style={{ transform: "rotate(10deg)" }}
              >
                <g fill="currentColor">
                  <path
                    d="M213.66,201,201,213.66a8,8,0,0,1-11.31,0l-51.31-51.31a8,8,0,0,0-13,2.46l-17.82,46.41a8,8,0,0,1-14.85-.71L40.41,50.44a8,8,0,0,1,10-10L210.51,92.68a8,8,0,0,1,.71,14.85l-46.41,17.82a8,8,0,0,0-2.46,13l51.31,51.31A8,8,0,0,1,213.66,201Z"
                    opacity="0.2"
                  />
                  <path d="M168,132.69,214.08,115l.33-.13A16,16,0,0,0,213,85.07L52.92,32.8A15.95,15.95,0,0,0,32.8,52.92L85.07,213a15.82,15.82,0,0,0,14.41,11l.78,0a15.84,15.84,0,0,0,14.61-9.59l.13-.33L132.69,168,184,219.31a16,16,0,0,0,22.63,0l12.68-12.68a16,16,0,0,0,0-22.63ZM195.31,208,144,156.69a16,16,0,0,0-26,4.93c0,.11-.09.22-.13.32l-17.65,46L48,48l159.85,52.2-45.95,17.64-.32.13a16,16,0,0,0-4.93,26h0L208,195.31Z" />
                </g>
              </svg>
            </div>
            <CommentCard
              author="vijaynb"
              rotate={8}
              floatDelay="1.2s"
              className=" bottom-[25px] right-[33px]"
            >
              We Increased our conversions by 200%
            </CommentCard>
          </div>
        </div>
        <div
          id="projects"
          className="relative mt-7 w-full max-w-[1400px] px-0 lg:mt-0 lg:px-0"
        >
          <div className="hidden grid-cols-1 gap-2 sm:grid sm:grid-cols-2 sm:gap-3 lg:gap-4">
            <div className="flex flex-col sm:gap-4 lg:gap-5">
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
            <div className="flex flex-col sm:gap-4 lg:gap-5">
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
        <div className="relative mt-30 md:mb-20 flex items-center justify-center sm:mt-16">
          <a
            href="./#profile"
            className="flex h-10 w-10 items-center justify-center text-white"
          >
            <ChevronDown
              className="h-8 w-8"
              strokeWidth={2}
              style={{
                animation: "arrowPulse 3.5s ease-in-out infinite",
              }}
            />
          </a>
        </div>
      </section>
    </div>
  );
}
