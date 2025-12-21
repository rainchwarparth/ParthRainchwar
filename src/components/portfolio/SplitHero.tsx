import { motion } from "framer-motion";
import { Code2, Brain, ChevronRight, BookOpen } from "lucide-react";

interface SplitHeroProps {
  onNavigate: (side: "engineer" | "researcher") => void;
}

const SplitHero = ({ onNavigate }: SplitHeroProps) => {
  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden">
      {/* Engineer Side */}
      <motion.div
        className="relative flex-1 min-h-[50vh] lg:min-h-screen bg-engineer-bg grid-pattern flex items-center justify-center p-8 lg:p-16 cursor-pointer group"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        onClick={() => onNavigate("engineer")}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-engineer-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Floating code elements */}
        <div className="absolute top-20 left-10 text-engineer-accent/20 font-mono text-sm animate-float">
          {'{ api: "ready" }'}
        </div>
        <div className="absolute bottom-32 right-16 text-engineer-accent/20 font-mono text-sm animate-float" style={{ animationDelay: "2s" }}>
          {'async fn() => {...}'}
        </div>
        
        <div className="relative z-10 max-w-lg text-center lg:text-left">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-engineer-surface border border-engineer-accent/20 mb-6 glow-cyan"
          >
            <Code2 className="w-8 h-8 text-engineer-accent" />
          </motion.div>
          
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="inline-block font-mono text-sm text-engineer-accent mb-4 tracking-wider uppercase"
          >
            The Engineer
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="font-mono text-3xl lg:text-4xl font-bold text-engineer-text mb-6 leading-tight"
          >
            Building Systems That{" "}
            <span className="gradient-text-engineer">Scale</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-engineer-text-muted text-lg leading-relaxed mb-8"
          >
            I architect high-performance backend systems and AI pipelines that process millions of requests. From RAG engines to real-time automation, I turn complex problems into elegant, production-ready code.
          </motion.p>
          
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-engineer-accent text-engineer-bg font-mono font-semibold rounded-lg hover:bg-engineer-glow transition-all duration-300 glow-cyan group"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate("engineer");
            }}
          >
            Explore the Engine
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </motion.div>

      {/* Center divider */}
      <div className="hidden lg:flex absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-engineer-accent/30 to-transparent z-20" />

      {/* Researcher Side */}
      <motion.div
        className="relative flex-1 min-h-[50vh] lg:min-h-screen bg-researcher-bg flex items-center justify-center p-8 lg:p-16 cursor-pointer group"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        onClick={() => onNavigate("researcher")}
      >
        {/* Paper texture overlay */}
        <div className="absolute inset-0 paper-texture" />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-bl from-researcher-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Floating research elements */}
        <div className="absolute top-24 right-12 text-researcher-accent/30 font-serif italic text-sm animate-float" style={{ animationDelay: "1s" }}>
          "cognition & behavior"
        </div>
        <div className="absolute bottom-28 left-16 text-researcher-accent/30 font-serif italic text-sm animate-float" style={{ animationDelay: "3s" }}>
          "human-AI synergy"
        </div>
        
        <div className="relative z-10 max-w-lg text-center lg:text-left">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-researcher-surface border border-researcher-accent/20 mb-6 glow-amber"
          >
            <Brain className="w-8 h-8 text-researcher-accent" />
          </motion.div>
          
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="inline-block font-serif text-sm text-researcher-accent mb-4 tracking-wider italic"
          >
            The Researcher
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="font-serif text-3xl lg:text-4xl font-semibold text-researcher-text mb-6 leading-tight"
          >
            Decoding the{" "}
            <span className="gradient-text-researcher">Human Mind</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-researcher-text-muted text-lg leading-relaxed font-serif mb-8"
          >
            My research explores the fascinating intersection of behavioral psychology and artificial intelligence. I investigate how technology shapes human cognition and how we can design systems that adapt to our emotional states.
          </motion.p>
          
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-researcher-accent text-white font-serif font-semibold rounded-lg hover:bg-researcher-glow transition-all duration-300 glow-amber group"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate("researcher");
            }}
          >
            <BookOpen className="w-4 h-4" />
            Review the Thesis
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default SplitHero;
