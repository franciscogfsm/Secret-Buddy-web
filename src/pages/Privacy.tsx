import ReactMarkdown from "react-markdown";
import PrivacySummary from "@/components/PrivacySummary";
import TableOfContents from "@/components/TableOfContents";
import { privacyContent } from "@/lib/privacyContent";

export default function Privacy() {
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
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-textSecondary">Last Updated: October 5, 2025</p>
        </div>

        <PrivacySummary />

        <TableOfContents content={privacyContent} />

        <div className="prose prose-invert max-w-none">
          <ReactMarkdown
            components={{
              h1: ({ children }) => (
                <h1 className="text-3xl font-bold mb-4 mt-8">{children}</h1>
              ),
              h2: ({ children }) => (
                <h2
                  id={generateId(children)}
                  className="text-2xl font-semibold mb-3 mt-6"
                >
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-xl font-medium mb-2 mt-4">{children}</h3>
              ),
              p: ({ children }) => (
                <p className="mb-4 leading-relaxed">{children}</p>
              ),
              ul: ({ children }) => (
                <ul className="mb-4 ml-6 list-disc">{children}</ul>
              ),
              ol: ({ children }) => (
                <ol className="mb-4 ml-6 list-decimal">{children}</ol>
              ),
              li: ({ children }) => <li className="mb-1">{children}</li>,
              strong: ({ children }) => (
                <strong className="font-semibold">{children}</strong>
              ),
              a: ({ children, href }) => (
                <a
                  href={href}
                  className="text-accentTeal hover:text-accentTeal/80 underline"
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

        <div className="mt-12 p-6 bg-surface rounded-lg border border-border">
          <h3 className="text-xl font-semibold mb-4">
            Contact Us About Privacy
          </h3>
          <p className="text-textSecondary mb-4">
            Have questions about your privacy or want to exercise your rights?
            Contact us:
          </p>
          <a
            href="mailto:thesecretbuddyapp@gmail.com"
            className="btn-primary inline-block"
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
