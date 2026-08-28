import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";
import { navLinks } from "../data/content";
import Logo from "../assets/Logo.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 md:px-6 pt-6 sm:pt-8">
      <nav
        className={
          "relative flex w-[840px] max-w-full flex-col overflow-hidden rounded-[32px] border border-white/10 bg-[#0a0a0a]"
        }
      >
        <div className="flex h-[64px] w-full shrink-0 items-center justify-between px-[30px]">
          <img
            src={Logo}
            alt="Polo"
            className="h-full w-[80px] shrink-0 object-contain object-left"
          />
          <div className="flex h-[64px] items-center justify-end">
            <div className="hidden items-center min-[1024px]:flex">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-full px-[12px] py-[6px] text-[16px] font-medium text-primary transition-all duration-300 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a
              href="#contact"
              className="ml-2 hidden items-center gap-2 rounded-full border border-white/10 px-[20px] py-[12px] text-[16px] font-medium text-primary min-[1024px]:inline-flex"
              style={{
                background:
                  "linear-gradient(180deg, rgb(10, 10, 10) -74%, rgba(255, 255, 255, 0.1) 183%)",
              }}
            >
              <Sparkles
                className="h-3.5 w-3.5 text-white/60"
                strokeWidth={1.8}
              />
              <span>Get for Free</span>
            </a>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="relative ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white min-[1024px]:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <span
                className={`absolute h-[1.5px] w-[16px] rounded-full bg-white transition-all duration-300 ease-out ${open ? "rotate-45" : "-translate-y-[3px]"}`}
              />
              <span
                className={`absolute h-[1.5px] w-[16px] rounded-full bg-white transition-all duration-300 ease-out ${open ? "-rotate-45" : "translate-y-[3px]"}`}
              />
            </button>
          </div>
        </div>
        <div
          className={`w-full shrink-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.22,1)] ${open ? "visible max-h-[500px] opacity-100" : "invisible max-h-0 opacity-0"}`}
        >
          <div className="w-full border-0 px-[20px] md:pb-[72px] pb-[68px] pt-[8px]">
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center rounded-full px-[12px] py-[19px] text-[16px] font-medium text-primary transition-all duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 px-[20px] py-[8px] text-[16px] font-medium text-primary transition-all duration-300"
              style={{
                background:
                  "linear-gradient(180deg, rgba(10,10,10,1) -74%, rgba(255,255,255,0.1) 183%)",
              }}
            >
              <Sparkles
                className="h-3.5 w-3.5 text-white/60"
                strokeWidth={1.8}
              />
              <span>Get for Free</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
