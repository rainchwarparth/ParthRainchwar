import { motion } from "framer-motion";

const ProfilePositioning = () => {
  const statements = [
    "Works at the intersection of behavioral modeling, consumption systems, and decision architecture.",
    "Designs research that treats human behavior, markets, and institutions as interacting systems.",
    "Builds data systems that operate under real constraints—ambiguity, ethics, scale, and time.",
    "Studies patterns in consumption, cognition, and choice through statistical and computational methods.",
    "Approaches problems as decision systems, not isolated models."
  ];

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full overflow-hidden"
    >
      {/* Sophisticated gradient background */}
      <div className="absolute inset-0 bg-[hsl(220,20%,6%)]" />
      <div className="absolute inset-0 bg-gradient-to-br from-engineer-accent/[0.03] via-transparent to-researcher-accent/[0.03]" />
      
      {/* Subtle animated grid lines */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(90deg, hsl(185 100% 50% / 0.3) 1px, transparent 1px),
                           linear-gradient(hsl(185 100% 50% / 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Glowing orbs */}
      <motion.div 
        className="absolute -top-20 -left-20 w-80 h-80 bg-engineer-accent/[0.04] rounded-full blur-[100px]"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.04, 0.06, 0.04]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute -bottom-20 -right-20 w-80 h-80 bg-researcher-accent/[0.04] rounded-full blur-[100px]"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.04, 0.06, 0.04]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-8 py-16 lg:py-24">
        {/* Name with refined styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-10"
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ width: 0 }}
            animate={{ width: 48 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="h-px bg-gradient-to-r from-engineer-accent to-transparent" />
          </motion.div>
          
          <h1 className="text-3xl lg:text-5xl font-light text-white tracking-tight">
            Parth{" "}
            <span className="font-medium bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
              Rainchwar
            </span>
          </h1>
        </motion.div>

        {/* Statements with staggered animation */}
        <div className="space-y-3 lg:space-y-4">
          {statements.map((statement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                delay: 0.4 + index * 0.1, 
                duration: 0.5,
                ease: "easeOut"
              }}
              className="flex items-start gap-4 group"
            >
              <motion.span 
                className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-gradient-to-br from-engineer-accent/60 to-researcher-accent/60"
                whileHover={{ scale: 1.5 }}
                transition={{ type: "spring", stiffness: 400 }}
              />
              <p className="text-base lg:text-lg text-white/60 leading-relaxed font-light group-hover:text-white/80 transition-colors duration-300">
                {statement}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom accent line */}
        <motion.div 
          className="mt-12 lg:mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </motion.div>
      </div>
    </motion.header>
  );
};

export default ProfilePositioning;
