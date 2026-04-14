import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import ScrollToTop from "./components/portfolio/ScrollToTop";
import ScrollToTopFAB from "./components/portfolio/ScrollToTopFAB";
import Index from "./pages/Index";
import CaseStudy from "./pages/CaseStudy";
import Certificates from "./pages/Certificates";
import ProjectDetail from "./pages/ProjectDetail";
import WorkExperience from "./pages/WorkExperience";
import NotFound from "./pages/NotFound";

const App = () => (
  <>
    <BrowserRouter>
      <ScrollToTop />
      <ScrollToTopFAB />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/case/:slug" element={<CaseStudy />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
        <Route path="/workex" element={<WorkExperience />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    <Analytics />
  </>
);

export default App;
