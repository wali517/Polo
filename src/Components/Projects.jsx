import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/content";

export default function Projects() {
  return (
    <section id="projects" className="section-pad border-t border-border">
      <div className="container-page">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="eyebrow">Recent Projects</span>
            <h2 className="mt-5 text-balance font-display text-4xl font-extrabold sm:text-5xl">
              Recent <span className="text-dim">Designs</span>
            </h2>
            <p className="mt-4 max-w-md text-base text-body">
              Showcase of some of my recent sleek websites.
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

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.name}
              href="#"
              className="group relative aspect-[15/10] overflow-hidden rounded-3xl border border-border"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} transition-transform duration-500 group-hover:scale-105`} />
              <div className="absolute inset-0 bg-black/10" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <p className="font-display text-2xl font-bold text-white drop-shadow">
                  {project.name}
                </p>
                <p className="text-sm text-white/60">{project.tag}</p>
              </div>
              <span className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur transition-transform group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
