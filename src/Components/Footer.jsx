import React from "react";
import {
  DribbbleIcon,
  FacebookIcon,
  InstagramIcon,
  XIcon,
} from "./SocialIcons";
import { footerLinks } from "../data/content";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0a0a] border-t rounded-[50px]">
      <div className="mx-auto w-full max-w-[1150px] px-[39px] py-[70px] sm:px-[58px] sm:py-[60px] lg:px-[36px] lg:py-[120px]">
        <div className="flex flex-col gap-[35px] sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col items-start gap-[28px]">
            <a
              href="./#hero-section"
              className="relative block h-[26px] w-[104px] shrink-0 overflow-hidden"
              aria-label="Polo Home"
            >
              <img
                src="https://framerusercontent.com/images/duRtoIIUg5pJHSrEAoXb5RLVCc.svg?width=316&height=100"
                alt="Polo"
                className="block h-full w-full"
                style={{ objectPosition: "left center", objectFit: "contain" }}
              />
            </a>
            <nav className="flex flex-col items-start gap-[44px] sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-[32px] sm:gap-y-[12px]">
              {" "}
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-jakarta text-[15px] sm:text-[16px] leading-[1.5] text-[#FFFFFF99] font-medium sm:mt-10"
                >
                  {" "}
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-[20px] ">
            <a
              href="https://x.com/home"
              target="_blank"
              rel="noreferrer"
              aria-label="X"
              className=" flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#0a0a0a] text-white"
            >
              <XIcon className="h-[22px] w-[22px]" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#0a0a0a] text-white"
            >
              <InstagramIcon className="h-[24px] w-[24px]" />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#0a0a0a] text-white"
            >
              <FacebookIcon className="h-[24px] w-[24px]" />
            </a>
            <a
              href="https://dribbble.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Dribbble"
              className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#0a0a0a] text-white"
            >
              <DribbbleIcon className="h-[24px] w-[24px]" />
            </a>
          </div>
        </div>
        <div className="mt-[50px] flex flex-col gap-[35px] pt-[22px] font-jakarta sm:text-[16px] text-[15px] leading-[1.5] sm:flex-row sm:items-center sm:justify-between">
          <p className="m-0 text-[#FFFFFF99] opacity-80">© 2026 Polo</p>
          <div className="flex flex-col gap-[36px] sm:flex-row sm:gap-[25px]">
            <p className="m-0 text-[#FFFFFF]">
              Made by{" "}
              <a
                href="https://x.com/pranavnb_"
                target="_blank"
                rel="noreferrer"
                className="text-[#FFFFFF]"
              >
                Pranav
              </a>
            </p>
            <p className="m-0 text-[#FFFFFF]">
              Built in{" "}
              <a
                href="https://framer.link/nb12"
                target="_blank"
                rel="noreferrer"
                className="text-[#FFFFFF]"
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
