import React from "react";
import { DribbbleIcon, FacebookIcon, InstagramIcon, XIcon } from "./SocialIcons";
import { footerLinks } from "../data/content";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0a0a]">
      <div className="mx-auto w-full max-w-[1150px] px-[22px] py-[50px] sm:px-[32px] sm:py-[60px] lg:px-[48px] lg:py-[70px]">

        {/* =====================================================
            TOP / LINKS & OTHERS
        ====================================================== */}
        <div className="flex flex-col gap-[35px] sm:flex-row sm:items-start sm:justify-between">

          {/* LEFT DIV */}
          <div className="flex flex-col gap-[28px] sm:flex-row sm:items-center sm:gap-[50px]">

            {/* LOGO */}
            <a
              href="./#hero-section"
              className="relative block h-[36px] w-[114px] shrink-0 overflow-hidden"
              aria-label="Polo Home"
            >
              <img
                src="https://framerusercontent.com/images/duRtoIIUg5pJHSrEAoXb5RLVCc.svg?width=316&height=100"
                alt="Polo"
                className="block h-full w-full"
                style={{
                  objectPosition: "left center",
                  objectFit: "contain",
                }}
              />
            </a>

            {/* NAV LINKS */}
            <nav className="flex flex-wrap items-center gap-x-[28px] gap-y-[12px] sm:gap-x-[32px]">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="
                    font-inter
                    text-[13px]
                    font-medium
                    leading-[1.5]
                    text-white
                    opacity-60
                    transition-opacity
                    duration-300
                    hover:opacity-100
                  "
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* SOCIAL MEDIA ROW */}
          <div className="flex items-center gap-[10px]">

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
                bg-[#0a0a0a]
                text-white
                transition-all
                duration-300
                hover:bg-[#151515]
              "
            >
              <XIcon className="h-[16px] w-[16px]" />
            </a>

            {/* INSTAGRAM */}
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
                bg-[#0a0a0a]
                text-white
                transition-all
                duration-300
                hover:bg-[#151515]
              "
            >
              <InstagramIcon className="h-[16px] w-[16px]" />
            </a>

            {/* FACEBOOK */}
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="
                flex
                h-[40px]
                w-[40px]
                items-center
                justify-center
                rounded-full
                bg-[#0a0a0a]
                text-white
                transition-all
                duration-300
                hover:bg-[#151515]
              "
            >
              <FacebookIcon className="h-[16px] w-[16px]" />
            </a>

            {/* DRIBBBLE */}
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
                bg-[#0a0a0a]
                text-white
                transition-all
                duration-300
                hover:bg-[#151515]
              "
            >
              <DribbbleIcon className="h-[16px] w-[16px]" />
            </a>
          </div>
        </div>

        {/* =====================================================
            COPYRIGHT SECTION
        ====================================================== */}
        <div
          className="
            mt-[45px]
            flex
            flex-col
            gap-[15px]
            border-t
            border-white/[0.1]
            pt-[22px]
            font-inter
            text-[13px]
            leading-[1.5]
            text-white
            opacity-60
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          {/* COPYRIGHT */}
          <p className="m-0">
            © 2026 Polo
          </p>

          {/* RIGHT DIV */}
          <div className="flex flex-col gap-[6px] sm:flex-row sm:gap-[25px]">

            {/* MADE BY */}
            <p className="m-0">
              Made by{" "}
              <a
                href="https://x.com/pranavnb_"
                target="_blank"
                rel="noreferrer"
                className="
                  text-white
                  opacity-100
                  transition-opacity
                  duration-300
                  hover:opacity-60
                "
              >
                Pranav
              </a>
            </p>

            {/* BUILT IN */}
            <p className="m-0">
              Built in{" "}
              <a
                href="https://framer.link/nb12"
                target="_blank"
                rel="noreferrer"
                className="
                  text-white
                  opacity-100
                  transition-opacity
                  duration-300
                  hover:opacity-60
                "
              >
                Framer
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}