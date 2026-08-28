import { Star } from "lucide-react";
import { stats, testimonials } from "../data/content";

function Stars({ rating }) {
  const full = Math.round(parseFloat(rating));
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${i < full ? "fill-gold text-gold" : "fill-transparent text-dim"}`}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-pad border-t border-border">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <span className="eyebrow">Happy Clients</span>
            <h2 className="mt-5 text-balance font-display text-4xl font-extrabold sm:text-5xl">
              Clients <span className="text-dim">Love me</span>
            </h2>
            <p className="mt-4 max-w-sm text-base text-body">
              Trusted by 100+ happy clients, adding $250M+ in revenue.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {stats.map((stat) => (
                <div key={stat.label} className="card px-3 py-5 text-center sm:px-4">
                  <p className="font-display text-2xl font-extrabold text-heading sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-body sm:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3 border-t border-border pt-8">
              <a href="#projects" className="btn-secondary">
                See All Projects
              </a>
              <a href="#contact" className="btn-primary">
                Contact Now
              </a>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {testimonials.map((t) => (
              <div key={t.name} className="card flex flex-col gap-4 p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-zinc-400 to-zinc-700 font-display text-sm font-bold text-white">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                  <div>
                    <p className="font-display text-sm font-bold text-heading">{t.name}</p>
                    <p className="text-xs text-dim">{t.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-body">{t.rating}</span>
                  <Stars rating={t.rating} />
                </div>
                <p className="text-sm leading-relaxed text-body">{t.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
