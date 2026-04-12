import { useParams, Navigate } from "react-router-dom";
import { caseStudies, getCaseStudy } from "@/data";
import CaseStudyLayout from "@/components/portfolio/CaseStudyLayout";
import Navbar from "@/components/portfolio/Navbar";
import { navLinks } from "@/lib/navLinks";

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const idx = caseStudies.findIndex((cs) => cs.slug === slug);
  const study = getCaseStudy(slug ?? "");

  if (!study) return <Navigate to="/" replace />;

  const next = caseStudies[idx + 1] ?? null;
  const prev = caseStudies[idx - 1] ?? null;
  const spawnedChildren = caseStudies.filter(
    (cs) => cs.spawnedFrom?.slug === study.slug
  );

  return (
    <>
      <Navbar links={navLinks} />
      <CaseStudyLayout
        study={study}
        prev={prev}
        next={next}
        spawnedChildren={spawnedChildren}
      />
    </>
  );
}
