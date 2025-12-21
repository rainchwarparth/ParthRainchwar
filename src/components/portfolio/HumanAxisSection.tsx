import { motion } from "framer-motion";
import { ArrowLeft, Users, Heart, Award, Shield, Target, CheckCircle2 } from "lucide-react";

interface HumanAxisSectionProps {
  onBack: () => void;
}

const leadership = {
  title: "Student Parliament Leader",
  subtitle: "Systems Design for People",
  description: "Leading a student body isn't about authority—it's about designing systems that serve human needs. As Parliament Leader, I architected governance frameworks that balanced diverse stakeholder interests, optimized resource allocation, and built consensus in complex decision-making environments.",
  achievements: [
    "Coordinated cross-departmental initiatives affecting 2,000+ students",
    "Designed transparent feedback systems for policy improvement",
    "Led crisis management during institutional transitions",
    "Built coalition-based decision frameworks"
  ],
};

const ngoWork = {
  title: "Community Impact Initiatives",
  subtitle: "Impact-Driven Engineering",
  description: "Technology is meaningless without human impact. My NGO contributions focus on applying engineering principles to social challenges—not as charity, but as systematic problem-solving for underserved communities.",
  initiatives: [
    {
      name: "Digital Literacy Workshops",
      impact: "Trained 150+ rural youth in basic computing and internet safety"
    },
    {
      name: "Tech for Education",
      impact: "Developed low-cost learning tools for underprivileged schools"
    },
    {
      name: "Health Data Systems",
      impact: "Volunteered for community health data digitization projects"
    }
  ],
};

const certifications = [
  { name: "Python for Data Science", issuer: "IBM", year: "2023" },
  { name: "Deep Learning Specialization", issuer: "Coursera/DeepLearning.AI", year: "2023" },
  { name: "AWS Cloud Practitioner", issuer: "Amazon Web Services", year: "2024" },
  { name: "Machine Learning", issuer: "Stanford Online", year: "2023" },
  { name: "FastAPI Development", issuer: "Udemy", year: "2024" },
  { name: "Docker & Kubernetes", issuer: "Linux Foundation", year: "2024" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const HumanAxisSection = ({ onBack }: HumanAxisSectionProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-human-axis to-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-human-axis/80 backdrop-blur-xl border-b border-human-axis-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={onBack}
            className="inline-flex items-center gap-2 text-human-axis-text-muted hover:text-human-axis-accent transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Return to Hub
          </motion.button>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-human-axis-accent"
          >
            <Users className="w-4 h-4" />
            <span className="text-sm hidden md:block">The Human Layer</span>
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
          <span className="inline-block text-sm text-human-axis-accent mb-4 tracking-wider uppercase">
            Where Both Worlds Converge
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-human-axis-text mb-6 leading-tight">
            The{" "}
            <span className="bg-gradient-to-r from-engineer-accent to-researcher-accent bg-clip-text text-transparent">
              Human Axis
            </span>
          </h1>
          <p className="text-human-axis-text-muted text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            The bridge between engineering precision and human understanding—leadership, impact, and continuous growth.
          </p>
        </motion.div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-8 md:p-12 border border-human-axis-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-engineer-accent to-researcher-accent flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-human-axis-text">{leadership.title}</h2>
                <p className="text-human-axis-accent text-sm">{leadership.subtitle}</p>
              </div>
            </div>
            
            <p className="text-human-axis-text-muted leading-relaxed mb-8 text-lg">
              {leadership.description}
            </p>
            
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-3"
            >
              {leadership.achievements.map((achievement) => (
                <motion.li
                  key={achievement}
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-human-axis-accent flex-shrink-0 mt-0.5" />
                  <span className="text-human-axis-text">{achievement}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </section>

      {/* NGO Section */}
      <section className="py-16 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-8 md:p-12 border border-human-axis-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-orange-500 flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-human-axis-text">{ngoWork.title}</h2>
                <p className="text-human-axis-accent text-sm">{ngoWork.subtitle}</p>
              </div>
            </div>
            
            <p className="text-human-axis-text-muted leading-relaxed mb-8 text-lg">
              {ngoWork.description}
            </p>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-4"
            >
              {ngoWork.initiatives.map((initiative) => (
                <motion.div
                  key={initiative.name}
                  variants={itemVariants}
                  className="bg-slate-700/50 rounded-xl p-5 border border-human-axis-border hover:border-human-axis-accent/30 transition-colors"
                >
                  <h3 className="text-human-axis-text font-semibold mb-2">{initiative.name}</h3>
                  <p className="text-human-axis-text-muted text-sm">{initiative.impact}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-12">
            <Award className="w-6 h-6 text-human-axis-accent" />
            <h2 className="text-2xl font-bold text-human-axis-text">
              Professional <span className="text-human-axis-accent">Certifications</span>
            </h2>
          </div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-slate-800/30 backdrop-blur rounded-2xl border border-human-axis-border overflow-hidden"
          >
            <div className="grid grid-cols-12 gap-4 p-4 bg-slate-700/50 text-human-axis-text-muted text-sm font-medium">
              <div className="col-span-5">Certification</div>
              <div className="col-span-5">Issuer</div>
              <div className="col-span-2 text-right">Year</div>
            </div>
            
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                variants={itemVariants}
                className={`grid grid-cols-12 gap-4 p-4 items-center ${
                  index !== certifications.length - 1 ? "border-b border-human-axis-border" : ""
                } hover:bg-slate-700/30 transition-colors`}
              >
                <div className="col-span-5 flex items-center gap-3">
                  <Shield className="w-4 h-4 text-human-axis-accent" />
                  <span className="text-human-axis-text font-medium">{cert.name}</span>
                </div>
                <div className="col-span-5 text-human-axis-text-muted">{cert.issuer}</div>
                <div className="col-span-2 text-right text-human-axis-accent font-mono text-sm">{cert.year}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 px-6 border-t border-human-axis-border">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-2xl font-bold text-human-axis-text mb-4">
            Let's <span className="bg-gradient-to-r from-engineer-accent to-researcher-accent bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-human-axis-text-muted mb-8">
            Whether it's a technical challenge, research collaboration, or community initiative—I'm always open to meaningful conversations.
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-engineer-accent to-researcher-accent text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300">
            <Users className="w-4 h-4" />
            Start a Conversation
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default HumanAxisSection;
