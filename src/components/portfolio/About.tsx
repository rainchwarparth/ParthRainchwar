import { motion } from "framer-motion";

interface AboutProps {
  paragraphs: string[];
  techStack: string[];
}

const About = ({ paragraphs, techStack }: AboutProps) => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-8">
            About
          </h2>
          <div className="space-y-4">
            {paragraphs.map((text, i) => (
              <p
                key={i}
                className="text-lg md:text-xl text-foreground/80 leading-relaxed"
              >
                {text}
              </p>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-sm text-muted-foreground bg-secondary rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
