import { howItWorks } from "@/lib/content";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-lime text-ink">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink/60">
          How it works
        </p>
        <h2 className="font-display mt-3 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Look professional on every order.
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {howItWorks.map((item) => (
            <article
              key={item.step}
              className="rounded-2xl border border-ink/10 bg-ink/[0.04] p-6"
            >
              <p className="font-display text-sm font-semibold text-ink/50">
                {item.step}
              </p>
              <h3 className="font-display mt-3 text-2xl font-semibold">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-ink/70">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
