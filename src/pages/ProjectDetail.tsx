import { useParams, Navigate } from "react-router-dom";
import { getBuilderProject } from "@/data";
import ProjectDetailLayout from "@/components/portfolio/ProjectDetailLayout";
import Navbar from "@/components/portfolio/Navbar";
import { navLinks } from "@/lib/navLinks";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = getBuilderProject(slug ?? "");

  if (!project) return <Navigate to="/" replace />;

  return (
    <>
      <Navbar links={navLinks} />
      <ProjectDetailLayout project={project} />
    </>
  );
}
