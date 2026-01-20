import { motion } from "framer-motion";

const ProfilePositioning = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full bg-gradient-to-r from-engineer-bg via-[hsl(220,20%,8%)] to-researcher-bg border-b border-white/5"
    >
      <div className="max-w-4xl mx-auto px-8 py-12 lg:py-16">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-2xl lg:text-3xl font-medium text-white tracking-tight mb-6"
        >
          Parth Rainchwar
        </motion.h1>
        
        <div className="space-y-1.5 text-base lg:text-lg text-white/70 leading-relaxed">
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            Works at the intersection of behavioral modeling, consumption systems, and decision architecture.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            Designs research that treats human behavior, markets, and institutions as interacting systems.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            Builds data systems that operate under real constraints—ambiguity, ethics, scale, and time.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            Studies patterns in consumption, cognition, and choice through statistical and computational methods.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.4 }}
          >
            Approaches problems as decision systems, not isolated models.
          </motion.p>
        </div>
      </div>
    </motion.header>
  );
};

export default ProfilePositioning;
