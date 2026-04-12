import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  // Disable browser's own scroll restoration so it doesn't fight us
  useEffect(() => {
    if (typeof history !== "undefined" && history.scrollRestoration) {
      history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
