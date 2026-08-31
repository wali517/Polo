import React, { useEffect, useRef, useState } from "react";
import {
  ArrowLeftRight,
  Code2,
  Image,
  LayoutPanelTop,
  Megaphone,
  MonitorPlay,
  Search,
  Sparkles,
  SquarePen,
  Zap,
} from "lucide-react";
import { serviceTags, services } from "../data/content";
import "../index.css";

function WebsiteIcon() {
  return (
    <svg
      role="presentation"
      viewBox="0 0 24 24"
      width="25"
      height="25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="3.75"
        y="4.25"
        width="16.5"
        height="15.5"
        rx="0.8"
        stroke="#FFFFFF"
        strokeWidth="1.5"
      />
      <path
        d="M4.25 9.25H19.75"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M10 9.25V19.25" stroke="#FFFFFF" strokeWidth="1.5" />
    </svg>
  );
}

function GraphicIcon() {
  return (
    <svg
      role="presentation"
      viewBox="0 0 24 24"
      width="25"
      height="25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M8 5V19"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M8 19H20"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M4 8H8"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M8 8C14.4 8 18.5 11.55 18.5 17.5"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FramerIcon() {
  return (
    <svg
      role="presentation"
      viewBox="0 0 24 24"
      width="25"
      height="25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M5.75 4.5H18.25V10.25H11.25L18.25 16H11.25V20.5L5.75 15.25V9.75H12.75L5.75 4.5Z"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M5.75 4.5L18.25 16"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ServiceIcon({ icon }) {
  return (
    <span className="flex h-[25px] w-[25px] shrink-0 items-center justify-center">
      {icon === "website" && <WebsiteIcon />}
      {icon === "graphic" && <GraphicIcon />}
      {icon === "framer" && <FramerIcon />}
    </span>
  );
}

const firstCardImage =
  "https://framerusercontent.com/images/IwwlXF60xjgLFBH3Sj6kzl9eXs.png?scale-down-to=2048&width=2400&height=1260";

const framerImages = [
  "https://framerusercontent.com/images/Uh4eI5tuS1UcMjPLwFeqxnXBJKQ.png?scale-down-to=2048&width=3840&height=2880",
  "https://framerusercontent.com/images/B6zI6nUrHNwrRM7ASHmAUUgXW0c.png?scale-down-to=2048&width=3514&height=2319",
  "https://framerusercontent.com/images/qaXP9CBTkpCNVvyTQ6Uxc8kN5ts.png?scale-down-to=2048&width=4000&height=3000",
];

const fallbackServices = [
  {
    title: "Website Design",
    body: "Designing breathtaking, user-centric websites that boost engagement, conversions, and growth, perfectly aligned with your brand",
  },
  {
    title: "Graphic Design",
    body: "Crafting bold, engaging, and versatile graphic designs that elevate your brand and captivate your audience",
  },
  {
    title: "Logo Design",
    body: "Crafting distinctive, scalable, and impactful logos that embody your brand’s identity and vision",
  },
  {
    title: "Framer Design",
    body: "Bringing ideas to life with interactive, user-centered Framer designs that simplify complexity and elevate user experience",
  },
];

const fallbackTagsRowOne = [
  "Framer Migration",
  "Video & Motion Graphics",
  "Copywriting",
  "Posters",
];

const fallbackTagsRowTwo = [
  "Custom Code",
  "SEO",
  "Icons",
  "Social Media",
  "Landing Pages",
  "Optimization",
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

function ServiceCard({
  service,
  image,
  showImage = false,
  icon,
  className = "",
}) {
  return (
    <div
      className={`group relative flex w-full flex-col overflow-hidden rounded-[20px] border border-white/[0.06] bg-[#111111] p-[30px] shadow-[16px_24px_20px_8px_rgba(0,0,0,0.4)] ${className}`}
    >
      <div className="relative z-10">
        <div className="flex items-center gap-3">
          <ServiceIcon icon={icon} />
          <h3 className="font-jakarta text-[20px] leading-tight text-white">
            {service.title}
          </h3>
        </div>
        <p className="mt-5 max-w-full font-inter text-[15px] leading-[1.65] text-[#FFFFFF99]">
          {service.body}
        </p>
      </div>
      {showImage && image ? (
        <div className="relative mt-7 aspect-[16/8.4] w-full overflow-hidden rounded-[8px] shadow-[20px_30px_20px_8px_rgba(0,0,0,0.4)]">
          <img
            src={image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div />
        </div>
      ) : (
        <div className="mt-7 h-[1px] w-full bg-white/[0.05]" />
      )}
    </div>
  );
}

const sliderIcons = {
  "Framer Migration": ArrowLeftRight,
  "Video & Motion Graphics": MonitorPlay,
  Copywriting: SquarePen,
  Posters: Image,
  "Custom Code": Code2,
  SEO: Search,
  Icons: Sparkles,
  "Social Media": Megaphone,
  "Landing Pages": LayoutPanelTop,
  Optimization: Zap,
};

function TagPill({ children }) {
  const Icon = sliderIcons[children];
  return (
    <div className="flex h-16 shrink-0 items-center gap-2 rounded-full bg-[#111111] px-6 font-jakarta text-[15px] font-medium text-[#FFFFFF99] sm:text-[16px]">
      {Icon && (
        <Icon
          size={15}
          strokeWidth={1.8}
          className="h-[18px] w-[18px] shrink-0 text-white"
        />
      )}
      <span className="whitespace-nowrap">{children}</span>
    </div>
  );
}

function SlidingRow({ items, reverse = false, duration = 28 }) {
  const rowRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const element = rowRef.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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

  const repeatedItems = [...items, ...items, ...items];
  return (
    <div
      ref={rowRef}
      className={`relative mx-auto flex w-full max-w-[1100px] items-center justify-center overflow-hidden ${isVisible ? "services-slider-visible" : "services-slider-hidden"}`}
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 12.5%, black 87.5%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 12.5%, black 87.5%, transparent 100%)",
      }}
    >
      <div
        className={`services-marquee-track flex w-max items-center gap-6 ${reverse ? "services-marquee-reverse" : ""}`}
        style={{ "--marquee-duration": `${duration}s` }}
      >
        {repeatedItems.map((tag, index) => (
          <TagPill key={`${tag}-${index}`}>{tag}</TagPill>
        ))}
      </div>
    </div>
  );
}

export default function Services() {
  const cardServices =
    Array.isArray(services) && services.length > 0
      ? services
      : fallbackServices;
  const tags =
    Array.isArray(serviceTags) && serviceTags.length > 0
      ? serviceTags
      : [...fallbackTagsRowOne, ...fallbackTagsRowTwo];
  const website = cardServices[0] || fallbackServices[0];
  const graphic = cardServices[3] || fallbackServices[3];
  const logo = cardServices[1] || fallbackServices[1];
  const framer = cardServices[2] || fallbackServices[2];
  const rowOne = tags.length >= 4 ? tags.slice(0, 4) : fallbackTagsRowOne;
  const rowTwo = tags.length >= 5 ? tags.slice(4) : fallbackTagsRowTwo;
  const cardsRef = useRef(null);
  const [cardsVisible, setCardsVisible] = useState(false);
  useEffect(() => {
    const element = cardsRef.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCardsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.12,
      },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <section
        id="services"
        className="relative overflow-hidden rounded-[50px] border border-white/[0.08] bg-[#090909] py-24 sm:py-24 sm:pb-5 lg:py-24 lg:pb-5"
      >
        <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center px-6 sm:px-8">
          <div className="flex w-full flex-col gap-7 min-[1400px]:flex-row min-[1400px]:items-end min-[1400px]:justify-between min-[1400px]:gap-10">
            <div className="w-full">
              <div className="inline-flex h-[38px] items-center gap-2 rounded-full border-t border-white/10 bg-[#0F0F0F] px-4 py-[6px] font-inter text-[15px] font-medium text-white">
                <BullseyeIcon />
                <span>Design Services</span>
              </div>
              <h2 className="mt-[16px] font-satoshi text-[40px] leading-[1.5] text-white sm:text-[48px] lg:text-[54px]">
                <StaggeredHeading
                  startDelay={0.15}
                  step={0.22}
                  className="text-white"
                >
                  Design
                </StaggeredHeading>{" "}
                <StaggeredHeading
                  startDelay={0.65}
                  step={0.25}
                  className="text-[#FFFFFF99]"
                >
                  Services
                </StaggeredHeading>
              </h2>
              <StaggeredParagraph
                text="Explore a suite of design services to elevate your brand."
                startDelay={1.15}
                step={0.08}
                className="mt-4 max-w-full font-jakarta text-[15px] leading-[1] text-[#FFFFFF99] md:text-[16px]"
              />
            </div>
            <a
              href="#contact"
              className="flex h-[58px] w-[154px] shrink-0 items-center justify-center self-start rounded-full px-[26px] py-[13px] font-jakarta text-[16px] font-medium leading-none text-[#0A0A0A] min-[1400px]:mb-0 min-[1400px]:self-auto"
              style={{
                background: "linear-gradient(180deg, #FFFFFF 0%, #787878 140%)",
              }}
            >
              Contact Now
            </a>
          </div>
          <div
            ref={cardsRef}
            className={`mt-10 grid grid-cols-1 gap-6 lg:mt-14 md:grid-cols-1 min-[1400px]:mt-[45px] min-[1400px]:grid min-[1400px]:grid-cols-2 min-[1400px]:justify-center min-[1400px]:gap-[22px] min-[1400px]:items-start ${cardsVisible ? "services-cards-visible" : "services-cards-hidden"}`}
          >
            <div className="flex w-full flex-col gap-6">
              <ServiceCard
                service={website}
                image={firstCardImage}
                showImage
                icon="website"
                className="h-full w-full"
              />
              <ServiceCard
                service={graphic}
                showImage={false}
                icon="graphic"
                className="h-[158px] w-full"
              />
            </div>
            <div className="flex w-full flex-col gap-6">
              <ServiceCard
                service={logo}
                icon="graphic"
                className="h-[158px] w-full"
              />
              <div className="group relative flex h-[440px] w-full flex-col overflow-hidden rounded-[20px] border border-white/[0.06] bg-[#111111] p-[30px] shadow-[16px_24px_20px_8px_rgba(0,0,0,0.4)]">
                <div className="relative z-10">
                  <div className="flex items-center gap-3">
                    <ServiceIcon icon="framer" />
                    <h3 className="font-jakarta text-[20px] leading-tight text-white">
                      {framer.title}
                    </h3>
                  </div>
                  <p className="mt-5 max-w-full text-[15px] leading-[1.65] text-white/70">
                    {framer.body}
                  </p>
                </div>
                <div
                  className="relative mt-7 h-full overflow-hidden rounded-[15px] px-2"
                  style={{
                    maskImage:
                      "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
                  }}
                >
                  <div className="services-image-track flex h-full w-max items-center gap-[10px]">
                    {[...framerImages, ...framerImages, ...framerImages].map(
                      (image, index) => (
                        <div
                          key={`${image}-${index}`}
                          className="relative h-[233px] w-[300px] shrink-0 overflow-hidden rounded-[15px] bg-[#0a0a0a]"
                        >
                          <img
                            src={image}
                            alt=""
                            className="h-full w-full object-cover"
                          />
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-4 sm:mt-20 lg:mt-12 lg:mb-22">
          <SlidingRow items={rowOne} duration={15} />
          <SlidingRow items={rowTwo} reverse duration={20} />
        </div>
      </section>
    </>
  );
}
