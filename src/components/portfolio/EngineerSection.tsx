import { motion } from "framer-motion";
import { ArrowLeft, Pill, LineChart, MessageSquare, Cpu, Database, Server, Cloud, Code } from "lucide-react";

interface EngineerSectionProps {
  onBack: () => void;
}

const projects = [
  {
    icon: Pill,
    title: "Medicine OCR — Pharmacy AI Scanner",
    challenge: "300+ pharmacy retailers struggled with manual inventory management, leading to stock discrepancies and delayed restocking cycles.",
    solution: "Developed a deep learning-powered OCR system using custom-trained CNNs to automatically scan and digitize medicine labels, batch codes, and expiry dates in real-time.",
    impact: "99.2% accuracy in text extraction • 8-12 week implementation timeline • Processing 10,000+ labels daily across retail network",
    tags: ["Computer Vision", "Deep Learning", "FastAPI", "PostgreSQL"],
  },
  {
    icon: LineChart,
    title: "Financial Analysis Engine",
    challenge: "Financial analysts spent 40+ hours weekly manually parsing through complex documents, causing bottlenecks in deal flow.",
    solution: "Built an intelligent document analysis pipeline using RAG architecture, combining vector embeddings with LLM reasoning for contextual extraction of financial metrics.",
    impact: "75% reduction in document analysis time • Processing 500+ documents monthly • $200K+ annual cost savings for client",
    tags: ["RAG", "LangChain", "OpenAI", "MongoDB"],
  },
  {
    icon: MessageSquare,
    title: "Conversational Automation Platform",
    challenge: "'Wholesome Start' and similar businesses needed 24/7 customer engagement but couldn't afford round-the-clock staff.",
    solution: "Engineered autonomous WhatsApp/Instagram bots with natural language understanding, seamless payment integration, and intelligent order management workflows.",
    impact: "24/7 autonomous order-taking • 300+ orders processed daily • 89% customer satisfaction rate",
    tags: ["WhatsApp API", "NLU", "Node.js", "Redis"],
  },
  {
    icon: Cpu,
    title: "Generative AI Pipelines",
    challenge: "Enterprise clients needed scalable, secure deployment of generative AI capabilities without vendor lock-in.",
    solution: "Designed containerized microservices architecture for Stable Diffusion APIs and enterprise LLM integrations (OpenAI, Gemini), with auto-scaling and cost optimization.",
    impact: "Sub-2s image generation latency • 99.9% uptime SLA • Supporting 50K+ API calls daily",
    tags: ["Docker", "Kubernetes", "AWS", "Stable Diffusion"],
  },
];

const techStack = [
  { name: "Python", icon: Code },
  { name: "FastAPI", icon: Server },
  { name: "MongoDB", icon: Database },
  { name: "PostgreSQL", icon: Database },
  { name: "Docker", icon: Cloud },
  { name: "AWS", icon: Cloud },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
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
            Back to Split View
          </motion.button>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4"
          >
            {techStack.slice(0, 3).map((tech) => (
              <span key={tech.name} className="text-engineer-text-muted font-mono text-xs hidden md:block">
                {tech.name}
              </span>
            ))}
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
            Engineering{" "}
            <span className="gradient-text-engineer">Intelligent Systems</span>
          </h1>
          <p className="text-engineer-text-muted text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Specializing in Python (FastAPI/Flask) and Gen-AI. I build scalable APIs, 
            RAG systems, and document intelligence solutions that power real businesses.
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
            Tech Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech) => (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                className="flex items-center gap-2 px-4 py-2 bg-engineer-surface rounded-lg border border-engineer-accent/10 hover:border-engineer-accent/30 transition-colors"
              >
                <tech.icon className="w-4 h-4 text-engineer-accent" />
                <span className="font-mono text-sm text-engineer-text">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects */}
      <section className="py-20 px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto"
        >
          <h2 className="font-mono text-2xl text-engineer-text mb-12 text-center">
            Featured <span className="text-engineer-accent">Projects</span>
          </h2>
          
          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                variants={itemVariants}
                className="relative bg-engineer-surface rounded-2xl p-8 border border-engineer-accent/10 hover:border-engineer-accent/30 transition-all duration-300 group"
              >
                {/* Project number */}
                <span className="absolute top-6 right-8 font-mono text-6xl font-bold text-engineer-accent/5 group-hover:text-engineer-accent/10 transition-colors">
                  0{index + 1}
                </span>
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-engineer-bg border border-engineer-accent/20 flex items-center justify-center">
                      <project.icon className="w-6 h-6 text-engineer-accent" />
                    </div>
                    <h3 className="font-mono text-xl font-semibold text-engineer-text pt-2">
                      {project.title}
                    </h3>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <span className="font-mono text-xs text-engineer-accent uppercase tracking-wider">Challenge</span>
                      <p className="text-engineer-text-muted text-sm mt-2 leading-relaxed">
                        {project.challenge}
                      </p>
                    </div>
                    <div>
                      <span className="font-mono text-xs text-engineer-accent uppercase tracking-wider">Solution</span>
                      <p className="text-engineer-text-muted text-sm mt-2 leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                    <div>
                      <span className="font-mono text-xs text-engineer-accent uppercase tracking-wider">Impact</span>
                      <p className="text-engineer-text text-sm mt-2 leading-relaxed font-medium">
                        {project.impact}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
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
            Let's Build Something <span className="gradient-text-engineer">Exceptional</span>
          </h2>
          <p className="text-engineer-text-muted mb-8">
            Looking for a backend architect or AI engineer? Let's discuss your next project.
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-engineer-accent text-engineer-bg font-mono font-semibold rounded-lg hover:bg-engineer-glow transition-all duration-300 glow-cyan">
            Get in Touch
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default EngineerSection;
