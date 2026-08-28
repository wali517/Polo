import { Check, X } from "lucide-react";
import { whyMe } from "../data/content";

export default function WhyMe() {
  return (
    <section className="section-pad border-t border-border">
      <div className="container-page">
        <div className="text-center">
          <span className="eyebrow">Why choose me</span>
          <h2 className="mt-5 text-balance font-display text-4xl font-extrabold sm:text-5xl">
            Why me as <span className="text-dim">Design Partner</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base text-body">
            Why partner with me for the design excellence.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-border">
          {whyMe.map((row, i) => (
            <div
              key={row.good.title}
              className={`grid sm:grid-cols-2 ${i !== 0 ? "border-t border-border" : ""}`}
            >
              <div className="flex items-start gap-4 p-7 sm:p-8">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-live/15 text-live">
                  <Check className="h-4 w-4" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-heading">{row.good.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-body">{row.good.body}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 border-t border-border p-7 sm:border-l sm:border-t-0 sm:p-8">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 text-dim">
                  <X className="h-4 w-4" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-dim">{row.bad.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-dim">{row.bad.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
