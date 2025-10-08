import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (sectionId: string) => {
    setIsMenuOpen(false);
    if (window.location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-background/95 via-surface/90 to-background/95 backdrop-blur-2xl border-b border-accentPurple/30 rounded-b-3xl shadow-2xl shadow-accentPurple/10 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center py-5">
          <button
            onClick={() => {
              navigate("/");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center space-x-3 hover:scale-105 transition-transform duration-200"
          >
            <img
              src="/icon1.png"
              alt="SecretBuddy Logo"
              className="w-9 h-9 rounded-xl shadow-sm"
            />
            <span className="text-xl font-bold gradient-text tracking-tight">
              SecretBuddy
            </span>
          </button>
          <nav className="hidden md:flex space-x-10">
            <button
              onClick={() => handleNavClick("features")}
              className="text-textSecondary hover:text-accentTeal transition-all duration-300 hover:scale-105 font-medium relative group"
            >
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accentTeal transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => handleNavClick("how-it-works")}
              className="text-textSecondary hover:text-accentPink transition-all duration-300 hover:scale-105 font-medium relative group"
            >
              How It Works
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accentPink transition-all duration-300 group-hover:w-full"></span>
            </button>
            <Link
              to="/privacy"
              className="text-textSecondary hover:text-accentPurple transition-all duration-300 hover:scale-105 font-medium relative group"
            >
              Privacy
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accentPurple transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>
          <div className="flex items-center space-x-6">
            <button className="btn-secondary text-sm px-6 py-2.5 hidden sm:block rounded-full font-medium shadow-sm hover:shadow-lg hover:shadow-accentTeal/25 transition-all duration-300 hover:scale-105 bg-gradient-to-r from-accentTeal/10 to-accentTeal/5 hover:from-accentTeal hover:to-accentTeal/80 border border-accentTeal/50 hover:border-accentTeal">
              Get the App
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-3 rounded-xl bg-gradient-to-r from-surface to-surfaceSecondary hover:from-accentPurple/20 hover:to-accentPink/20 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-accentPurple/20 border border-border/50 hover:border-accentPurple/30"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden pb-6 border-t border-accentPurple/30 pt-6 rounded-b-3xl bg-gradient-to-b from-background/95 to-surface/90 backdrop-blur-2xl animate-slideDown">
            <nav className="flex flex-col space-y-5">
              <button
                onClick={() => handleNavClick("features")}
                className="text-left text-textSecondary hover:text-accentTeal transition-all duration-300 hover:translate-x-2 font-medium relative group"
              >
                Features
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accentTeal transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => handleNavClick("how-it-works")}
                className="text-left text-textSecondary hover:text-accentPink transition-all duration-300 hover:translate-x-2 font-medium relative group"
              >
                How It Works
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accentPink transition-all duration-300 group-hover:w-full"></span>
              </button>
              <Link
                to="/privacy"
                className="text-left text-textSecondary hover:text-accentPurple transition-all duration-300 hover:translate-x-2 font-medium relative group"
                onClick={() => setIsMenuOpen(false)}
              >
                Privacy
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accentPurple transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <button className="btn-secondary text-sm px-6 py-2.5 w-fit rounded-full font-medium shadow-sm hover:shadow-lg hover:shadow-accentTeal/25 transition-all duration-300 hover:scale-105 bg-gradient-to-r from-accentTeal/10 to-accentTeal/5 hover:from-accentTeal hover:to-accentTeal/80 border border-accentTeal/50 hover:border-accentTeal">
                Get the App
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
