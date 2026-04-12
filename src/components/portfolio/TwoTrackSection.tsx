import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Github } from "lucide-react";
import type { BuilderProject, CaseStudy } from "@/data/types";

const card = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

interface TwoTrackSectionProps {
  builderProjects: BuilderProject[];
  caseStudies: CaseStudy[];
}

export default function TwoTrackSection({ builderProjects, caseStudies }: TwoTrackSectionProps) {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        {/* ── Builder Track ─────────────────────── */}
        <div id="builder">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold tracking-tight flex items-center gap-3"
          >
            <span className="w-3 h-3 rounded-full bg-blue-500" />
            What I Build
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
            className="mt-6 space-y-4"
          >
            {builderProjects.map((p) => (
              <motion.div
                key={p.title}
                variants={card}
                className="group rounded-xl border border-border bg-card p-5 hover:border-blue-300 transition-colors"
              >
                {/* meta row */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    {p.status === "active" && (
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Active
                      </span>
                    )}
                    {p.status === "wip" && (
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                        WIP
                      </span>
                    )}
                    {p.status === "complete" && (
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                        Complete
                      </span>
                    )}
                    {p.year && (
                      <span className="text-xs text-muted-foreground">{p.year}</span>
                    )}
                  </div>
                  {p.repoUrl && (
                    <a
                      href={p.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="GitHub repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <h3 className="font-semibold text-base group-hover:text-blue-600 transition-colors">{p.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {p.description}
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <p className="text-xs font-medium text-blue-600">
                    {p.impact}
                  </p>
                  <div className="flex gap-1.5">
                    {p.tags.slice(0, 2).map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-700"
                      >
                        {t}
                      </span>
                    ))}
                    {p.tags.length > 2 && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                        +{p.tags.length - 2}
                      </span>
                    )}
                  </div>
                </div>
                <Link
                  to={`/project/${p.slug}`}
                  className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-blue-600 group-hover:gap-2 transition-all"
                >
                  View Project <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── Thinker Track ────────────────────── */}
        <div id="thinker">
          <motion.h2
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold tracking-tight flex items-center gap-3"
          >
            <span className="w-3 h-3 rounded-full bg-amber-500" />
            What I Study
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
            className="mt-6 space-y-4"
          >
            {caseStudies.map((cs) => (
              <motion.div
                key={cs.slug}
                variants={card}
                className="group relative rounded-xl border border-border bg-card p-5 hover:border-amber-300 transition-colors"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold text-base">{cs.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {cs.tagline}
                    </p>
                  </div>
                  <Link
                    to={`/case/${cs.slug}`}
                    className="shrink-0 mt-1 inline-flex items-center gap-1 text-sm font-medium text-amber-600 hover:text-amber-700 transition-colors"
                  >
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                <div className="mt-3 flex items-center gap-3">
                  <span className="text-xs text-muted-foreground">
                    {cs.papers.length}{" "}
                    {cs.papers.length === 1 ? "paper" : "papers"}
                  </span>
                  <span className="text-xs text-muted-foreground">·</span>
                  <div className="flex gap-1.5">
                    {cs.themes.slice(0, 2).map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-0.5 rounded-full bg-amber-50 text-amber-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
