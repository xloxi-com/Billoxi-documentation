import { listingFeatures } from "@/lib/content";

export function FeatureGrid() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-lime">
          Built for the order desk
        </p>
        <h2 className="font-display mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Brand it once. Print, download, or email from every order.
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {listingFeatures.map((feature, i) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-line bg-card p-6"
            >
              <p className="font-display text-sm text-lime">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-medium leading-6">{feature.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{feature.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
