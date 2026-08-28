import { useState } from "react";
import { Plus, Star } from "lucide-react";
import { faqs } from "../data/content";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section-pad border-t border-border">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <span className="eyebrow">FAQ Section</span>
            <h2 className="mt-5 text-balance font-display text-4xl font-extrabold sm:text-5xl">
              Questions, <span className="text-dim">Answers</span>
            </h2>
            <p className="mt-4 max-w-sm text-base text-body">
              Get quick answers to your most pressing questions.
            </p>

            <div className="mt-8 hidden card p-6 sm:block">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-zinc-400 to-zinc-700 font-display text-sm font-bold text-white">
                  RH
                </span>
                <div>
                  <p className="font-display text-base font-bold text-heading">Ryan Harper</p>
                  <p className="text-xs text-dim">Harper Education</p>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-xs font-semibold text-body">5.0</span>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                  ))}
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-body">
                Exceptional creativity and attention to detail! The final product not only
                looks great but also enhances user engagement.
              </p>

              <div className="mt-6 flex flex-wrap gap-3 border-t border-border pt-6">
                <a href="#projects" className="btn-secondary !px-4 !py-2.5 text-sm">
                  See All Projects
                </a>
                <a href="#contact" className="btn-primary !px-4 !py-2.5 text-sm">
                  Contact Now
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {faqs.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={item.q} className="card overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-medium text-heading">{item.q}</span>
                    <Plus
                      className={`h-4 w-4 shrink-0 text-body transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm leading-relaxed text-body">{item.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
