import ReactMarkdown from "react-markdown";
import { useEffect } from "react";
import PrivacySummary from "@/components/PrivacySummary";
import TableOfContents from "@/components/TableOfContents";
import { privacyContent } from "@/lib/privacyContent";

export default function Privacy() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "PrivacyPolicy",
    name: "SecretBuddy Privacy Policy",
    dateModified: "2025-10-05",
    publisher: {
      "@type": "Organization",
      name: "SecretBuddy",
      email: "thesecretbuddyapp@gmail.com",
    },
    mainEntity: {
      "@type": "WebPage",
      name: "Privacy Policy",
      description:
        "SecretBuddy's privacy policy explaining data collection, usage, and user rights.",
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-surface/50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="mb-8 sm:mb-12 text-center lg:text-left">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
            <span className="text-sm text-accentPurple font-medium">Legal</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-textSecondary bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-textSecondary text-lg">
            Last Updated: October 5, 2025
          </p>
        </div>

        <div className="bg-surface/50 backdrop-blur-xl rounded-2xl border border-white/10 p-6 sm:p-8 mb-8">
          <PrivacySummary />
        </div>

        <div className="bg-surface/50 backdrop-blur-xl rounded-2xl border border-white/10 p-6 sm:p-8 mb-8">
          <TableOfContents content={privacyContent} />
        </div>

        <div className="prose prose-invert prose-lg max-w-none bg-surface/30 backdrop-blur-xl rounded-2xl border border-white/10 p-6 sm:p-10">
          <ReactMarkdown
            components={{
              h1: ({ children }) => (
                <h1 className="text-3xl sm:text-4xl font-bold mb-6 mt-8 text-white">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2
                  id={generateId(children)}
                  className="text-2xl sm:text-3xl font-semibold mb-4 mt-8 text-white scroll-mt-24"
                >
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-xl sm:text-2xl font-medium mb-3 mt-6 text-white">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="mb-5 leading-relaxed text-textSecondary text-base sm:text-lg">
                  {children}
                </p>
              ),
              ul: ({ children }) => (
                <ul className="mb-6 ml-6 list-disc space-y-2 text-textSecondary">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="mb-6 ml-6 list-decimal space-y-2 text-textSecondary">
                  {children}
                </ol>
              ),
              li: ({ children }) => (
                <li className="mb-2 leading-relaxed">{children}</li>
              ),
              strong: ({ children }) => (
                <strong className="font-semibold text-white">{children}</strong>
              ),
              a: ({ children, href }) => (
                <a
                  href={href}
                  className="text-accentPurple hover:text-accentPink underline transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {children}
                </a>
              ),
            }}
          >
            {privacyContent}
          </ReactMarkdown>
        </div>

        <div className="mt-12 p-6 sm:p-8 bg-gradient-to-br from-accentPurple/10 to-accentPink/10 backdrop-blur-xl rounded-2xl border border-white/10">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4">
            Contact Us About Privacy
          </h3>
          <p className="text-textSecondary mb-6 text-base sm:text-lg leading-relaxed">
            Have questions about your privacy or want to exercise your rights?
            Contact us:
          </p>
          <a
            href="mailto:thesecretbuddyapp@gmail.com"
            className="inline-block px-8 py-4 text-base font-semibold text-white rounded-full bg-gradient-to-r from-accentPurple to-accentPink hover:shadow-2xl hover:shadow-accentPurple/40 hover:scale-105 transition-all duration-300"
          >
            Email Support
          </a>
        </div>
      </main>
    </div>
  );
}

function generateId(children: any): string {
  if (typeof children === "string") {
    return children
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");
  }
  return "";
}
