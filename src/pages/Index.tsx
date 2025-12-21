import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SplitHero from "@/components/portfolio/SplitHero";
import EngineerSection from "@/components/portfolio/EngineerSection";
import ResearcherSection from "@/components/portfolio/ResearcherSection";

type View = "split" | "engineer" | "researcher";

const Index = () => {
  const [currentView, setCurrentView] = useState<View>("split");

  const handleNavigate = (side: "engineer" | "researcher") => {
    setCurrentView(side);
  };

  const handleBack = () => {
    setCurrentView("split");
  };

  return (
    <main className="min-h-screen">
      <AnimatePresence mode="wait">
        {currentView === "split" && (
          <motion.div
            key="split"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <SplitHero onNavigate={handleNavigate} />
          </motion.div>
        )}

        {currentView === "engineer" && (
          <motion.div
            key="engineer"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
          >
            <EngineerSection onBack={handleBack} />
          </motion.div>
        )}

        {currentView === "researcher" && (
          <motion.div
            key="researcher"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.4 }}
          >
            <ResearcherSection onBack={handleBack} />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Index;
