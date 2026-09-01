import { Star } from "lucide-react";
import { stats, testimonials } from "../data/content";
import "../index.css";

// Framer source avatar images
const AVATARS = [
  "https://framerusercontent.com/images/eFraHAe16muHsBuOQT8J7PtnM.png?width=896&height=1344",
  "https://framerusercontent.com/images/54tqpXnovhmg1DaaTUMYucwnE.png?width=2048&height=2048",
  "https://framerusercontent.com/images/8vljaI1ESGZN8BSOxNQ8nHJdCw.png?width=1024&height=1024",
  "https://framerusercontent.com/images/hmr5CgOg36xVV5pHu3aQPFGu9U.png?width=1856&height=2464",
];

function Stars({ rating }) {
  const value = parseFloat(rating) || 0;
  return (
    <div className="flex items-center gap-[4px]">
      {Array.from({ length: 5 }).map((_, i) => {
        const isFull = value >= i + 1;
        const isHalf = value > i && value < i + 1;
        return (
          <span key={i} className="relative block h-[18px] w-[18px]">
            {isHalf ? (
              <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]">
                <defs>
                  <linearGradient id={`half-${i}-${value}`}>
                    <stop offset="50%" stopColor="#FFD700" />
                    <stop offset="50%" stopColor="#FFFFFF" />
                  </linearGradient>
                </defs>
                <path
                  fill={`url(#half-${i}-${value})`}
                  d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                />
              </svg>
            ) : (
              <Star
                className="h-[18px] w-[18px]"
                fill={isFull ? "#FFD700" : "transparent"}
                stroke={isFull ? "#FFD700" : "rgba(255,255,255,0.35)"}
                strokeWidth="1.5"
              />
            )}
          </span>
        );
      })}
    </div>
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

function StatCard({ stat }) {
  return (
    <div
      className="flex w-full flex-col items-center justify-center rounded-[10px] px-5 py-[18px]"
      style={{
        background: "#111111",
        boxShadow:
          "rgba(0,0,0,0.4) 16px 24px 20px 8px, rgba(184,180,180,0.08) 0px 2px 0px 0px inset",
      }}
    >
      <h3
        className="font-jakarta text-center text-[30px] font-extrabold leading-[1.1] tracking-[-0.03em]"
        style={{
          color: "#ffffff",
        }}
      >
        {stat.value}
      </h3>

      <p
        className="mt-[7px] font-inter text-center text-[15px] leading-[1.3]"
        style={{
          color: "rgba(255,255,255,0.5)",
        }}
      >
        {stat.label}
      </p>
    </div>
  );
}

function TestimonialCard({ testimonial, index }) {
  const avatar = AVATARS[index];
  return (
    <article
      className="relative flex w-full flex-col overflow-hidden rounded-[16px] px-[20px] py-[20px] sm:px-[24px] sm:py-[24px]"
      style={{
        background:
          "linear-gradient(121deg, rgb(120,120,120) -52%, rgb(17,17,17) 19%, rgb(10,10,10) 100%)",
        boxShadow: "rgba(184,180,180,0.08) 0px 2px 0px 0px inset",
      }}
    >
      <div className="flex items-center gap-4">
        <div
          className="h-[76px] w-[76px] shrink-0 overflow-hidden rounded-[8px]"
          style={{
            background: "#222222",
          }}
        >
          {avatar ? (
            <img
              src={avatar}
              alt={testimonial.name}
              loading="lazy"
              className="block h-full w-full object-cover"
              style={{ objectPosition: "center" }}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center font-jakarta text-[25px] text-white">
              {testimonial.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
          )}
        </div>
        <div className="min-w-0">
          <h4
            className="mb-4 font-jakarta text-[25px] font-semibold leading-[1.25]"
            style={{
              color: "#ffffff",
            }}
          >
            {testimonial.name}
          </h4>

          <p
            className="mb-2 font-jakarta text-[16px] leading-[1.3]"
            style={{
              color: "#ffffff99",
            }}
          >
            {testimonial.role}
          </p>
        </div>
      </div>
      <div
        className="my-[20px] h-px w-full"
        style={{
          background: "rgba(255,255,255,0.1)",
          opacity: 0.8,
        }}
      />
      <div className="flex items-center gap-2">
        <span
          className="font-jakarta text-[15px] leading-none"
          style={{
            color: "rgba(255,255,255,0.6)",
          }}
        >
          {testimonial.rating}
        </span>
        <Stars rating={testimonial.rating} />
      </div>
      <p
        className="mt-[18px] font-inter text-[15px] leading-[1.65]"
        style={{
          color: "rgba(255,255,255,0.7)",
        }}
      >
        {testimonial.quote}
      </p>
      {avatar && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-0 overflow-hidden rounded-[8px]"
          style={{
            filter: "brightness(0.15) blur(40px)",
            WebkitFilter: "brightness(0.15) blur(40px)",
            opacity: 0.25,
          }}
        >
          <img src={avatar} alt="" className="h-full w-full object-cover" />
        </div>
      )}
    </article>
  );
}

export default function Testimonials() {
  const CARD_STICKY_TOP = 112;
  const CARD_STICKY_STEP = 16;
  return (
    <section
      id="testimonials"
      className="relative border rounded-[50px] border-white/10 "
      style={{
        borderColor: "rgba(255,255,255,0.08)",
        background: "#0a0a0a",
      }}
    >
      <div className="mx-auto w-full max-w-[1120px] px-[18px] py-[80px] sm:px-8 lg:py-[100px]">
        <div className="flex flex-col gap-[50px] min-[1400px]:grid min-[1400px]:grid-cols-[1fr_1.1fr] min-[1400px]:items-start min-[1400px]:gap-[44px]">
          <div className="min-w-0 min-[1400px]:sticky min-[1400px]:top-[105px] min-[1400px]:self-start">
            <div
              className="inline-flex h-[40px] items-center gap-[9px] rounded-[20px] px-[14px]"
              style={{
                background: "#111111",
                boxShadow:
                  "rgba(0,0,0,0.4) 16px 24px 20px 8px, rgba(184,180,180,0.08) 0px 2px 0px 0px inset",
              }}
            >
              <BullseyeIcon />
              <span
                className="font-inter text-[15px] font-medium leading-none"
                style={{
                  color: "#ffffff",
                }}
              >
                Happy Clients
              </span>
            </div>
            <h2 className="mt-[22px] font-satoshi text-[42px] font-medium leading-[1.12] tracking-[-0.045em] sm:text-[48px] lg:text-[54px]">
              <StaggeredHeading
                startDelay={0.15}
                step={0.22}
                className="text-white"
              >
                Clients
              </StaggeredHeading>{" "}
              <StaggeredHeading
                startDelay={0.65}
                step={0.25}
                className="text-[#FFFFFF99]"
              >
                Love me
              </StaggeredHeading>
            </h2>
            <StaggeredParagraph
              text="Trusted by 100+ happy clients, adding $250M+ in revenue."
              startDelay={1.15}
              step={0.08}
              className="mt-[20px] max-w-[500px] font-jakarta text-[15px] leading-[1.65] text-[#FFFFFF99] sm:text-[16px]"
            />
            <div className="mt-[30px] grid grid-cols-1 gap-[10px] sm:grid-cols-3 sm:w-[720px] lg:w-full lg:max-w-[720px]">
              {stats.map((stat) => (
                <StatCard key={stat.label} stat={stat} />
              ))}
            </div>
            <div className="mt-[28px] hidden flex-wrap items-center gap-[10px] sm:flex">
              <a
                href="./projects"
                className="inline-flex h-[55px] items-center justify-center rounded-full px-[26px] font-jakarta text-[15px] font-medium transition-transform duration-300 hover:scale-[1.02]"
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
                className="inline-flex h-[55px] items-center justify-center rounded-full px-[26px] font-jakarta text-[15px] font-medium transition-transform duration-300 hover:scale-[1.02]"
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
          <div className="relative grid grid-cols-1 gap-[20px] min-[768px]:grid-cols-2 min-[1400px]:flex min-[1400px]:flex-col">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className=" min-w-0 min-[1400px]:sticky"
                style={{
                  top: `${CARD_STICKY_TOP + index * CARD_STICKY_STEP}px`,
                  zIndex: 10 + index,
                }}
              >
                <TestimonialCard testimonial={testimonial} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
