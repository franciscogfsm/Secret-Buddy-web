import { Link, useNavigate } from "react-router-dom";
import Reveal from "./Reveal";

export default function Footer() {
  const navigate = useNavigate();

  const handleNavClick = (sectionId: string) => {
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
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Reveal>
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <img
                  src="/icon1.png"
                  alt="SecretBuddy Logo"
                  className="w-8 h-8 rounded-lg"
                />
                <span className="text-xl font-bold gradient-text">
                  SecretBuddy
                </span>
              </div>
              <p className="text-textSecondary mb-4">
                Private, temporary photo chats with daily pairings and
                disappearing photos.
              </p>
              <p className="text-caption text-textSecondary">
                Photos auto-delete in 24 hours. We do not sell personal data.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-textSecondary">
                <li>
                  <button
                    onClick={() => handleNavClick("features")}
                    className="hover:text-accentTeal transition-colors"
                  >
                    Features
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick("how-it-works")}
                    className="hover:text-accentTeal transition-colors"
                  >
                    How It Works
                  </button>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-accentTeal transition-colors"
                  >
                    Download
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-textSecondary">
                <li>
                  <Link
                    to="/privacy"
                    className="hover:text-accentTeal transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <a
                    href="/terms"
                    className="hover:text-accentTeal transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:support@secretbuddy.app"
                    className="hover:text-accentTeal transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Reveal>
        <Reveal delay={200}>
          <div className="border-t border-border pt-8 text-center text-textSecondary">
            <p>&copy; 2025 SecretBuddy. All rights reserved.</p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
