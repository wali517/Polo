import { process } from "../data/content";

export default function Process() {
  return (
    <section className="section-pad border-t border-border">
      <div className="container-page">
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="eyebrow">How it works</span>
            <h2 className="mt-5 text-balance font-display text-4xl font-extrabold sm:text-5xl">
              Process Is <span className="text-dim">Everything</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm text-body">
            Simple, streamlined process is what gets you results.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {process.map((item, i) => (
            <div key={item.step} className="card relative flex flex-col gap-6 p-7">
              <div className="flex items-center justify-between">
                <span className="font-display text-3xl font-extrabold text-dim">{item.step}</span>
                <span className="text-xs font-medium uppercase tracking-wider text-dim">
                  Step {i + 1}
                </span>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-heading">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{item.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-6 rounded-3xl border border-border bg-surface p-8 sm:flex-row sm:items-center">
          <div>
            <h3 className="font-display text-xl font-bold text-heading">
              I am with you in every step
            </h3>
            <p className="mt-1 text-sm text-body">
              Alongside you at each step for a seamless experience.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="btn-secondary">
              See All Projects
            </a>
            <a href="#contact" className="btn-primary">
              Contact Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
