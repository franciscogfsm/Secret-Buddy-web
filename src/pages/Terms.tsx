import ReactMarkdown from "react-markdown";
import PrivacySummary from "@/components/PrivacySummary";
import TableOfContents from "@/components/TableOfContents";
import { termsContent } from "@/lib/termsContent";

export default function Terms() {
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
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
          <p className="text-textSecondary">Last Updated: October 5, 2025</p>
        </div>

        <PrivacySummary />

        <TableOfContents content={termsContent} />

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
            {termsContent}
          </ReactMarkdown>
        </div>

        <div className="mt-12 p-6 bg-surface rounded-lg border border-border">
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-textSecondary mb-4">
            For legal questions about these Terms, contact:
          </p>
          <a
            href="mailto:thesecretbuddyapp@gmail.com"
            className="btn-primary inline-block"
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
