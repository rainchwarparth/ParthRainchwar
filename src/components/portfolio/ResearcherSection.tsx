import { motion } from "framer-motion";
import { ArrowLeft, FileText, BookOpen, Lightbulb, ExternalLink, GraduationCap } from "lucide-react";

interface ResearcherSectionProps {
  onBack: () => void;
}

const publications = [
  {
    title: "Optimal Face Recognition System using Haar Classifier",
    publisher: "IEEE",
    year: "2023",
    hypothesis: "Hybrid authentication combining facial recognition with behavioral biometrics can achieve superior accuracy and security for smart voting systems compared to single-modality approaches.",
    methodology: "Implemented cascaded Haar classifiers with real-time mask detection, integrating multiple authentication layers including liveness detection and behavioral pattern analysis across 1,000+ test subjects.",
    outcome: "99% accuracy in mask detection • 97.3% facial recognition accuracy • Successfully deployed in pilot smart voting implementation",
    link: "#",
  },
  {
    title: "Machine Learning for Prediction of Nutritional Psychology",
    publisher: "Springer",
    year: "2023",
    hypothesis: "Fast food consumption patterns correlate significantly with cognitive performance and psychological well-being in undergraduate student populations.",
    methodology: "Applied Random Forest ensemble methods to analyze dietary data from 500+ students, correlating nutritional intake with cognitive assessments and psychological inventories over a 6-month longitudinal study.",
    outcome: "Identified 12 key nutritional predictors • 84% prediction accuracy for cognitive decline indicators • Published recommendations for campus wellness programs",
    link: "#",
  },
  {
    title: "Internet of Behaviors (IoB): Analytical Study on Consumer Psychology",
    publisher: "CRC Press / Taylor & Francis",
    year: "2024",
    hypothesis: "Digital behavioral traces can predict purchasing decisions with higher accuracy than traditional demographic-based consumer models.",
    methodology: "Conducted comprehensive analysis of online behavioral data across 10,000+ consumer interactions, developing novel IoB frameworks that integrate psychological profiling with real-time behavioral monitoring.",
    outcome: "78% prediction accuracy for purchase intent • Framework adopted by 3 e-commerce platforms • Contributed to emerging IoB ethical guidelines",
    link: "#",
  },
];

const ongoingResearch = {
  title: "Cognitive Decision-Making in Fragmented Digital Identities",
  focus: "Modeling the 'fractured personality' phenomenon in social media environments",
  description: "This research investigates how individuals develop and maintain multiple digital personas across platforms, and how this fragmentation affects real-world decision-making processes. Using machine learning models trained on behavioral patterns, we aim to understand human-technology emotional adaptability and its implications for mental health and authentic self-expression.",
  themes: ["Social Media Psychology", "Identity Fragmentation", "Emotional AI", "Cognitive Modeling"],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
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
            Back to Split View
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
            Behavioral AI & Cognitive Computing Researcher
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-researcher-text mb-6 leading-tight">
            Exploring the{" "}
            <span className="gradient-text-researcher">Mind-Machine Interface</span>
          </h1>
          <p className="text-researcher-text-muted text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-serif">
            My research bridges behavioral psychology and artificial intelligence, 
            investigating how technology shapes human cognition and designing systems 
            that adapt to our emotional landscapes.
          </p>
        </motion.div>
      </section>

      {/* Affiliation */}
      <section className="py-8 px-6 border-y border-researcher-accent/10 bg-researcher-surface/50">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-4xl mx-auto flex items-center justify-center gap-4"
        >
          <GraduationCap className="w-6 h-6 text-researcher-accent" />
          <p className="font-serif text-researcher-text">
            Maharashtra Institute of Technology (MITCOE), Pune
          </p>
        </motion.div>
      </section>

      {/* Publications */}
      <section className="py-20 px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-12">
            <FileText className="w-6 h-6 text-researcher-accent" />
            <h2 className="font-serif text-2xl text-researcher-text">
              Published <span className="italic text-researcher-accent">Research</span>
            </h2>
          </div>
          
          <div className="space-y-10">
            {publications.map((pub, index) => (
              <motion.article
                key={pub.title}
                variants={itemVariants}
                className="relative bg-white rounded-2xl p-8 shadow-lg border border-researcher-accent/5 hover:shadow-xl transition-all duration-300"
              >
                {/* Publisher badge */}
                <div className="absolute top-6 right-6 flex items-center gap-2">
                  <span className="px-3 py-1 bg-researcher-accent/10 text-researcher-accent font-serif text-xs rounded-full font-medium">
                    {pub.publisher}
                  </span>
                  <span className="text-researcher-text-muted font-serif text-sm">
                    {pub.year}
                  </span>
                </div>
                
                <div className="pr-32">
                  <h3 className="font-serif text-xl font-semibold text-researcher-text mb-6 leading-snug">
                    {pub.title}
                  </h3>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <span className="font-serif text-xs text-researcher-accent uppercase tracking-wider font-medium">
                      Hypothesis
                    </span>
                    <p className="text-researcher-text-muted text-sm mt-2 leading-relaxed font-serif italic">
                      {pub.hypothesis}
                    </p>
                  </div>
                  <div>
                    <span className="font-serif text-xs text-researcher-accent uppercase tracking-wider font-medium">
                      Methodology
                    </span>
                    <p className="text-researcher-text-muted text-sm mt-2 leading-relaxed">
                      {pub.methodology}
                    </p>
                  </div>
                  <div>
                    <span className="font-serif text-xs text-researcher-accent uppercase tracking-wider font-medium">
                      Outcome
                    </span>
                    <p className="text-researcher-text text-sm mt-2 leading-relaxed font-medium">
                      {pub.outcome}
                    </p>
                  </div>
                </div>
                
                <a
                  href={pub.link}
                  className="inline-flex items-center gap-2 text-researcher-accent hover:text-researcher-glow transition-colors font-serif text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Publication
                </a>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Ongoing Research */}
      <section className="py-20 px-6 bg-researcher-surface/30">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-12">
            <Lightbulb className="w-6 h-6 text-researcher-accent" />
            <h2 className="font-serif text-2xl text-researcher-text">
              Ongoing <span className="italic text-researcher-accent">Research</span>
            </h2>
          </div>
          
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-researcher-accent/10 relative overflow-hidden">
            {/* Decorative quote mark */}
            <span className="absolute top-4 right-8 text-9xl font-serif text-researcher-accent/5">
              "
            </span>
            
            <span className="inline-block px-3 py-1 bg-researcher-accent text-white font-serif text-xs rounded-full font-medium mb-4">
              In Progress
            </span>
            
            <h3 className="font-serif text-2xl font-semibold text-researcher-text mb-2">
              {ongoingResearch.title}
            </h3>
            
            <p className="font-serif italic text-researcher-accent mb-6">
              {ongoingResearch.focus}
            </p>
            
            <p className="text-researcher-text-muted leading-relaxed mb-8 text-lg">
              {ongoingResearch.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {ongoingResearch.themes.map((theme) => (
                <span
                  key={theme}
                  className="px-4 py-2 bg-researcher-surface text-researcher-text font-serif text-sm rounded-full"
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
            I'm always open to discussing research opportunities, academic collaborations, 
            or speaking engagements in the field of behavioral AI.
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-researcher-accent text-white font-serif font-semibold rounded-lg hover:bg-researcher-glow transition-all duration-300 glow-amber">
            <BookOpen className="w-4 h-4" />
            Connect for Research
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default ResearcherSection;
