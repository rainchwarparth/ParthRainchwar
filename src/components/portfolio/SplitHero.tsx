import { motion } from "framer-motion";
import { Terminal, BookMarked, ChevronRight, Users } from "lucide-react";
import ProfilePositioning from "./ProfilePositioning";

interface SplitHeroProps {
  onNavigate: (side: "engineer" | "researcher" | "human") => void;
}

const SplitHero = ({ onNavigate }: SplitHeroProps) => {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Profile Positioning - Identity Layer */}
      <ProfilePositioning />
      {/* Main Split View */}
      <div className="flex-1 flex flex-col lg:flex-row">
        {/* The Architect - Engineer Side */}
        <motion.div
          className="relative flex-1 min-h-[40vh] lg:min-h-screen bg-engineer-bg grid-pattern flex items-center justify-center p-8 lg:p-16 cursor-pointer group"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          onClick={() => onNavigate("engineer")}
          whileHover={{ scale: 1.01 }}
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-engineer-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Floating code elements */}
          <div className="absolute top-20 left-10 text-engineer-accent/20 font-mono text-sm animate-float hidden lg:block">
            {'$ deploy --scale=∞'}
          </div>
          <div className="absolute bottom-32 right-16 text-engineer-accent/20 font-mono text-sm animate-float hidden lg:block" style={{ animationDelay: "2s" }}>
            {'[OK] latency: 0.003ms'}
          </div>
          
          <div className="relative z-10 max-w-lg text-center lg:text-left">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-engineer-surface border border-engineer-accent/20 mb-6 glow-cyan"
            >
              <Terminal className="w-8 h-8 text-engineer-accent" />
            </motion.div>
            
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-block font-mono text-sm text-engineer-accent mb-4 tracking-wider uppercase"
            >
              The Architect
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="font-mono text-2xl lg:text-3xl font-bold text-engineer-text mb-4 leading-tight"
            >
              I engineer systems built to{" "}
              <span className="gradient-text-engineer">scale without limits</span>.
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-engineer-text-muted text-lg leading-relaxed mb-8"
            >
              Every millisecond is a metric; every API call, an opportunity to optimize.
            </motion.p>
            
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-engineer-accent text-engineer-bg font-mono font-semibold rounded-lg hover:bg-engineer-glow transition-all duration-300 glow-cyan group/btn"
              onClick={(e) => {
                e.stopPropagation();
                onNavigate("engineer");
              }}
            >
              Access Terminal
              <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>

        {/* Center divider */}
        <div className="hidden lg:flex absolute left-1/2 top-0 bottom-[120px] w-px bg-gradient-to-b from-transparent via-engineer-accent/30 to-transparent z-20" />

        {/* The Observer - Researcher Side */}
        <motion.div
          className="relative flex-1 min-h-[40vh] lg:min-h-screen bg-researcher-bg flex items-center justify-center p-8 lg:p-16 cursor-pointer group"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          onClick={() => onNavigate("researcher")}
          whileHover={{ scale: 1.01 }}
        >
          {/* Paper texture overlay */}
          <div className="absolute inset-0 paper-texture" />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-bl from-researcher-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Floating research elements */}
          <div className="absolute top-24 right-12 text-researcher-accent/30 font-serif italic text-sm animate-float hidden lg:block" style={{ animationDelay: "1s" }}>
            "patterns in chaos"
          </div>
          <div className="absolute bottom-28 left-16 text-researcher-accent/30 font-serif italic text-sm animate-float hidden lg:block" style={{ animationDelay: "3s" }}>
            "cognitive entropy"
          </div>
          
          <div className="relative z-10 max-w-lg text-center lg:text-left">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-researcher-surface border border-researcher-accent/20 mb-6 glow-amber"
            >
              <BookMarked className="w-8 h-8 text-researcher-accent" />
            </motion.div>
            
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-block font-serif text-sm text-researcher-accent mb-4 tracking-wider italic"
            >
              The Observer
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="font-serif text-2xl lg:text-3xl font-semibold text-researcher-text mb-4 leading-tight"
            >
              I study the silent language of{" "}
              <span className="gradient-text-researcher">human behavior</span>.
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-researcher-text-muted text-lg leading-relaxed font-serif mb-8"
            >
              My inquiry begins where data ends and human complexity takes over.
            </motion.p>
            
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-researcher-accent text-white font-serif font-semibold rounded-lg hover:bg-researcher-glow transition-all duration-300 glow-amber group/btn"
              onClick={(e) => {
                e.stopPropagation();
                onNavigate("researcher");
              }}
            >
              <BookMarked className="w-4 h-4" />
              Open Journal
              <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Human Axis - The Bridge */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="relative bg-gradient-to-r from-engineer-bg via-human-axis to-researcher-bg py-6 px-8 cursor-pointer group border-t border-human-axis-border"
        onClick={() => onNavigate("human")}
      >
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-4">
          <Users className="w-5 h-5 text-human-axis-accent" />
          <span className="font-sans text-sm text-human-axis-text tracking-wide">
            The Human Axis — Leadership • Impact • Credentials
          </span>
          <ChevronRight className="w-4 h-4 text-human-axis-accent group-hover:translate-x-1 transition-transform" />
        </div>
      </motion.div>
    </section>
  );
};

export default SplitHero;
