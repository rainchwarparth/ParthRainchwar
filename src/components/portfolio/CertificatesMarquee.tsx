import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Eye } from "lucide-react";
import type { Certificate } from "@/data/types";
import CertificatePreviewModal from "./CertificatePreviewModal";

interface CertificatesMarqueeProps {
  certificates: Certificate[];
}

export default function CertificatesMarquee({
  certificates,
}: CertificatesMarqueeProps) {
  const navigate = useNavigate();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const featuredCerts = certificates.filter((c) => c.featured);

  if (featuredCerts.length === 0) {
    return null;
  }

  // Auto-scroll animation
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let scrollPosition = 0;
    let direction = 1; // 1 for right, -1 for left

    const interval = setInterval(() => {
      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;
      const maxScroll = scrollWidth - clientWidth;

      if (maxScroll <= 0) return; // No scrolling needed

      scrollPosition += direction * 0.8;

      // Reverse direction at boundaries with buffer
      if (scrollPosition >= maxScroll - 20) {
        direction = -1;
      } else if (scrollPosition <= 20) {
        direction = 1;
      }

      // Clamp scroll position
      scrollPosition = Math.max(0, Math.min(scrollPosition, maxScroll));
      container.scrollLeft = scrollPosition;
    }, 50); // 50ms for smoother animation, less jitter

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="py-16 px-6 bg-gradient-to-b from-muted/20 to-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 flex items-center justify-between"
        >
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                Certifications
              </h2>
              <button
                onClick={() => navigate("/certificates")}
                className="p-1.5 rounded-lg hover:bg-muted transition-colors"
                title="View all certificates"
              >
                <ArrowRight className="w-5 h-5 text-foreground/60 hover:text-foreground" />
              </button>
            </div>
            <p className="text-muted-foreground text-sm mt-2">
              Recognized credentials in AI, data science, and digital skills
            </p>
          </div>
        </motion.div>

        {/* Auto-scrolling Carousel */}
        <div className="relative">
          {/* Scroll container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto scroll-smooth pb-2"
            style={{ scrollBehavior: "smooth", scrollbarWidth: "none" }}
          >
            {featuredCerts.map((cert, i) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex-shrink-0 w-80 min-h-[340px] rounded-xl border border-border bg-card p-4 hover:border-primary/50 transition-colors group hover:shadow-lg flex flex-col"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500/30" />
                      <span className="text-xs font-medium text-blue-600">
                        {cert.category?.toUpperCase() || "CERT"}
                      </span>
                    </div>
                    <h3 className="font-semibold text-foreground text-sm line-clamp-2">
                      {cert.name}
                    </h3>
                  </div>
                  {cert.featured && (
                    <div className="text-lg flex-shrink-0">⭐</div>
                  )}
                </div>

                <p className="text-xs text-muted-foreground mb-2">
                  {cert.issuer} · {cert.year}
                </p>

                <p className="text-xs text-muted-foreground/80 mb-3 line-clamp-2 flex-1">
                  {cert.description}
                </p>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedCert(cert);
                  }}
                  className="w-full px-3 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-xs font-medium flex items-center justify-center gap-2 mt-auto"
                >
                  <Eye className="w-3.5 h-3.5" />
                  View Certificate
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

      {/* Modal */}
      <CertificatePreviewModal
        certificate={selectedCert}
        isOpen={selectedCert !== null}
        onClose={() => setSelectedCert(null)}
      />
    </>
  );
}
