import { motion } from "framer-motion";
import { Terminal, BookMarked, ChevronRight, Users, Code2, Brain } from "lucide-react";
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
      <div className="flex-1 flex flex-col lg:flex-row relative">
        {/* The Architect - Engineer Side */}
        <motion.div
          className="relative flex-1 min-h-[50vh] lg:min-h-[70vh] bg-engineer-bg overflow-hidden cursor-pointer group"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          onClick={() => onNavigate("engineer")}
        >
          {/* Enhanced grid pattern */}
          <div className="absolute inset-0 grid-pattern opacity-100" />
          
          {/* Animated gradient overlay */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-engineer-accent/[0.08] via-transparent to-transparent"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          
          {/* Glowing corner accent */}
          <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-engineer-accent/[0.05] to-transparent blur-3xl" />
          
          {/* Floating code snippets */}
          <motion.div 
            className="absolute top-12 left-8 text-engineer-accent/20 font-mono text-xs hidden lg:block"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Code2 className="w-4 h-4 mb-2 opacity-40" />
            <span className="opacity-60">async deploy() {'{'}</span>
          </motion.div>
          
          <motion.div 
            className="absolute bottom-20 right-12 text-engineer-accent/15 font-mono text-xs hidden lg:block"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          >
            <span className="opacity-40">{'}'} // O(1) latency</span>
          </motion.div>
          
          {/* Content */}
          <div className="relative z-10 h-full flex items-center justify-center p-8 lg:p-16">
            <div className="max-w-md text-center lg:text-left">
              {/* Icon badge */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 15 }}
                className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-engineer-surface/80 backdrop-blur-sm border border-engineer-accent/20 mb-6 group-hover:border-engineer-accent/40 transition-colors duration-300"
              >
                <Terminal className="w-6 h-6 text-engineer-accent" />
              </motion.div>
              
              {/* Label */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-2 mb-4"
              >
                <div className="h-px w-8 bg-engineer-accent/40" />
                <span className="font-mono text-xs text-engineer-accent tracking-[0.2em] uppercase">
                  The Architect
                </span>
              </motion.div>
              
              {/* Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="font-mono text-xl lg:text-2xl font-semibold text-engineer-text mb-4 leading-tight tracking-tight"
              >
                I engineer systems built to{" "}
                <span className="relative">
                  <span className="gradient-text-engineer">scale without limits</span>
                  <motion.span 
                    className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-engineer-accent to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                  />
                </span>.
              </motion.h2>
              
              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-engineer-text-muted text-sm lg:text-base leading-relaxed mb-8 font-light"
              >
                Every millisecond is a metric; every API call, an opportunity to optimize.
              </motion.p>
              
              {/* CTA Button */}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-6 py-3 bg-engineer-accent/10 border border-engineer-accent/30 text-engineer-accent font-mono text-sm font-medium rounded-lg hover:bg-engineer-accent hover:text-engineer-bg transition-all duration-300 group/btn"
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate("engineer");
                }}
              >
                <Terminal className="w-4 h-4" />
                Access Terminal
                <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </div>
          
          {/* Bottom edge glow */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-engineer-accent/20 to-transparent" />
        </motion.div>

        {/* Center Divider */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px z-20">
          <div className="h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full border border-white/20 bg-[hsl(220,20%,8%)]"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </div>

        {/* The Observer - Researcher Side */}
        <motion.div
          className="relative flex-1 min-h-[50vh] lg:min-h-[70vh] bg-researcher-bg overflow-hidden cursor-pointer group"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          onClick={() => onNavigate("researcher")}
        >
          {/* Paper texture overlay */}
          <div className="absolute inset-0 paper-texture" />
          
          {/* Animated gradient overlay */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-bl from-researcher-accent/[0.08] via-transparent to-transparent"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          
          {/* Glowing corner accent */}
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-researcher-accent/[0.05] to-transparent blur-3xl" />
          
          {/* Floating research elements */}
          <motion.div 
            className="absolute top-16 right-10 text-researcher-accent/30 hidden lg:flex items-center gap-2"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          >
            <Brain className="w-4 h-4 opacity-40" />
            <span className="font-serif italic text-xs opacity-60">"patterns in chaos"</span>
          </motion.div>
          
          <motion.div 
            className="absolute bottom-24 left-10 text-researcher-accent/25 font-serif italic text-xs hidden lg:block"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          >
            <span className="opacity-50">"cognitive entropy"</span>
          </motion.div>
          
          {/* Content */}
          <div className="relative z-10 h-full flex items-center justify-center p-8 lg:p-16">
            <div className="max-w-md text-center lg:text-left">
              {/* Icon badge */}
              <motion.div
                initial={{ scale: 0, rotate: 180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.6, type: "spring", stiffness: 200, damping: 15 }}
                className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-researcher-surface/80 backdrop-blur-sm border border-researcher-accent/20 mb-6 group-hover:border-researcher-accent/40 transition-colors duration-300"
              >
                <BookMarked className="w-6 h-6 text-researcher-accent" />
              </motion.div>
              
              {/* Label */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex items-center gap-2 mb-4"
              >
                <div className="h-px w-8 bg-researcher-accent/40" />
                <span className="font-serif text-xs text-researcher-accent tracking-widest italic">
                  The Observer
                </span>
              </motion.div>
              
              {/* Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="font-serif text-xl lg:text-2xl font-medium text-researcher-text mb-4 leading-tight"
              >
                I study the silent language of{" "}
                <span className="relative">
                  <span className="gradient-text-researcher">human behavior</span>
                  <motion.span 
                    className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-researcher-accent to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.3, duration: 0.6 }}
                  />
                </span>.
              </motion.h2>
              
              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="text-researcher-text-muted text-sm lg:text-base leading-relaxed font-serif mb-8 font-light"
              >
                My inquiry begins where data ends and human complexity takes over.
              </motion.p>
              
              {/* CTA Button */}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-6 py-3 bg-researcher-accent/10 border border-researcher-accent/30 text-researcher-accent font-serif text-sm font-medium rounded-lg hover:bg-researcher-accent hover:text-white transition-all duration-300 group/btn"
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
          </div>
          
          {/* Bottom edge line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-researcher-accent/20 to-transparent" />
        </motion.div>
      </div>

      {/* Human Axis - The Bridge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        className="relative bg-gradient-to-r from-engineer-bg via-human-axis to-researcher-bg py-5 px-8 cursor-pointer group overflow-hidden"
        onClick={() => onNavigate("human")}
      >
        {/* Subtle animated shine */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
        />
        
        <div className="relative z-10 max-w-4xl mx-auto flex items-center justify-center gap-4">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <Users className="w-4 h-4 text-human-axis-accent" />
          </motion.div>
          <span className="font-sans text-xs text-human-axis-text tracking-widest uppercase">
            The Human Axis
          </span>
          <div className="hidden sm:flex items-center gap-3 text-human-axis-text-muted text-xs">
            <span className="w-1 h-1 rounded-full bg-human-axis-accent/40" />
            <span>Leadership</span>
            <span className="w-1 h-1 rounded-full bg-human-axis-accent/40" />
            <span>Impact</span>
            <span className="w-1 h-1 rounded-full bg-human-axis-accent/40" />
            <span>Credentials</span>
          </div>
          <ChevronRight className="w-4 h-4 text-human-axis-accent/60 group-hover:translate-x-1 group-hover:text-human-axis-accent transition-all duration-300" />
        </div>
        
        {/* Top border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-engineer-accent/20 via-human-axis-accent/30 to-researcher-accent/20" />
      </motion.div>
    </section>
  );
};

export default SplitHero;
