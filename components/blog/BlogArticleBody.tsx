import type { BlogSection } from "@/lib/blog";

export function BlogArticleBody({ sections }: { sections: BlogSection[] }) {
  return (
    <div className="space-y-6 text-[15px] leading-8 text-muted">
      {sections.map((section, index) => {
        if (section.type === "p") {
          return (
            <p key={index} className="text-paper/90">
              {section.text}
            </p>
          );
        }
        if (section.type === "h2") {
          return (
            <h2
              key={index}
              className="font-display pt-4 text-2xl font-semibold tracking-tight text-paper"
            >
              {section.text}
            </h2>
          );
        }
        if (section.type === "ul") {
          return (
            <ul key={index} className="space-y-2.5 pl-1">
              {section.items.map((item) => (
                <li key={item} className="flex gap-3 text-paper/90">
                  <span className="mt-3 size-1.5 shrink-0 rounded-full bg-lime" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          );
        }
        return (
          <ol key={index} className="list-decimal space-y-2.5 pl-5 text-paper/90">
            {section.items.map((item) => (
              <li key={item} className="pl-1">
                {item}
              </li>
            ))}
          </ol>
        );
      })}
    </div>
  );
}
