import React from "react";
import { DribbbleIcon, InstagramIcon, XIcon } from "./SocialIcons";
import { experience, skills } from "../data/content";

const PROFILE_IMAGE =
  "https://framerusercontent.com/images/bS5yI534QrgZ6plEFuXPt84TkA.png?width=673&height=962";

export default function Profile() {
  return (
    <section
      id="profile"
      className="w-full bg-[#090909] py-[80px] sm:py-[100px] lg:py-[120px]"
    >
      <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center px-5 sm:px-8 lg:px-0">

        {/* =========================================================
            TOP HEADING
        ========================================================= */}
        <div className="flex w-full flex-col items-center text-center">

          {/* Expert Designer */}
          <div
            className="flex h-[33px] w-[150px] items-center justify-center gap-[7px] rounded-[20px] bg-[#111111]"
            style={{
              padding: "6px 12px",
              boxShadow:
                "rgba(0,0,0,0.4) 16px 24px 20px 8px, rgba(184,180,180,0.08) 0px 2px 0px 0px inset",
            }}
          >
            <span className="relative flex h-[7px] w-[7px] items-center justify-center rounded-full bg-white">
              <span className="absolute h-[11px] w-[11px] rounded-full bg-[#31EE33]/20" />
              <span className="relative h-[7px] w-[7px] rounded-full bg-[#31EE33]" />
            </span>

            <span className="font-plus-jakarta text-[10px] font-medium leading-none text-white">
              Expert Designer
            </span>
          </div>

          {/* Heading */}
          <h2
            className="
              mt-[22px]
              font-plus-jakarta
              text-[34px]
              font-semibold
              leading-[1.05]
              tracking-[-0.04em]
              text-white
              sm:text-[42px]
              lg:text-[48px]
            "
          >
            <span className="text-white">Johan Beker, </span>
            <span className="text-white/60">Your Designer</span>
          </h2>

          {/* Subtitle */}
          <p
            className="
              mt-[10px]
              max-w-[440px]
              font-inter
              text-[11px]
              font-medium
              leading-[1.5]
              text-white/55
              sm:text-[12px]
            "
          >
            Brief initial presentation of myself and my previous experiences.
          </p>
        </div>

        {/* =========================================================
            MAIN CARDS
        ========================================================= */}
        <div
          className="
            mt-[40px]
            flex
            w-full
            flex-col
            gap-[20px]

            lg:grid
            lg:grid-cols-[453px_603px]
            lg:items-start
            lg:gap-[20px]
          "
        >

          {/* =======================================================
              LEFT PROFILE CARD
          ======================================================= */}
          <div
            className="
              w-full
              h-[694px]
              rounded-[10px]
              bg-[#0F0F0F]
              px-[24px]
              pt-[24px]
              pb-[32px]

              lg:h-[703px]
            "
            style={{
              boxShadow:
                "rgba(0,0,0,0.4) 16px 24px 20px 8px, rgba(184,180,180,0.08) 0px 2px 0px 0px inset",
            }}
          >

            {/* -----------------------------------------------------
                IMAGE
            ----------------------------------------------------- */}
            <div
              className="
                relative
                h-[382px]
                w-full
                overflow-hidden
                rounded-[8px]
                bg-[#080808]
              " style={{
              boxShadow:
                "rgba(0,0,0,0.4) 16px 24px 20px 8px, rgba(184,180,180,0.08) 0px 2px 0px 0px inset",
            }}
            >
              <img
                src={PROFILE_IMAGE}
                alt="Johan Beker"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />

              {/* Slight overlay */}
              <div className="absolute inset-0 bg-black/[0.08]" />

              {/* ---------------------------------------------------
                  AVAILABLE FOR WORK
              --------------------------------------------------- */}
              <div className="absolute bottom-[12px] left-1/2 -translate-x-1/2">
                <div
                  className="
                    flex
                    h-[33px]
                    w-[150px]
                    items-center
                    justify-center
                    gap-[7px]
                    rounded-[8px]
                    bg-[#080808]/85
                    px-[12px]
                    py-[6px]
                    backdrop-blur-[8px]
                  "
                >
                  <span className="relative flex h-[7px] w-[7px] shrink-0 items-center justify-center">
                    <span className="absolute h-[11px] w-[11px] animate-ping rounded-full bg-[#31EE33]/30" />

                    <span
                      className="relative h-[7px] w-[7px] rounded-full bg-[#31EE33]"
                      style={{
                        boxShadow: "0 0 12px rgba(49,238,51,0.5)",
                      }}
                    />
                  </span>

                  <span
                    className="
                      whitespace-nowrap
                      font-plus-jakarta
                      text-[10px]
                      font-medium
                      leading-none
                      text-white
                    "
                  >
                    Available for work
                  </span>
                </div>
              </div>
            </div>

            {/* -----------------------------------------------------
                PROFILE INFORMATION
            ----------------------------------------------------- */}
            <div className="pt-[24px]">

              {/* Heading */}
              <h3
                className="
                  font-plus-jakarta
                  text-[20px]
                  font-semibold
                  leading-[1.2]
                  tracking-[-0.02em]
                  text-white

                  lg:text-[25px]
                "
              >
                Hello I am Johan Beker
              </h3>

              {/* Description */}
              <p
                className="
                  mt-[6px]
                  font-inter
                  text-[15px]
                  font-normal
                  leading-[1.4]
                  text-white
                "
              >
                UI/UX Interaction Designer Based in Berlin.
              </p>

              {/* ---------------------------------------------------
                  SOCIAL ICONS
              --------------------------------------------------- */}
              <div className="mt-[20px] flex items-center gap-[10px]">

                {/* X */}
                <a
                  href="https://x.com/home"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="X"
                  className="
                    flex
                    h-[40px]
                    w-[40px]
                    items-center
                    justify-center
                    rounded-full
                    bg-[#080808]
                    p-[8px]
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-[2px]
                    hover:bg-[#151515]
                  "
                >
                  <XIcon className="h-[16px] w-[16px]" />
                </a>

                {/* Separator */}
                <span className="h-[1px] w-[1px] rounded-full bg-white/20" />

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="
                    flex
                    h-[40px]
                    w-[40px]
                    items-center
                    justify-center
                    rounded-full
                    bg-[#080808]
                    p-[8px]
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-[2px]
                    hover:bg-[#151515]
                  "
                >
                  <InstagramIcon className="h-[16px] w-[16px]" />
                </a>

                {/* Separator */}
                <span className="h-[1px] w-[1px] rounded-full bg-white/20" />

                {/* Dribbble */}
                <a
                  href="https://dribbble.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Dribbble"
                  className="
                    flex
                    h-[40px]
                    w-[40px]
                    items-center
                    justify-center
                    rounded-full
                    bg-[#080808]
                    p-[8px]
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-[2px]
                    hover:bg-[#151515]
                  "
                >
                  <DribbbleIcon className="h-[16px] w-[16px]" />
                </a>
              </div>

              {/* ---------------------------------------------------
                  DIVIDER
              --------------------------------------------------- */}
              <div className="mt-[22px] h-px w-full bg-white/[0.10]" />

              {/* ---------------------------------------------------
                  CONNECT BUTTON
              --------------------------------------------------- */}
              <div className="mt-[22px]">
                <a
                  href="#contact"
                  className="
                    flex
                    h-[56px]
                    w-[173px]
                    items-center
                    justify-center
                    rounded-full
                    px-[26px]
                    py-[13px]
                    font-plus-jakarta
                    text-[15px]
                    font-medium
                    leading-none
                    text-white
                    transition-all
                    duration-300
                    hover:scale-[1.02]
                    hover:bg-[#151515]

                    lg:h-[58px]
                    lg:w-[182px]
                    lg:text-[16px]
                  "
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(120,120,120,0.35) -382%, #080808 100%)",
                  }}
                >
                  Connect with me
                </a>
              </div>
            </div>
          </div>

          {/* =======================================================
              RIGHT CARD
          ======================================================= */}
          <div
            className="
              w-full
              h-[1152px]
              rounded-[10px]
              bg-[#0F0F0F]
              px-[30px]
              pt-[30px]
              pb-[54px]

              lg:h-[738px]
            "
            
          >

            {/* =====================================================
                ABOUT TEXT
            ===================================================== */}
            <div
              className="
                h-[180px]
                w-full

                lg:h-[96px]
              "
            >
              <p
                className="
                  font-plus-jakarta
                  text-[15px]
                  font-medium
                  leading-[1.7]
                  tracking-[-0.01em]
                  text-white

                  lg:text-[16px]
                  lg:leading-[1.65]
                "
              >
                I&rsquo;m Johan Beker, a dedicated Web Designer &amp;
                Developer based in the vibrant city of Berlin, Germany. I
                specialize in creative design with seamless technical
                execution to craft exceptional digital experiences.
              </p>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-white/[0.10]" />

            {/* =====================================================
                SKILLS
            ===================================================== */}
            <div
              id="skills"
              className="
                flex
                h-[170px]
                w-full
                flex-wrap
                content-start
                gap-[8px]
                pt-[20px]

                lg:h-[112px]
                lg:pt-[20px]
              "
            >
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="
                    flex
                    h-fit
                    items-center
                    justify-center
                    rounded-[8px]
                    bg-[#080808]
                    px-[12px]
                    py-[8px]
                    transition-all
                    duration-300
                    hover:bg-[#151515]
                  "
                >
                  <span
                    className="
                      whitespace-nowrap
                      font-plus-jakarta
                      text-[15px]
                      font-medium
                      leading-none
                      text-white/60

                      lg:text-[16px]
                    "
                  >
                    {skill}
                  </span>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-white/[0.10]" />

            {/* =====================================================
                EXPERIENCE
            ===================================================== */}
            <div
              id="exp"
              className="
                mt-[20px]
                h-[624px]
                w-full

                lg:h-[316px]
              "
            >
              <div className="flex h-full w-full flex-col gap-[10px]">

                {experience.map((row) => (
                  <div
                    key={`${row.role}-${row.year}`}
                    className="
                      group
                      flex
                      min-h-[140px]
                      w-full
                      items-center
                      justify-between
                      gap-[15px]
                      rounded-[10px]
                      bg-[#0D0D0D]
                      px-[16px]
                      py-[16px]
                      transition-all
                      duration-300
                      hover:bg-[#111111]

                      lg:min-h-0
                      lg:h-[69px]
                      lg:px-[12px]
                      lg:py-[15px]
                    "
                    style={{
                      boxShadow:
                        "rgba(0,0,0,0.4) 16px 24px 20px 8px",
                    }}
                  >

                    {/* Role */}
                    <span
                      className="
                        w-1/3
                        font-plus-jakarta
                        text-[15px]
                        font-medium
                        leading-[1.3]
                        text-white/60
                        transition-colors
                        duration-300
                        group-hover:text-white/80

                        lg:text-[16px]
                      "
                    >
                      {row.role}
                    </span>

                    {/* Company */}
                    <span
                      className="
                        w-1/3
                        font-plus-jakarta
                        text-[15px]
                        font-medium
                        leading-[1.3]
                        text-white/60
                        transition-colors
                        duration-300
                        group-hover:text-white/80

                        lg:text-[16px]
                      "
                    >
                      {row.company}
                    </span>

                    {/* Year */}
                    <span
                      className="
                        w-1/3
                        text-right
                        font-plus-jakarta
                        text-[15px]
                        font-medium
                        leading-[1.3]
                        text-white/60

                        lg:text-[16px]
                      "
                    >
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