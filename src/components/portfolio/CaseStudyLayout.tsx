import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink, GitBranch } from "lucide-react";
import type { CaseStudy } from "@/data/types";
import StoryTimeline from "./StoryTimeline";
import PaperCard from "./PaperCard";

interface CaseStudyLayoutProps {
  study: CaseStudy;
  prev: CaseStudy | null;
  next: CaseStudy | null;
  spawnedChildren: CaseStudy[];
}

export default function CaseStudyLayout({
  study,
  prev,
  next,
  spawnedChildren,
}: CaseStudyLayoutProps) {
  return (
    <main className="min-h-screen bg-background">
      <div className="pt-20 pb-24 px-6 max-w-3xl mx-auto">
        {/* ── Spawned-from lineage ────────────── */}
        {study.spawnedFrom && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-amber-200 bg-amber-50/50 text-sm text-amber-700"
          >
            <GitBranch className="w-4 h-4" />
            Spawned from{" "}
            <Link
              to={`/case/${study.spawnedFrom.slug}`}
              className="font-medium underline underline-offset-2 hover:text-amber-900 transition-colors"
            >
              {study.spawnedFrom.label}
            </Link>
          </motion.div>
        )}

        {/* ── Header ─────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-wrap gap-2 mb-4">
            {study.themes.map((t) => (
              <span
                key={t}
                className="text-xs px-2.5 py-1 rounded-full bg-amber-50 text-amber-700"
              >
                {t}
              </span>
            ))}
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            {study.title}
          </h1>
          <p className="mt-3 text-lg italic text-amber-700/80">
            {study.tagline}
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            {study.summary}
          </p>
        </motion.div>

        {/* ── Timeline ───────────────────────── */}
        {study.timeline.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold tracking-tight mb-8">
              The Story
            </h2>
            <StoryTimeline events={study.timeline} />
          </section>
        )}

        {/* ── Papers ─────────────────────────── */}
        {study.papers.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold tracking-tight mb-8">
              Published Papers
            </h2>
            <div className="space-y-6">
              {study.papers.map((p, i) => (
                <PaperCard key={i} paper={p} index={i} />
              ))}
            </div>
          </section>
        )}

        {/* ── Spawned case studies ────────────── */}
        {spawnedChildren.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold tracking-tight mb-6">
              Research that grew from this
            </h2>
            <div className="space-y-4">
              {spawnedChildren.map((child) => (
                <Link
                  key={child.slug}
                  to={`/case/${child.slug}`}
                  className="flex items-center gap-4 p-5 rounded-xl border border-border hover:border-amber-300 bg-card transition-colors group"
                >
                  <GitBranch className="w-5 h-5 text-amber-500 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground group-hover:text-amber-700 transition-colors">
                      {child.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {child.tagline}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 ml-auto text-muted-foreground group-hover:text-amber-600 group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ── Linked Tech ────────────────────── */}
        {study.linkedTech.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold tracking-tight mb-6">
              Connected Technical Work
            </h2>
            <div className="flex flex-wrap gap-3">
              {study.linkedTech.map((lt) => (
                <a
                  key={lt.label}
                  href={lt.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm hover:border-blue-300 hover:text-blue-600 transition-colors"
                >
                  {lt.label}
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </section>
        )}

        {/* ── Prev / Next ────────────────────── */}
        <div className="mt-20 pt-8 border-t border-border flex items-center justify-between">
          {prev ? (
            <Link
              to={`/case/${prev.slug}`}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {prev.title}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              to={`/case/${next.slug}`}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {next.title}
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <span />
          )}
        </div>
      </div>
    </main>
  );
}
