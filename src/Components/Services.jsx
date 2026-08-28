import { Layout, PenTool, Shapes, Zap } from "lucide-react";
import { serviceTags, services } from "../data/content";

const icons = { layout: Layout, "pen-tool": PenTool, zap: Zap, shapes: Shapes };

export default function Services() {
  return (
    <section id="services" className="section-pad border-t border-border">
      <div className="container-page">
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="eyebrow">Design services</span>
            <h2 className="mt-5 text-balance font-display text-4xl font-extrabold sm:text-5xl">
              Design <span className="text-dim">Services</span>
            </h2>
            <p className="mt-4 max-w-md text-base text-body">
              Explore a suite of design services to elevate your brand.
            </p>
          </div>
          <a href="#contact" className="btn-primary">
            Contact Now
          </a>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {services.map((service) => {
            const Icon = icons[service.icon];
            return (
              <div key={service.title} className="card flex flex-col gap-5 p-7 sm:p-8">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface-2 text-heading">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold text-heading">{service.title}</h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-body">{service.body}</p>
                </div>
                <div className="mt-2 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-zinc-700/60 via-zinc-900 to-black" />
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {serviceTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-body"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
