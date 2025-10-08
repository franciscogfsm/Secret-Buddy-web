import ReactMarkdown from "react-markdown";
import { useEffect } from "react";
import PrivacySummary from "@/components/PrivacySummary";
import TableOfContents from "@/components/TableOfContents";
import { termsContent } from "@/lib/termsContent";

export default function Terms() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms of Service",
    dateModified: "2025-10-05",
    publisher: {
      "@type": "Organization",
      name: "SecretBuddy",
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
            <span className="text-sm text-blue-400 font-medium">Legal</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent tracking-tight">
            Terms of Service
          </h1>
          <p className="text-gray-400 text-lg">Last Updated: October 5, 2025</p>
        </div>

        <div className="bg-white/[0.02] backdrop-blur-xl rounded-3xl border border-white/[0.05] p-6 sm:p-8 mb-8">
          <PrivacySummary />
        </div>

        <div className="bg-white/[0.02] backdrop-blur-xl rounded-3xl border border-white/[0.05] p-6 sm:p-8 mb-8">
          <TableOfContents content={termsContent} />
        </div>

        <div className="prose prose-invert prose-lg max-w-none bg-white/[0.02] backdrop-blur-xl rounded-3xl border border-white/[0.05] p-6 sm:p-10">
          <ReactMarkdown
            components={{
              h1: ({ children }) => (
                <h1 className="text-3xl sm:text-4xl font-bold mb-6 mt-8 text-white tracking-tight">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2
                  id={generateId(children)}
                  className="text-2xl sm:text-3xl font-semibold mb-4 mt-8 text-white scroll-mt-24 tracking-tight"
                >
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-xl sm:text-2xl font-medium mb-3 mt-6 text-white tracking-tight">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="mb-5 leading-relaxed text-gray-400 text-base sm:text-lg font-light">
                  {children}
                </p>
              ),
              ul: ({ children }) => (
                <ul className="mb-6 ml-6 list-disc space-y-2 text-gray-400">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="mb-6 ml-6 list-decimal space-y-2 text-gray-400">
                  {children}
                </ol>
              ),
              li: ({ children }) => (
                <li className="mb-2 leading-relaxed font-light">{children}</li>
              ),
              strong: ({ children }) => (
                <strong className="font-semibold text-white">{children}</strong>
              ),
              a: ({ children, href }) => (
                <a
                  href={href}
                  className="text-blue-400 hover:text-purple-400 underline transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {children}
                </a>
              ),
            }}
          >
            {termsContent}
          </ReactMarkdown>
        </div>

        <div className="mt-12 p-6 sm:p-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-xl rounded-3xl border border-white/10">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-white tracking-tight">
            Contact Us
          </h3>
          <p className="text-gray-400 mb-6 text-base sm:text-lg leading-relaxed font-light">
            For legal questions about these Terms, contact:
          </p>
          <a
            href="mailto:thesecretbuddyapp@gmail.com"
            className="inline-block px-8 py-4 text-base font-semibold text-white rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:shadow-2xl hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300"
          >
            Email Legal
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
