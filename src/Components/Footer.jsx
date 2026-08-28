import { Sparkles } from "lucide-react";
import { DribbbleIcon, FacebookIcon, InstagramIcon, XIcon } from "./SocialIcons";
import { footerLinks } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-page py-14">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-center gap-2 font-display text-lg font-bold text-heading">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-zinc-300 to-zinc-600 text-accent-foreground">
              <Sparkles className="h-3.5 w-3.5" strokeWidth={2.5} />
            </span>
            Polo
          </div>

          <div className="flex items-center gap-4">
            {[XIcon, InstagramIcon, FacebookIcon, DribbbleIcon].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-heading transition-colors hover:bg-surface-2"
                aria-label="Social link"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <nav className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-8">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-body transition-colors hover:text-heading"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 text-sm text-dim sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 Polo</p>
          <p>
            Made by{" "}
            <a href="#" className="text-body hover:text-heading">
              Pranav
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
