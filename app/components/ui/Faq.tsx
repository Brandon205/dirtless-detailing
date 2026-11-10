import { isValidElement, type ReactNode } from "react";
import { Plus } from "lucide-react";

export type FaqEntry = {
  question: string;
  /** What visitors see. */
  answer: ReactNode;
  /** Plain-text version of the answer for search engines. Worked out from `answer` when left out. */
  answerText?: string;
};

/** The text inside some JSX, for structured data. */
function toText(node: ReactNode): string {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(toText).join("");
  if (isValidElement<{ children?: ReactNode }>(node)) return toText(node.props.children);
  return "";
}

/** An accordion of questions using native <details>, so it works without JavaScript. Adds FAQPage structured data. */
export function Faq({ items }: { items: FaqEntry[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: (item.answerText ?? toText(item.answer)).replace(/\s+/g, " ").trim() }
    }))
  };

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item) => (
        <details key={item.question} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg font-semibold text-ink marker:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent [&::-webkit-details-marker]:hidden">
            {item.question}
            <Plus aria-hidden="true" className="h-5 w-5 shrink-0 text-accent transition-transform duration-200 group-open:rotate-45" />
          </summary>
          <div className="pb-6 pr-10 leading-relaxed text-zinc-300">{item.answer}</div>
        </details>
      ))}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </div>
  );
}
