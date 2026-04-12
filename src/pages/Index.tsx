import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/portfolio/Navbar";
import InteractiveHero from "@/components/portfolio/InteractiveHero";
import About from "@/components/portfolio/About";
import TwoTrackSection from "@/components/portfolio/TwoTrackSection";
import CertificatesMarquee from "@/components/portfolio/CertificatesMarquee";
import UnifiedTimeline from "@/components/portfolio/UnifiedTimeline";
import CredentialsSection from "@/components/portfolio/CredentialsSection";
import ContactSection from "@/components/portfolio/ContactSection";
import { navLinks } from "@/lib/navLinks";
import {
  profile,
  techStack,
  builderProjects,
  caseStudies,
  profileTimeline,
  credentials,
  certificates,
  currentStatus,
} from "@/data";

const Index = () => {
  const location = useLocation();

  // Handle cross-page anchor scroll (e.g. from /workex clicking "About")
  useEffect(() => {
    const target = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (!target) return;
    const el = document.querySelector(target);
    if (el) {
      const timer = setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth" });
      }, 220);
      return () => clearTimeout(timer);
    }
  }, [location.state]);

  return (
    <>
      <Navbar links={navLinks} />
      <main>
        <InteractiveHero
          name={profile.name}
          tagline={profile.tagline}
          positioning={profile.positioning}
        />
        <About paragraphs={profile.about} techStack={techStack} statusEntries={currentStatus} />
        <TwoTrackSection
          builderProjects={builderProjects}
          caseStudies={caseStudies}
        />
        <UnifiedTimeline entries={profileTimeline} />
        <CredentialsSection
          communityWork={credentials.communityWork}
          certifications={certificates}
        />
        <CertificatesMarquee certificates={certificates} />
        <ContactSection profile={profile} />
      </main>
    </>
  );
};

export default Index;
