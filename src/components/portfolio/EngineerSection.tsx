import { motion } from "framer-motion";
import { ArrowLeft, Pill, LineChart, MessageSquare, Database, Server, Cloud, Code, Layers, Cog } from "lucide-react";

interface EngineerSectionProps {
  onBack: () => void;
}

const caseStudies = [
  {
    icon: Pill,
    title: "Medicine OCR — Pharmacy AI Scanner",
    challenge: "300+ pharmacy retailers drowning in manual inventory chaos. Stock errors, delayed restocking, and compliance nightmares threatened profitability.",
    solution: "Engineered a deep learning OCR pipeline with custom-trained CNNs, optimizing real-time label scanning for batch codes, expiry dates, and drug identifiers.",
    impact: {
      metrics: ["98.5% accuracy", "300+ retailers", "8-12 week rollout"],
      highlight: "Processing 10,000+ labels daily with sub-second latency."
    },
    tags: ["Computer Vision", "Deep Learning", "FastAPI", "PostgreSQL"],
  },
  {
    icon: LineChart,
    title: "Financial Analysis Engine",
    challenge: "Analysts buried under 40+ hours of weekly document parsing. Deal velocity stalled; opportunities slipped away.",
    solution: "Orchestrated an intelligent RAG pipeline combining vector embeddings with LLM reasoning for contextual extraction of financial metrics from complex documents.",
    impact: {
      metrics: ["75% faster auditing", "500+ docs/month", "$200K+ saved"],
      highlight: "Reduced document analysis from hours to minutes."
    },
    tags: ["RAG", "LangChain", "OpenAI", "MongoDB"],
  },
  {
    icon: MessageSquare,
    title: "Wholesome Start — Conversational Automation",
    challenge: "'Wholesome Start' needed 24/7 customer engagement but couldn't scale human operators to meet demand spikes.",
    solution: "Optimized autonomous WhatsApp/Instagram bots with natural language understanding, seamless payment flows, and intelligent order management workflows.",
    impact: {
      metrics: ["24/7 uptime", "300+ orders/day", "89% satisfaction"],
      highlight: "Fully autonomous order-taking with zero human intervention."
    },
    tags: ["WhatsApp API", "NLU", "Node.js", "Redis"],
  },
];

const techStack = [
  { name: "Python", icon: Code, category: "Language" },
  { name: "FastAPI", icon: Server, category: "Framework" },
  { name: "MongoDB", icon: Database, category: "Database" },
  { name: "PostgreSQL", icon: Database, category: "Database" },
  { name: "Docker", icon: Layers, category: "DevOps" },
  { name: "AWS", icon: Cloud, category: "Cloud" },
  { name: "ReactJS", icon: Cog, category: "Frontend" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const EngineerSection = ({ onBack }: EngineerSectionProps) => {
  return (
    <div className="min-h-screen bg-engineer-bg grid-pattern">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-engineer-bg/80 backdrop-blur-xl border-b border-engineer-accent/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={onBack}
            className="inline-flex items-center gap-2 text-engineer-text-muted hover:text-engineer-accent transition-colors font-mono text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Return to Hub
          </motion.button>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4"
          >
            <span className="text-engineer-accent font-mono text-xs tracking-wider hidden md:block">
              SDE / AI ENGINEER
            </span>
          </motion.div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="inline-block font-mono text-sm text-engineer-accent mb-4 tracking-wider uppercase">
            Backend Developer & AI Engineer
          </span>
          <h1 className="font-mono text-4xl md:text-5xl lg:text-6xl font-bold text-engineer-text mb-6 leading-tight">
            Case{" "}
            <span className="gradient-text-engineer">Studies</span>
          </h1>
          <p className="text-engineer-text-muted text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Python (FastAPI/Flask) • RAG Systems • Document Intelligence • Gen-AI Pipelines
          </p>
        </motion.div>
      </section>

      {/* Tech Stack */}
      <section className="py-12 px-6 border-y border-engineer-accent/10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <h3 className="font-mono text-sm text-engineer-accent mb-8 text-center uppercase tracking-wider">
            Technology Arsenal
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech) => (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                className="group relative flex items-center gap-2 px-4 py-2 bg-engineer-surface rounded-lg border border-engineer-accent/10 hover:border-engineer-accent/40 hover:glow-cyan transition-all duration-300"
              >
                <tech.icon className="w-4 h-4 text-engineer-accent" />
                <span className="font-mono text-sm text-engineer-text">{tech.name}</span>
                
                {/* Hover reveal: code snippet effect */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-engineer-accent text-engineer-bg text-xs font-mono rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {tech.category}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto"
        >
          <h2 className="font-mono text-2xl text-engineer-text mb-12 text-center">
            Featured <span className="text-engineer-accent">Case Studies</span>
          </h2>
          
          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <motion.article
                key={study.title}
                variants={itemVariants}
                className="relative bg-engineer-surface rounded-2xl p-8 border border-engineer-accent/10 hover:border-engineer-accent/30 transition-all duration-300 group overflow-hidden"
              >
                {/* Project number */}
                <span className="absolute top-6 right-8 font-mono text-7xl font-bold text-engineer-accent/5 group-hover:text-engineer-accent/10 transition-colors">
                  0{index + 1}
                </span>
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-engineer-bg border border-engineer-accent/20 flex items-center justify-center group-hover:glow-cyan transition-all">
                      <study.icon className="w-6 h-6 text-engineer-accent" />
                    </div>
                    <h3 className="font-mono text-xl font-semibold text-engineer-text pt-2">
                      {study.title}
                    </h3>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <span className="font-mono text-xs text-red-400 uppercase tracking-wider flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-red-400/50" />
                        Challenge
                      </span>
                      <p className="text-engineer-text-muted text-sm mt-2 leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>
                    <div>
                      <span className="font-mono text-xs text-engineer-accent uppercase tracking-wider flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-engineer-accent/50" />
                        Solution
                      </span>
                      <p className="text-engineer-text-muted text-sm mt-2 leading-relaxed">
                        {study.solution}
                      </p>
                    </div>
                    <div>
                      <span className="font-mono text-xs text-green-400 uppercase tracking-wider flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-green-400/50" />
                        Impact
                      </span>
                      <div className="mt-2">
                        <div className="flex flex-wrap gap-2 mb-2">
                          {study.impact.metrics.map((metric) => (
                            <span key={metric} className="px-2 py-1 bg-green-400/10 text-green-400 font-mono text-xs rounded font-bold">
                              {metric}
                            </span>
                          ))}
                        </div>
                        <p className="text-engineer-text text-sm font-medium">
                          {study.impact.highlight}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-engineer-accent/10 text-engineer-accent font-mono text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-6 border-t border-engineer-accent/10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-mono text-2xl text-engineer-text mb-4">
            Ready to <span className="gradient-text-engineer">Optimize</span>?
          </h2>
          <p className="text-engineer-text-muted mb-8">
            Let's architect your next high-performance system together.
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-engineer-accent text-engineer-bg font-mono font-semibold rounded-lg hover:bg-engineer-glow transition-all duration-300 glow-cyan">
            Initialize Contact
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default EngineerSection;
