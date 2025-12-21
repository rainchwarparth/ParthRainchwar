import { motion } from "framer-motion";
import { ArrowLeft, FileText, Lightbulb, ExternalLink, GraduationCap, Sparkles, BookOpen } from "lucide-react";

interface ResearcherSectionProps {
  onBack: () => void;
}

const researchChronicle = [
  {
    storyTitle: "The Quest for Digital Trust",
    title: "Optimal Face Recognition System using Haar Classifier",
    publisher: "IEEE",
    year: "2023",
    hypothesis: "Hybrid authentication combining facial recognition with behavioral biometrics can achieve superior accuracy for smart voting systems.",
    methodology: "Implemented cascaded Haar classifiers with real-time mask detection, integrating multiple authentication layers across 1,000+ test subjects.",
    outcome: {
      metrics: ["99% mask detection", "97.3% recognition", "Pilot deployed"],
      narrative: "Successfully demonstrated secure, accessible digital voting infrastructure."
    },
    link: "#",
  },
  {
    storyTitle: "The Mind-Gut Connection",
    title: "Machine Learning for Prediction of Nutritional Psychology",
    publisher: "Springer",
    year: "2023",
    hypothesis: "Fast food consumption patterns correlate significantly with cognitive performance in undergraduate populations.",
    methodology: "Applied Random Forest ensemble methods analyzing dietary data from 500+ students over a 6-month longitudinal study.",
    outcome: {
      metrics: ["12 predictors found", "84% accuracy", "Campus impact"],
      narrative: "Research informed campus wellness program redesign."
    },
    link: "#",
  },
  {
    storyTitle: "Decoding the Digital Consumer",
    title: "Internet of Behaviors (IoB): Analytical Study on Consumer Psychology",
    publisher: "CRC Press / Taylor & Francis",
    year: "2024",
    hypothesis: "Digital behavioral traces predict purchasing decisions with higher accuracy than demographic models.",
    methodology: "Comprehensive analysis of 10,000+ consumer interactions, developing novel IoB frameworks integrating psychological profiling.",
    outcome: {
      metrics: ["78% prediction", "3 platforms adopted", "Ethics guidelines"],
      narrative: "Framework contributed to emerging IoB ethical standards."
    },
    link: "#",
  },
];

const futureResearch = {
  title: "The Fractured Self in Digital Spaces",
  subtitle: "Behavioral Astrology & The Fragmented Personality",
  description: "My ongoing work bridges ancient pattern recognition with modern machine learning. Just as astrology sought to map celestial patterns to human behavior, I am developing models that decode the 'fractured personality'—the multiple digital personas we maintain across platforms.",
  focus: "How do fragmented digital identities affect real-world decision-making? Can we model emotional adaptability in human-technology relationships?",
  vision: "This research aims to create AI systems that understand not just what we do, but who we become in different digital contexts.",
  themes: ["Social Media Psychology", "Identity Fragmentation", "Emotional AI", "Behavioral Astrology", "Cognitive Modeling"],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const ResearcherSection = ({ onBack }: ResearcherSectionProps) => {
  return (
    <div className="min-h-screen bg-researcher-bg">
      {/* Paper texture overlay */}
      <div className="fixed inset-0 paper-texture pointer-events-none" />
      
      {/* Header */}
      <header className="sticky top-0 z-50 bg-researcher-bg/80 backdrop-blur-xl border-b border-researcher-accent/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={onBack}
            className="inline-flex items-center gap-2 text-researcher-text-muted hover:text-researcher-accent transition-colors font-serif text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Return to Hub
          </motion.button>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-researcher-text-muted"
          >
            <GraduationCap className="w-4 h-4" />
            <span className="font-serif text-sm hidden md:block">MITCOE, Pune</span>
          </motion.div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="inline-block font-serif italic text-sm text-researcher-accent mb-4 tracking-wider">
            Behavioral AI & Cognitive Computing
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-researcher-text mb-6 leading-tight">
            The Research{" "}
            <span className="gradient-text-researcher italic">Chronicle</span>
          </h1>
          <p className="text-researcher-text-muted text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-serif">
            A journey through inquiry—where each publication is a chapter in understanding the human mind.
          </p>
        </motion.div>
      </section>

      {/* Timeline Publications */}
      <section className="py-20 px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-16">
            <FileText className="w-6 h-6 text-researcher-accent" />
            <h2 className="font-serif text-2xl text-researcher-text">
              Published <span className="italic text-researcher-accent">Chapters</span>
            </h2>
          </div>
          
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-researcher-accent/20 hidden md:block" />
            
            <div className="space-y-16">
              {researchChronicle.map((pub, index) => (
                <motion.article
                  key={pub.title}
                  variants={itemVariants}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-researcher-accent border-4 border-researcher-bg hidden md:block" />
                  
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-researcher-accent/5 hover:shadow-xl transition-all duration-300 group">
                      {/* Story title */}
                      <p className="font-serif italic text-researcher-accent text-lg mb-2">
                        "{pub.storyTitle}"
                      </p>
                      
                      {/* Publisher badge */}
                      <div className={`flex items-center gap-2 mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                        <span className="px-3 py-1 bg-researcher-accent/10 text-researcher-accent font-serif text-xs rounded-full font-medium">
                          {pub.publisher}
                        </span>
                        <span className="text-researcher-text-muted font-serif text-sm">
                          {pub.year}
                        </span>
                      </div>
                      
                      <h3 className="font-serif text-xl font-semibold text-researcher-text mb-6 leading-snug">
                        {pub.title}
                      </h3>
                      
                      <div className="space-y-4 text-left">
                        <div>
                          <span className="font-serif text-xs text-researcher-accent uppercase tracking-wider font-medium">
                            Hypothesis
                          </span>
                          <p className="text-researcher-text-muted text-sm mt-1 leading-relaxed font-serif italic">
                            {pub.hypothesis}
                          </p>
                        </div>
                        <div>
                          <span className="font-serif text-xs text-researcher-accent uppercase tracking-wider font-medium">
                            Methodology
                          </span>
                          <p className="text-researcher-text-muted text-sm mt-1 leading-relaxed">
                            {pub.methodology}
                          </p>
                        </div>
                        <div>
                          <span className="font-serif text-xs text-researcher-accent uppercase tracking-wider font-medium">
                            Outcome
                          </span>
                          <div className="mt-2">
                            <div className="flex flex-wrap gap-2 mb-2">
                              {pub.outcome.metrics.map((metric) => (
                                <span key={metric} className="px-2 py-1 bg-researcher-accent/10 text-researcher-accent font-serif text-xs rounded font-semibold">
                                  {metric}
                                </span>
                              ))}
                            </div>
                            <p className="text-researcher-text text-sm font-medium">
                              {pub.outcome.narrative}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <a
                        href={pub.link}
                        className="inline-flex items-center gap-2 text-researcher-accent hover:text-researcher-glow transition-colors font-serif text-sm mt-6"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Read Publication
                      </a>
                    </div>
                  </div>
                  
                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </motion.article>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Future Chapter - Behavioral Astrology */}
      <section className="py-20 px-6 bg-gradient-to-b from-researcher-surface/30 to-researcher-bg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-12">
            <Lightbulb className="w-6 h-6 text-researcher-accent" />
            <h2 className="font-serif text-2xl text-researcher-text">
              The <span className="italic text-researcher-accent">Future Chapter</span>
            </h2>
          </div>
          
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-researcher-accent/10 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-researcher-accent/5 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />
            <Sparkles className="absolute top-8 right-8 w-8 h-8 text-researcher-accent/20" />
            
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-researcher-accent text-white font-serif text-xs rounded-full font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              Work in Progress
            </span>
            
            <h3 className="font-serif text-3xl font-semibold text-researcher-text mb-2">
              {futureResearch.title}
            </h3>
            
            <p className="font-serif italic text-researcher-accent text-lg mb-8">
              {futureResearch.subtitle}
            </p>
            
            <p className="text-researcher-text-muted leading-relaxed mb-6 text-lg">
              {futureResearch.description}
            </p>
            
            <blockquote className="border-l-4 border-researcher-accent pl-6 my-8">
              <p className="text-researcher-text font-serif italic text-lg">
                {futureResearch.focus}
              </p>
            </blockquote>
            
            <p className="text-researcher-text leading-relaxed mb-8">
              {futureResearch.vision}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {futureResearch.themes.map((theme) => (
                <span
                  key={theme}
                  className="px-4 py-2 bg-researcher-surface text-researcher-text font-serif text-sm rounded-full border border-researcher-accent/10"
                >
                  {theme}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-6 border-t border-researcher-accent/10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-serif text-2xl text-researcher-text mb-4">
            Interested in <span className="gradient-text-researcher italic">Collaboration?</span>
          </h2>
          <p className="text-researcher-text-muted mb-8 font-serif">
            I welcome academic collaborations, research partnerships, and speaking engagements in behavioral AI.
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-researcher-accent text-white font-serif font-semibold rounded-lg hover:bg-researcher-glow transition-all duration-300 glow-amber">
            <BookOpen className="w-4 h-4" />
            Request Collaboration
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default ResearcherSection;
