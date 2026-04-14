import { useState, useEffect } from "react";
import { Menu, X, ArrowLeft } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import type { NavLink } from "@/data/types";

interface NavbarProps {
  links: NavLink[];
}

const Navbar = ({ links }: NavbarProps) => {
  const navLinks = links;
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // IntersectionObserver only runs on the home page where sections exist
  useEffect(() => {
    if (!isHome) return;
    const anchorLinks = navLinks.filter((l) => l.href.startsWith("#"));
    const sections = anchorLinks.map((l) => document.querySelector(l.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, [isHome, navLinks]);

  const isLinkActive = (href: string) => {
    if (href.startsWith("/")) return location.pathname === href;
    return active === href;
  };

  const handleClick = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith("/")) {
      navigate(href);
    } else if (href.startsWith("#")) {
      if (isHome) {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      } else {
        // Navigate home and pass scroll target via location state
        navigate("/", { state: { scrollTo: href } });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-1">
          {!isHome && (
            <button
              onClick={() => navigate(-1)}
              className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
              aria-label="Go back"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
          )}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (isHome) {
                window.scrollTo({ top: 0, behavior: "smooth" });
              } else {
                navigate("/");
              }
            }}
            className="text-foreground font-semibold text-lg tracking-tight"
          >
            PR
          </a>
        </div>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-5">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleClick(link.href)}
                className={`text-sm transition-colors ${
                  isLinkActive(link.href)
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
          <ul className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleClick(link.href)}
                  className={`block w-full text-left text-sm py-2 transition-colors ${
                    isLinkActive(link.href)
                      ? "text-foreground font-medium"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
