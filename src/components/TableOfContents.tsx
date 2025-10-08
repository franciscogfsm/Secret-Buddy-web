"use client";

import { useState } from "react";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
}

export default function TableOfContents({ content }: TableOfContentsProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Parse headings from markdown content
  const headings = content
    .split("\n")
    .filter((line) => line.match(/^#{1,3} /))
    .map((line) => {
      const level = line.match(/^#+/)?.[0].length || 1;
      const text = line.replace(/^#+\s/, "").replace(/\*\*/g, "");
      const id = text
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");
      return { id, text, level };
    });

  return (
    <div className="mb-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden w-full bg-surface p-4 rounded-lg border border-border flex items-center justify-between"
      >
        <span className="font-semibold">Table of Contents</span>
        <span
          className="transform transition-transform"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          ▼
        </span>
      </button>

      <div
        className={`md:block ${
          isOpen ? "block" : "hidden"
        } bg-surface p-4 rounded-lg border border-border`}
      >
        <h3 className="font-semibold mb-4 hidden md:block">
          Table of Contents
        </h3>
        <nav>
          <ul className="space-y-2">
            {headings.map((heading, index) => (
              <li
                key={index}
                style={{ paddingLeft: `${(heading.level - 1) * 1}rem` }}
              >
                <a
                  href={`#${heading.id}`}
                  className="text-textSecondary hover:text-accentTeal transition-colors text-sm"
                >
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
