import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/portfolio/Navbar";
import InteractiveHero from "@/components/portfolio/InteractiveHero";
import About from "@/components/portfolio/About";
import TwoTrackSection from "@/components/portfolio/TwoTrackSection";
import WorkTeaserSection from "@/components/portfolio/WorkTeaserSection";
import CertificatesMarquee from "@/components/portfolio/CertificatesMarquee";
import UnifiedTimeline from "@/components/portfolio/UnifiedTimeline";
import CredentialsSection from "@/components/portfolio/CredentialsSection";
import ContactSection from "@/components/portfolio/ContactSection";
import ScrollSpy from "@/components/portfolio/ScrollSpy";
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
      <ScrollSpy />
      <main>
        <section id="hero">
          <InteractiveHero
            name={profile.name}
            tagline={profile.tagline}
            positioning={profile.positioning}
          />
        </section>
        <section id="about">
          <About paragraphs={profile.about} techStack={techStack} statusEntries={currentStatus} />
        </section>
        <TwoTrackSection
          builderProjects={builderProjects}
          caseStudies={caseStudies}
        />
        <WorkTeaserSection />
        <section id="timeline">
          <UnifiedTimeline entries={profileTimeline} />
        </section>
        <section id="credentials">
          <CredentialsSection
            communityWork={credentials.communityWork}
            certifications={certificates}
          />
        </section>
        <section id="certificates">
          <CertificatesMarquee certificates={certificates} />
        </section>
        <section id="contact">
          <ContactSection profile={profile} />
        </section>
      </main>
    </>
  );
};

export default Index;
