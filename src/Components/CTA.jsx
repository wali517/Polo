import { ArrowUpRight } from "lucide-react";
import { pricing } from "../data/content";

export default function CTA() {
  return (
    <section id="contact" className="section-pad border-t border-border">
      <div className="container-page">
        <div className="overflow-hidden rounded-[2rem] border border-border bg-gradient-to-br from-surface via-surface to-black">
          <div className="grid gap-10 p-8 lg:grid-cols-2 lg:p-14">
            <div>
              <span className="eyebrow">Let&rsquo;s Connect</span>
              <h2 className="mt-5 text-balance font-display text-4xl font-extrabold sm:text-5xl">
                Let&rsquo;s Grow <span className="text-dim">Together</span>
              </h2>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                {pricing.map((p) => (
                  <div key={p.title} className="flex-1 rounded-2xl border border-border bg-surface/60 p-5">
                    <h3 className="font-display text-base font-bold text-heading">{p.title}</h3>
                    <p className="mt-1 text-sm font-semibold text-heading/80">{p.price}</p>
                    <p className="mt-2 text-sm leading-relaxed text-body">{p.body}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#projects" className="btn-secondary">
                  See All Projects
                </a>
                <a href="#" className="btn-primary">
                  Get Started Now
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="relative min-h-64 overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-zinc-700 via-zinc-900 to-black">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-center font-display text-3xl font-extrabold text-white/10">
                  Let&rsquo;s build
                  <br />
                  something great
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
