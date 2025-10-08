import { useState, useEffect } from "react";
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

  useEffect(() => {
    // Lock body scroll while menu is open
    if (isMenuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
    } else {
      // restore
      const top = document.body.style.top;
      if (top) {
        const scrollY = parseInt(top.replace("-", "").replace("px", "")) || 0;
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.right = "";
        window.scrollTo(0, scrollY);
      }
    }

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isMenuOpen]);

  return (
    <header className="fixed top-4 left-4 right-4 md:top-0 md:left-0 md:right-0 z-50 bg-[#0B0520] backdrop-blur-md border md:border-b border-white/10 transition-all duration-300 shadow-lg shadow-black/20 rounded-2xl md:rounded-t-none md:rounded-b-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <button
            onClick={() => {
              navigate("/");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center space-x-2 sm:space-x-3 transition-all duration-300 group relative"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
              <img
                src="/icon1.png"
                alt="SecretBuddy Logo"
                className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
              />
            </div>
            <span className="text-lg sm:text-xl font-bold tracking-tight bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:via-pink-300 group-hover:to-blue-300 transition-all duration-300">
              SecretBuddy
            </span>
          </button>
          <nav className="hidden md:flex items-center space-x-1">
            <button
              onClick={() => handleNavClick("features")}
              className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-all duration-300 font-medium relative group rounded-lg hover:bg-white/5"
            >
              Features
              <span className="absolute -bottom-0.5 left-4 right-4 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full origin-left"></span>
            </button>
            <button
              onClick={() => handleNavClick("how-it-works")}
              className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-all duration-300 font-medium relative group rounded-lg hover:bg-white/5"
            >
              How It Works
              <span className="absolute -bottom-0.5 left-4 right-4 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full origin-left"></span>
            </button>
            <Link
              to="/privacy"
              className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-all duration-300 font-medium relative group rounded-lg hover:bg-white/5"
            >
              Privacy
              <span className="absolute -bottom-0.5 left-4 right-4 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full origin-left"></span>
            </Link>
          </nav>
          <div className="flex items-center space-x-3">
            <button className="hidden sm:block relative px-6 py-2.5 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 overflow-hidden group">
              <span className="relative z-10">Get the App</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="md:hidden p-2.5 rounded-xl hover:bg-white/10 transition-all duration-300 group border border-white/10 hover:border-white/20"
            >
              <svg
                className="w-6 h-6 text-white transition-all duration-300 group-hover:scale-110"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style={{
                  transform: isMenuOpen ? "rotate(180deg)" : "rotate(0)",
                }}
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
        {
          // Right side sliding panel for mobile - COMPLETELY SOLID
          <div
            className={`fixed inset-0 transition-all duration-300 ${
              isMenuOpen ? "visible" : "invisible"
            }`}
            style={{ zIndex: 99999 }}
          >
            {/* Dark overlay backdrop */}
            <div
              className={`absolute inset-0 transition-opacity duration-300 ${
                isMenuOpen ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundColor: "rgba(0, 0, 0, 0.9)" }}
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Solid sidebar panel attached to the side */}
            <aside
              className={`fixed right-0 top-0 bottom-0 transform transition-all duration-300 ease-out overflow-hidden ${
                isMenuOpen ? "translate-x-0" : "translate-x-full"
              }`}
              style={{
                width: "85vw",
                maxWidth: "340px",
                zIndex: 100000,
                height: "100dvh", // dynamic viewport height for mobile
              }}
            >
              {/* Completely solid background - no transparency */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundColor: "#0B0520",
                }}
              />

              {/* Border */}
              <div
                className="absolute inset-0"
                style={{
                  borderLeft: "1px solid rgba(255, 255, 255, 0.1)",
                  boxShadow: "-20px 0 60px rgba(0, 0, 0, 0.5)",
                }}
              />

              {/* Content layer */}
              <div
                className="relative h-full flex flex-col p-6"
                style={{ zIndex: 10 }}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-10 pb-4 border-b border-white/10">
                  <div className="flex items-center space-x-3 group">
                    <div className="relative">
                      <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-xl blur-sm opacity-60 group-hover:opacity-100 transition-opacity animate-pulse"></div>
                      <img
                        src="/icon1.png"
                        alt="logo"
                        className="relative w-10 h-10 rounded-xl shadow-lg"
                      />
                    </div>
                    <span className="text-lg font-bold bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
                      SecretBuddy
                    </span>
                  </div>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-purple-400/30 group"
                  >
                    <svg
                      className="w-6 h-6 text-gray-300 group-hover:text-white transition-all group-hover:rotate-90 duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col space-y-2 flex-1">
                  <button
                    onClick={() => {
                      handleNavClick("features");
                      setIsMenuOpen(false);
                    }}
                    className="text-left px-5 py-4 text-gray-300 hover:text-white bg-white/5 hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-600/20 rounded-2xl transition-all duration-300 font-medium group border border-white/5 hover:border-purple-400/30"
                  >
                    <span className="flex items-center justify-between">
                      <span className="flex items-center gap-3">
                        <svg
                          className="w-5 h-5 text-purple-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                        Features
                      </span>
                      <svg
                        className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 text-purple-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </button>

                  <button
                    onClick={() => {
                      handleNavClick("how-it-works");
                      setIsMenuOpen(false);
                    }}
                    className="text-left px-5 py-4 text-gray-300 hover:text-white bg-white/5 hover:bg-gradient-to-r hover:from-pink-600/20 hover:to-blue-600/20 rounded-2xl transition-all duration-300 font-medium group border border-white/5 hover:border-pink-400/30"
                  >
                    <span className="flex items-center justify-between">
                      <span className="flex items-center gap-3">
                        <svg
                          className="w-5 h-5 text-pink-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                          />
                        </svg>
                        How It Works
                      </span>
                      <svg
                        className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 text-pink-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </button>

                  <Link
                    to="/privacy"
                    onClick={() => setIsMenuOpen(false)}
                    className="px-5 py-4 text-gray-300 hover:text-white bg-white/5 hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20 rounded-2xl transition-all duration-300 font-medium group border border-white/5 hover:border-blue-400/30"
                  >
                    <span className="flex items-center justify-between">
                      <span className="flex items-center gap-3">
                        <svg
                          className="w-5 h-5 text-blue-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                          />
                        </svg>
                        Privacy
                      </span>
                      <svg
                        className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 text-blue-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </Link>

                  {/* Bottom CTA Section */}
                  <div className="mt-auto pt-8 space-y-4">
                    <div className="h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>

                    <button className="relative w-full px-6 py-4 text-base font-bold text-white rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:shadow-2xl hover:shadow-purple-500/60 hover:scale-[1.02] transition-all duration-300 overflow-hidden group">
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Get the App
                        <svg
                          className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>

                    <p className="text-center text-xs text-gray-400 px-4">
                      Join 10k+ users sharing authentic moments
                    </p>
                  </div>
                </nav>
              </div>
            </aside>
          </div>
        }
      </div>
    </header>
  );
}
